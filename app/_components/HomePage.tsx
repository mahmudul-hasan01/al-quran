"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Surah {
  _id: string;
  id: number;
  name: string;
  transliteration: string;
  translation: string;
  type: string;
  total_verses: number;
}

export default function HomePage() {
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/surahs`)
      .then((res) => {
        setSurahs(res.data);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load surahs.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24 text-[var(--ink-muted)] text-sm tracking-widest uppercase">
        Loading…
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-24 text-red-500 text-sm">
        {error}
      </div>
    );
  }

  return (
    <div id="page-home">
      <div className="page-header text-center pt-12 pb-8 px-6 relative">
        <div className="arabic-title text-[42px] rtl text-[var(--ink)] leading-tight mb-2">
          القرآن الكريم
        </div>
        <div className="latin-title text-[15px] text-[var(--ink-muted)] tracking-[0.06em] uppercase font-light">
          The Noble Quran · 114 Surahs · 6,236 Ayahs
        </div>
        <div className="after:content-[''] after:block after:w-[60px] after:h-[2px] after:bg-[var(--gold)] after:mx-auto after:mt-4 after:rounded-full" />
      </div>
      <div className="bismillah-banner text-center text-[28px] rtl text-[var(--gold)] py-4 px-6 pb-8">
        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
      </div>
      <div className="surah-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-[var(--border)]">
        {surahs?.map((surah) => (
          <Link
            href={`/${surah._id}`}
            key={surah._id}
            // onClick={() => onSelectSurah(surah.id)}
            className="surah-card flex items-center gap-3 py-3.5 px-5 cursor-pointer bg-[var(--parchment)] border-b border-r border-[var(--border)] transition-all hover:bg-[var(--gold-faint)]"
          >
            <div className="surah-num w-[38px] h-[38px] flex-shrink-0 bg-[var(--parchment-dark)] border border-[var(--border)] rounded-full flex items-center justify-center text-[13px] text-[var(--ink-muted)] font-[var(--font-crimson)] font-semibold">
              {surah.id}
            </div>
            <div className="surah-info flex-1 min-w-0">
              <div className="surah-en text-[15px] font-semibold text-[var(--ink)]">
                {surah.transliteration}
              </div>
              <div className="surah-meta text-xs text-[var(--ink-faint)] mt-0.5">
                {surah.type} · {surah.total_verses} verses
              </div>
            </div>
            <div className="surah-ar text-[22px] rtl text-[var(--gold)] flex-shrink-0">
              {surah.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
