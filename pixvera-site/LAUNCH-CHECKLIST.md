# Launch checklist

## 1. Pages and primary keywords (28 indexed pages, all in the sitemap)

| URL | Primary keyword |
| --- | --- |
| `/` | digital marketing agency Mumbai |
| `/services/` | digital marketing services Mumbai |
| `/services/local-seo-mumbai/` | local SEO services Mumbai |
| `/services/website-development-mumbai/` | website development company Mumbai |
| `/services/google-ads-management-mumbai/` | Google Ads agency Mumbai |
| `/services/instagram-facebook-ads-mumbai/` | Instagram ads agency Mumbai |
| `/services/mobile-app-development-mumbai/` | Flutter app development company Mumbai |
| `/pricing/` | digital marketing cost Mumbai |
| `/industries/` | digital marketing for businesses in Mumbai |
| `/case-study/` | SEO case study Mumbai college |
| `/about/` | digital marketing studio Mumbai |
| `/contact/` | contact digital marketing agency Mumbai |
| `/blog/` | digital marketing blog Mumbai |
| `/blog/how-much-does-a-website-cost-in-mumbai/` | website cost in Mumbai |
| `/blog/google-ads-vs-meta-ads-for-small-businesses-in-india/` | Google Ads vs Meta Ads for small business India |
| `/blog/how-to-rank-on-google-maps-in-mumbai/` | how to rank on Google Maps in Mumbai |
| `/blog/how-to-set-up-google-business-profile-step-by-step/` | how to set up Google Business Profile |
| `/blog/do-i-need-a-website-if-i-have-instagram/` | do I need a website if I have Instagram |
| `/blog/how-long-does-seo-take-for-a-local-business/` | how long does SEO take for a local business |
| `/industries/restaurants-cafes/` | digital marketing for restaurants & cafes in Mumbai |
| `/industries/clinics-hospitals/` | digital marketing for clinics & hospitals in Mumbai |
| `/industries/salons-spas/` | digital marketing for salons & spas in Mumbai |
| `/industries/schools-colleges-coaching/` | digital marketing for schools & colleges in Mumbai |
| `/industries/real-estate/` | digital marketing for real estate in Mumbai |
| `/industries/gyms-fitness/` | digital marketing for gyms & fitness in Mumbai |
| `/industries/retail-shops/` | digital marketing for retail & shops in Mumbai |
| `/industries/professional-services/` | digital marketing for professional services in Mumbai |
| `/industries/startups-online-brands/` | digital marketing for startups & online brands in Mumbai |

Not indexed (noindex, not in sitemap): `/privacy/`, `/terms/`, `/thank-you/`, `/404`. No `/areas/` pages exist until you add a live area.

## 2. Placeholders still to fill

**Must fix before launch (site shows them publicly):**
- [x] Done: WhatsApp 8303026772, email acegrow.in@gmail.com, founders Aman Tripathi and Sushant Tiwari
- [ ] `src/data/site.ts`: founder bios (2-3 sentences each) and social profile URLs
- [ ] Prices currently show "Price after quote" (`src/data/site.ts`). Add real "Starting from ₹..." amounts whenever you are ready. Keep or remove the "Recommended" badges
- [ ] Domain: `site` in `astro.config.mjs` and `url` in `src/data/site.ts` (currently `https://acegrow.in`)
- [ ] Contact form: create the Web3Forms key with **acegrow.in@gmail.com** at web3forms.com, then set `PUBLIC_WEB3FORMS_KEY` (enquiries arrive in that inbox). Also `.env`: `PUBLIC_WEB3FORMS_KEY`, `PUBLIC_GA4_ID`, `PUBLIC_GSC_VERIFICATION`
- [ ] Case study (`src/pages/case-study.astro`): all numbers filled. College name, graphs and screenshots are intentionally not shown (client does not allow). Off-page actions filled (bad links removed, social profiles)
- [ ] About page (`src/pages/about.astro`): your story paragraphs and 2 founder photos
- [ ] Privacy and Terms: `[DATE]`, retention period, payment terms, ownership terms, governing law. Have a lawyer review both
- [ ] Blog: replace each `[ADD SOURCE: ...]` with a real source link or delete the sentence
- [ ] Replace `public/og-default.png` (1200x630) with your own share image

**Optional / later:**
- [ ] Area pages: `src/data/areas.ts` is empty on purpose. For each area do the Google Maps audit (`[ADD FINDINGS FROM GOOGLE MAPS AUDIT OF 15-20 LOCAL BUSINESSES]`), write 400+ words and 4+ FAQs, then set `status: 'live'`
- [ ] Industry pages: review the compliance wording (healthcare, real estate/RERA, lawyers/CAs) against current rules

## 3. Honesty check before going live
- [ ] Nothing on the site claims clients, reviews, awards or results other than the single case study
- [ ] Case study numbers are real and provable, or the row is removed
- [ ] Only Mumbai, Thane and Navi Mumbai are named; no neighbourhood work is claimed
- [ ] No office address is shown (service-area business). If you add one, update `src/lib/schema.ts`

## 4. Launch steps
1. [ ] Deploy to Cloudflare Pages and connect the domain; confirm HTTPS works
2. [ ] Submit a test form; confirm the email arrives and `/thank-you/` loads
3. [ ] Click every WhatsApp button; confirm it opens your chat
4. [ ] **Google Search Console**: add the property, paste the verification tag into `PUBLIC_GSC_VERIFICATION`, redeploy, verify
5. [ ] Submit `https://YOUR-DOMAIN/sitemap-index.xml` in Search Console; use URL Inspection > Request indexing on the home page and the 5 service pages
6. [ ] **Google Business Profile**: create it as a service-area business (Mumbai, Thane, Navi Mumbai), hide the address if you have no public office, add services, photos and your website. Verify it
7. [ ] **GA4**: create the property, put the `G-` ID in `PUBLIC_GA4_ID`, redeploy, check Realtime
8. [ ] Run `npm run build && npm run lighthouse` against the live URL's build and confirm 95+
9. [ ] Test the Rich Results Test on `/`, one service page and one blog post
10. [ ] **Directory listings** with identical name, phone and service area: Bing Places, Apple Business Connect, Justdial, Sulekha, IndiaMART (if relevant), LinkedIn company page, Facebook page, Instagram profile (link the website in bio)
11. [ ] Ask your first real customers for Google reviews; never buy or fake them
12. [ ] After 2-4 weeks, check Search Console for impressions and fix any coverage warnings
