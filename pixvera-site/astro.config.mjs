import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Change this to your real domain before deploying.
const SITE = 'https://pixvera.in';

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // Inline CSS so there is no render-blocking stylesheet request (better mobile LCP).
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      // Utility pages (thank-you, 404, privacy, terms) stay out of the sitemap. Area pages only exist once a "live" entry is added.
      filter: (page) => !/\/(thank-you|404|privacy|terms)\/?$/.test(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
