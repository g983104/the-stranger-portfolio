'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { useLanguage } from '@/context/LanguageContext';

type CvEntry = {
  year: string;
  titleKo: string;
  titleEn: string;
  detailKo: string;
  detailEn: string;
};

const artTech: CvEntry[] = [
  {
    year: '2024.06',
    titleKo: 'Experiment: Bioelectric Signals and Sounds of Nature',
    titleEn: 'Experiment: Bioelectric Signals and Sounds of Nature',
    detailKo: '그레이너리 스퀘어, 런던, 영국',
    detailEn: 'Granary Square, London, UK',
  },
  {
    year: '2023.07',
    titleKo: '경계에 대한 시뮬레이션',
    titleEn: 'Simulation on the Border',
    detailKo: '빈 프로젝트, 몸소리말조아라 센터',
    detailEn: 'Bin Project, Momsori-mal-joahra Center',
  },
  {
    year: '2022.02',
    titleKo: 'DIOS EX MACHINA',
    titleEn: 'DIOS EX MACHINA',
    detailKo: '빈 프로젝트, 콘텐츠문화광장 66무대',
    detailEn: 'Bin Project, Contents Culture Square Stage 66',
  },
  {
    year: '2021.08',
    titleKo: 'INI.TIA.TIVE',
    titleEn: 'INI.TIA.TIVE',
    detailKo: '플랫폼 팜파',
    detailEn: 'Platform Pampa',
  },
  {
    year: '2020.02',
    titleKo: '만들어진 이야기',
    titleEn: 'The Story of How It Was Made',
    detailKo: '갤러리 빈치 — 한국문화예술위원회 예술과 기술 지원 프로그램 선정',
    detailEn: 'Gallery Vinchi — Selected for Arts Council Korea Art & Tech Support Program',
  },
  {
    year: '2019.10',
    titleKo: '#Extrañamente',
    titleEn: '#Extrañamente',
    detailKo: '센트로 데 아르테, 산루이스 포토시, 멕시코',
    detailEn: 'Centro de Arte, San Luis Potosí, Mexico',
  },
];

const research: CvEntry[] = [
  {
    year: '2020.04',
    titleKo: '바운더리',
    titleEn: 'Boundary',
    detailKo: '혜화동 1번지 — 세월호: 극장들, 성북마을극장',
    detailEn: 'Hyehwa-dong 1st Street — Sewol Ferry: Theatres, Seongbuk Village Theatre',
  },
  {
    year: '2019.07',
    titleKo: '안녕, 이방인',
    titleEn: 'Hello, Stranger',
    detailKo: '더 스트레인저, 인사아트홀',
    detailEn: 'THE STRANGER, Insa Art Hall',
  },
  {
    year: '2019.06',
    titleKo: '길 위에 서서',
    titleEn: 'Standing on the Road',
    detailKo: '삼일로창고극장 24시간 연극제',
    detailEn: 'Samilro Changgo Theatre 24-Hour Theatre Festival',
  },
  {
    year: '2018.08',
    titleKo: '그냥, 슬기로운 생활 2',
    titleEn: 'Just One Wife Life 2',
    detailKo: '더 스트레인저, C 베뉴 아담 하우스 극장, 에든버러, 영국',
    detailEn: 'THE STRANGER, C venues Adam House Theatre, Edinburgh, UK',
  },
  {
    year: '2018.07',
    titleKo: '그냥, 슬기로운 생활',
    titleEn: 'Just, A Wise Life',
    detailKo: '더 스트레인저 — 새들러스 웰스 극장 초청, 런던, 영국',
    detailEn: 'THE STRANGER — Invited to Sadler\'s Wells Theatre, London, UK',
  },
  {
    year: '2018.01–12',
    titleKo: 'PLAY BUS',
    titleEn: 'PLAY BUS',
    detailKo: '더 스트레인저 — 6개국 10개 도시 투어 (러시아, 폴란드, 독일, 영국 외)',
    detailEn: 'THE STRANGER — Tour across 6 countries, 10 cities (Russia, Poland, Germany, UK, and more)',
  },
  {
    year: '2017.08',
    titleKo: '그냥, 슬기로운 생활',
    titleEn: 'Just, A Wise Life',
    detailKo: '더 스트레인저, 청운예술극장, 대학로',
    detailEn: 'THE STRANGER, Cheongun Arts Theatre, Daehangno',
  },
];

