'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="pt-[var(--nav-height)] min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-[8rem] font-light text-stone-100 leading-none select-none tabular-nums">
            404
          </p>
          <p className="text-sm font-light text-stone-400 tracking-widest uppercase mb-8 -mt-4">
            Page Not Found
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-stone-500 hover:text-stone-950 transition-colors duration-300 group"
          >
            <span className="block w-8 h-px bg-current transition-all duration-300 group-hover:w-4" />
            <span>Return Home</span>
          </Link>
        </div>
      </main>
    </>
  );
}
