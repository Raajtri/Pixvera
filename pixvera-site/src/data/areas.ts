/**
 * LOCAL AREA PAGES (/areas/ and /areas/<slug>/)
 *
 * AceGrow ships with NO live areas on purpose: thin or fake location pages hurt rankings and trust.
 * Nothing in this file appears on the site (pages, navigation, footer, sitemap, schema) until an entry
 * has `status: "live"`. Entries marked "draft" are ignored completely.
 *
 * To publish an area page:
 *   1. Copy the template below into the `areas` array and set status to "live".
 *   2. Do the original research (see `research`). Do not invent findings.
 *   3. Write 400+ words of UNIQUE content in `sections` and 4-6 area-specific FAQs.
 *   4. Run `npm run build`. The build fails with a clear message if a live area is too thin.
 *
 * Honesty rule: only name an area if you will really serve it, and never claim past clients there.
 */

export interface Area {
  slug: string;
  name: string;
  status: 'live' | 'draft';
  /** One of the service areas in site.ts. */
  region: 'Mumbai' | 'Thane' | 'Navi Mumbai';
  /** 40-60 words. */
  directAnswer: string;
  metaDescription: string;
  /** 400+ words across all sections combined. Must be written for THIS area, not copied from other pages. */
  sections: { h2: string; paragraphs: string[] }[];
  research: {
    /** Example: "[ADD FINDINGS FROM GOOGLE MAPS AUDIT OF 15-20 LOCAL BUSINESSES]" */
    summary: string;
    /** Concrete findings, for example "X of 18 businesses had no photos on their profile". Real numbers only. */
    findings: string[];
    method: string;
    date: string;
  };
  faqs: { q: string; a: string }[]; // 4-6 area-specific questions
}

/*
TEMPLATE (copy into the array below, then fill in):

{
  slug: '[area-slug]',
  name: '[AREA 1]',
  status: 'live',
  region: 'Mumbai',
  directAnswer: '[40-60 words]',
  metaDescription: '[max 155 characters]',
  sections: [{ h2: '[Heading]', paragraphs: ['[Unique paragraph]'] }],
  research: {
    summary: '[ADD FINDINGS FROM GOOGLE MAPS AUDIT OF 15-20 LOCAL BUSINESSES]',
    findings: [],
    method: '[How you audited: what you searched, which businesses, which date]',
    date: '[DD Month YYYY]',
  },
  faqs: [{ q: '[Question]', a: '[Answer]' }],
},
*/

export const areas: Area[] = [];

export const liveAreas = (): Area[] => areas.filter((a) => a.status === 'live');

export const getArea = (slug: string): Area | undefined =>
  liveAreas().find((a) => a.slug === slug);
