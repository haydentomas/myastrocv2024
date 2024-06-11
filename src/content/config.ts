import { defineCollection, z } from "astro:content";

// Existing post schema (no changes needed)
const postSchema = z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.optional(z.string()),
    image: z.string(),  // Image is just a string representing the path
    imageAlt: z.string(),
    tags: z.array(z.string()),
    draft: z.optional(z.boolean()),
});


const projectSchema = z.object({
  title: z.string(),
  pubDate: z.date(),
  description: z.string(),
  author: z.optional(z.string()),
  image: z.string(),  // Image is just a string representing the path
  imageAlt: z.string(),
  draft: z.optional(z.boolean()),
});
// Define both collections using the shared schema
const postsCollection = defineCollection({
  schema: postSchema
});

const projectPostsCollection = defineCollection({
  schema: projectSchema
});

export const collections = {
  posts: postsCollection,
  projectPosts: projectPostsCollection,
};