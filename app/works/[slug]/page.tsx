'use client';

import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import ImageGallery from '@/components/ImageGallery';
import BrandDivider from '@/components/BrandDivider';
import { CreativeWorkSchema } from '@/components/JsonLd';
import { useLanguage } from '@/context/LanguageContext';
import { getProjectBySlug, getYouTubeId, projects } from '@/lib/projects';

interface Props {
  params: { slug: string };
}

export default function ProjectDetailPage({ params }: Props) {
  const { slug } = params;
  const project = getProjectBySlug(slug);
  const { t, lang } = useLanguage();

  if (!project) {
    notFound();
  }

  const title = lang === 'ko' ? project.titleKo : project.titleEn;
  const venue = lang === 'ko' ? project.venueKo : project.venueEn;
  const location = lang === 'ko' ? project.locationKo : project.locationEn;
  const role = lang === 'ko' ? project.roleKo : project.roleEn;
  const categoryLabel =
    lang === 'ko' ? project.categoryLabelKo : project.categoryLabelEn;
  const description =
    lang === 'ko' ? project.descriptionKo : project.descriptionEn;

  const youTubeId = getYouTubeId(project.youtube);
  const hasImage = Boolean(project.image);
  const hasGallery = project.galleryImages && project.galleryImages.length > 0;

  // Adjacent projects for navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      <Navigation />

      {/* JSON-LD for this project */}
      <CreativeWorkSchema project={project} lang={lang} />

      <main aria-label={title}>
        {/* ── Hero Image / Gradient ──────────────────────────── */}
        <div className="relative w-full overflow-hidden bg-stone-950" style={{ height: '60vh', minHeight: '360px', maxHeight: '720px' }}>
          {hasImage ? (
            <Image
              src={project.image}
              alt={title}
              fill
              priority
              className="object-cover opacity-80"
              sizes="100vw"
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${project.gradientFrom} 0%, ${project.gradientTo} 100%)`,
              }}
            />
          )}

          {/* Scrim */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Year — large decorative */}
          <div
            className="absolute bottom-0 right-0 text-white/[0.06] font-light tabular-nums leading-none pr-6 md:pr-12 pb-2 pointer-events-none select-none"
            style={{ fontSize: 'clamp(5rem, 14vw, 12rem)' }}
            aria-hidden="true"
          >
            {project.year}
          </div>

          {/* Back link */}
          <div className="absolute top-[var(--nav-height)] left-0 right-0 px-6 md:px-10 pt-8">
            <Link
              href="/works"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-white/50 hover:text-white/90 transition-colors duration-300 group"
            >
              <span className="block w-5 h-px bg-current transition-all duration-300 group-hover:w-3" />
              <span>{t('project.backToWorks')}</span>
            </Link>
          </div>

          {/* Tags */}
          <div className="absolute bottom-8 left-6 md:left-10 flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-[0.12em] uppercase text-white/35 border border-white/15 px-2.5 py-1 font-light"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── Project Header ────────────────────────────────── */}
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="pt-12 md:pt-16 pb-12 md:pb-16 border-b border-stone-200">
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
              <AnimatedSection>
                <h1
                  className="font-light text-stone-950 leading-tight"
                  style={{ fontSize: 'clamp(1.8rem, 4.5vw, 4rem)' }}
                >
                  {title}
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={100} className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end md:text-right">
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-1">
                    {t('project.year')}
                  </p>
                  <p className="text-sm font-light text-stone-700 tabular-nums">
                    {project.year}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-1">
                    {t('project.category')}
                  </p>
                  <p className="text-sm font-light text-stone-700">{categoryLabel}</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>

        {/* ── Main Body ─────────────────────────────────────── */}
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_320px] gap-12 md:gap-16 lg:gap-24">

            {/* Left: Description */}
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-stone-400 mb-8 font-light">
                {t('project.description')}
              </p>
              <div className="space-y-6">
                {description.map((para, i) => (
                  <AnimatedSection key={i} delay={i * 100} threshold={0.05}>
                    <p
                      className={`font-light leading-[1.9] ${
                        i === 0
                          ? 'text-xl md:text-2xl text-stone-800'
                          : 'text-base md:text-lg text-stone-500'
                      }`}
                    >
                      {para}
                    </p>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Right: Metadata */}
            <AnimatedSection delay={200}>
              <div className="md:sticky md:top-28 space-y-0">
                {[
                  { label: t('project.role'), value: role },
                  { label: t('project.venue'), value: venue },
                  { label: t('project.location'), value: location },
                ].map(({ label, value }) => (
                  <div key={label} className="border-b border-stone-100 py-5">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-2">
                      {label}
                    </p>
                    <p className="text-sm font-light text-stone-700 leading-relaxed">
                      {value}
                    </p>
                  </div>
                ))}

                {/* Tags */}
                {project.tags.length > 0 && (
                  <div className="pt-5">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-3">
                      {lang === 'ko' ? '태그' : 'Tags'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] tracking-wide text-stone-500 bg-stone-100 px-2.5 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* ── Video Embed ───────────────────────────────────── */}
        {youTubeId && (
          <section
            className="py-12 md:py-16 px-6 md:px-10 bg-stone-950"
            aria-label={lang === 'ko' ? '영상' : 'Video'}
          >
            <div className="max-w-screen-lg mx-auto">
              <AnimatedSection>
                <p className="text-[11px] tracking-[0.22em] uppercase text-white/30 mb-6 font-light">
                  {lang === 'ko' ? '영상' : 'Video'}
                </p>
                <YouTubeEmbed videoId={youTubeId} title={title} />
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* ── Image Gallery ─────────────────────────────────── */}
        {hasGallery && (
          <section
            className="py-16 md:py-20 px-6 md:px-10"
            aria-label={lang === 'ko' ? '갤러리' : 'Gallery'}
          >
            <div className="max-w-screen-xl mx-auto">
              <AnimatedSection className="mb-8">
                <p className="text-[11px] tracking-[0.22em] uppercase text-stone-400 font-light">
                  {lang === 'ko' ? '갤러리' : 'Gallery'}
                </p>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <ImageGallery images={project.galleryImages} projectTitle={title} />
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* ── Brand Divider ─────────────────────────────────── */}
        <BrandDivider variant="line" className="max-w-screen-xl mx-auto" />

        {/* ── Prev / Next Navigation ────────────────────────── */}
        <nav
          className="max-w-screen-xl mx-auto px-6 md:px-10 py-14 md:py-20 grid grid-cols-2 gap-6"
          aria-label={lang === 'ko' ? '프로젝트 탐색' : 'Project navigation'}
        >
          <div>
            {prevProject && (
              <Link
                href={`/works/${prevProject.slug}`}
                className="group block"
                aria-label={`Previous: ${lang === 'ko' ? prevProject.titleKo : prevProject.titleEn}`}
              >
                <p className="text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-2 group-hover:text-stone-600 transition-colors duration-300">
                  ← {lang === 'ko' ? '이전 작업' : 'Previous'}
                </p>
                <p className="text-sm md:text-base font-light text-stone-700 group-hover:text-stone-950 transition-colors duration-300 leading-snug">
                  {lang === 'ko' ? prevProject.titleKo : prevProject.titleEn}
                </p>
                <p className="text-xs text-stone-400 mt-1 tabular-nums">{prevProject.year}</p>
              </Link>
            )}
          </div>
          <div className="text-right">
            {nextProject && (
              <Link
                href={`/works/${nextProject.slug}`}
                className="group block"
                aria-label={`Next: ${lang === 'ko' ? nextProject.titleKo : nextProject.titleEn}`}
              >
                <p className="text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-2 group-hover:text-stone-600 transition-colors duration-300">
                  {lang === 'ko' ? '다음 작업' : 'Next'} →
                </p>
                <p className="text-sm md:text-base font-light text-stone-700 group-hover:text-stone-950 transition-colors duration-300 leading-snug">
                  {lang === 'ko' ? nextProject.titleKo : nextProject.titleEn}
                </p>
                <p className="text-xs text-stone-400 mt-1 tabular-nums">{nextProject.year}</p>
              </Link>
            )}
          </div>
        </nav>
      </main>

      <Footer />
    </>
  );
}
