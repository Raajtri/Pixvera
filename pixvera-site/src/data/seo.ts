/**
 * SEO data for EVERY page: slug, primary keyword, secondary keywords, title (max 60), meta description (max 155), H1.
 * Pages read their tags from here via seoFor(path). `npm run build` validates lengths and duplicates.
 *
 * Industry and area entries are generated from industries.ts / areas.ts so you only edit one place.
 * Keywords are for planning and do not render on the page (the meta keywords tag is not used by Google).
 */
import { industries } from './industries';
import { liveAreas } from './areas';

export interface PageSeo {
  slug: string;
  path: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  title: string;
  description: string;
  h1: string;
  noindex?: boolean;
}

const BRAND = ' | AceGrow';

/** Adds the brand suffix only when the title still fits in 60 characters. */
const withBrand = (title: string): string => (title.length + BRAND.length <= 60 ? title + BRAND : title);

const pages: PageSeo[] = [
  {
    slug: '',
    path: '/',
    primaryKeyword: 'digital marketing agency Mumbai',
    secondaryKeywords: ['get found on Google Mumbai', 'local SEO and website company Mumbai', 'Google Maps ranking Mumbai'],
    title: 'Digital Marketing Agency in Mumbai | AceGrow',
    description:
      'AceGrow is a Mumbai digital growth studio. We build your website, help you rank on Google and Maps, and turn searches into enquiries. Free listing check.',
    h1: 'Get Found on Google in Mumbai. Get More Enquiries.',
  },
  {
    slug: 'services',
    path: '/services/',
    primaryKeyword: 'digital marketing services Mumbai',
    secondaryKeywords: ['SEO and ads agency Mumbai', 'website and app development Mumbai', 'WhatsApp lead set-up'],
    title: 'Digital Marketing Services in Mumbai | AceGrow',
    description:
      'Local SEO, website development, Google Ads, Instagram and Facebook ads, and Flutter apps for businesses in Mumbai, Thane and Navi Mumbai.',
    h1: 'Digital Marketing Services in Mumbai',
  },
  {
    slug: 'services/local-seo-mumbai',
    path: '/services/local-seo-mumbai/',
    primaryKeyword: 'local SEO services Mumbai',
    secondaryKeywords: ['Google Business Profile optimization', 'Google Maps ranking Mumbai', 'local SEO company Mumbai'],
    title: 'Local SEO Services in Mumbai | Google Maps Ranking',
    description:
      'Local SEO services in Mumbai: Google Business Profile optimization, Google Maps ranking help, listings and reviews. Start with a free Google listing check.',
    h1: 'Local SEO Services in Mumbai',
  },
  {
    slug: 'services/website-development-mumbai',
    path: '/services/website-development-mumbai/',
    primaryKeyword: 'website development company Mumbai',
    secondaryKeywords: ['small business websites Mumbai', 'website design Mumbai', 'mobile-friendly website for business'],
    title: 'Website Development Company in Mumbai | AceGrow',
    description:
      'A website development company in Mumbai for small businesses: fast, mobile-friendly sites with SEO built in, a contact form and a WhatsApp button.',
    h1: 'Website Development Company in Mumbai',
  },
  {
    slug: 'services/google-ads-management-mumbai',
    path: '/services/google-ads-management-mumbai/',
    primaryKeyword: 'Google Ads agency Mumbai',
    secondaryKeywords: ['Google Ads management Mumbai', 'PPC services Mumbai', 'search ads for local business'],
    title: 'Google Ads Agency in Mumbai | AceGrow',
    description:
      'A Google Ads agency in Mumbai that sets up, tracks and improves your search ads. Clear reporting on calls and enquiries. Ad spend is paid to Google by you.',
    h1: 'Google Ads Agency in Mumbai',
  },
  {
    slug: 'services/instagram-facebook-ads-mumbai',
    path: '/services/instagram-facebook-ads-mumbai/',
    primaryKeyword: 'Instagram ads agency Mumbai',
    secondaryKeywords: ['Meta ads Mumbai', 'Facebook ads agency Mumbai', 'WhatsApp marketing Mumbai'],
    title: 'Instagram Ads Agency in Mumbai | Meta & WhatsApp Ads',
    description:
      'An Instagram ads agency in Mumbai: Meta (Instagram and Facebook) ads and WhatsApp lead set-up that send interested people straight to your business.',
    h1: 'Instagram Ads Agency in Mumbai',
  },
  {
    slug: 'services/mobile-app-development-mumbai',
    path: '/services/mobile-app-development-mumbai/',
    primaryKeyword: 'Flutter app development company Mumbai',
    secondaryKeywords: ['mobile app development Mumbai', 'Android and iPhone app developer Mumbai', 'custom app quote'],
    title: 'Flutter App Development Company in Mumbai | AceGrow',
    description:
      'A Flutter app development company in Mumbai: custom Android and iPhone apps from one codebase. Every app is quoted after a free call about your idea.',
    h1: 'Flutter App Development Company in Mumbai',
  },
  {
    slug: 'pricing',
    path: '/pricing/',
    primaryKeyword: 'digital marketing cost Mumbai',
    secondaryKeywords: ['SEO packages Mumbai', 'website design cost Mumbai', 'Google Ads management pricing'],
    title: 'Digital Marketing Cost in Mumbai: SEO & Website Plans',
    description:
      'Digital marketing cost in Mumbai explained: website design cost, SEO packages and ads management plans, and what changes the price. Ad spend is separate.',
    h1: 'Digital Marketing Cost in Mumbai: SEO Packages & Website Design Cost',
  },
  {
    slug: 'industries',
    path: '/industries/',
    primaryKeyword: 'digital marketing for businesses in Mumbai',
    secondaryKeywords: ['marketing for small businesses Mumbai', 'industry-wise digital marketing', 'local business marketing Mumbai'],
    title: 'Digital Marketing for Every Business in Mumbai',
    description:
      'Digital marketing for businesses in Mumbai, Thane and Navi Mumbai: restaurants, clinics, salons, schools, real estate, gyms, shops and more.',
    h1: 'Digital Marketing for Every Type of Business in Mumbai',
  },
  {
    slug: 'case-study',
    path: '/case-study/',
    primaryKeyword: 'SEO case study Mumbai college',
    secondaryKeywords: ['rank higher on Google Mumbai', 'college SEO case study', 'Google ranking case study India'],
    title: 'SEO Case Study: Mumbai College, Page 3 to Page 1 of Google',
    description:
      'Aman Tripathi took a Mumbai college website from page 3 to page 1 of Google and cut its load time. See the problems, the fixes and the results.',
    h1: 'SEO Case Study: A Mumbai College from Page 3 to Page 1 of Google',
  },
  {
    slug: 'about',
    path: '/about/',
    primaryKeyword: 'digital marketing studio Mumbai',
    secondaryKeywords: ['AceGrow founders', 'Mumbai SEO and website studio', 'about AceGrow'],
    title: 'About AceGrow | A Digital Marketing Studio in Mumbai',
    description:
      'AceGrow is a new digital growth studio in Mumbai, started by two founders. Learn how we work, what we believe and how to talk to us.',
    h1: 'About AceGrow, a Digital Marketing Studio in Mumbai',
  },
  {
    slug: 'contact',
    path: '/contact/',
    primaryKeyword: 'contact digital marketing agency Mumbai',
    secondaryKeywords: ['free Google listing check', 'SEO consultation Mumbai', 'WhatsApp AceGrow'],
    title: 'Contact AceGrow | Free Google Listing Check, Mumbai',
    description:
      'Contact AceGrow on WhatsApp, email or the form. Ask for a free Google listing check and we will tell you plainly what to fix first.',
    h1: 'Contact AceGrow for a Free Google Listing Check',
  },
  {
    slug: 'blog',
    path: '/blog/',
    primaryKeyword: 'digital marketing blog Mumbai',
    secondaryKeywords: ['local SEO tips India', 'small business marketing guides', 'Google Business Profile guide'],
    title: 'Digital Marketing Blog for Mumbai Businesses | AceGrow',
    description:
      'Plain-language guides on local SEO, Google Maps, websites, Google Ads and Meta ads for small businesses in Mumbai and across India.',
    h1: 'Digital Marketing Guides for Mumbai Businesses',
  },
  // Blog posts
  {
    slug: 'blog/how-much-does-a-website-cost-in-mumbai',
    path: '/blog/how-much-does-a-website-cost-in-mumbai/',
    primaryKeyword: 'website cost in Mumbai',
    secondaryKeywords: ['website design cost Mumbai', 'how much does a website cost in India', 'small business website price'],
    title: 'How Much Does a Website Cost in Mumbai? A Clear Guide',
    description:
      'How much does a website cost in Mumbai? See what drives the price, the main options from DIY to custom, hidden costs to watch for and questions to ask.',
    h1: 'How Much Does a Website Cost in Mumbai?',
  },
  {
    slug: 'blog/google-ads-vs-meta-ads-for-small-businesses-in-india',
    path: '/blog/google-ads-vs-meta-ads-for-small-businesses-in-india/',
    primaryKeyword: 'Google Ads vs Meta Ads for small business India',
    secondaryKeywords: ['Google Ads or Facebook Ads', 'Instagram ads vs Google ads', 'which ads are better for small business'],
    title: 'Google Ads vs Meta Ads for Small Businesses in India',
    description:
      'Google Ads vs Meta Ads for small businesses in India: how each works, which suits your business, how to start small and how to track real enquiries.',
    h1: 'Google Ads vs Meta Ads for Small Businesses in India',
  },
  {
    slug: 'blog/how-to-rank-on-google-maps-in-mumbai',
    path: '/blog/how-to-rank-on-google-maps-in-mumbai/',
    primaryKeyword: 'how to rank on Google Maps in Mumbai',
    secondaryKeywords: ['Google Maps ranking Mumbai', 'local pack ranking factors', 'rank higher on Google Maps'],
    title: 'How to Rank on Google Maps in Mumbai: A Practical Guide',
    description:
      'How to rank on Google Maps in Mumbai: the factors Google says matter, a step-by-step checklist, common mistakes and what to do each month.',
    h1: 'How to Rank on Google Maps in Mumbai',
  },
  {
    slug: 'blog/how-to-set-up-google-business-profile-step-by-step',
    path: '/blog/how-to-set-up-google-business-profile-step-by-step/',
    primaryKeyword: 'how to set up Google Business Profile',
    secondaryKeywords: ['Google Business Profile step by step', 'create Google My Business listing', 'verify Google Business Profile India'],
    title: 'How to Set Up a Google Business Profile Step by Step',
    description:
      'How to set up a Google Business Profile step by step: create, verify and complete your listing, plus tips for photos, categories, hours and reviews.',
    h1: 'How to Set Up a Google Business Profile, Step by Step',
  },
  {
    slug: 'blog/do-i-need-a-website-if-i-have-instagram',
    path: '/blog/do-i-need-a-website-if-i-have-instagram/',
    primaryKeyword: 'do I need a website if I have Instagram',
    secondaryKeywords: ['Instagram vs website for business', 'is Instagram enough for business', 'why business needs a website'],
    title: 'Do I Need a Website If I Already Have Instagram?',
    description:
      'Do you need a website if you already have Instagram? An honest look at what Instagram does well, where it falls short and when a website is worth it.',
    h1: 'Do I Need a Website If I Already Have Instagram?',
  },
  {
    slug: 'blog/how-long-does-seo-take-for-a-local-business',
    path: '/blog/how-long-does-seo-take-for-a-local-business/',
    primaryKeyword: 'how long does SEO take for a local business',
    secondaryKeywords: ['local SEO timeline', 'when will SEO show results', 'SEO results time India'],
    title: 'How Long Does SEO Take for a Local Business?',
    description:
      'How long does SEO take for a local business? Learn what affects the timeline, what you can expect in the first months and how to tell it is working.',
    h1: 'How Long Does SEO Take for a Local Business?',
  },
  // Utility pages (noindex, not in sitemap)
  {
    slug: 'privacy',
    path: '/privacy/',
    primaryKeyword: 'privacy policy',
    secondaryKeywords: [],
    title: 'Privacy Policy | AceGrow',
    description: 'How AceGrow collects, uses and protects the information you share when you contact us or use this website.',
    h1: 'Privacy Policy',
    noindex: true,
  },
  {
    slug: 'terms',
    path: '/terms/',
    primaryKeyword: 'terms of service',
    secondaryKeywords: [],
    title: 'Terms of Service | AceGrow',
    description: 'The simple terms that apply when you use the AceGrow website and enquire about our services.',
    h1: 'Terms of Service',
    noindex: true,
  },
  {
    slug: 'thank-you',
    path: '/thank-you/',
    primaryKeyword: 'thank you',
    secondaryKeywords: [],
    title: 'Thank You | AceGrow',
    description: 'Thanks for contacting AceGrow. We have received your message and will reply soon.',
    h1: 'Thank You. We Have Your Message',
    noindex: true,
  },
  {
    slug: '404',
    path: '/404/',
    primaryKeyword: 'page not found',
    secondaryKeywords: [],
    title: 'Page Not Found | AceGrow',
    description: 'The page you are looking for could not be found. Use the links to get back to the AceGrow website.',
    h1: 'Page Not Found',
    noindex: true,
  },
];

