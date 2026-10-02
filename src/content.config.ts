import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const stages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stages' }),
  schema: z.object({
    order: z.number().int().positive(),
    title: z.string(),
    description: z.string(),
    goal: z.string(),
  }),
});

const resources = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml,json}', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    type: z.enum(['article', 'video', 'tool', 'service', 'community']),
    stage: z.string(),
    summary: z.string(),
    bestFor: z.array(z.string()).default([]),
    source: z.string(),
    language: z.enum(['es', 'en']),
    markets: z.array(z.string()).default(['MX']),
    commercialRelationship: z.enum(['none', 'affiliate', 'sponsored']).default('none'),
    status: z.enum(['candidate', 'reviewed']).default('candidate'),
  }),
});

const sources = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml,json}', base: './src/content/sources' }),
  schema: z.object({
    name: z.string(),
    url: z.string().url().optional(),
    status: z.enum(['candidate', 'reviewed']).default('candidate'),
    type: z.enum(['company', 'agency', 'ats', 'aggregator', 'email', 'web']),
    markets: z.array(z.string()).default([]),
    profiles: z.array(z.string()).default([]),
    workModes: z.array(z.string()).default([]),
    languages: z.array(z.string()).default([]),
    description: z.string().optional(),
    bestFor: z.string().optional(),
    limitations: z.array(z.string()).default([]),
    logo: z.string().optional(),
    image: z.string().optional(),
    cost: z.string().optional(),
    accountRequired: z.boolean().optional(),
    alerts: z.boolean().optional(),
    lastReviewed: z.coerce.date().optional(),
  }),
});

export const collections = { stages, resources, sources };
