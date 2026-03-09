import type { Project } from '@/lib/projects';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://thestranger.kr';

/** JSON-LD Person schema — placed in the root layout */
export function PersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Yu Taek Hwang',
    alternateName: '황유택',
    jobTitle: 'Creative Director / Stage Director',
    description:
      'Creative Director and Stage Director working across theatre, interdisciplinary performance, art & technology, and cultural projects. Founder of THE STRANGER, an interdisciplinary art collective.',
    url: BASE_URL,
    sameAs: [
      'https://instagram.com/the_stranger_official',
      'https://g983104.notion.site/the-stranger-eng',
    ],
    nationality: { '@type': 'Country', name: 'South Korea' },
    knowsAbout: [
      'Theatre Direction',
      'Stage Direction',
      'Creative Direction',
      'Interdisciplinary Performance',
      'Art and Technology',
      'Cultural Projects',
      'Performance Art',
      'Experimental Theatre',
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
      name: 'Yu Taek Hwang',
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
    name: 'THE STRANGER — Yu Taek Hwang',
    alternateName: '더 스트레인저 — 황유택',
    url: BASE_URL,
    description:
      'Portfolio of Yu Taek Hwang (황유택), Creative Director and Stage Director working across theatre, interdisciplinary performance, art & technology, and cultural projects.',
    inLanguage: ['ko', 'en'],
    author: {
      '@type': 'Person',
      name: 'Yu Taek Hwang',
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
