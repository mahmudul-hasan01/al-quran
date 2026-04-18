// components/SearchPage.tsx
"use client";

import { getAyat } from "@/data/ayat";
import { surahs } from "@/data/surahs";
import { useState, useEffect } from "react";

interface SearchPageProps {
  query: string;
  onSelectSurah: (n: number) => void;
}

interface SearchResult {
  surahN: number;
  surahAr: string;
  surahEn: string;
  ayahN: number;
  ar: string;
  tr: string;
}

export default function SearchPage({ query, onSelectSurah }: SearchPageProps) {
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (!query) return;
    const q = query.toLowerCase();
    const searchResults: SearchResult[] = [];
    surahs.forEach((surah) => {
      const ayat = getAyat(surah.n);
      ayat.forEach((ayah, i) => {
        if (ayah.tr.toLowerCase().includes(q)) {
          searchResults.push({
            surahN: surah.n,
            surahAr: surah.ar,
            surahEn: surah.en,
            ayahN: i + 1,
            ar: ayah.ar,
            tr: ayah.tr,
          });
        }
      });
    });
    setResults(searchResults);
  }, [query]);

  const escapeRegExp = (string: string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  const highlightText = (text: string, search: string) => {
    const re = new RegExp(`(${escapeRegExp(search)})`, "gi");
    return text.replace(
      re,
      "<mark class='bg-[var(--gold-light)] text-[var(--ink)] rounded px-0.5 font-normal'>$1</mark>",
    );
  };

  return (
    <div id="page-search">
      <div className="search-page-header py-8 px-6 border-b border-[var(--border)]">
        <h2 className="text-[22px] font-semibold mb-1">
          {results.length
            ? `${results.length} result${results.length > 1 ? "s" : ""} for "${query}"`
            : `No results for "${query}"`}
        </h2>
        <p className="text-sm text-[var(--ink-faint)]">
          {results.length ? "Tap any result to open the surah" : ""}
        </p>
      </div>
      <div id="searchResults">
        {results.length ? (
          results.map((result, idx) => (
            <div
              key={idx}
              onClick={() => onSelectSurah(result.surahN)}
              className="search-result-item py-4 px-6 border-b border-[var(--border)] cursor-pointer transition-all hover:bg-[var(--gold-faint)]"
            >
              <div className="search-result-ref text-xs text-[var(--gold)] font-semibold uppercase tracking-[0.06em] mb-1.5">
                {result.surahEn} · {result.surahN}:{result.ayahN}
              </div>
              <div className="search-result-arabic font-[var(--font-amiri)] text-[22px] rtl text-right text-[var(--ink)] mb-2 leading-relaxed">
                {result.ar}
              </div>
              <div
                className="search-result-trans text-[15px] text-[var(--ink-muted)] italic leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: highlightText(result.tr, query),
                }}
              />
            </div>
          ))
        ) : (
          <div className="no-results text-center py-16 px-6 text-[var(--ink-faint)] text-lg">
            No matching verses found
          </div>
        )}
      </div>
    </div>
  );
}
