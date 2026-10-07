/**
 * ADD A NEW INDUSTRY: copy any entry below, give it a new unique `slug`, and fill the fields.
 * It automatically gets a page at /industries/<slug>/, a card on the hub, a sitemap entry and SEO tags.
 *
 * Honesty rule: describe what we DO or CAN do for this type of business.
 * Never write that we "have worked with" or "helped" a type of business unless that is true and provable.
 *
 * Limits (checked at build time): metaDescription up to 155 characters, directAnswer 40-60 words, 4+ FAQs.
 * The page title is generated as "Digital Marketing for {seoName} in Mumbai | Pixvera" (max 60 characters).
 */

export interface Industry {
  slug: string;
  /** Display name, used on cards and in the breadcrumb. */
  name: string;
  /** Short name used in the title and H1: "Digital Marketing for {seoName} in Mumbai". */
  seoName: string;
  icon: string;
  /** One line for the card on the hub and home page. */
  cardText: string;
  directAnswer: string;
  metaDescription: string;
  intro: string;
  painPoints: { title: string; text: string }[];
  whatWeDo: { title: string; text: string }[];
  /** Example searches this kind of business should be found for. Examples only, not claims about volume. */
  exampleSearches: string[];
  faqs: { q: string; a: string }[];
  /** Slugs of 3 related industries. */
  related: [string, string, string];
  /** Slugs of related service pages. */
  services: string[];
}