const theatre: CvEntry[] = [
  {
    year: '2020.02',
    titleKo: '카파시티',
    titleEn: 'Capacity',
    detailKo: '제4회 퀴어 연극제, 성북마을극장',
    detailEn: '4th Queer Theatre Festival, Seongbuk Village Theatre',
  },
  {
    year: '2017.06',
    titleKo: '우리의 플랜B',
    titleEn: 'Our PLAN.B',
    detailKo: '더 스트레인저, 청운예술극장, 대학로',
    detailEn: 'THE STRANGER, Cheongun Arts Theatre, Daehangno',
  },
  {
    year: '2017.02',
    titleKo: '작가를 찾는 여섯 등장인물',
    titleEn: 'Six Characters in Search of an Author',
    detailKo: '청운예술극장, 대학로',
    detailEn: 'Cheongun Arts Theatre, Daehangno',
  },
  {
    year: '2016.12',
    titleKo: '낮 가리는 집',
    titleEn: 'The House That Hides the Day',
    detailKo: '더 스트레인저, 청운예술극장, 대학로',
    detailEn: 'THE STRANGER, Cheongun Arts Theatre, Daehangno',
  },
  {
    year: '2016.07',
    titleKo: '햄릿, 영원히 남을 시간',
    titleEn: 'Hamlet, Time That Will Remain Forever',
    detailKo: '서울 프린지 페스티벌, 상암 월드컵 경기장',
    detailEn: 'Seoul Fringe Festival, Sangam World Cup Stadium',
  },
  {
    year: '2016.02',
    titleKo: '다락방',
    titleEn: 'The Attic',
    detailKo: '한국연극브릿지페스티벌, 동덕여자대학교예술센터 / 제14회 서울연극제 — 청년감독전',
    detailEn: 'Korea Theatre Bridge Festival, Dongduk Women\'s University Arts Center / 14th Seoul Theatre Festival — Young Directors Program',
  },
  {
    year: '2015.08',
    titleKo: '15분 햄릿',
    titleEn: '15-Minute Hamlet',
    detailKo: '제5회 청년 프린지 페스티벌, 노을소극장',
    detailEn: '5th Youth Fringe Festival, Noeul Small Theatre',
  },
];

