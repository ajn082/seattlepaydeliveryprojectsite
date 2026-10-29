import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const updates = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/updates" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.string(),
  }),
});

export const collections = { updates };
