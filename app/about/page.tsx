'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { t, tArray, lang } = useLanguage();

  const bio = tArray('about.bio');
  const tags = tArray('about.tags');

  return (
    <>
      <Navigation />

      <main
        className="pt-[var(--nav-height)] min-h-screen"
        aria-label="About"
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          {/* ── Page Header ──────────────────────────────────── */}
          <AnimatedSection className="pt-16 md:pt-24 pb-10 md:pb-14 border-b border-stone-200">
            <p className="text-[11px] tracking-[0.25em] uppercase text-stone-400 mb-3">
              THE STRANGER
            </p>
            <h1 className="text-4xl md:text-6xl font-light tracking-wide text-stone-950">
              {t('about.pageTitle')}
            </h1>
          </AnimatedSection>

          {/* ── Main Content ─────────────────────────────────── */}
          <div className="py-16 md:py-24 grid md:grid-cols-[340px_1fr] gap-12 md:gap-20">
            {/* Left: Identity column */}
            <AnimatedSection className="space-y-8">
              {/* Name Block */}
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-3">
                  {lang === 'ko' ? '크리에이티브 디렉터 / 연출' : 'Creative Director / Director'}
                </p>
                <h2 className="text-2xl font-light tracking-wide text-stone-950">
                  {lang === 'ko' ? '황유택' : 'Hwang Youtaek'}
                </h2>
              </div>

              {/* Thin rule */}
              <div className="w-10 h-px bg-stone-300" />

              {/* Studio label */}
              <div>
                <p className="text-xs tracking-[0.15em] uppercase text-stone-400 mb-2">
                  {lang === 'ko' ? '소속' : 'Studio'}
                </p>
                <p className="text-sm font-light text-stone-600 leading-relaxed">
                  {t('about.studioLabel')}
                </p>
              </div>

              {/* Tags */}
              <div>
                <p className="text-xs tracking-[0.15em] uppercase text-stone-400 mb-3">
                  {lang === 'ko' ? '분야' : 'Practice'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] tracking-wide text-stone-500 bg-stone-100 px-2.5 py-1 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Milestones */}
              <div className="space-y-4 border-t border-stone-100 pt-6">
                {[
                  { year: '2016', label: lang === 'ko' ? '더 스트레인저 창단' : 'THE STRANGER Founded' },
                  { year: '2018', label: lang === 'ko' ? '세계 방랑 프로젝트 (9개국)' : 'World Wandering Project (9 countries)' },
                  { year: '2018', label: lang === 'ko' ? '새들러스 웰스 극장 초청' : 'Invited to Sadler\'s Wells' },
                  { year: '2019', label: lang === 'ko' ? '멕시코 국립예술학교 특강' : 'National School of Arts, Mexico' },
                  { year: '2024', label: lang === 'ko' ? '런던 그레이너리 스퀘어' : 'Granary Square, London' },
                ].map((item) => (
                  <div key={item.year + item.label} className="flex gap-4 items-baseline">
                    <span className="text-xs tabular-nums text-stone-400 w-10 flex-shrink-0">
                      {item.year}
                    </span>
                    <span className="text-xs font-light text-stone-600 leading-snug">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Right: Biography text */}
            <div className="space-y-8 md:space-y-10">
              {bio.map((paragraph, i) => (
                <AnimatedSection key={i} delay={i * 120}>
                  <p
                    className={`font-light leading-[1.85] text-stone-600 ${
                      i === 0
                        ? 'text-xl md:text-2xl text-stone-800 leading-relaxed'
                        : 'text-base md:text-lg'
                    }`}
                  >
                    {paragraph}
                  </p>
                </AnimatedSection>
              ))}

              {/* Studio full description */}
              <AnimatedSection delay={500} className="border-t border-stone-200 pt-8 mt-10">
                <p className="text-[11px] tracking-[0.2em] uppercase text-stone-400 mb-4">
                  {lang === 'ko' ? '더 스트레인저' : 'THE STRANGER'}
                </p>
                <p className="text-sm md:text-base font-light leading-relaxed text-stone-500">
                  {t('about.studioDescription')}
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
