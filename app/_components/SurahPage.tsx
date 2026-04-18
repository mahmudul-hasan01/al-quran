// components/SurahPage.tsx
"use client";

import { getAyat, toArabicNum } from "@/data/ayat";
import { surahs } from "@/data/surahs";

interface SurahPageProps {
  surahNumber: number;
}

export default function SurahPage({ surahNumber }: SurahPageProps) {
  const surah = surahs[surahNumber - 1];
  const ayat = getAyat(surahNumber);

  return (
    <div id="page-surah">
      <div className="surah-hero text-center py-10 px-6 border-b border-[var(--border)] bg-[var(--parchment-dark)]">
        <div className="s-number text-[13px] tracking-[0.08em] text-[var(--ink-faint)] uppercase mb-2">
          Surah {surahNumber} of 114
        </div>
        <div className="s-arabic font-[var(--font-amiri)] text-5xl rtl text-[var(--ink)] leading-tight">
          {surah.ar}
        </div>
        <div className="s-english text-[22px] text-[var(--ink-muted)] mt-1">
          {surah.en}
        </div>
        <div className="s-info mt-3 flex justify-center gap-5">
          <div className="s-pill bg-[var(--parchment)] border border-[var(--border)] rounded-full px-3.5 py-1 text-[13px] text-[var(--ink-muted)]">
            Revelation{" "}
            <span className="text-[var(--gold)] font-semibold">
              {surah.type}
            </span>
          </div>
          <div className="s-pill bg-[var(--parchment)] border border-[var(--border)] rounded-full px-3.5 py-1 text-[13px] text-[var(--ink-muted)]">
            <span className="text-[var(--gold)] font-semibold">
              {surah.verses}
            </span>{" "}
            Verses
          </div>
          <div className="s-pill bg-[var(--parchment)] border border-[var(--border)] rounded-full px-3.5 py-1 text-[13px] text-[var(--ink-muted)]">
            Juz{" "}
            <span className="text-[var(--gold)] font-semibold">
              {surah.juz}
            </span>
          </div>
        </div>
      </div>
      {surahNumber !== 9 && (
        <div className="bismillah-surah text-center font-[var(--font-amiri)] text-[28px] rtl text-[var(--ink)] py-8 px-6 border-b border-[var(--border)]">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </div>
      )}
      <div className="ayat-list">
        {ayat.map((ayah, idx) => (
          <div
            key={idx}
            className="ayah-row flex border-b border-[var(--border)] transition-all hover:bg-[var(--gold-faint)]"
          >
            <div className="ayah-num-col w-[52px] flex-shrink-0 flex justify-center pt-5 pl-3">
              <div className="ayah-badge w-8 h-8 border border-[var(--border)] rounded-full flex items-center justify-center text-[11px] text-[var(--ink-faint)] font-[var(--font-crimson)] bg-[var(--parchment)]">
                {idx + 1}
              </div>
            </div>
            <div className="ayah-content flex-1 py-5 pr-6 pl-2 min-w-0">
              <div className="ayah-arabic font-[var(--font-arabic-1)] text-[var(--arabic-size)] rtl text-right leading-[1.9] text-[var(--ink)] mb-3">
                {ayah.ar} ۝{toArabicNum(idx + 1)}
              </div>
              <div className="ayah-translation text-[var(--trans-size)] leading-relaxed text-[var(--ink-muted)] italic">
                {ayah.tr}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