const cultural: CvEntry[] = [
  {
    year: '2021',
    titleKo: '서남권 청소년 정책 / 청소년 참여 기구 연구 사업',
    titleEn: 'Southwest Youth Policy / Youth Participation Organization Research Project',
    detailKo: '서남권NPO지원센터 — 협력',
    detailEn: 'Southwest NPO Support Center — Collaborator',
  },
  {
    year: '2021',
    titleKo: '양천구 청년예술인 지원사업 \'시대교감\'',
    titleEn: 'Yangcheon-gu Young Artists Support Programme \'Sidae Gyogam\'',
    detailKo: '양천구청 — 주최',
    detailEn: 'Yangcheon District Office — Organizer',
  },
  {
    year: '2020–2021',
    titleKo: '제주도 청년예술인 마을 조성사업 \'Ze주청년회관\'',
    titleEn: 'Jeju-do Young Artists Village Development Project \'Ze주청년회관\'',
    detailKo: '서울시 청소년 사무소 — 주최',
    detailEn: 'Seoul Metropolitan City Youth Office — Organizer',
  },
  {
    year: '2020',
    titleKo: '서초구 서리풀 Y 페스티벌',
    titleEn: 'Seocho District Seoripul Y Festival',
    detailKo: '청년예술인 진보적 Y 프로젝트 & 오픈 테이블 — 협력',
    detailEn: '\'Youth Artist Progressive Y Project & Open Table\' — Collaborator',
  },
  {
    year: '2020',
    titleKo: '연극의 해 \'전국 청년 연극인 네트워크\' 구축 사업',
    titleEn: 'Year of Theatre \'National Young Theatre Practitioners Network\' Building Project',
    detailKo: '문화체육관광부 — 협력',
    detailEn: 'Ministry of Culture, Sports and Tourism — Collaborator',
  },
  {
    year: '2020',
    titleKo: 'ARS: 포스트-연극 예술 레지던시 기획 사업',
    titleEn: 'ARS: Post-Theatre Art Residency Planning Project',
    detailKo: '서울문화재단',
    detailEn: 'Seoul Foundation for Arts and Culture',
  },
  {
    year: '2020.04',
    titleKo: '세운상가군 도시재생 축제 \'세운개장\'',
    titleEn: 'Sewoon Sangga District Urban Regeneration Festival \'Sewoon Gaejang\'',
    detailKo: '서울특별시 / 세운 시민 협의회',
    detailEn: 'Seoul Metropolitan City / Sewoon Citizens Council',
  },
  {
    year: '2018.01–12',
    titleKo: '\'대학로에서 에든버러까지 — 세계 방랑 프로젝트\'',
    titleEn: '\'From Daehangno to Edinburgh — World Wandering Project\'',
    detailKo: '더 스트레인저',
    detailEn: 'THE STRANGER',
  },
  {
    year: '2016.09',
    titleKo: 'SNS 연극 페스티벌 \'안녕! 낯선사람\'',
    titleEn: 'SNS Theatre Festival \'Hello! Stranger\'',
    detailKo: '',
    detailEn: '',
  },
  {
    year: '2016–2017',
    titleKo: '청년 예술인 모임 프로젝트 \'더 엣지 프로젝트\'',
    titleEn: 'Youth Artist Gathering Project \'The Edge Project\'',
    detailKo: '',
    detailEn: '',
  },
];

const residency: CvEntry[] = [
  {
    year: '2022',
    titleKo: '경계에 대한 시뮬레이션 연구 & 워크숍',
    titleEn: 'Research & Workshop for Simulation on the Nation\'s Time, Our Memory, and the Border',
    detailKo: '한국문화예술위원회 — 청년 국제 교류 지원',
    detailEn: 'Arts Council Korea — International Exchange Support for Young Artists',
  },
  {
    year: '2020',
    titleKo: '미래 연극: 아트온라인 레지던시',
    titleEn: 'Future Theatre: Artonline Residency',
    detailKo: '주최 (서울문화재단 지원)',
    detailEn: 'Organizer (Supported by Seoul Foundation for Arts and Culture)',
  },
  {
    year: '2020',
    titleKo: '따라서, 나는 프로젝트: 온라인 문화센터의 실험적 구축',
    titleEn: 'Therefore, I Project: Experimental construction of an online cultural center',
    detailKo: '예술 실험',
    detailEn: 'Arts Experiment',
  },
  {
    year: '2019.10',
    titleKo: '국제 예술 교류 레지던시 \'맥콜예찬\'',
    titleEn: 'International Arts Exchange Residency — Korea-Mexico Art Project',
    detailKo: '멕시코시티 / 산루이스 포토시 — 초청 (한국문화예술위원회 지원)',
    detailEn: 'Mexico City / San Luis Potosí — Invited (Supported by Arts Council Korea)',
  },
  {
    year: '2016.09',
    titleKo: '인도 전통문화 \'카타칼리 워크숍\'',
    titleEn: 'Indian Traditional Culture \'Kathakali Workshop\'',
    detailKo: '인도문화원',
    detailEn: 'Indian Cultural Center',
  },
];

