'use client';

import { useState } from 'react';
import Image from 'next/image';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

export default function YouTubeEmbed({
  videoId,
  title = 'Video',
}: YouTubeEmbedProps) {
  const [playing, setPlaying] = useState(false);

  if (!videoId) return null;

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <div
      className="relative w-full overflow-hidden bg-stone-950"
      style={{ paddingBottom: '56.25%' /* 16:9 */ }}
    >
      {playing ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        /* Click-to-play thumbnail */
        <button
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 w-full h-full flex items-center justify-center"
          aria-label={`Play video: ${title}`}
        >
          {/* Thumbnail */}
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-400"
            sizes="(max-width: 768px) 100vw, 80vw"
            unoptimized // YouTube thumbnails are external
          />

          {/* Play button */}
          <div className="relative z-10 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 border border-white/30 backdrop-blur-sm group-hover:bg-white/20 group-hover:scale-110 transition-all duration-400">
            {/* Triangle play icon */}
            <div
              className="w-0 h-0 ml-1"
              style={{
                borderTop: '10px solid transparent',
                borderBottom: '10px solid transparent',
                borderLeft: '18px solid rgba(255,255,255,0.85)',
              }}
            />
          </div>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-400" />
        </button>
      )}
    </div>
  );
}
