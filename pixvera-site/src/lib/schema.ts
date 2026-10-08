/** JSON-LD builders. All business details come from src/data/site.ts so NAP stays consistent everywhere. */
import { site, absoluteUrl, isPlaceholder } from '../data/site';
import type { Crumb } from '../components/Breadcrumbs.astro';

const orgId = `${site.url}/#organization`;
const bizId = `${site.url}/#business`;

const sameAs = site.social.map((s) => s.url).filter((u) => !isPlaceholder(u));
const phone = isPlaceholder(site.phoneDisplay) ? undefined : `+${site.whatsappNumber}`;
const email = isPlaceholder(site.email) ? undefined : site.email;
const founders = site.founders
  .filter((f) => !isPlaceholder(f.name))
  .map((f) => ({ '@type': 'Person', name: f.name }));

const areaServed = site.serviceAreas.map((name) => ({ '@type': 'City', name }));

/** Organization + ProfessionalService (a LocalBusiness subtype). Service-area business: no address is published. */
export const baseGraph = () => [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': orgId,
    name: site.name,
    alternateName: `${site.name} ${site.descriptor}`,
    url: site.url + '/',
    logo: absoluteUrl('/logo.png'),
    description: site.tagline,
    ...(sameAs.length && { sameAs }),
    ...(email && { email }),
    ...(phone && { telephone: phone }),
    ...(founders.length && { founder: founders }),
    areaServed,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': bizId,
    name: site.name,
    url: site.url + '/',
    image: absoluteUrl(site.ogImage),
    description: site.tagline,
    parentOrganization: { '@id': orgId },
    areaServed,
    ...(phone && { telephone: phone }),
    ...(email && { email }),
    ...(sameAs.length && { sameAs }),
  },
];

export const breadcrumbList = (crumbs: Crumb[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', href: '/' }, ...crumbs].map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: absoluteUrl(c.href),
  })),
});

export const faqPage = (faqs: readonly { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const serviceSchema = (opts: { name: string; serviceType: string; description: string; path: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: opts.name,
  serviceType: opts.serviceType,
  description: opts.description,
  url: absoluteUrl(opts.path),
  provider: { '@id': bizId },
  areaServed,
});

export const articleSchema = (opts: {
  headline: string;
  description: string;
  path: string;
  datePublished: Date;
  dateModified?: Date;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: opts.headline,
  description: opts.description,
  mainEntityOfPage: { '@type': 'WebPage', '@id': absoluteUrl(opts.path) },
  image: absoluteUrl(site.ogImage),
  datePublished: opts.datePublished.toISOString(),
  dateModified: (opts.dateModified ?? opts.datePublished).toISOString(),
  author: { '@id': orgId },
  publisher: { '@id': orgId },
  inLanguage: site.locale,
});
