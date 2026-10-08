/**
 * Single source of truth for business details (NAP), navigation, services summary and prices.
 * Anything written in [SQUARE BRACKETS] is a placeholder you must replace before launch.
 */

export const isPlaceholder = (value: string | undefined | null): boolean =>
  !value || /\[|\]|X{4,}|YOUR_/.test(value);

export const site = {
  name: 'AceGrow',
  descriptor: 'Digital Growth Studio',
  tagline: 'We build your website, get you found on Google, and turn searches into customers.',
  url: 'https://acegrow.in', // keep in sync with `site` in astro.config.mjs
  locale: 'en-IN',
  location: 'Mumbai, India',
  // Service-area business: no public office address is shown anywhere on the site or in schema.
  serviceAreas: ['Mumbai', 'Thane', 'Navi Mumbai'],
  founders: [
    {
      name: 'Aman Tripathi',
      role: 'Founder',
      bio: 'At AceGrow: mobile development, web development and digital marketing.',
    },
    {
      name: 'Sushant Tiwari',
      role: 'Founder',
      bio: 'At AceGrow: Full Stack Developer and Flutter Developer.',
    },
  ],
  // Digits only, with country code, for wa.me links.
  whatsappNumber: '918303026772',
  phoneDisplay: '+91 83030 26772',
  email: 'acegrow.in@gmail.com',
  // Add real profile URLs. Entries still containing [ ] are skipped in schema and the footer.
  social: [
    { label: 'Instagram', url: 'https://www.instagram.com/[YOUR-HANDLE]/' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/company/[YOUR-PAGE]/' },
    { label: 'Facebook', url: 'https://www.facebook.com/[YOUR-PAGE]/' },
  ],
  // Social share image (1200x630). Replace public/og-default.png with your own design.
  ogImage: '/og-default.png',
  whatsappDefaultMessage: 'Hi AceGrow, I would like a free Google listing check for my business.',
} as const;

export const whatsappLink = (message: string = site.whatsappDefaultMessage): string =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const absoluteUrl = (path: string): string =>
  new URL(path, site.url).toString();

export const nav = [
  { label: 'Services', href: '/services/' },
  { label: 'Industries', href: '/industries/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Case Study', href: '/case-study/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
] as const;

/** Short service summaries used on cards, menus and the footer. Full page copy lives in services.ts. */
export const services = [
  {
    slug: 'local-seo-mumbai',
    name: 'Local SEO & Google Business Profile',
    short: 'Show up when people nearby search for what you sell: on Google Search and Google Maps.',
    icon: 'map-pin',
  },
  {
    slug: 'website-development-mumbai',
    name: 'Website Development',
    short: 'A fast, mobile-friendly website that explains what you do and makes it easy to contact you.',
    icon: 'layout',
  },
  {
    slug: 'google-ads-management-mumbai',
    name: 'Google Ads Management',
    short: 'Paid search ads that reach people already looking for you, with clear tracking of enquiries.',
    icon: 'search',
  },
  {
    slug: 'instagram-facebook-ads-mumbai',
    name: 'Instagram, Facebook & WhatsApp Ads',
    short: 'Meta ads that send interested people straight to your WhatsApp, form or website.',
    icon: 'megaphone',
  },
  {
    slug: 'mobile-app-development-mumbai',
    name: 'Custom Mobile Apps',
    short: 'Android and iPhone apps built with Flutter. Quote only, after we understand your idea.',
    icon: 'phone',
  },
] as const;

/**
 * PRICES: shown as "Price after quote" until you set real amounts.
 * To show a number later, replace the `from` text with e.g. "Starting from ₹15,000".
 */
export const pricing = {
  note: 'Ad spend (the money paid to Google or Meta), domain name and hosting are paid by the client directly. They are not included in our fees.',
  websites: [
    {
      name: 'Starter Website',
      from: 'Price after quote',
      period: 'one-time',
      blurb: 'For businesses that need a clean, simple online presence.',
      highlight: false,
      features: [
        'Pages as per your needs',
        'Mobile-friendly design',
        'Contact form + WhatsApp button',
        'Basic on-page SEO set-up',
        'Google Business Profile link-up',
      ],
    },
    {
      name: 'Growth Website',
      from: 'Price after quote',
      period: 'one-time',
      blurb: 'For businesses that want to be found on Google and win enquiries.',
      highlight: true,
      badge: 'Recommended',
      features: [
        'Pages as per your needs',
        'Everything in Starter',
        'Full on-page SEO and service pages',
        'Speed and Core Web Vitals tuning',
        'Google Search Console + GA4 set-up',
        'WhatsApp lead set-up',
      ],
    },
    {
      name: 'Business Website',
      from: 'Price after quote',
      period: 'one-time',
      blurb: 'For larger businesses with many services, locations or products.',
      highlight: false,
      features: [
        'Pages as per your needs',
        'Everything in Growth',
        'Blog or news section',
        'Custom sections and integrations',
        'Revision rounds agreed in your quote',
        'Priority support after launch',
      ],
    },
  ],
  monthly: [
    {
      name: 'Local SEO Starter',
      from: 'Price after quote',
      period: 'per month',
      blurb: 'Get your Google Business Profile and local presence in order.',
      highlight: false,
      features: [
        'Google Business Profile set-up and care',
        'Local keyword research',
        'Review request system',
        'Directory listing clean-up',
        'Monthly report on WhatsApp or email',
      ],
    },
    {
      name: 'SEO + Ads Growth',
      from: 'Price after quote',
      period: 'per month',
      blurb: 'Search and ads working together to bring steady enquiries.',
      highlight: true,
      badge: 'Recommended',
      features: [
        'Everything in Local SEO Starter',
        'On-page and technical SEO fixes',
        'Google Ads or Meta Ads management (one platform)',
        'Lead tracking set-up',
        'Monthly report and a call to review it',
      ],
    },
    {
      name: 'Full Growth',
      from: 'Price after quote',
      period: 'per month',
      blurb: 'SEO plus ads on more than one platform, with more content.',
      highlight: false,
      features: [
        'Everything in SEO + Ads Growth',
        'Google Ads and Meta Ads (both)',
        'New pages or blog posts every month',
        'Backlink and citation building',
        'Fortnightly check-in call',
      ],
    },
  ],
  app: {
    name: 'Custom Mobile App',
    price: 'Custom quote',
    blurb: 'Every app is different, so we quote after a free call about your idea, users and budget.',
  },
} as const;

/** Pages used as default "related" links on pages that have no closer relatives. */
export const defaultRelated = [
  { href: '/services/', title: 'Our services', text: 'Local SEO, websites, ads and apps for Mumbai businesses.' },
  { href: '/pricing/', title: 'Pricing', text: 'What affects the cost and what our plans include.' },
  { href: '/case-study/', title: 'Case study', text: 'How a college website went from page 3 to page 1 of Google.' },
] as const;
