import { z, defineCollection } from 'astro:content';

const projects = defineCollection({
  schema: {
    title: z.string(),
    date: z.string().transform((str) => new Date(str)),
    description: z.string(),
    thumbnail: z.string(),
    thumbnailAlt: z.string(),
    tags: z.array(z.string()),
    previewUrl: z.string().optional(),
    githubUrl: z.string().optional(),
    blogUrl: z.string().optional(),
  },
  slug: ({ id, defaultSlug, data, body }) => {
    const match = defaultSlug.match(/\d{4}-\d\d-\d\d-(.+?)$/);
    if (!match) return defaultSlug;
    return match[1];
  },
});

const blogs = defineCollection({
  schema: {
    title: z.string(),
    date: z.string().transform((str) => new Date(str)),
    description: z.string(),
    thumbnail: z.string(),
    thumbnailAlt: z.string(),
    previewUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
  },
  slug: ({ id, defaultSlug, data, body }) => {
    const match = defaultSlug.match(/\d{4}-\d\d-\d\d-(.+?)$/);
    if (!match) return defaultSlug;
    return match[1];
  },
});

export const collections = {
  projects,
  blogs,
};
