import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// SEO fields for each post (title tag, meta description, H1, keywords) live in src/data/seo.ts.
// The fields here are only what the blog list, article layout and schema need.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string().max(200),
    /** 40-60 words shown at the top of the post as the direct answer. */
    directAnswer: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    readingMinutes: z.number().int().positive().optional(),
    /** Slugs of 3 related posts or service pages (service pages start with "services/"). */
    related: z.array(z.string()).length(3),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).min(4).max(6),
  }),
});

export const collections = { blog };
