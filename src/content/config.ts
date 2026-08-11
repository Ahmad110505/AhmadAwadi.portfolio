import { defineCollection, z } from 'astro:content';

const profile = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    shortIntro: z.string(),
    profileImage: z.string().optional().default('/images/profile.jpg'),
    cvUrl: z.string().optional().default('/files/cv.pdf'),
    about: z.string(),
    email: z.string(),
    linkedin: z.string().optional(),
    github: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()).default([]),
    image: z.string().optional(),
    github: z.string().optional(),
    demo: z.string().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

const education = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string().optional(),
    institution: z.string(),
    degree: z.string(),
    field: z.string(),
    dates: z.string(),
    description: z.string().optional(),
  }),
});

const experience = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string().optional(),
    company: z.string(),
    position: z.string(),
    dates: z.string(),
    description: z.string(),
  }),
});

const skills = defineCollection({
  type: 'data',
  schema: z.array(
    z.object({
      name: z.string(),
      category: z.string().optional().default('General'),
    })
  ),
});

const certifications = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    date: z.string(),
    credentialUrl: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = {
  profile,
  projects,
  education,
  experience,
  skills,
  certifications,
};
