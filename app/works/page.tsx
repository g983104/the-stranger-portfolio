'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import CategoryFilter from '@/components/CategoryFilter';
import AnimatedSection from '@/components/AnimatedSection';
import { useLanguage } from '@/context/LanguageContext';
import { projects } from '@/lib/projects';
import type { ProjectCategory } from '@/lib/projects';

type FilterValue = 'all' | ProjectCategory;

export default function WorksPage() {
  const { t, lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <Navigation />

      <main
        className="pt-[var(--nav-height)] min-h-screen"
        aria-label="Works"
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          {/* ── Page Header ───────────────────────────────── */}
          <AnimatedSection className="pt-16 md:pt-24 pb-10 md:pb-14 border-b border-stone-200">
            <p className="text-[11px] tracking-[0.25em] uppercase text-stone-400 mb-3">
              THE STRANGER
            </p>
            <h1 className="text-4xl md:text-6xl font-light tracking-wide text-stone-950 mb-2">
              {t('works.pageTitle')}
            </h1>
            <p className="text-sm text-stone-400 font-light tracking-wide">
              {t('works.pageSubtitle')}
            </p>
          </AnimatedSection>

          {/* ── Filters ───────────────────────────────────── */}
          <AnimatedSection className="py-8 md:py-10 border-b border-stone-100" delay={100}>
            <CategoryFilter active={activeFilter} onChange={setActiveFilter} />
          </AnimatedSection>

          {/* ── Project Count ─────────────────────────────── */}
          <div className="py-6 flex items-center justify-between">
            <p className="text-xs text-stone-400 tracking-wide tabular-nums">
              {filtered.length}{' '}
              {lang === 'ko'
                ? `개의 프로젝트${activeFilter !== 'all' ? ' (필터됨)' : ''}`
                : `project${filtered.length !== 1 ? 's' : ''}${activeFilter !== 'all' ? ' (filtered)' : ''}`}
            </p>
          </div>

          {/* ── Grid ──────────────────────────────────────── */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 pb-24 md:pb-32"
            aria-live="polite"
            aria-label="Project list"
          >
            {filtered.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 60}>
                <ProjectCard project={project} index={i} />
              </AnimatedSection>
            ))}

            {filtered.length === 0 && (
              <div className="col-span-full py-20 text-center">
                <p className="text-sm text-stone-400 tracking-wide">
                  {lang === 'ko'
                    ? '해당 카테고리의 프로젝트가 없습니다.'
                    : 'No projects in this category.'}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
