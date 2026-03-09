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
    default: 'THE STRANGER — 황유택 | Yu Taek Hwang',
    template: '%s | THE STRANGER — Yu Taek Hwang',
  },
  description:
    '황유택은 연극, 학제간 퍼포먼스, 예술과 기술, 문화 기획을 가로지르는 크리에이티브 디렉터이자 연출가입니다. Yu Taek Hwang is a Creative Director and Stage Director working across theatre, interdisciplinary performance, art & technology, and cultural projects.',
  keywords: [
    'Creative Director',
    'Stage Director',
    'Theatre Director',
    'Interdisciplinary Performance',
    'Experimental Theatre',
    'Art and Technology Performance',
    'Performance Director',
    'Performance Art',
    'Korean Director',
    'THE STRANGER',
    '황유택',
    'Yu Taek Hwang',
    'Interdisciplinary Arts',
    'Cultural Projects',
    'Art Festival',
    '연출가',
    '크리에이티브 디렉터',
    '학제간 퍼포먼스',
    '연극 연출',
    '예술과 기술',
    "Sadler's Wells",
    'Edinburgh Fringe',
    'London Performance',
  ],
  authors: [{ name: 'Yu Taek Hwang / 황유택', url: 'https://thestranger.kr' }],
  creator: 'Yu Taek Hwang',
  publisher: 'THE STRANGER',
  category: 'Art & Performance',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    alternateLocale: 'en_US',
    title: 'THE STRANGER — Yu Taek Hwang | Creative Director & Stage Director',
    description:
      'Creative Director and Stage Director working across theatre, interdisciplinary performance, art & technology, and cultural projects. Founded THE STRANGER in 2016.',
    siteName: 'THE STRANGER',
    url: 'https://thestranger.kr',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THE STRANGER — Yu Taek Hwang',
    description:
      'Creative Director & Stage Director / 크리에이티브 디렉터 & 연출가. Interdisciplinary performance, art & technology.',
    creator: '@the_stranger_official',
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
