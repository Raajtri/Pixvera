// Post-build checks. Runs automatically after `npm run build` and fails the build on real SEO problems.
// Checks: title/description length and uniqueness, one H1, canonical, lang, image alt/size, direct answers,
// FAQs, breadcrumbs, related links, JSON-LD validity, blog length, internal links and sitemap contents.
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import * as cheerio from 'cheerio';

const DIST = 'dist';
const SITE = readFileSync('astro.config.mjs', 'utf8').match(/const SITE = '([^']+)'/)?.[1] ?? '';
const errors = [];
const warnings = [];
const fail = (page, msg) => errors.push(`${page}: ${msg}`);
const warn = (page, msg) => warnings.push(`${page}: ${msg}`);

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const htmlFiles = walk(DIST).filter((f) => f.endsWith('.html'));
const urlOf = (file) => {
  let u = '/' + relative(DIST, file).split(sep).join('/');
  u = u.replace(/index\.html$/, '').replace(/\.html$/, '/');
  return u;
};
const words = (t) => t.trim().split(/\s+/).filter(Boolean).length;

const titles = new Map();
const descs = new Map();
const indexable = [];

for (const file of htmlFiles) {
  const url = urlOf(file);
  const $ = cheerio.load(readFileSync(file, 'utf8'));
  const title = $('title').text().trim();
  const desc = $('meta[name="description"]').attr('content')?.trim() ?? '';
  const robots = $('meta[name="robots"]').attr('content') ?? '';
  const noindex = /noindex/.test(robots);
  const kind = url.startsWith('/services/') && url !== '/services/' ? 'service'
    : url.startsWith('/industries/') && url !== '/industries/' ? 'industry'
    : url.startsWith('/blog/') && url !== '/blog/' ? 'blog'
    : url.startsWith('/areas/') && url !== '/areas/' ? 'area' : 'other';

  if (!noindex) indexable.push(url);

  if (!title) fail(url, 'missing <title>');
  if (title.length > 60) fail(url, `title is ${title.length} chars (max 60): "${title}"`);
  if (!desc) fail(url, 'missing meta description');
  if (desc.length > 155) fail(url, `meta description is ${desc.length} chars (max 155)`);
  if (titles.has(title)) fail(url, `duplicate title with ${titles.get(title)}`);
  else titles.set(title, url);
  if (descs.has(desc)) fail(url, `duplicate description with ${descs.get(desc)}`);
  else descs.set(desc, url);

  if ($('html').attr('lang') !== 'en-IN') fail(url, 'html lang is not en-IN');
  if ($('h1').length !== 1) fail(url, `expected exactly 1 <h1>, found ${$('h1').length}`);

  if (url !== '/404/') {
    const canon = $('link[rel="canonical"]').attr('href');
    if (!canon) fail(url, 'missing canonical');
    else if (canon !== SITE + url) fail(url, `canonical "${canon}" should be "${SITE + url}"`);
  }
  for (const p of ['og:title', 'og:description', 'og:image', 'og:url', 'twitter:card']) {
    if (!$(`meta[property="${p}"], meta[name="${p}"]`).length) fail(url, `missing ${p}`);
  }

  $('img').each((_, el) => {
    if ($(el).attr('alt') === undefined) fail(url, `<img> without alt: ${$(el).attr('src')}`);
    if (!$(el).attr('width') || !$(el).attr('height')) fail(url, `<img> without width/height: ${$(el).attr('src')}`);
  });

  let schemaTypes = [];
  $('script[type="application/ld+json"]').each((_, el) => {
    try {
      const j = JSON.parse($(el).text());
      schemaTypes.push(j['@type']);
    } catch {
      fail(url, 'invalid JSON-LD');
    }
  });

  if (!noindex) {
    if (url !== '/') {
      if (!$('nav[aria-label="Breadcrumb"]').length) fail(url, 'missing breadcrumb navigation');
      if (!schemaTypes.includes('BreadcrumbList')) fail(url, 'missing BreadcrumbList schema');
      const related = $('[data-related] ul a').length;
      if (related < 3) fail(url, `needs at least 3 related links (found ${related})`);
    }
    if (!schemaTypes.includes('Organization') || !schemaTypes.includes('ProfessionalService')) fail(url, 'missing Organization/ProfessionalService schema');
  }

  if (['service', 'industry', 'blog', 'area'].includes(kind)) {
    const da = words($('[data-direct-answer-text]').first().text());
    if (da < 40 || da > 60) fail(url, `direct answer must be 40-60 words (found ${da})`);
    const faqs = $('details').length;
    if (faqs < 4 || faqs > 6) fail(url, `FAQ must have 4-6 questions (found ${faqs})`);
    if (!schemaTypes.includes('FAQPage')) fail(url, 'missing FAQPage schema');
    if (kind === 'service' && !schemaTypes.includes('Service')) fail(url, 'missing Service schema');
    if (kind === 'blog') {
      if (!schemaTypes.includes('Article')) fail(url, 'missing Article schema');
      const n = words($('article .prose-pix').text());
      if (n < 800) fail(url, `blog body has ${n} words (min 800)`);
    }
    if (kind === 'area') {
      const n = words($('main .prose-pix').text());
      if (n < 400) fail(url, `area page has ${n} words (min 400)`);
    }
  }

  // internal links must resolve
  $('a[href]').each((_, el) => {
    const href = $(el).attr('href');
    if (!href.startsWith('/') || href.startsWith('//')) return;
    const clean = href.split('#')[0].split('?')[0];
    if (!clean) return;
    if (clean !== '/' && !clean.endsWith('/') && !/\.[a-z0-9]+$/i.test(clean)) {
      fail(url, `internal link without trailing slash: ${href}`);
    }
    const target = clean.endsWith('/') ? join(DIST, clean, 'index.html') : join(DIST, clean);
    if (!existsSync(target)) fail(url, `broken internal link: ${href}`);
  });

  if (!noindex && !$('h2').length && url !== '/') warn(url, 'no <h2> found');
}

// sitemap
const sitemapFile = join(DIST, 'sitemap-0.xml');
if (!existsSync(sitemapFile)) fail('sitemap', 'sitemap-0.xml not found');
else {
  const sm = readFileSync(sitemapFile, 'utf8');
  const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  for (const u of indexable) {
    if (!locs.includes(SITE + u)) fail('sitemap', `indexable page missing from sitemap: ${u}`);
  }
  for (const l of locs) {
    const path = l.replace(SITE, '');
    if (!indexable.includes(path)) fail('sitemap', `sitemap lists a noindex or missing page: ${path}`);
  }
  console.log(`Sitemap: ${locs.length} URLs`);
}
for (const f of ['robots.txt', 'llms.txt']) if (!existsSync(join(DIST, f))) fail(f, 'missing from build output');

console.log(`Checked ${htmlFiles.length} HTML pages (${indexable.length} indexable).`);
for (const w of warnings) console.warn('WARN  ' + w);
if (errors.length) {
  console.error(`\n${errors.length} SEO problem(s):`);
  for (const e of errors) console.error('  x ' + e);
  process.exit(1);
}
console.log('SEO validation passed.');
