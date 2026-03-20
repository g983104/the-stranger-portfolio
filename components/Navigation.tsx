'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

export default function Navigation() {
  const { t, lang, setLang } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/works', label: t('nav.works') },
    { href: '/about', label: t('nav.about') },
    { href: '/cv', label: t('nav.cv') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-stone-50/95 backdrop-blur-sm border-b border-stone-200'
            : 'bg-transparent'
        }`}
        style={{ height: 'var(--nav-height)' }}
      >
        <nav className="max-w-screen-xl mx-auto px-6 md:px-10 h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xs tracking-[0.25em] font-medium uppercase text-stone-950 hover:text-stone-500 transition-colors duration-300"
            aria-label="THE STRANGER — Home"
          >
            THE STRANGER
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-xs tracking-[0.12em] uppercase transition-colors duration-300 ${
                  isActive(link.href)
                    ? 'text-stone-950 active'
                    : 'text-stone-500 hover:text-stone-950'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Language Toggle */}
            <div className="flex items-center gap-0 lang-toggle text-xs tracking-[0.12em] uppercase ml-4">
              <button
                onClick={() => setLang('ko')}
                className={`px-1 py-0.5 transition-colors duration-200 ${
                  lang === 'ko'
                    ? 'text-stone-950 font-medium'
                    : 'text-stone-400 hover:text-stone-600'
                }`}
                aria-label="Korean"
              >
                KR
              </button>
              <span className="text-stone-300 mx-0.5">|</span>
              <button
                onClick={() => setLang('en')}
                className={`px-1 py-0.5 transition-colors duration-200 ${
                  lang === 'en'
                    ? 'text-stone-950 font-medium'
                    : 'text-stone-400 hover:text-stone-600'
                }`}
                aria-label="English"
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile: Lang + Hamburger */}
          <div className="flex md:hidden items-center gap-4">
            {/* Mobile Language Toggle */}
            <div className="flex items-center lang-toggle text-xs tracking-[0.12em] uppercase">
              <button
                onClick={() => setLang('ko')}
                className={`px-1 py-0.5 transition-colors duration-200 ${
                  lang === 'ko' ? 'text-stone-950 font-medium' : 'text-stone-400'
                }`}
              >
                KR
              </button>
              <span className="text-stone-300 mx-0.5">|</span>
              <button
                onClick={() => setLang('en')}
                className={`px-1 py-0.5 transition-colors duration-200 ${
                  lang === 'en' ? 'text-stone-950 font-medium' : 'text-stone-400'
                }`}
              >
                EN
              </button>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5 p-1 group"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span
                className={`block h-px w-6 bg-stone-950 transition-all duration-300 origin-center ${
                  menuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span
                className={`block h-px bg-stone-950 transition-all duration-300 ${
                  menuOpen ? 'w-0 opacity-0' : 'w-5'
                }`}
              />
              <span
                className={`block h-px w-6 bg-stone-950 transition-all duration-300 origin-center ${
                  menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-stone-50 flex flex-col justify-center px-8 transition-all duration-500 md:hidden ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-3xl font-light tracking-widest uppercase transition-colors duration-300 ${
                isActive(link.href) ? 'text-stone-950' : 'text-stone-400'
              }`}
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : '0ms',
                transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
                opacity: menuOpen ? 1 : 0,
                transition: `all 0.4s ease ${menuOpen ? i * 0.06 : 0}s`,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="absolute bottom-10 left-8 text-xs tracking-[0.2em] text-stone-400 uppercase">
          THE STRANGER — 2016
        </p>
      </div>
    </>
  );
}
