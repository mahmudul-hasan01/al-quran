import { notFound } from "next/navigation";

interface Verse {
  id: number;
  text: string;
  translation: string;
}

interface Surah {
  _id: string;
  id: number;
  name: string;
  transliteration: string;
  translation: string;
  type: string;
  total_verses: number;
  verses: Verse[];
}

//  Highlight
function highlightText(text: string, query: string) {
  if (!query?.trim()) return text;

  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "gi");

  return text.split(regex).map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={i} className="bg-yellow-300 text-black px-1 rounded">
        {part}
      </mark>
    ) : (
      part
    ),
  );
}

async function getSurah(id: string, search?: string): Promise<Surah | null> {
  try {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/surahs/${id}`;

    if (search) {
      url += `?q=${encodeURIComponent(search)}`;
    }

    const res = await fetch(url, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error("Fetch failed:", res.status, res.statusText);
      return null;
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ q?: string }>;
}) {
  const { id } = await params;
  const { q } = await searchParams;
  const query = q ?? "";

  const surah = await getSurah(id, query);

  if (!surah) return notFound();

  return (
    <div id="page-surah">
      {/* HERO */}
      <div className="surah-hero text-center py-10 px-6 border-b border-[var(--border)] bg-[var(--parchment-dark)]">
        <div className="s-number text-[13px] tracking-[0.08em] text-[var(--ink-faint)] uppercase mb-2">
          Surah {surah.id} of 114
        </div>

        <div className="s-arabic text-5xl rtl text-[var(--ink)] leading-tight">
          {surah.name}
        </div>

        <div className="s-english text-[22px] text-[var(--ink-muted)] mt-1">
          {surah.transliteration} · {surah.translation}
        </div>

        <div className="s-info mt-3 flex justify-center gap-5">
          <div className="s-pill bg-[var(--parchment)] border border-[var(--border)] rounded-full px-3.5 py-1 text-[13px] text-[var(--ink-muted)]">
            Revelation{" "}
            <span className="text-[var(--gold)] font-semibold capitalize">
              {surah.type}
            </span>
          </div>

          <div className="s-pill bg-[var(--parchment)] border border-[var(--border)] rounded-full px-3.5 py-1 text-[13px] text-[var(--ink-muted)]">
            <span className="text-[var(--gold)] font-semibold">
              {surah.total_verses}
            </span>{" "}
            Verses
          </div>
        </div>
      </div>

      {/* BISMILLAH */}
      {surah.id !== 9 && (
        <div className="bismillah-surah text-center text-[28px] rtl text-[var(--ink)] py-8 px-6 border-b border-[var(--border)]">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </div>
      )}

      {/* AYAH LIST */}
      <div className="ayat-list">
        {surah.verses.map((verse) => (
          <div
            key={verse.id}
            className="ayah-row flex border-b border-[var(--border)] transition-all hover:bg-[var(--gold-faint)]"
          >
            {/* NUMBER */}
            <div className="ayah-num-col w-[52px] flex-shrink-0 flex justify-center pt-5 pl-3">
              <div className="ayah-badge w-8 h-8 border border-[var(--border)] rounded-full flex items-center justify-center text-[14px] text-[var(--ink-faint)] font-[var(--font-crimson)] bg-[var(--parchment)]">
                {verse.id}
              </div>
            </div>

            {/* CONTENT */}
            <div className="ayah-content flex-1 py-5 pr-6 pl-2 min-w-0">
              {/* Arabic (UNCHANGED) */}
              <div
                className="ayah-arabic rtl text-right leading-[1.9] text-[var(--ink)] mb-3"
                style={{ fontSize: "var(--arabic-size)" }}
              >
                {verse.text}
              </div>

              {/* Translation (ONLY ADD HIGHLIGHT HERE) */}
              <div
                className="ayah-translation leading-relaxed text-[var(--ink-muted)] italic"
                style={{ fontSize: "var(--trans-size)" }}
              >
                {highlightText(verse.translation, query)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
