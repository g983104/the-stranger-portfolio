'use client';

import AnimatedSection from '@/components/AnimatedSection';

interface BrandDividerProps {
  /** 'ghost' = enormous translucent text, 'line' = clean minimal text + rule */
  variant?: 'ghost' | 'line';
  caption?: string;
  className?: string;
}

export default function BrandDivider({
  variant = 'ghost',
  caption,
  className = '',
}: BrandDividerProps) {
  if (variant === 'line') {
    return (
      <AnimatedSection
        className={`flex items-center gap-6 py-6 px-6 md:px-10 ${className}`}
      >
        <span className="block h-px flex-1 bg-stone-200" />
        <span className="text-[10px] tracking-[0.3em] uppercase text-stone-400 font-light whitespace-nowrap">
          THE STRANGER
        </span>
        <span className="block h-px flex-1 bg-stone-200" />
      </AnimatedSection>
    );
  }

  /* Ghost variant — oversized translucent letterform */
  return (
    <AnimatedSection
      className={`relative overflow-hidden py-16 md:py-24 px-6 md:px-10 flex flex-col items-center justify-center ${className}`}
      threshold={0.05}
    >
      {/* Ghost text */}
      <p
        className="font-light tracking-[0.28em] md:tracking-[0.38em] uppercase leading-none text-center select-none pointer-events-none"
        style={{
          fontSize: 'clamp(2.5rem, 9vw, 7.5rem)',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(0,0,0,0.07)',
        }}
        aria-hidden="true"
      >
        THE STRANGER
      </p>

      {/* Optional caption */}
      {caption && (
        <p className="mt-4 text-[11px] tracking-[0.2em] uppercase text-stone-400 font-light">
          {caption}
        </p>
      )}
    </AnimatedSection>
  );
}
