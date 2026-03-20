import { MetadataRoute } from 'next';
import projectsData from '@/content/projects.json';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://the-stranger-portfolio-f727.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projectsData.projects.map((project) => ({
    url: `${BASE_URL}/works/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/works`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/cv`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    ...projectUrls,
  ];
}
