'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const { t, lang } = useLanguage();

  return (
    <>
      <Navigation />

      <main
        className="pt-[var(--nav-height)] min-h-screen flex flex-col"
        aria-label="Contact"
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 w-full flex-1">
          {/* ── Page Header ──────────────────────────────────── */}
          <AnimatedSection className="pt-16 md:pt-24 pb-10 md:pb-14 border-b border-stone-200">
            <p className="text-[11px] tracking-[0.25em] uppercase text-stone-400 mb-3">
              THE STRANGER
            </p>
            <h1 className="text-4xl md:text-6xl font-light tracking-wide text-stone-950">
              {t('contact.pageTitle')}
            </h1>
          </AnimatedSection>

          {/* ── Contact Content ──────────────────────────────── */}
          <div className="py-20 md:py-32">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 max-w-3xl">
              {/* Left: Info */}
              <div className="space-y-10">
                <AnimatedSection>
                  <p className="text-base md:text-lg font-light leading-relaxed text-stone-600 max-w-xs">
                    {t('contact.subtitle')}
                  </p>
                </AnimatedSection>

                <AnimatedSection delay={100} className="space-y-6">
                  {/* Email */}
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-2">
                      {t('contact.email')}
                    </p>
                    <a
                      href={`mailto:${t('contact.emailAddress')}`}
                      className="text-sm font-light text-stone-700 hover:text-stone-950 transition-colors duration-300 underline underline-offset-4 decoration-stone-200 hover:decoration-stone-400"
                    >
                      {t('contact.emailAddress')}
                    </a>
                  </div>

                  {/* Instagram */}
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-2">
                      {t('contact.instagram')}
                    </p>
                    <a
                      href="https://instagram.com/the_stranger_official"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-light text-stone-700 hover:text-stone-950 transition-colors duration-300 underline underline-offset-4 decoration-stone-200 hover:decoration-stone-400"
                    >
                      {t('contact.instagramHandle')}
                    </a>
                  </div>
                </AnimatedSection>
              </div>

              {/* Right: Studio info */}
              <AnimatedSection delay={200} className="space-y-8">
                <div className="border-t border-stone-200 pt-8">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-4">
                    {lang === 'ko' ? '스튜디오' : 'Studio'}
                  </p>
                  <div className="space-y-2">
                    <p className="text-lg font-light tracking-[0.1em] text-stone-950 uppercase">
                      {t('contact.studio')}
                    </p>
                    <p className="text-sm font-light text-stone-500">
                      {t('contact.location')}
                    </p>
                  </div>
                </div>

                {/* Identity tags */}
                <div className="space-y-3">
                  {[
                    lang === 'ko' ? '연극' : 'Theatre',
                    lang === 'ko' ? '학제간 퍼포먼스' : 'Interdisciplinary Performance',
                    lang === 'ko' ? '예술과 기술' : 'Art & Technology',
                    lang === 'ko' ? '문화 기획' : 'Cultural Projects',
                  ].map((label, i) => (
                    <p
                      key={label}
                      className="text-xs tracking-[0.1em] text-stone-400 font-light"
                      style={{ animationDelay: `${i * 80}ms` }}
                    >
                      {label}
                    </p>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
