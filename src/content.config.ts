import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({
    base: './src/content/blog',
    pattern: '**/[^_]*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['compiler', 'language', 'lacail', 'release', 'design-note']),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['ko', 'en', 'ja']).default('ko'),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema(),
  }),
};