export const industries: Industry[] = [
  {
    slug: 'restaurants-cafes',
    name: 'Restaurants & Cafes',
    seoName: 'Restaurants & Cafes',
    icon: 'utensils',
    cardText: 'Get found for "restaurants near me", fill tables and grow direct orders and bookings.',
    metaDescription:
      'Digital marketing for restaurants and cafes in Mumbai: Google Maps visibility, menu pages, reviews and ads that bring in diners. Free Google listing check.',
    directAnswer:
      'Digital marketing for restaurants and cafes in Mumbai means being easy to find on Google Maps, showing a clear menu and photos, collecting good reviews, and using local ads to bring in diners. We set up and improve these basics so hungry customers nearby choose you and can call, book or visit easily.',
    intro:
      'Most people choose where to eat from their phone, usually minutes before they go. They look at the photos, the rating, the menu and the distance. If your listing is incomplete or your menu is hard to find, they move on to the next place.',
    painPoints: [
      { title: 'Customers cannot find the menu', text: 'Menus sent as heavy PDFs or only on delivery apps are hard to read on a phone and do not help you show up on Google.' },
      { title: 'A half-filled Google listing', text: 'Missing photos, wrong timings or no booking link make people doubt you, or go somewhere else.' },
      { title: 'Delivery apps take a share of every order', text: 'Without your own ordering or enquiry route, every repeat customer still pays commission.' },
      { title: 'Reviews pile up without replies', text: 'Unanswered reviews, good or bad, make a place look less cared for.' },
    ],
    whatWeDo: [
      { title: 'Google Business Profile care', text: 'Categories, timings, photos, menu links and posts, kept up to date so the listing looks active.' },
      { title: 'A fast, mobile-friendly website', text: 'Menu in clean text, location, timings, a call button and WhatsApp booking, loading quickly on a phone.' },
      { title: 'A simple review routine', text: 'A QR code or message that asks happy diners for a Google review, with draft replies you can approve.' },
      { title: 'Local Meta ads', text: 'Instagram and Facebook ads for offers, events and new menu items, aimed at people near you.' },
      { title: 'WhatsApp bookings', text: 'A ready message and quick replies for table bookings and party enquiries.' },
    ],
    exampleSearches: ['cafe near me', 'family restaurant in [your area]', 'birthday party venue in Mumbai'],
    faqs: [
      { q: 'How can a restaurant get more customers from Google?', a: 'Complete and update your Google Business Profile, add real photos and your menu, ask happy customers for reviews and make sure your website loads fast on a phone. These steps help you appear when people search for food nearby.' },
      { q: 'Do I need my own website if I am on delivery apps?', a: 'It is a good idea. A website lets customers see your menu, call you and book directly, and it gives you a place to be found on Google without paying commission.' },
      { q: 'Are Instagram ads worth it for a cafe?', a: 'They can be, especially for events, offers and new items, because food is visual. We start with a small budget, test a few versions and keep only what brings people through your door.' },
      { q: 'Can you manage my Zomato or Swiggy listing?', a: 'Those platforms have their own rules and dashboards. We focus on your Google presence, website and ads, and can advise on how they fit together.' },
      { q: 'How do I get more Google reviews?', a: 'Ask at the right time, for example when a customer pays and smiles. A QR code on the bill or table that opens your review page makes it easy. Never pay for reviews or offer rewards that Google does not allow.' },
    ],
    related: ['retail-shops', 'salons-spas', 'gyms-fitness'],
    services: ['local-seo-mumbai', 'instagram-facebook-ads-mumbai', 'website-development-mumbai'],
  },
  {
    slug: 'clinics-hospitals',
    name: 'Clinics & Hospitals',
    seoName: 'Clinics & Hospitals',
    icon: 'heart',
    cardText: 'Help patients find your clinic, see your doctors and book with confidence.',
    metaDescription:
      'Digital marketing for clinics and hospitals in Mumbai: Google Maps, doctor profile pages, patient reviews and compliant ads. Start with a free Google listing check.',
    directAnswer:
      'Digital marketing for clinics and hospitals in Mumbai helps patients find you on Google Maps, read about your doctors and services, and book an appointment easily. We build clear service pages, tidy your Google Business Profile and manage ads carefully, keeping all content factual and within healthcare advertising rules.',
    intro:
      'When people feel unwell or worried, they search fast and judge trust quickly. Clear information, genuine reviews and an easy way to book make a real difference, and honesty matters more here than in almost any other business.',
    painPoints: [
      { title: 'Patients cannot tell what you treat', text: 'A website that lists "all services" in one paragraph does not help someone searching for a specific treatment.' },
      { title: 'No easy way to book', text: 'If booking means finding a phone number on a hidden page, patients often choose another clinic.' },
      { title: 'Trust gaps', text: 'Missing doctor details, qualifications or clinic photos make a new patient hesitate.' },
      { title: 'Advertising rules', text: 'Healthcare advertising has restrictions in India. Careless claims can create problems for you.' },
    ],
    whatWeDo: [
      { title: 'Google Business Profile for each clinic', text: 'Correct categories, services, timings, photos and appointment links.' },
      { title: 'Clear service and doctor pages', text: 'One page per treatment or specialty, written in plain language, so people searching for it can find you.' },
      { title: 'Appointment-friendly website', text: 'A visible call button, WhatsApp enquiry and a short booking form on every page.' },
      { title: 'Review process', text: 'A respectful way to invite patient feedback, with reply guidance that protects privacy.' },
      { title: 'Careful, compliant ads', text: 'Search and Meta ads written factually, without exaggerated claims. You approve all content before it runs.' },
    ],
    exampleSearches: ['dentist near me', '[specialty] clinic in [your area]', 'pathology lab near me'],
    faqs: [
      { q: 'Can clinics advertise on Google and Instagram in India?', a: 'Yes, but healthcare advertising has rules from regulators and from the ad platforms themselves. We keep your ads factual, avoid claims about guaranteed cures and ask you to approve every ad. For legal questions, please check with your own advisor.' },
      { q: 'How do patients find a clinic on Google?', a: 'Mostly through Google Maps and the local results that show ratings, hours and a call button. A complete profile, genuine reviews and a clear website help you appear there.' },
      { q: 'Do doctors need individual web pages?', a: 'It often helps. A short page for each doctor with qualifications and the treatments they handle builds trust and can help you show for specific searches.' },
      { q: 'How should we handle negative reviews?', a: 'Reply politely, avoid sharing any patient information and invite the person to contact the clinic directly. We can help you write replies for your approval.' },
    ],
    related: ['salons-spas', 'gyms-fitness', 'professional-services'],
    services: ['local-seo-mumbai', 'website-development-mumbai', 'google-ads-management-mumbai'],
  },
  {
    slug: 'salons-spas',
    name: 'Salons & Spas',
    seoName: 'Salons & Spas',
    icon: 'sparkles',
    cardText: 'Fill appointment slots with a strong Google listing, photos and WhatsApp booking.',
    metaDescription:
      'Digital marketing for salons and spas in Mumbai: Google Maps visibility, service price pages, reviews and Instagram ads that bring in bookings.',
    directAnswer:
      'Digital marketing for salons and spas in Mumbai focuses on being found on Google Maps, showing your work through photos and clear service lists, collecting reviews, and making WhatsApp booking easy. We also run local Instagram and Facebook ads for offers, so your appointment slots fill up.',
    intro:
      'Choosing a salon is personal. People look at photos, read reviews and often ask a friend. A listing that shows your real work, clear services and easy booking is your best first impression.',
    painPoints: [
      { title: 'Great work, but no one sees it', text: 'Photos live on Instagram but are missing from your Google listing and website.' },
      { title: 'Customers cannot see services or prices', text: 'If people must call to ask what you offer, many will not.' },
      { title: 'Empty slots on weekdays', text: 'Busy weekends but quiet weekdays are common. Targeted offers can help fill them.' },
      { title: 'Booking happens by chance', text: 'Messages come in on different apps and get missed or answered late.' },
    ],
    whatWeDo: [
      { title: 'Google Business Profile with real photos', text: 'Services, timings, photos and a booking or WhatsApp link, kept fresh with regular posts.' },
      { title: 'Service pages', text: 'Clear pages for services such as hair, skin, bridal and spa, helping people find exactly what they need.' },
      { title: 'WhatsApp booking flow', text: 'A greeting message and quick replies so enquiries are answered the same way every time.' },
      { title: 'Instagram and Facebook ads', text: 'Offers aimed at people near you, shown on the days you want to fill.' },
      { title: 'Review routine', text: 'A simple ask after each visit so good experiences reach Google.' },
    ],
    exampleSearches: ['salon near me', 'bridal makeup in [your area]', 'spa near me'],
    faqs: [
      { q: 'How can a salon get more bookings from Google?', a: 'Keep your Google Business Profile complete with services, photos and timings, collect reviews and give people an easy booking link or WhatsApp button. These simple steps help you appear in local searches.' },
      { q: 'Is Instagram enough for a salon?', a: 'Instagram is great for showing your work, but many people also search on Google before booking. Having both a Google listing and Instagram helps you reach more customers.' },
      { q: 'Should I show prices online?', a: 'Showing starting prices usually helps, because it saves time for both sides. You can say "starting from" and invite people to confirm on WhatsApp.' },
      { q: 'Can you help with offers for slow days?', a: 'Yes. We can plan a small ad with an offer for specific days and measure how many bookings it brings.' },
    ],
    related: ['clinics-hospitals', 'gyms-fitness', 'restaurants-cafes'],
    services: ['local-seo-mumbai', 'instagram-facebook-ads-mumbai', 'website-development-mumbai'],
  },
  {
    slug: 'schools-colleges-coaching',
    name: 'Schools, Colleges & Coaching',
    seoName: 'Schools & Colleges',
    icon: 'graduation',
    cardText: 'Be the first result parents and students see during admission season.',
    metaDescription:
      'Digital marketing for schools, colleges and coaching classes in Mumbai: rank for admission searches, clear course pages and enquiry tracking. Free listing check.',
    directAnswer:
      'Digital marketing for schools, colleges and coaching classes in Mumbai helps parents and students find you when they search for admissions and courses. We build clear course pages, improve your Google Business Profile and website for local searches, and set up enquiry tracking so you know where applicants come from.',
    intro:
      'Admissions run on trust and timing. Parents and students compare several institutions online before they ever visit, and most of that comparison starts with a Google search. Being easy to find, with clear fees, courses and contact details, matters a great deal.',
    painPoints: [
      { title: 'Competitors rank above you', text: 'When families search for your course or area, other institutes show first, even if yours is a better fit.' },
      { title: 'Course information is hard to find', text: 'Fees, eligibility, dates and contact details are buried in PDFs or old notices.' },
      { title: 'Seasonal rush', text: 'Most enquiries arrive in a short admission window, so there is little time to fix things once it starts.' },
      { title: 'Enquiries are not tracked', text: 'Without tracking, it is difficult to know which source actually produced admissions.' },
    ],
    whatWeDo: [
      { title: 'A page for every course', text: 'Clear, searchable pages covering eligibility, duration, fees process and how to apply.' },
      { title: 'Google Business Profile per campus', text: 'Accurate location, timings, photos and contact details for each campus or branch.' },
      { title: 'Local and technical SEO', text: 'Fixing the structure and speed of your website so Google can read it easily.' },
      { title: 'Ads for admission season', text: 'Google and Meta ads planned ahead of the admission window, with form and WhatsApp tracking.' },
      { title: 'Enquiry tracking', text: 'A simple sheet or dashboard showing which searches and ads produced enquiries.' },
    ],
    exampleSearches: ['[course] college in [city area]', 'coaching classes near me', 'school admissions in Navi Mumbai'],
    faqs: [
      { q: 'How can a college rank higher on Google?', a: 'Make sure each course has its own clear page, your Google Business Profile is complete, your website is fast on mobile and other trustworthy sites link to you. Our case study shows how one founder approached this for a Mumbai college.' },
      { q: 'When should we start preparing for admission season?', a: 'As early as you can. SEO work takes time to show results, so starting a few months before the admission window is much better than starting during it.' },
      { q: 'Do coaching classes need a website?', a: 'Yes. Parents and students look for batch details, results policy, timings and fees before they call. A simple website answers these questions and builds trust.' },
      { q: 'Can you manage ads for admissions?', a: 'Yes. We plan Google and Meta ads around your admission dates, send enquiries to a form or WhatsApp and track how many came from each source.' },
    ],
    related: ['professional-services', 'clinics-hospitals', 'startups-online-brands'],
    services: ['local-seo-mumbai', 'website-development-mumbai', 'google-ads-management-mumbai'],
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    seoName: 'Real Estate',
    icon: 'building',
    cardText: 'Get buyers and tenants to find your projects and listings on Google.',
    metaDescription:
      'Digital marketing for real estate in Mumbai: project pages, Google Maps, lead forms and compliant ads for brokers and developers. Ask for a free listing check.',
    directAnswer:
      'Digital marketing for real estate in Mumbai helps buyers and tenants find your projects and listings on Google. We build clear project pages, improve your Google Business Profile, run Google and Meta ads with lead tracking, and keep your marketing within the rules that apply to property advertising.',
    intro:
      'Property is a high-value decision, and buyers research for weeks. They compare locations, read about developers and check whether a project looks genuine. A clear website with accurate details and a fast way to enquire builds that trust.',
    painPoints: [
      { title: 'Portals own the buyer', text: 'Listing sites take enquiries away from your own brand and charge for leads.' },
      { title: 'Unqualified leads', text: 'Wasted time on enquiries that are not serious or not in budget.' },
      { title: 'Project details are scattered', text: 'Brochures, price sheets and floor plans are shared on chat, not on a page Google can find.' },
      { title: 'Compliance matters', text: 'Property ads in Maharashtra have rules, including showing RERA registration details where required.' },
    ],
    whatWeDo: [
      { title: 'Project and listing pages', text: 'One clear page per project or area, with details, location and enquiry form.' },
      { title: 'Google Business Profile', text: 'Your office, timings and reviews set up properly so local searches can find you.' },
      { title: 'Lead-focused ads', text: 'Google and Meta ads with forms or WhatsApp, plus questions that help filter serious buyers.' },
      { title: 'Compliant content', text: 'We include required registration details where you provide them. Please confirm legal requirements with your own advisor.' },
      { title: 'Lead tracking sheet', text: 'Every enquiry recorded with its source, so you can follow up fast.' },
    ],
    exampleSearches: ['2 BHK flat in [area]', 'property dealer near me', 'commercial space for rent in Navi Mumbai'],
    faqs: [
      { q: 'Can real estate agents use Google Ads in India?', a: 'Yes. Ads must follow Google policy and local property advertising rules, including RERA requirements where they apply. We help you set up ads and ask you to supply the registration details that need to be shown.' },
      { q: 'Is a website better than relying on property portals?', a: 'They work together. Portals bring visibility but you do not own that audience. A website builds your own brand, appears on Google and gives you a place to collect enquiries directly.' },
      { q: 'How do you reduce junk leads?', a: 'By choosing clear targeting, writing honest ad text and asking one or two qualifying questions in the form, such as budget range or timeline.' },
      { q: 'Can you handle several projects at once?', a: 'Yes. Each project can have its own page, tracking and ad group, so results stay clear.' },
    ],
    related: ['professional-services', 'startups-online-brands', 'retail-shops'],
    services: ['google-ads-management-mumbai', 'website-development-mumbai', 'instagram-facebook-ads-mumbai'],
  },
  {
    slug: 'gyms-fitness',
    name: 'Gyms & Fitness',
    seoName: 'Gyms & Fitness',
    icon: 'dumbbell',
    cardText: 'Bring local members through the door with Google Maps visibility and trial offers.',
    metaDescription:
      'Digital marketing for gyms and fitness studios in Mumbai: Google Maps listing, membership pages, reviews and local ads for trial sign-ups and memberships.',
    directAnswer:
      'Digital marketing for gyms and fitness studios in Mumbai helps people nearby find you on Google Maps and choose you for a trial. We improve your Google Business Profile, build clear membership and class pages, collect reviews and run local ads for offers, so more people walk in and sign up.',
    intro:
      'Fitness is a local decision. People rarely travel far to a gym, so those living and working near you are your main customers. They search, check reviews and photos and often come for a trial before they join.',
    painPoints: [
      { title: 'Hard to stand out among nearby gyms', text: 'Several options in the same area look similar online, so people pick the one that looks most active and trusted.' },
      { title: 'January rush, then a quiet year', text: 'Joining spikes at certain times and falls after. You need steady visibility outside the peak.' },
      { title: 'Trial visits do not become members', text: 'People enquire but nobody follows up quickly.' },
      { title: 'Plans and timings are unclear', text: 'Visitors cannot find class timings, trainers or membership details quickly.' },
    ],
    whatWeDo: [
      { title: 'Google Business Profile', text: 'Photos of the space and equipment, timings, services and posts about classes or offers.' },
      { title: 'Membership and class pages', text: 'Clear details of plans, trainers and timings, built for phone screens.' },
      { title: 'Free trial funnel', text: 'A simple form and WhatsApp message to book a trial, followed by a quick-reply script for your team.' },
      { title: 'Local ads', text: 'Instagram and Facebook ads for people within a short distance, timed for your best joining periods.' },
      { title: 'Review routine', text: 'Ask members for reviews at a happy moment, such as after a milestone.' },
    ],
    exampleSearches: ['gym near me', 'yoga classes in [your area]', 'personal trainer near me'],
    faqs: [
      { q: 'How can a gym get more members online?', a: 'Make it easy to find you on Google Maps, show real photos and class timings, collect reviews and offer a simple free trial that people can book in a minute on WhatsApp or a form.' },
      { q: 'Do fitness studios need a website?', a: 'A website helps you explain your classes, trainers and plans in your own words and gives Google more to show. It also makes you look established to people who have not visited yet.' },
      { q: 'Are local ads effective for gyms?', a: 'They can be, because you can target a small radius around your gym. We start small, track trial bookings and increase spend only when the numbers justify it.' },
      { q: 'Can you help with seasonal offers?', a: 'Yes. We plan ads and posts around the periods when people are most likely to join and tell you what to prepare in advance.' },
    ],
    related: ['salons-spas', 'clinics-hospitals', 'restaurants-cafes'],
    services: ['local-seo-mumbai', 'instagram-facebook-ads-mumbai', 'website-development-mumbai'],
  },
  {
    slug: 'retail-shops',
    name: 'Retail & Shops',
    seoName: 'Retail & Shops',
    icon: 'shop',
    cardText: 'Show up for "shop near me" searches and bring more walk-ins and calls.',
    metaDescription:
      'Digital marketing for retail shops in Mumbai: Google Maps visibility, product pages, WhatsApp catalogue and local ads that bring customers to your store.',
    directAnswer:
      'Digital marketing for retail shops in Mumbai helps people nearby find your store on Google Maps, see what you sell and contact you on WhatsApp. We improve your Google Business Profile, build simple product or category pages, and run local ads for new stock and offers to bring customers through the door.',
    intro:
      'Many shoppers check online before they visit a store. They want to know if you stock what they need, whether you are open and how to reach you. A shop that answers those questions online gets the visit.',
    painPoints: [
      { title: 'Customers do not know what you stock', text: 'If your range is only visible inside the shop, people go to a place that shows theirs online.' },
      { title: 'Marketplaces take the sale', text: 'Online platforms can pull away customers who would have walked into your shop.' },
      { title: 'Wrong timings or no phone number', text: 'Incomplete listings lead to wasted trips and lost sales.' },
      { title: 'No way to tell people about new stock', text: 'Offers and new arrivals only reach people who pass by.' },
    ],
    whatWeDo: [
      { title: 'Google Business Profile and Maps', text: 'Accurate timings, category, photos and a product section so people see what you sell.' },
      { title: 'Simple catalogue or category pages', text: 'A website that lists your main products or brands, with a WhatsApp button for enquiries and orders.' },
      { title: 'WhatsApp Business set-up', text: 'Catalogue, greeting message and quick replies for common questions.' },
      { title: 'Local ads for offers', text: 'Google and Meta ads for festive offers, clearance or new stock, aimed at the area around your shop.' },
      { title: 'Review routine', text: 'Ask happy customers for a Google review after a purchase.' },
    ],
    exampleSearches: ['[product] shop near me', 'mobile store in [your area]', 'furniture shop in Thane'],
    faqs: [
      { q: 'How does a small shop show up on Google Maps?', a: 'Claim and complete your Google Business Profile, choose the right category, add photos and timings, and ask customers for reviews. Consistent details across other listings also help.' },
      { q: 'Do I need an online store to get online customers?', a: 'Not necessarily. Many shops do well with a simple site, a Google listing and WhatsApp for enquiries. Selling online is a separate decision we can discuss.' },
      { q: 'What is the WhatsApp catalogue?', a: 'It is a free feature in WhatsApp Business that lets you show products with photos and prices inside a chat.' },
      { q: 'Can you help promote festive offers?', a: 'Yes. We plan Google and Meta ads and Google posts for festive periods, usually starting a few weeks early.' },
    ],
    related: ['restaurants-cafes', 'startups-online-brands', 'real-estate'],
    services: ['local-seo-mumbai', 'instagram-facebook-ads-mumbai', 'website-development-mumbai'],
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    seoName: 'Professional Services',
    icon: 'briefcase',
    cardText: 'Consultants, accountants, lawyers and agencies: build trust and get qualified enquiries.',
    metaDescription:
      'Digital marketing for professional services in Mumbai: clear service pages, Google Maps, trust-building content and ads for consultants, CAs and law firms.',
    directAnswer:
      'Digital marketing for professional services in Mumbai helps consultants, accountants, lawyers and agencies be found by people who need their expertise. We build clear service pages, improve your Google Business Profile, create trust-building content and run careful ads, always respecting the advertising rules of your profession.',
    intro:
      'Clients choose professionals on trust. They want to know who you are, what you handle and whether you understand their situation. A clear, honest website and a strong Google profile do much of that work before the first call.',
    painPoints: [
      { title: 'Work comes only through referrals', text: 'Referrals are valuable but unpredictable, and they do not grow on demand.' },
      { title: 'Services are hard to understand', text: 'Technical language on your website can leave visitors unsure whether you can help.' },
      { title: 'Rules about advertising', text: 'Some professions, such as lawyers and chartered accountants, have rules from their professional bodies about advertising.' },
      { title: 'Low-quality enquiries', text: 'Calls from people outside your service, area or budget waste valuable time.' },
    ],
    whatWeDo: [
      { title: 'Clear service pages', text: 'One page per service, explaining who it is for, how you work and what to expect, in plain language.' },
      { title: 'Google Business Profile', text: 'Office details, service area, reviews and an enquiry link for local searches.' },
      { title: 'Helpful content', text: 'Short guides that answer questions your clients really ask, which also helps with search visibility.' },
      { title: 'Rule-aware marketing', text: 'We check the guidelines you share with us and you approve all content. For legal advice on rules, consult your professional body.' },
      { title: 'Enquiry forms that filter', text: 'Short forms that ask the details you need to decide whether and how to respond.' },
    ],
    exampleSearches: ['chartered accountant in [your area]', 'interior designer near me', 'business consultant in Mumbai'],
    faqs: [
      { q: 'Can professionals like lawyers and CAs advertise online?', a: 'Rules differ by profession and change over time, so please check the latest guidance from your professional body. We build marketing around what you tell us is allowed and let you approve everything.' },
      { q: 'What is the best way for a consultant to get clients online?', a: 'A clear website with service pages, a complete Google Business Profile and helpful articles that answer real client questions. Together they build visibility and trust over time.' },
      { q: 'Do we need a blog?', a: 'It is not compulsory, but useful articles help people find you and show how you think. Quality matters more than quantity.' },
      { q: 'Can you help us look more credible online?', a: 'Yes. Clear team pages, qualifications, genuine reviews and a professional, fast website all help new clients feel comfortable contacting you.' },
    ],
    related: ['clinics-hospitals', 'schools-colleges-coaching', 'startups-online-brands'],
    services: ['website-development-mumbai', 'local-seo-mumbai', 'google-ads-management-mumbai'],
  },
  {
    slug: 'startups-online-brands',
    name: 'Startups & Online Brands',
    seoName: 'Startups & Online Brands',
    icon: 'rocket',
    cardText: 'Launch with a fast website, clean tracking and ads that you can measure.',
    metaDescription:
      'Digital marketing for startups and online brands in Mumbai: launch-ready websites, SEO foundations, tracked ads and Flutter apps. Start with a free call.',
    directAnswer:
      'Digital marketing for startups and online brands in Mumbai starts with a fast website, correct tracking and a clear message. We then add SEO foundations, Google and Meta ads you can measure, and, if your idea needs it, a Flutter mobile app, so you can learn what works before spending big.',
    intro:
      'New brands have limited money and limited time. The risk is spending on traffic before the basics are ready: a clear offer, a site that loads fast and tracking that tells you what is working. We help you get those right first.',
    painPoints: [
      { title: 'A message that is not clear', text: 'Visitors cannot tell in a few seconds what you do and why it is different.' },
      { title: 'Spending on ads without tracking', text: 'It is hard to tell what works if sign-ups and sales are not measured.' },
      { title: 'Slow, heavy websites', text: 'Slow pages make paid traffic more expensive because many visitors leave before they see anything.' },
      { title: 'Too many channels at once', text: 'Trying everything leads to doing nothing well.' },
    ],
    whatWeDo: [
      { title: 'Launch-ready website', text: 'Fast pages with a clear offer, social proof placeholders you can fill honestly, and strong calls to action.' },
      { title: 'SEO foundations', text: 'Clean structure, useful pages and basic content planning so you can grow on search over time.' },
      { title: 'Tracked ads', text: 'Google and Meta ads with conversion tracking, starting small and scaling what works.' },
      { title: 'WhatsApp and lead flow', text: 'Quick ways for early customers to reach you and for you to follow up.' },
      { title: 'Flutter apps, when needed', text: 'If your product needs an app, we can build an Android and iPhone version from one codebase. Quote only.' },
    ],
    exampleSearches: ['[your product] online in India', 'best [category] brand', '[your service] for startups'],
    faqs: [
      { q: 'What should a startup do first: website, SEO or ads?', a: 'Usually a clear, fast website with tracking first. Then ads for quick learning and SEO for the long term. The order depends on your product and budget, and we can suggest a plan on a free call.' },
      { q: 'Do we need a mobile app at the start?', a: 'Often not. A website or a simple web version can test your idea at lower cost. An app makes sense when customers will use it repeatedly.' },
      { q: 'How much should a startup spend on ads?', a: 'Start with an amount you can afford to lose while you learn, then scale only what shows a clear return. Ad spend is paid by you directly to the platform.' },
      { q: 'Can you work with an existing website?', a: 'Yes. We can review the current site, fix what is blocking speed, SEO or tracking, and tell you honestly if a rebuild would be better.' },
    ],
    related: ['professional-services', 'retail-shops', 'schools-colleges-coaching'],
    services: ['website-development-mumbai', 'mobile-app-development-mumbai', 'google-ads-management-mumbai'],
  },
];

export const getIndustry = (slug: string): Industry | undefined =>
  industries.find((i) => i.slug === slug);
