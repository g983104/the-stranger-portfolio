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
    // 인물
    '황유택',
    'Hwang Youtaek',
    '낯선사람 황유택',
    'THE STRANGER 황유택',

    // 정체성
    '한국 예술가',
    '한국 젊은 예술가',
    '한국 연출가',
    '아시아 연출가',
    '한국 크리에이티브 디렉터',
    '서울 예술가',
    '공연예술가',
    '퍼포먼스 아티스트',
    'Korean Artist',
    'Korean Theatre Director',
    'Asian Director',
    'Young Korean Artist',
    'Seoul Artist',
    'Creative Director Korea',
    'Performance Artist Korea',

    // 분야
    '다원예술',
    '다원예술가',
    '연극 연출가',
    '실험연극',
    '새로운 연극',
    '새로운 예술',
    '융합예술',
    '아트앤테크',
    '연극기술',
    '문화기획자',
    '축제감독',
    '국가유산 예술',
    '한국 공연예술',
    'Multidisciplinary Arts',
    'Experimental Theatre',
    'New Theatre',
    'Interdisciplinary Performance',
    'Art and Technology',
    'Art and Tech',
    'Theatre Technology',
    'Immersive Theatre',
    'Festival Director',
    'Cultural Heritage Art',

    // 주제/작업
    '버스예술가',
    '버스 연극',
    '유라시아 횡단',
    '유라시아 횡단 연극',
    '세계유랑 프로젝트',
    'Play Bus',
    'PLAYBUS',
    '멕시코 장벽 예술',
    '국경 예술가',
    '경계 예술',
    'DMZ 예술',
    'Border Artist',
    'Border Art',
    'DMZ Art',
    'Eurasian Bus Theatre',

    // 작업 방식
    '탈연극',
    '탈연극적 공연',
    '관객참여',
    '참여형 퍼포먼스',
    '장소특정형 공연',
    '사이트스페시픽',
    '이방인 예술가',
    'Audience Participation Theatre',
    'Site-Specific Performance',
    'Post-Theatre',

    // 단체/브랜드
    'THE STRANGER',
    '더 스트레인저',
    '예술 콜렉티브',
    '낯선사람',
    '크리에이티브 디렉터',
    '예술청 디렉터',
    '예술과 기술',
    'Arts Collective Korea',

    // 국제 활동
    "Sadler's Wells",
    'Edinburgh Fringe',
    'Korean Artist London',
    'Korean Artist Edinburgh',
    'Korean Artist Mexico',

    // 작품명
    '헬로 스트레인저',
    'Hello Stranger',
    '길 위에 서다',
    'Standing on the Road',
    '낮 가리는 집',
    'The House That Hides the Day',
    'PLAY BUS',
    'Simulation of Border',
    '경계에 대한 시뮬레이션',
    'DIOS EX MACHINA',
    '세운개장',
    '햄릿 영원히 남을 시',
    '보령향교 인의예지 페스타',
    '면천읍성 달빛야행',

    // 협업 기관
    '서울문화재단',
    '한국문화예술위원회',
    '서초문화재단',
    '국립극단',
    '삼일로 창고극장',
    '서교예술실험센터',
    '예술청',
    '미담문화콘텐츠연구소',
    'Seoul Foundation for Arts and Culture',
    'Arts Council Korea',
    'National Theatre Company of Korea',
  ],
  authors: [{ name: 'Hwang Youtaek / 황유택', url: 'https://thestranger.kr' }],
  creator: 'Hwang Youtaek',
  publisher: 'THE STRANGER',
  category: 'Art & Performance',
  verification: {
    google: 'q-dWsfNvSRibHz4bDPmWnr__QPzdiQpUY5cBQteD_hk',
  },
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
        {/* JS 로드 시 'js' 클래스 추가 → 스크롤 애니메이션 활성화 (봇은 미적용) */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="font-sans bg-stone-50 text-stone-950 antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
