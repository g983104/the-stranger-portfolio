import type { Project } from '@/lib/projects';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://thestranger.kr';

/** JSON-LD Person schema — placed in the root layout */
export function PersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Hwang Youtaek',
    alternateName: '황유택',
    jobTitle: 'Creative Director / Director',
    description:
      'Hwang Youtaek (황유택) is a Korean theatre director, creative director, and young artist working across theatre, multidisciplinary arts, art & technology, cultural planning, and festival direction. Founder of THE STRANGER arts collective. Active in Korea and internationally.',
    url: BASE_URL,
    sameAs: [
      'https://instagram.com/g983104',
      'https://g983104.notion.site/the-stranger-eng',
    ],
    nationality: { '@type': 'Country', name: 'South Korea' },
    knowsAbout: [
      'Theatre Direction',
      'Stage Direction',
      'Creative Direction',
      'Interdisciplinary Performance',
      'Multidisciplinary Arts',
      'Art and Technology',
      'Cultural Planning',
      'Festival Direction',
      'Performance Art',
      'Experimental Theatre',
      'Korean Contemporary Art',
      'Asian Performance Art',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'THE STRANGER',
      url: BASE_URL,
      foundingDate: '2016',
      description:
        'An interdisciplinary art collective creating new artistic languages through the convergence of technology and genre hybridization.',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/** JSON-LD CreativeWork schema — placed on each project detail page */
export function CreativeWorkSchema({ project, lang }: { project: Project; lang: string }) {
  const title = lang === 'ko' ? project.titleKo : project.titleEn;
  const description =
    lang === 'ko' ? project.descriptionEn.join(' ') : project.descriptionEn.join(' ');

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: title,
    alternateName: lang === 'ko' ? project.titleEn : project.titleKo,
    description,
    dateCreated: String(project.year),
    locationCreated: {
      '@type': 'Place',
      name: project.locationEn,
    },
    creator: {
      '@type': 'Person',
      name: 'Hwang Youtaek',
      alternateName: '황유택',
    },
    genre: project.categoryLabelEn,
    keywords: project.tags.join(', '),
    url: `${BASE_URL}/works/${project.slug}`,
    ...(project.image ? { image: `${BASE_URL}${project.image}` } : {}),
    ...(project.youtube ? { video: { '@type': 'VideoObject', url: project.youtube } } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/** JSON-LD WebSite schema */
export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'THE STRANGER — Hwang Youtaek',
    alternateName: '더 스트레인저 — 황유택',
    url: BASE_URL,
    description:
      'Portfolio of Hwang Youtaek (황유택), Creative Director and Director working across theatre, interdisciplinary performance, art & technology, and cultural projects.',
    inLanguage: ['ko', 'en'],
    author: {
      '@type': 'Person',
      name: 'Hwang Youtaek',
      alternateName: '황유택',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
