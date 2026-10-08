import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site, absoluteUrl, services } from '../data/site';
import { industries } from '../data/industries';
import { liveAreas } from '../data/areas';

/** llms.txt: a short, plain-text summary of the site for AI assistants. Generated from the same data as the pages. */
export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');
  const areas = liveAreas();

  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.name} is a ${site.descriptor.toLowerCase()} in ${site.location}. ${site.tagline} We serve businesses across ${site.serviceAreas.join(', ')}.`,
    '',
    `${site.name} is a new studio. The only past result we show is one case study from founder Aman Tripathi's first job: a Mumbai college website taken from #3 to #1 on Google for its main searches, with faster load times and more traffic. We do not publish client lists, reviews or guaranteed results.`,
    '',
    '## Services',
    ...services.map((s) => `- [${s.name}](${absoluteUrl(`/services/${s.slug}/`)}): ${s.short}`),
    '',
    '## Pricing',
    `- [Pricing](${absoluteUrl('/pricing/')}): Packages for websites (one-time) and SEO/ads plans (monthly), with the price confirmed in a written quote. Apps are quoted individually. Ad spend, domain and hosting are paid by the client.`,
    '',
    '## Industries we write about',
    ...industries.map((i) => `- [${i.name}](${absoluteUrl(`/industries/${i.slug}/`)})`),
    '',
    ...(areas.length
      ? ['## Areas', ...areas.map((a) => `- [${a.name}](${absoluteUrl(`/areas/${a.slug}/`)})`), '']
      : []),
    '## Guides',
    ...posts.map((p) => `- [${p.data.title}](${absoluteUrl(`/blog/${p.id}/`)}): ${p.data.excerpt}`),
    '',
    '## Other pages',
    `- [Case study](${absoluteUrl('/case-study/')})`,
    `- [About](${absoluteUrl('/about/')})`,
    `- [Contact](${absoluteUrl('/contact/')}): WhatsApp, email and a form. Free Google listing check.`,
    '',
  ];

  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
