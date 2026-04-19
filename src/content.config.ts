import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({
    pattern: '**/index.mdx',
    base: './src/content/projects',
    generateId: ({ entry }) =>
      entry.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\/index\.mdx$/, ''),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.string().transform((s) => new Date(s)),
      description: z.string(),
      thumbnail: image(),
      thumbnailAlt: z.string(),
      tags: z.array(z.string()).default([]),
      previewUrl: z.string().optional(),
      githubUrl: z.string().optional(),
      blogUrl: z.string().optional(),
    }),
});

const blogs = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/blogs',
  }),
  schema: z.object({
    title: z.string(),
    date: z.string().transform((s) => new Date(s)),
    description: z.string(),
    thumbnail: z.string(),
    thumbnailAlt: z.string(),
    previewUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
  }),
});

export const collections = { projects, blogs };
