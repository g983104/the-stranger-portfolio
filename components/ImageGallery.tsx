'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  images: string[];
  projectTitle: string;
}

export default function ImageGallery({ images, projectTitle }: ImageGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  const close = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  const next = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null));

  return (
    <>
      {/* Gallery Grid */}
      <div
        className={`grid gap-3 ${
          images.length === 1
            ? 'grid-cols-1'
            : images.length === 2
            ? 'grid-cols-1 md:grid-cols-2'
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}
      >
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setLightboxIndex(i)}
            className="group relative block overflow-hidden bg-stone-100 focus:outline-none"
            style={{ aspectRatio: i === 0 && images.length > 2 ? '16/10' : '4/3' }}
            aria-label={`View image ${i + 1} of ${images.length}: ${projectTitle}`}
          >
            <Image
              src={src}
              alt={`${projectTitle} — image ${i + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover transition-transform duration-600 ease-out group-hover:scale-[1.04]"
            />
            {/* Hover scrim */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-400" />
            {/* Expand icon */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white/70 text-[10px] tracking-[0.15em] uppercase">
                ⊞
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close */}
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors text-xs tracking-[0.2em] uppercase z-10"
            onClick={close}
            aria-label="Close lightbox"
          >
            ✕ Close
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-5xl max-h-[85vh] mx-6"
            style={{ aspectRatio: '16/10' }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex]}
              alt={`${projectTitle} — image ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          {/* Prev / Next */}
          {images.length > 1 && (
            <>
              <button
                className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors text-xs tracking-[0.2em] uppercase py-4 px-2"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Previous image"
              >
                ← Prev
              </button>
              <button
                className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors text-xs tracking-[0.2em] uppercase py-4 px-2"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next image"
              >
                Next →
              </button>
            </>
          )}

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-[0.15em] tabular-nums">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
