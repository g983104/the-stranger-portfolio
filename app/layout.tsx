import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { PersonSchema, WebSiteSchema } from '@/components/JsonLd';

const notoSansKr = Noto_Sans_KR({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://thestranger.kr'
  ),
  title: {
    default: 'THE STRANGER — 황유택 | Hwang Youtaek',
    template: '%s | THE STRANGER — Hwang Youtaek',
  },
  description:
    '황유택은 연극, 다원 퍼포먼스, 예술과 기술, 문화 기획을 가로지르는 크리에이티브 디렉터이자 연출입니다. Hwang Youtaek is a Creative Director and Director working across theatre, interdisciplinary performance, art & technology, and cultural projects.',
  keywords: [
    'Creative Director',
    'Director',
    'Theatre Director',
    'Interdisciplinary Performance',
    'Experimental Theatre',
    'Art and Technology Performance',
    'Performance Director',
    'Performance Art',
    'Korean Director',
    'THE STRANGER',
    '황유택',
    'Hwang Youtaek',
    'Interdisciplinary Arts',
    'Cultural Projects',
    'Art Festival',
    '연출가',
    '크리에이티브 디렉터',
    '다원 퍼포먼스',
    '연극 연출',
    '예술과 기술',
    "Sadler's Wells",
    'Edinburgh Fringe',
    'London Performance',
  ],
  authors: [{ name: 'Hwang Youtaek / 황유택', url: 'https://thestranger.kr' }],
  creator: 'Hwang Youtaek',
  publisher: 'THE STRANGER',
  category: 'Art & Performance',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    alternateLocale: 'en_US',
    title: 'THE STRANGER — Hwang Youtaek | Creative Director & Director',
    description:
      'Creative Director and Director working across theatre, interdisciplinary performance, art & technology, and cultural projects. Founded THE STRANGER in 2016.',
    siteName: 'THE STRANGER',
    url: 'https://thestranger.kr',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THE STRANGER — Hwang Youtaek',
    description:
      'Creative Director & Director / 크리에이티브 디렉터 & 연출. Interdisciplinary performance, art & technology.',
    creator: '@g983104',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://thestranger.kr',
    languages: {
      'ko-KR': 'https://thestranger.kr',
      'en-US': 'https://thestranger.kr',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={notoSansKr.variable}>
      <head>
        {/* JSON-LD Structured Data */}
        <PersonSchema />
        <WebSiteSchema />
      </head>
      <body className="font-sans bg-stone-50 text-stone-950 antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
