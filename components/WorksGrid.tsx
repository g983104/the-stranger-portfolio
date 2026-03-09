'use client';

import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import { useLanguage } from '@/context/LanguageContext';
import type { Project } from '@/lib/projects';

interface WorksGridProps {
  projects: Project[];
  /** 'editorial' = large homepage cards, 'grid' = compact works-page cards */
  variant?: 'editorial' | 'grid';
}

/** Gradient placeholder when no image is available */
function ProjectPlaceholder({
  gradientFrom,
  gradientTo,
}: {
  gradientFrom: string;
  gradientTo: string;
}) {
  return (
    <div
      className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      style={{
        background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
      }}
    />
  );
}

/** Individual editorial card (homepage large format) */
function EditorialCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { lang, t } = useLanguage();

  const title = lang === 'ko' ? project.titleKo : project.titleEn;
  const categoryLabel =
    lang === 'ko' ? project.categoryLabelKo : project.categoryLabelEn;
  const hasImage = Boolean(project.image);

  return (
    <AnimatedSection delay={index * 100}>
      <Link
        href={`/works/${project.slug}`}
        className="group block"
        aria-label={`${title} — ${project.year}`}
      >
        {/* Image container */}
        <div className="relative overflow-hidden bg-stone-900 aspect-[3/4] md:aspect-[4/5] mb-5">
          {hasImage ? (
            <Image
              src={project.image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          ) : (
            <ProjectPlaceholder
              gradientFrom={project.gradientFrom}
              gradientTo={project.gradientTo}
            />
          )}

          {/* Bottom gradient overlay for text legibility on hover */}
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Hover info overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
            <p className="text-white/70 text-[10px] tracking-[0.2em] uppercase mb-1.5">
              {t('works.viewProject')} →
            </p>
          </div>

          {/* Year badge */}
          <div className="absolute top-5 left-5">
            <span className="text-xs text-white/40 tracking-[0.15em] tabular-nums font-light">
              {project.year}
            </span>
          </div>
        </div>

        {/* Text below */}
        <div>
          <h3 className="text-base md:text-lg font-light leading-snug text-stone-950 group-hover:text-stone-500 transition-colors duration-300 mb-1.5">
            {title}
          </h3>
          <p className="text-[11px] tracking-[0.12em] uppercase text-stone-400 font-light">
            {categoryLabel}
          </p>
        </div>
      </Link>
    </AnimatedSection>
  );
}

export default function WorksGrid({ projects, variant = 'editorial' }: WorksGridProps) {
  if (variant === 'editorial') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-14 md:gap-y-16">
        {projects.map((project, i) => (
          <EditorialCard key={project.id} project={project} index={i} />
        ))}
      </div>
    );
  }

  // Compact grid variant (works page) — rendered from ProjectCard component
  return null;
}
