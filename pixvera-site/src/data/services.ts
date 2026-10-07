/**
 * Content for the five Mumbai service pages (/services/[slug]/).
 * Title, meta description, H1 and keywords for each page live in seo.ts.
 * Rule: no claims about past clients or results for Pixvera. Describe what we do, not what we have "achieved".
 */

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServicePage {
  slug: string;
  name: string;
  icon: string;
  /** 40-60 words. Shown at the top of the page as the direct answer. */
  directAnswer: string;
  sections: { h2: string; paragraphs: string[] }[];
  included: string[];
  notIncluded: string[];
  steps: { title: string; text: string }[];
  faqs: ServiceFaq[];
  /** Slugs of blog posts to link to as extra reading. */
  blog: string[];
  /** Serves as the Service schema description. */
  schemaDescription: string;
  serviceType: string;
}

export const servicePages: ServicePage[] = [
  {
    slug: 'local-seo-mumbai',
    name: 'Local SEO & Google Business Profile',
    icon: 'map-pin',
    serviceType: 'Local SEO',
    schemaDescription:
      'Local SEO, Google Business Profile optimization and Google Maps ranking support for businesses in Mumbai, Thane and Navi Mumbai.',
    directAnswer:
      'Local SEO helps your business appear on Google Search and Google Maps when people nearby look for what you sell. We set up and improve your Google Business Profile, fix your website for local searches, build consistent listings and help you collect reviews, so more of those searches turn into calls and visits.',
    sections: [
      {
        h2: 'Why local SEO matters for businesses in Mumbai',
        paragraphs: [
          'When someone in Mumbai needs a dentist, a tailor, a coaching class or a caterer, they usually pick up a phone and search. The results they see first are the Google Maps pack and the top few website results. If your business is not there, the customer calls someone else, even if your work is better.',
          'Local SEO is the work of making sure Google understands who you are, where you work and what you offer, and trusts you enough to show you. It is not a trick. It is a mix of a well-filled Google Business Profile, a clear website, consistent business details across the internet and genuine reviews from real customers.',
        ],
      },
      {
        h2: 'What we focus on',
        paragraphs: [
          'We start with a free check of your current Google presence, so you can see what is missing before you spend anything. After that, the plan depends on your business. A shop with a visible location needs strong Google Maps work. A service business that visits customers needs clear service-area pages. A business with several branches needs each branch handled properly.',
          'We explain every step in simple language and share a monthly report so you can see what changed. We do not promise a ranking. Nobody honestly can. What we promise is careful work on the things that are known to matter, and clear reporting.',
        ],
      },
    ],
    included: [
      'Google Business Profile set-up or clean-up: categories, services, description, photos, hours and links',
      'Local keyword research for Mumbai, Thane and Navi Mumbai searches that match your services',
      'Website fixes for local search: titles, headings, service pages and contact details',
      'Consistent business details (name, phone, service area) across major directories',
      'A simple system to ask happy customers for Google reviews',
      'Review reply guidance, with draft replies for you to approve',
      'Monthly report on calls, direction requests, website visits and searches',
    ],
    notIncluded: [
      'Guaranteed rankings or a guaranteed number of enquiries',
      'Buying, faking or exchanging reviews. This breaks Google rules and can get you banned',
      'Paid ads (see our Google Ads service)',
      'Directory listing fees charged by third-party sites, if any',
      'A new website (available separately)',
    ],
    steps: [
      { title: 'Audit', text: 'We check your Google Business Profile, website and listings and share what we find.' },
      { title: 'Set up', text: 'We fix the profile, add missing details and prepare your website pages.' },
      { title: 'Build trust', text: 'We tidy listings and set up a simple way to collect genuine reviews.' },
      { title: 'Report', text: 'Every month you get a short report and a clear list of next steps.' },
    ],
    blog: ['how-to-rank-on-google-maps-in-mumbai', 'how-to-set-up-google-business-profile-step-by-step', 'how-long-does-seo-take-for-a-local-business'],
    faqs: [
      {
        q: 'What is the difference between local SEO and normal SEO?',
        a: 'Normal SEO helps a website rank for searches anywhere. Local SEO focuses on searches where location matters, such as "dentist near me" or "salon in Thane", and includes your Google Business Profile and Google Maps listing. Most businesses with a physical location or service area benefit most from local SEO.',
      },
      {
        q: 'Can you guarantee that I will rank number 1 on Google?',
        a: 'No. Anyone who guarantees a position is not being honest, because Google decides the rankings and they change often. We guarantee careful work on the factors that matter and a clear monthly report on what changed.',
      },
      {
        q: 'Do I need a Google Business Profile if I already have a website?',
        a: 'Yes, in most cases. The Google Business Profile is what appears in Google Maps and the local results panel, with your phone number, reviews and directions. A website and a profile work best together.',
      },
      {
        q: 'How long does local SEO take?',
        a: 'Small improvements to a Google Business Profile can show within weeks. Steady growth in rankings and enquiries usually takes a few months, and it depends on how competitive your area and business type are. Our blog post on how long SEO takes explains this in detail.',
      },
      {
        q: 'Do you work with businesses outside Mumbai?',
        a: 'We focus on businesses across Mumbai, Thane and Navi Mumbai. If you are elsewhere in India, talk to us on WhatsApp and we will tell you honestly whether we can help.',
      },
    ],
  },
  {
    slug: 'website-development-mumbai',
    name: 'Website Development',
    icon: 'layout',
    serviceType: 'Website development',
    schemaDescription:
      'Fast, mobile-friendly small business website design and development for businesses in Mumbai, Thane and Navi Mumbai.',
    directAnswer:
      'We design and build fast, mobile-friendly websites for small and growing businesses in Mumbai. Each site is set up for Google from day one, with clear service pages, a contact form and WhatsApp button, so visitors can find you, trust you and get in touch quickly from any phone.',
    sections: [
      {
        h2: 'A website that works as hard as you do',
        paragraphs: [
          'Most customers in India browse on a phone, often on a mobile network that is not very fast. A website that is heavy, confusing or slow to load loses people in seconds. We build lightweight websites that open quickly, read clearly on a small screen and make the next step obvious: call, message on WhatsApp or fill a short form.',
          'We keep the structure simple. A homepage that explains what you do, a page for each main service, a page about you, and a contact page. As your business grows, adding more pages is easy because the site is built in an organised way.',
        ],
      },
      {
        h2: 'Built to be found on Google',
        paragraphs: [
          'A good-looking website that nobody can find does not help your business. We set up page titles, headings, descriptions, clean URLs, a sitemap and basic structured data as part of the build, not as an afterthought. We also connect Google Search Console so you can see how your site appears in search.',
        ],
      },
    ],
    included: [
      'Custom design that matches your brand, with no copy-paste templates',
      'Mobile-first layout tested on real phone sizes',
      'Clear page structure written around what your customers search for',
      'Contact form and WhatsApp click-to-chat button',
      'On-page SEO: titles, descriptions, headings, image text, sitemap and robots file',
      'Speed optimisation: compressed images and lightweight code',
      'Google Search Console and Google Analytics set-up',
      'A short hand-over session so you know how to request changes',
    ],
    notIncluded: [
      'Domain name and hosting fees, which are paid by you directly to the provider',
      'Paid stock photos or paid plug-ins, unless you approve them',
      'Writing very large amounts of content (we can quote this separately)',
      'Ongoing SEO or ads (available as monthly plans)',
      'Online payment or complex e-commerce, unless agreed in the quote',
    ],
    steps: [
      { title: 'Plan', text: 'We agree your pages, goals and what a good enquiry looks like for you.' },
      { title: 'Design', text: 'You see the design on mobile and desktop and tell us what to change.' },
      { title: 'Build', text: 'We build the site, add your content and set up SEO and tracking.' },
      { title: 'Launch', text: 'We test everything, go live and connect Google Search Console.' },
    ],
    blog: ['how-much-does-a-website-cost-in-mumbai', 'do-i-need-a-website-if-i-have-instagram', 'how-long-does-seo-take-for-a-local-business'],
    faqs: [
      {
        q: 'How much does a website cost in Mumbai?',
        a: 'It depends on the number of pages, the amount of custom design and any extra features. See our pricing page for plans and our blog post on website costs for a plain-language breakdown of what affects the price.',
      },
      {
        q: 'How long does it take to build a website?',
        a: 'A small business website often takes a few weeks, depending on how quickly you share content and approve designs. We give you a clear timeline before we start.',
      },
      {
        q: 'Will my website work well on mobile?',
        a: 'Yes. We design for phones first and then adapt for larger screens, because most visitors will see your site on a phone.',
      },
      {
        q: 'Do I own my website?',
        a: 'Yes. You own your content and your domain. We will share the files and access details at hand-over so you are never locked in.',
      },
      {
        q: 'Can you update my existing website instead of building a new one?',
        a: 'Often yes. We review the current site first and tell you honestly whether fixing it or rebuilding it makes more sense.',
      },
    ],
  },
  {
    slug: 'google-ads-management-mumbai',
    name: 'Google Ads Management',
    icon: 'search',
    serviceType: 'Google Ads management',
    schemaDescription:
      'Google Ads (search advertising) set-up and management for businesses in Mumbai, Thane and Navi Mumbai, focused on tracked enquiries.',
    directAnswer:
      'Google Ads puts your business at the top of Google when people search for what you sell. As a Google Ads agency in Mumbai, we set up your campaigns, choose the right searches, write the ads, track calls and form enquiries, and adjust every week so your ad money is spent carefully.',
    sections: [
      {
        h2: 'Reach people who are already searching',
        paragraphs: [
          'Google Ads is different from social media ads. People on Google have typed what they want, so they are often closer to buying. If someone searches "AC repair near me" or "MBA coaching in Navi Mumbai", a well-built ad can put you in front of them at that exact moment.',
          'It also costs money every time someone clicks. That is why careful set-up matters: the wrong searches, the wrong location or a weak landing page can waste your budget quickly. Our job is to reduce that waste and to show you plainly what you got for what you spent.',
        ],
      },
      {
        h2: 'Tracking enquiries, not just clicks',
        paragraphs: [
          'Clicks do not pay your bills. Enquiries do. We set up call tracking, form tracking and WhatsApp click tracking where possible, so the report shows how many people contacted you, not just how many visited. We also share which searches brought them, so you can see what is worth more budget.',
        ],
      },
    ],
    included: [
      'Account set-up in your own Google Ads account, so you keep ownership',
      'Keyword research and negative keyword lists to avoid wasted clicks',
      'Ad copy, extensions and location targeting for Mumbai, Thane or Navi Mumbai',
      'Conversion tracking for calls, forms and WhatsApp clicks',
      'Landing page advice, so ads lead to a page built to convert',
      'Weekly checks and monthly report in simple language',
    ],
    notIncluded: [
      'Ad spend: the money paid to Google is billed to you directly and is separate from our fee',
      'Guaranteed number of leads or sales',
      'Website design or rebuild (available as a separate service)',
      'Product photography or video production',
    ],
    steps: [
      { title: 'Plan', text: 'We agree your goal, area, budget and the searches worth targeting.' },
      { title: 'Set up', text: 'We build the campaigns and tracking in your own account.' },
      { title: 'Launch', text: 'Ads go live with a careful first budget so we can learn quickly.' },
      { title: 'Improve', text: 'We review searches and results each week, then report monthly.' },
    ],
    blog: ['google-ads-vs-meta-ads-for-small-businesses-in-india', 'how-much-does-a-website-cost-in-mumbai', 'how-long-does-seo-take-for-a-local-business'],
    faqs: [
      {
        q: 'How much should I spend on Google Ads?',
        a: 'It depends on your business, how competitive your searches are and how much one new customer is worth to you. We help you pick a sensible starting budget and increase it only when the numbers support it. Ad spend is paid by you directly to Google.',
      },
      {
        q: 'Will I own my Google Ads account?',
        a: 'Yes. We work inside an account that belongs to you, so you can see everything and keep it if we ever stop working together.',
      },
      {
        q: 'Google Ads or SEO: which is better for me?',
        a: 'Ads can bring enquiries quickly but stop when you stop paying. SEO takes longer but builds lasting visibility. Many businesses use both. We will suggest what fits your budget and timeline.',
      },
      {
        q: 'How soon will I get enquiries?',
        a: 'Ads can start showing the same day they are approved, but it usually takes a few weeks of learning and adjustment to find what works. We do not promise a fixed number of leads.',
      },
    ],
  },
  {
    slug: 'instagram-facebook-ads-mumbai',
    name: 'Instagram, Facebook & WhatsApp Ads',
    icon: 'megaphone',
    serviceType: 'Meta (Instagram and Facebook) advertising and WhatsApp marketing',
    schemaDescription:
      'Instagram and Facebook (Meta) ads management and WhatsApp lead set-up for businesses in Mumbai, Thane and Navi Mumbai.',
    directAnswer:
      'We run Instagram and Facebook ads (Meta ads) that send interested people straight to your WhatsApp, a lead form or your website. As an Instagram ads agency in Mumbai, we handle audience targeting, ad creative guidance, WhatsApp lead set-up and weekly improvements, with clear reporting on enquiries.',
    sections: [
      {
        h2: 'Meta ads: reach people before they search',
        paragraphs: [
          'Instagram and Facebook are where many people spend time every day. Meta ads let you show your business to people in your area who may be interested, even if they have not searched for you yet. This works well for offers, new launches, events, admissions, and services people buy on impulse or by recommendation.',
          'Meta ads are not magic, and creative matters. A clear photo or short video, a simple offer and an easy way to reply on WhatsApp usually work better than clever design. We help you plan what to show and test a few versions, so you learn what your audience responds to.',
        ],
      },
      {
        h2: 'WhatsApp lead set-up',
        paragraphs: [
          'In India, many customers prefer to message on WhatsApp than to fill a form. We set up click-to-WhatsApp ads and a simple lead flow: a ready message, a business profile, quick replies for common questions and a way to note down every enquiry, so leads do not get lost. We help you set this up properly; the replies themselves still come from you or your team.',
        ],
      },
    ],
    included: [
      'Meta Business account and ad account set-up, owned by you',
      'Audience planning by area, age and interest',
      'Creative guidance: what photos, videos and offers to use',
      'Ad copy and call-to-action written in simple language',
      'Click-to-WhatsApp ads and WhatsApp Business profile set-up',
      'Quick replies, greeting message and a simple enquiry tracking sheet',
      'Weekly checks and a monthly report',
    ],
    notIncluded: [
      'Ad spend: paid directly to Meta from your account, separate from our fee',
      'Professional photo or video shoots (we can recommend people)',
      'Replying to your customers on WhatsApp on your behalf',
      'Bulk or spam messaging. Meta and WhatsApp rules do not allow it',
      'Guaranteed number of leads',
    ],
    steps: [
      { title: 'Plan', text: 'We agree your offer, area and the kind of customer you want.' },
      { title: 'Set up', text: 'We prepare your accounts, ads and WhatsApp lead flow.' },
      { title: 'Launch', text: 'Ads go live with a modest first budget and a few versions to test.' },
      { title: 'Improve', text: 'We keep what works, stop what does not and report each month.' },
    ],
    blog: ['google-ads-vs-meta-ads-for-small-businesses-in-india', 'do-i-need-a-website-if-i-have-instagram', 'how-much-does-a-website-cost-in-mumbai'],
    faqs: [
      {
        q: 'Should I run Instagram ads or Facebook ads?',
        a: 'Both are managed from the same Meta Ads system. We choose where to show your ads (Instagram, Facebook or both) based on who you want to reach and what has the best chance of working for your type of business.',
      },
      {
        q: 'What is a click-to-WhatsApp ad?',
        a: 'It is an ad with a button that opens a WhatsApp chat with your business. It is popular in India because many people prefer to message than to fill a form.',
      },
      {
        q: 'Do I need a website to run Meta ads?',
        a: 'Not always. Click-to-WhatsApp ads can work without one. But a website helps people trust you and gives you a place to send visitors who want more information.',
      },
      {
        q: 'What is the difference between Meta ads and Google Ads?',
        a: 'Google Ads reaches people searching for something. Meta ads reach people while they browse. Our blog post on Google Ads vs Meta Ads compares them for small businesses in India.',
      },
      {
        q: 'Who replies to the WhatsApp messages?',
        a: 'You or your team. We set up the quick replies and the flow, and show you how to track enquiries, but fast, friendly replies from you are what turn messages into customers.',
      },
    ],
  },
  {
    slug: 'mobile-app-development-mumbai',
    name: 'Custom Mobile Apps',
    icon: 'phone',
    serviceType: 'Mobile app development',
    schemaDescription:
      'Custom Android and iPhone app development using Flutter for businesses in Mumbai, Thane and Navi Mumbai. Quote only.',
    directAnswer:
      'We build custom Android and iPhone apps using Flutter, one codebase for both phones. As a Flutter app development company in Mumbai, we start by checking whether you really need an app, then plan, design, build and publish it. Every app is quoted individually after a free call.',
    sections: [
      {
        h2: 'Do you actually need an app?',
        paragraphs: [
          'An app is a bigger investment than a website, and many businesses do not need one yet. If your customers mainly want to find you, see your services and contact you, a good website and a Google Business Profile will usually do more for less money. We will tell you this honestly on the first call.',
          'An app makes sense when people will use it again and again: bookings, memberships, orders, learning content, loyalty points, or a tool your team uses every day. In those cases, an app can be convenient in a way a website cannot.',
        ],
      },
      {
        h2: 'Why Flutter',
        paragraphs: [
          'Flutter lets us build one app that runs on both Android and iPhone from the same code. For most business apps this means a shorter build time and easier updates than building two separate apps. Flutter is not right for every project, and if something else suits yours better, we will say so.',
        ],
      },
    ],
    included: [
      'A free discovery call to understand your idea, users and budget',
      'Feature planning and a clear written scope before work starts',
      'App design for Android and iPhone screens',
      'Flutter development and testing on real devices',
      'Help with publishing on Google Play and the Apple App Store',
      'A hand-over of the source code and access, as agreed in the quote',
    ],
    notIncluded: [
      'A fixed price list. Apps are quoted only, after we understand the scope',
      'Google Play and Apple developer account fees, paid by you',
      'Server, hosting and third-party service costs after launch',
      'Marketing the app after launch (available as a separate service)',
      'Features not in the written scope, unless agreed as a change',
    ],
    steps: [
      { title: 'Free call', text: 'You explain your idea. We ask questions and tell you honestly if an app fits.' },
      { title: 'Scope and quote', text: 'We write down the features and give you a clear quote.' },
      { title: 'Design and build', text: 'You see the screens early and test builds as we go.' },
      { title: 'Publish', text: 'We help you release on Google Play and the App Store.' },
    ],
    blog: ['do-i-need-a-website-if-i-have-instagram', 'how-much-does-a-website-cost-in-mumbai', 'how-long-does-seo-take-for-a-local-business'],
    faqs: [
      {
        q: 'How much does an app cost?',
        a: 'We do not publish a fixed price because every app is different. After a free call we send a written quote that lists what is included.',
      },
      {
        q: 'Why Flutter instead of building separate Android and iPhone apps?',
        a: 'Flutter lets one team build for both platforms from one codebase, which usually saves time and money for business apps. If your project needs something that only a native app can do, we will tell you.',
      },
      {
        q: 'Will I own the app and the code?',
        a: 'Ownership terms are written into the quote. Our aim is that you own your app, your data and your developer accounts.',
      },
      {
        q: 'Can I start with a website and add an app later?',
        a: 'Yes, and for many businesses this is the smarter path. A website brings in customers now, and an app can follow once you know exactly what your users need.',
      },
    ],
  },
];

export const getService = (slug: string): ServicePage | undefined =>
  servicePages.find((s) => s.slug === slug);
