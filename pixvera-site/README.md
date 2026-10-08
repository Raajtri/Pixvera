# AceGrow website

Astro (static) + Tailwind CSS v4 + self-hosted fonts. No UI framework. Almost no JavaScript (mobile menu toggle and a small scroll-reveal). Deploys to Cloudflare Pages.

## Run locally

```bash
npm install
cp .env.example .env     # then fill in the values (see below)
npm run dev              # http://localhost:4321
```

## Build and check

```bash
npm run build            # builds to /dist, then runs scripts/validate-seo.mjs
npm run preview          # serve the built site locally
npm run lighthouse       # mobile Lighthouse on key pages (needs Chrome installed; run build first)
npm run assets           # regenerates the placeholder og-default.png / screenshot slot
```

`npm run build` fails if any page has a title over 60 characters, a description over 155, a duplicate title or description, more or fewer than one H1, a missing canonical, a direct answer outside 40-60 words, fewer than 4 FAQs, missing breadcrumbs or related links, a broken internal link, a blog post under 800 words, or a sitemap mismatch.

## Environment variables (`.env`, and in Cloudflare Pages settings)

| Variable | What it does |
| --- | --- |
| `PUBLIC_WEB3FORMS_KEY` | Access key from https://web3forms.com (free). Without it the contact form will not send. |
| `PUBLIC_GA4_ID` | GA4 ID like `G-XXXXXXXXXX`. Leave empty to load no analytics. When set, it loads only after the first interaction, so it does not hurt speed. |
| `PUBLIC_GSC_VERIFICATION` | The `content` value of the Google Search Console HTML-tag verification. Leave empty until you have it. |

## Where to edit things

| What | File |
| --- | --- |
| Business name, phone, email, WhatsApp number, founders, social links, nav, prices | `src/data/site.ts` |
| Title, meta description, H1 and keywords for every page | `src/data/seo.ts` |
| The 5 service pages | `src/data/services.ts` |
| Industries (add one = add one entry) | `src/data/industries.ts` |
| Local area pages (none live yet) | `src/data/areas.ts` |
| Home / pricing FAQs | `src/data/faqs.ts` |
| Blog posts | `src/content/blog/*.md` (SEO tags for a new post go in `seo.ts`) |
| Colours and fonts | `src/styles/global.css` (`@theme` block) |

Also change the domain in **two** places: `site` in `astro.config.mjs` and `url` in `src/data/site.ts`.

### Add an industry
Copy an entry in `src/data/industries.ts`, give it a new `slug`, fill the fields. Page, card, sitemap entry and SEO tags appear automatically.

### Add a blog post
Create `src/content/blog/your-slug.md` (copy the front matter of an existing post), then add a matching entry (`path: '/blog/your-slug/'`) in `src/data/seo.ts`.

### Publish a local area page
Area pages are intentionally off. Add an entry to `src/data/areas.ts` with `status: 'live'`, 400+ words of unique content, 4+ FAQs and real research findings. The build refuses to publish a thin area page. Only live areas appear in pages, footer, sitemap and schema.

## Deploy to Cloudflare Pages

**Option A: Git (recommended)**
1. Push this folder to a GitHub or GitLab repository.
2. Cloudflare dashboard > Workers & Pages > Create > Pages > Connect to Git, and choose the repo.
3. Build settings: Framework preset **Astro**, build command `npm run build`, output directory `dist`.
4. Under Settings > Environment variables, add `PUBLIC_WEB3FORMS_KEY`, `PUBLIC_GA4_ID` and `PUBLIC_GSC_VERIFICATION`. Set `NODE_VERSION` to `22` or higher.
5. Deploy. Then add your custom domain under Custom domains.

**Option B: direct upload**
```bash
npm run build
npx wrangler pages deploy dist --project-name acegrow
```

`public/_headers` sets security headers and long caching for `/_astro/*`. Cloudflare compresses text assets automatically.

## Launch notes
See `LAUNCH-CHECKLIST.md` for the pages list, every placeholder still to fill, and the launch steps.
