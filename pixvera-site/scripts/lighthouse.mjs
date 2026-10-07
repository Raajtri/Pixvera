// Runs Lighthouse (mobile emulation, default simulated 4G throttling) against the built site in /dist.
// Usage: npm run build && npm run lighthouse            (default key pages)
//        npm run lighthouse -- / /pricing/              (specific paths)
// Requires Google Chrome or Chromium installed. Reports are saved in .lighthouse/.
import http from 'node:http';
import { readFileSync, existsSync, statSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, extname } from 'node:path';
import { gzipSync } from 'node:zlib';
import { launch } from 'chrome-launcher';
import lighthouse from 'lighthouse';

const DIST = 'dist';
const PORT = 4399;
const types = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.webp': 'image/webp', '.woff2': 'font/woff2', '.txt': 'text/plain', '.xml': 'application/xml', '.json': 'application/json',
};

const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  let file = join(DIST, p);
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
  if (!existsSync(file)) {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    return res.end(readFileSync(join(DIST, '404.html')));
  }
  const headers = { 'Content-Type': types[extname(file)] ?? 'application/octet-stream' };
  if (p.startsWith('/_astro/')) headers['Cache-Control'] = 'public, max-age=31536000, immutable';
  // Cloudflare Pages compresses text responses, so do the same here to get realistic scores.
  let body = readFileSync(file);
  if (/^(text\/|image\/svg|application\/(xml|json))/.test(headers['Content-Type']) && /gzip/.test(req.headers['accept-encoding'] ?? '')) {
    body = gzipSync(body);
    headers['Content-Encoding'] = 'gzip';
  }
  res.writeHead(200, headers);
  res.end(body);
});
await new Promise((r) => server.listen(PORT, r));

const args = process.argv.slice(2).filter((a) => a.startsWith('/'));
const paths = args.length
  ? args
  : [
      '/',
      '/services/',
      '/services/local-seo-mumbai/',
      '/industries/',
      '/industries/restaurants-cafes/',
      '/pricing/',
      '/case-study/',
      '/blog/',
      '/blog/how-to-rank-on-google-maps-in-mumbai/',
      '/about/',
      '/contact/',
    ];

mkdirSync('.lighthouse', { recursive: true });
const chrome = await launch({ chromeFlags: ['--headless=new', '--no-sandbox', '--disable-gpu'] });
const rows = [];
let worst = 100;

try {
  for (const path of paths) {
    let lhr;
    for (let attempt = 1; attempt <= 2 && !lhr; attempt++) {
      try {
        ({ lhr } = await lighthouse(`http://localhost:${PORT}${path}`, {
          port: chrome.port,
          output: 'json',
          logLevel: 'error',
          onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
          formFactor: 'mobile',
        }));
      } catch (e) {
        console.log(`  ${path}: attempt ${attempt} failed (${e.message})`);
      }
    }
    if (!lhr) continue;
    const s = (k) => Math.round((lhr.categories[k].score ?? 0) * 100);
    const a = lhr.audits;
    const row = {
      path,
      perf: s('performance'),
      a11y: s('accessibility'),
      bp: s('best-practices'),
      seo: s('seo'),
      lcp: a['largest-contentful-paint'].displayValue,
      cls: a['cumulative-layout-shift'].displayValue,
      tbt: a['total-blocking-time'].displayValue,
    };
    rows.push(row);
    worst = Math.min(worst, row.perf, row.a11y, row.seo);
    writeFileSync(`.lighthouse/${path.replace(/\W+/g, '_') || 'home'}.json`, JSON.stringify(lhr, null, 2));
    const failing = Object.values(lhr.audits)
      .filter((x) => x.score !== null && x.score < 0.9 && x.scoreDisplayMode !== 'informative' && x.scoreDisplayMode !== 'notApplicable')
      .map((x) => `${x.id} (${Math.round(x.score * 100)})`);
    if (failing.length) console.log(`  ${path} needs attention: ${failing.join(', ')}`);
  }
} finally {
  await chrome.kill();
  server.close();
}

console.log('\nMobile Lighthouse results');
console.table(rows);
console.log(worst >= 95 ? 'All pages score 95+ (performance, accessibility, SEO).' : `Lowest score: ${worst}. Target is 95+ (SEO 100).`);