const industryPages = (): PageSeo[] =>
  industries.map((i) => {
    const primary = `digital marketing for ${i.seoName.toLowerCase()} in Mumbai`;
    return {
      slug: `industries/${i.slug}`,
      path: `/industries/${i.slug}/`,
      primaryKeyword: primary,
      secondaryKeywords: [`local SEO for ${i.seoName.toLowerCase()} Mumbai`, ...i.exampleSearches.slice(0, 2)],
      title: withBrand(`Digital Marketing for ${i.seoName} in Mumbai`),
      description: i.metaDescription,
      h1: `Digital Marketing for ${i.seoName} in Mumbai`,
    };
  });

const areaPages = (): PageSeo[] => {
  const live = liveAreas();
  if (!live.length) return [];
  return [
    {
      slug: 'areas',
      path: '/areas/',
      primaryKeyword: 'digital marketing areas Mumbai',
      secondaryKeywords: [],
      title: withBrand('Areas We Serve in Mumbai, Thane & Navi Mumbai'),
      description: 'Local areas in Mumbai, Thane and Navi Mumbai where AceGrow works, with local research and FAQs for each.',
      h1: 'Areas We Serve Across Mumbai, Thane and Navi Mumbai',
    },
    ...live.map<PageSeo>((a) => ({
      slug: `areas/${a.slug}`,
      path: `/areas/${a.slug}/`,
      primaryKeyword: `digital marketing agency ${a.name}`,
      secondaryKeywords: [`local SEO ${a.name}`, `website development ${a.name}`],
      title: withBrand(`Digital Marketing & SEO in ${a.name}`),
      description: a.metaDescription,
      h1: `Digital Marketing and Local SEO in ${a.name}`,
    })),
  ];
};

export const allSeo = (): PageSeo[] => [...pages, ...industryPages(), ...areaPages()];

export const seoFor = (path: string): PageSeo => {
  const found = allSeo().find((p) => p.path === path);
  if (!found) throw new Error(`No SEO entry in src/data/seo.ts for path "${path}"`);
  return found;
};
