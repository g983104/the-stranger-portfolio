'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import WorksGrid from '@/components/WorksGrid';
import BrandDivider from '@/components/BrandDivider';
import AnimatedSection from '@/components/AnimatedSection';
import { useLanguage } from '@/context/LanguageContext';
import { getFeaturedProjects } from '@/lib/projects';

const featuredProjects = getFeaturedProjects().slice(0, 4);

export default function HomePage() {
  const { t, lang } = useLanguage();

  return (
    <>
      <Navigation />

      <main>
        {/* ── Cinematic Hero ────────────────────────────────── */}
        {/*
          To use a video background: add videoSrc="/videos/hero.mp4"
          To use an image background: add imageSrc="/images/hero.jpg"
          Default: deep cinematic dark gradient
        */}
        <HeroSection />

        {/* ── Selected Works ─────────────────────────────────── */}
        <section
          className="py-24 md:py-36 px-6 md:px-10 bg-stone-50"
          aria-label={lang === 'ko' ? '선택된 작업' : 'Selected Works'}
        >
          <div className="max-w-screen-xl mx-auto">
            {/* Section header */}
            <AnimatedSection className="mb-14 md:mb-20">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-8 border-b border-stone-200">
                <div>
                  <p className="text-[11px] tracking-[0.28em] uppercase text-stone-400 mb-3 font-light">
                    THE STRANGER
                  </p>
                  <h2
                    className="font-light text-stone-950"
                    style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                  >
                    {lang === 'ko' ? '선택된 작업' : 'Selected Works'}
                  </h2>
                </div>

                <Link
                  href="/works"
                  className="self-start md:self-auto inline-flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-stone-400 hover:text-stone-950 transition-colors duration-300 group"
                  aria-label={lang === 'ko' ? '전체 작업 보기' : 'View all works'}
                >
                  <span>{lang === 'ko' ? '전체 보기' : 'View All'}</span>
                  <span
                    className="block h-px bg-current transition-all duration-400 group-hover:w-12"
                    style={{ width: '28px' }}
                  />
                </Link>
              </div>
            </AnimatedSection>

            {/* Large editorial grid */}
            <WorksGrid projects={featuredProjects} variant="editorial" />

            {/* Mobile CTA */}
            <AnimatedSection className="mt-16 text-center md:hidden" delay={300}>
              <Link
                href="/works"
                className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-stone-500 hover:text-stone-950 transition-colors duration-300 group"
              >
                <span>{lang === 'ko' ? '전체 작업 보기' : 'View All Works'}</span>
                <span className="block w-8 h-px bg-current transition-all duration-300 group-hover:w-14" />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Brand Divider ─────────────────────────────────── */}
        <BrandDivider
          variant="ghost"
          caption={lang === 'ko' ? '2016년 창단' : 'Est. 2016'}
          className="border-y border-stone-100 bg-white"
        />

        {/* ── Studio Identity Strip ─────────────────────────── */}
        <section
          className="py-20 md:py-28 px-6 md:px-10 bg-stone-50"
          aria-label={lang === 'ko' ? '스튜디오 소개' : 'About the Studio'}
        >
          <div className="max-w-screen-xl mx-auto">
            <div className="grid md:grid-cols-[1fr_1.1fr] gap-12 md:gap-20 items-start">

              {/* Left: Statement */}
              <AnimatedSection>
                <p className="text-[11px] tracking-[0.22em] uppercase text-stone-400 mb-6 font-light">
                  {lang === 'ko' ? '더 스트레인저에 대하여' : 'About THE STRANGER'}
                </p>
                <p
                  className="font-light leading-[1.7] text-stone-700"
                  style={{ fontSize: 'clamp(1.2rem, 2.2vw, 1.65rem)' }}
                >
                  {lang === 'ko'
                    ? '기술과 장르의 경계를 넘나드는 새로운 예술 언어를 탐구하는 학제간 예술 콜렉티브.'
                    : 'An interdisciplinary art collective exploring new artistic languages through the convergence of technology and genre hybridization.'}
                </p>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 mt-8 text-xs tracking-[0.2em] uppercase text-stone-400 hover:text-stone-950 transition-colors duration-300 group"
                >
                  <span>{lang === 'ko' ? '더 알아보기' : 'About'}</span>
                  <span className="block w-7 h-px bg-current transition-all duration-400 group-hover:w-12" />
                </Link>
              </AnimatedSection>

              {/* Right: Metrics */}
              <AnimatedSection delay={160} className="space-y-0">
                {[
                  {
                    label: lang === 'ko' ? '창단' : 'Founded',
                    value: '2016',
                  },
                  {
                    label: lang === 'ko' ? '순회 국가' : 'Countries Toured',
                    value: '9+',
                  },
                  {
                    label: lang === 'ko' ? '순회 도시' : 'Cities Toured',
                    value: '18+',
                  },
                  {
                    label: lang === 'ko' ? '국제 초청' : 'International Invitations',
                    value: lang === 'ko' ? '새들러스 웰스, 에든버러 프린지 외' : "Sadler's Wells, Edinburgh Fringe & more",
                  },
                  {
                    label: lang === 'ko' ? '분야' : 'Practice Areas',
                    value:
                      lang === 'ko'
                        ? '연극  ·  미디어  ·  기술  ·  문화 기획'
                        : 'Theatre  ·  Media  ·  Tech  ·  Culture',
                  },
                ].map((item, i) => (
                  <AnimatedSection
                    key={item.label}
                    delay={200 + i * 60}
                    className="flex items-baseline justify-between border-b border-stone-100 py-5"
                  >
                    <span className="text-xs tracking-[0.1em] uppercase text-stone-400 font-light">
                      {item.label}
                    </span>
                    <span className="text-sm font-light text-stone-700 tracking-wide text-right max-w-[55%] leading-snug">
                      {item.value}
                    </span>
                  </AnimatedSection>
                ))}
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── Contact CTA strip ─────────────────────────────── */}
        <section
          className="py-20 md:py-28 px-6 md:px-10 bg-stone-950 text-white"
          aria-label={lang === 'ko' ? '연락처' : 'Contact'}
        >
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <AnimatedSection>
              <p className="text-[11px] tracking-[0.25em] uppercase text-white/40 mb-3 font-light">
                THE STRANGER
              </p>
              <p
                className="font-light text-white leading-snug"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
              >
                {lang === 'ko'
                  ? '함께 만들어가는 예술.'
                  : 'Art made together.'}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 text-xs tracking-[0.22em] uppercase text-white/60 hover:text-white transition-colors duration-400 group border border-white/20 hover:border-white/50 px-7 py-4"
              >
                <span>{lang === 'ko' ? '연락하기' : 'Get in touch'}</span>
                <span className="block w-6 h-px bg-current transition-all duration-400 group-hover:w-10" />
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
