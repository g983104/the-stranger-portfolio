'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

interface HeroSectionProps {
  /** Optional looping video URL (mp4). Covers the entire hero. */
  videoSrc?: string;
  /** Optional fallback image path (relative to /public). */
  imageSrc?: string;
  imageAlt?: string;
}

export default function HeroSection({
  videoSrc,
  imageSrc,
  imageAlt = 'THE STRANGER',
}: HeroSectionProps) {
  const { t, tArray } = useLanguage();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Background Layer ──────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        {videoSrc ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden="true"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        ) : (
          /* Default cinematic gradient — deep theatrical dark */
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at 30% 60%, #1c1208 0%, #0a0906 60%, #050505 100%)',
            }}
          />
        )}

        {/* Unified dark scrim for readability */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Subtle film grain via SVG noise filter */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
          aria-hidden="true"
        />
      </div>

      {/* ── Decorative grid lines ─────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
        <div className="absolute left-8 md:left-14 top-0 bottom-0 w-px bg-white/[0.04]" />
        <div className="absolute right-8 md:right-14 top-0 bottom-0 w-px bg-white/[0.04]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.04]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.04]" />
      </div>

      {/* ── Content ───────────────────────────────────────── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-8 md:px-14 text-center">

        {/* Studio name — the centrepiece */}
        <div
          className="hero-line"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1), transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0ms',
          }}
        >
          <h1
            className="font-light uppercase text-white leading-none tracking-[0.15em] md:tracking-[0.25em] select-none w-full"
            style={{ fontSize: 'clamp(2.2rem, 8vw, 7rem)' }}
            aria-label="THE STRANGER"
          >
            THE{'\u00A0'}STRANGER
          </h1>
        </div>

        {/* Thin rule */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'scaleX(1)' : 'scaleX(0)',
            transition: 'opacity 1s ease, transform 1s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '400ms',
            transformOrigin: 'center',
          }}
        >
          <div className="w-16 h-px bg-white/25 mx-auto my-8 md:my-10" />
        </div>

        {/* Name */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 1s ease, transform 1s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '600ms',
          }}
        >
          <p className="text-2xl md:text-3xl font-light tracking-[0.14em] text-white/88 mb-3">
            {t('home.name')}
          </p>
        </div>

        {/* Title */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 1s ease, transform 1s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '800ms',
          }}
        >
          <p className="text-[11px] md:text-xs tracking-[0.28em] uppercase text-white/45 font-light mb-10 md:mb-14">
            {t('home.title')}
          </p>
        </div>

        {/* Tags */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 1s ease, transform 1s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '1000ms',
          }}
        >
          <div className="flex flex-wrap justify-center items-center gap-0 mb-14 md:mb-20">
            {tArray('home.tags').map((tag, i) => (
              <span key={i} className="flex items-center">
                {i > 0 && (
                  <span className="mx-4 md:mx-6 text-white/18 text-xs">·</span>
                )}
                <span className="text-[11px] tracking-[0.18em] uppercase text-white/40 font-light">
                  {tag}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 1s ease, transform 1s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '1200ms',
          }}
        >
          <Link
            href="/works"
            className="inline-flex items-center gap-4 text-[11px] tracking-[0.25em] uppercase text-white/55 hover:text-white/90 transition-colors duration-400 group"
          >
            <span>{t('home.scrollCta')}</span>
            <span
              className="block h-px bg-current"
              style={{
                width: '32px',
                transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />
          </Link>
        </div>
      </div>

      {/* ── Animated scroll indicator ────────────────────── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 1s ease',
          transitionDelay: '1600ms',
        }}
        aria-hidden="true"
      >
        <div className="relative w-px h-14 overflow-hidden">
          <div className="absolute inset-0 bg-white/15" />
          <div className="absolute top-0 left-0 w-full bg-white/60 scroll-line-animate" />
        </div>
      </div>
    </section>
  );
}
