'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-auto border-t border-stone-200">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Left */}
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-stone-950 font-medium mb-1">
            THE STRANGER
          </p>
          <p className="text-xs text-stone-400 tracking-wide">
            {t('footer.name')} — {t('footer.title')}
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <Link
            href="/works"
            className="text-xs tracking-[0.1em] uppercase text-stone-400 hover:text-stone-950 transition-colors duration-300"
          >
            {t('nav.works')}
          </Link>
          <Link
            href="/about"
            className="text-xs tracking-[0.1em] uppercase text-stone-400 hover:text-stone-950 transition-colors duration-300"
          >
            {t('nav.about')}
          </Link>
          <Link
            href="/cv"
            className="text-xs tracking-[0.1em] uppercase text-stone-400 hover:text-stone-950 transition-colors duration-300"
          >
            {t('nav.cv')}
          </Link>
          <Link
            href="/contact"
            className="text-xs tracking-[0.1em] uppercase text-stone-400 hover:text-stone-950 transition-colors duration-300"
          >
            {t('nav.contact')}
          </Link>
        </div>
      </div>

      <div className="border-t border-stone-100">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-4">
          <p className="text-[11px] text-stone-400 tracking-wide">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
