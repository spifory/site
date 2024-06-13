import { defineCollection, z } from 'astro:content';

export const collections = {
    blog: defineCollection({
        type: 'content',
        schema: z.object({
            title: z.string(),
            summary: z.string(),
            imageIcon: z.optional(z.string()),
            icon: z.optional(z.string()),
            createdAt: z.date(),
        }),
    }),
};
