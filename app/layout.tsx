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
    '황유택은 한국의 연출가이자 크리에이티브 디렉터로, 연극·다원예술·기술·문화기획·축제 분야를 가로지르며 활동하는 젊은 예술가입니다. Hwang Youtaek is a Korean Creative Director and Theatre Director working across theatre, multidisciplinary arts, technology, cultural planning, and festival direction.',
  keywords: [
    '황유택',
    'Hwang Youtaek',
    '한국 예술가',
    '한국 젊은 예술가',
    '한국 연출가',
    '아시아 연출가',
    '한국 크리에이티브 디렉터',
    '다원예술가',
    '연극 연출가',
    '문화기획자',
    '축제감독',
    '한국 공연예술',
    '다원예술',
    'Korean Artist',
    'Korean Theatre Director',
    'Asian Director',
    'Young Korean Artist',
    'Creative Director Korea',
    'Multidisciplinary Artist Korea',
    'Festival Director Korea',
    'Cultural Planner Korea',
    'Theatre Director',
    'Interdisciplinary Performance',
    'Experimental Theatre',
    'Art and Technology',
    'THE STRANGER',
    '더 스트레인저',
    '크리에이티브 디렉터',
    '예술과 기술',
    "Sadler's Wells",
    'Edinburgh Fringe',
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
