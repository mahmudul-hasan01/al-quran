// components/HomePage.tsx
"use client";

import { surahs } from "@/data/surahs";

interface HomePageProps {
  onSelectSurah: (n: number) => void;
}

export default function HomePage({ onSelectSurah }: HomePageProps) {
  return (
    <div id="page-home">
      <div className="page-header text-center pt-12 pb-8 px-6 relative">
        <div className="arabic-title font-[var(--font-amiri)] text-[42px] rtl text-[var(--ink)] leading-tight mb-2">
          القرآن الكريم
        </div>
        <div className="latin-title text-[15px] text-[var(--ink-muted)] tracking-[0.06em] uppercase font-light">
          The Noble Quran · 114 Surahs · 6,236 Ayahs
        </div>
        <div className="after:content-[''] after:block after:w-[60px] after:h-[2px] after:bg-[var(--gold)] after:mx-auto after:mt-4 after:rounded-full" />
      </div>
      <div className="bismillah-banner text-center font-[var(--font-amiri)] text-[28px] rtl text-[var(--gold)] py-4 px-6 pb-8">
        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
      </div>
      <div className="surah-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-[var(--border)]">
        {surahs.map((surah) => (
          <div
            key={surah.n}
            onClick={() => onSelectSurah(surah.n)}
            className="surah-card flex items-center gap-3 py-3.5 px-5 cursor-pointer bg-[var(--parchment)] border-b border-r border-[var(--border)] transition-all hover:bg-[var(--gold-faint)]"
          >
            <div className="surah-num w-[38px] h-[38px] flex-shrink-0 bg-[var(--parchment-dark)] border border-[var(--border)] rounded-full flex items-center justify-center text-[13px] text-[var(--ink-muted)] font-[var(--font-crimson)] font-semibold">
              {surah.n}
            </div>
            <div className="surah-info flex-1 min-w-0">
              <div className="surah-en text-[15px] font-semibold text-[var(--ink)]">
                {surah.en}
              </div>
              <div className="surah-meta text-xs text-[var(--ink-faint)] mt-0.5">
                {surah.type} · {surah.verses} verses · Juz {surah.juz}
              </div>
            </div>
            <div className="surah-ar font-[var(--font-amiri)] text-[22px] rtl text-[var(--gold)] flex-shrink-0">
              {surah.ar}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
