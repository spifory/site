import { defineCollection, z } from 'astro:content';

export const collections = {
    blog: defineCollection({
        type: 'content',
        schema: z.object({
            title: z.string(),
            summary: z.string(),
            content: z.string(),
            icon: z.string(),
            createdAy: z.string(),
        }),
    }),
};