const awards: CvEntry[] = [
  {
    year: '2024–2025',
    titleKo: '국가유산활용 프로젝트 — 국가유산청장상',
    titleEn: 'National Heritage Utilization Project — National Heritage Administration Commissioner\'s Award',
    detailKo: '',
    detailEn: '',
  },
  {
    year: '2023',
    titleKo: '양천문화재단 이사장 감사패',
    titleEn: 'Letter of Appreciation from the Chairman of Yangcheon Cultural Foundation',
    detailKo: '',
    detailEn: '',
  },
  {
    year: '2016',
    titleKo: '제3회 한국연극브릿지페스티벌 — 서울특별시장상',
    titleEn: '3rd Korea Theatre Bridge Festival — Seoul Metropolitan Mayor\'s Award',
    detailKo: '',
    detailEn: '',
  },
  {
    year: '2016',
    titleKo: '제3회 한국연극브릿지페스티벌 — 최우수 작품상',
    titleEn: '3rd Korea Theatre Bridge Festival — Best Work Award',
    detailKo: '',
    detailEn: '',
  },
  {
    year: '2015',
    titleKo: '제5회 청년 프린지 페스티벌 — 최우수상 \'지구 최대의 대담함 상\'',
    titleEn: '5th Youth Fringe Festival — Best Award \'Earth\'s Greatest Audacity Award\'',
    detailKo: '',
    detailEn: '',
  },
];

function CvSection({
  titleKey,
  entries,
}: {
  titleKey: string;
  entries: CvEntry[];
}) {
  const { t, lang } = useLanguage();

  return (
    <section className="mb-16 md:mb-20" aria-label={t(titleKey)}>
      <AnimatedSection className="flex items-baseline gap-6 mb-6 pb-3 border-b border-stone-300">
        <h2 className="text-xs tracking-[0.2em] uppercase text-stone-500 font-medium">
          {t(titleKey)}
        </h2>
      </AnimatedSection>

      <div className="space-y-0">
        {entries.map((entry, i) => {
          const title = lang === 'ko' ? entry.titleKo : entry.titleEn;
          const detail = lang === 'ko' ? entry.detailKo : entry.detailEn;

          return (
            <AnimatedSection key={i} delay={i * 50}>
              <div className="cv-entry grid md:grid-cols-[100px_1fr] gap-3 md:gap-8 py-4 md:py-5">
                <span className="text-xs tabular-nums text-stone-400 font-light pt-0.5 flex-shrink-0">
                  {entry.year}
                </span>
                <div>
                  <p className="text-sm font-light text-stone-800 leading-snug mb-0.5">
                    {title}
                  </p>
                  {detail && (
                    <p className="text-xs text-stone-400 font-light leading-relaxed">
                      {detail}
                    </p>
                  )}
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}

export default function CvPage() {
  const { t, lang } = useLanguage();

  return (
    <>
      <Navigation />

      <main
        className="pt-[var(--nav-height)] min-h-screen"
        aria-label="Curriculum Vitae"
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          {/* ── Page Header ──────────────────────────────────── */}
          <AnimatedSection className="pt-16 md:pt-24 pb-10 md:pb-14 border-b border-stone-200 mb-16 md:mb-20">
            <p className="text-[11px] tracking-[0.25em] uppercase text-stone-400 mb-3">
              {lang === 'ko' ? '황유택' : 'Hwang Youtaek'}
            </p>
            <h1 className="text-4xl md:text-6xl font-light tracking-wide text-stone-950 mb-3">
              {t('cv.pageTitle')}
            </h1>
            <p className="text-sm text-stone-400 font-light tracking-wide">
              {t('cv.pageSubtitle')}
            </p>
          </AnimatedSection>

          {/* ── CV Content ───────────────────────────────────── */}
          <div className="max-w-3xl pb-24 md:pb-32">
            <CvSection titleKey="cv.sections.artTech" entries={artTech}  />
            <CvSection titleKey="cv.sections.research" entries={research}  />
            <CvSection titleKey="cv.sections.theatre" entries={theatre}  />
            <CvSection titleKey="cv.sections.cultural" entries={cultural}  />
            <CvSection titleKey="cv.sections.residency" entries={residency}  />
            <CvSection titleKey="cv.sections.awards" entries={awards}  />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
