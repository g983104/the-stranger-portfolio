import projectsData from '@/content/projects.json';

export type ProjectCategory = 'interdisciplinary' | 'theatre';

export interface Project {
  id: string;
  slug: string;
  titleKo: string;
  titleEn: string;
  year: number;
  category: ProjectCategory;
  categoryLabelKo: string;
  categoryLabelEn: string;
  venueKo: string;
  venueEn: string;
  locationKo: string;
  locationEn: string;
  roleKo: string;
  roleEn: string;
  descriptionKo: string[];
  descriptionEn: string[];
  /** Path relative to /public, e.g. /images/projects/slug/cover.jpg */
  image: string;
  /** Paths relative to /public */
  galleryImages: string[];
  /** Full YouTube URL, e.g. https://www.youtube.com/watch?v=xxx */
  youtube: string;
  tags: string[];
  featured: boolean;
  gradientFrom: string;
  gradientTo: string;
}

export const projects: Project[] = projectsData.projects as Project[];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}

/** Extract YouTube video ID from a URL */
export function getYouTubeId(url: string): string | null {
  if (!url) return null;
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
}
