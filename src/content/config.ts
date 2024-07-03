import { z, defineCollection } from 'astro:content';
import { rssSchema } from '@astrojs/rss';
const postsCollection = defineCollection({
  type: 'content',
    schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
  }),
});
const post = defineCollection({
  schema: rssSchema,
});
export const collections = {
  'posts': postsCollection,post
};