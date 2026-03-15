'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import type { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { lang, t } = useLanguage();
  const [imgError, setImgError] = useState(false);

  const title = lang === 'ko' ? project.titleKo : project.titleEn;
  const categoryLabel =
    lang === 'ko' ? project.categoryLabelKo : project.categoryLabelEn;

  return (
    <Link
      href={`/works/${project.slug}`}
      className="project-card group block"
      aria-label={`${title} — ${project.year}`}
    >
      {/* Thumbnail Placeholder */}
      <div className="project-card-image relative overflow-hidden bg-stone-100 aspect-[4/3] mb-4">
        {/* Gradient fallback (shown while image loads) */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: `linear-gradient(135deg, ${project.gradientFrom} 0%, ${project.gradientTo} 100%)`,
          }}
        />

        {/* Cover image */}
        {project.image && !imgError && (
          <Image
            src={project.image}
            alt={lang === 'ko' ? project.titleKo : project.titleEn}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImgError(true)}
          />
        )}

        {/* Year badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="text-xs text-white/60 tracking-[0.2em] font-light tabular-nums">
            {project.year}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/10 transition-colors duration-500 z-10" />

        {/* View label on hover */}
        <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
          <span className="text-[10px] text-white/80 tracking-[0.2em] uppercase">
            {t('works.viewProject')} →
          </span>
        </div>
      </div>

      {/* Card Info */}
      <div className="space-y-1.5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-medium leading-snug text-stone-950 group-hover:text-stone-600 transition-colors duration-300 flex-1">
            {title}
          </h3>
          <span className="text-xs text-stone-400 tabular-nums flex-shrink-0 mt-0.5">
            {project.year}
          </span>
        </div>
        <p className="text-[11px] tracking-[0.1em] uppercase text-stone-400 font-light">
          {categoryLabel}
        </p>
      </div>
    </Link>
  );
}
