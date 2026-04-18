"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

interface HeaderProps {
  onToggleSettings: () => void;
}

export default function Header({ onToggleSettings }: HeaderProps) {
  const router = useRouter();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const value = (e.target as HTMLInputElement).value;
      router.push(`?q=${value}`);
    }
  };

  return (
    <header className="sticky top-0 z-[100] bg-[var(--parchment)] border-b border-[var(--border-strong)] px-6 h-[60px] flex items-center justify-between gap-3">
      <Link
        href={"/"}
        className="logo flex items-center gap-2.5 flex-shrink-0 cursor-pointer bg-transparent border-none"
      >
        <div className="logo-icon w-8 h-8 bg-[var(--gold)] rounded-lg flex items-center justify-center text-lg text-white">
          م
        </div>
        <div className="logo-text text-xl font-semibold tracking-tight text-[var(--ink)]">
          Mush<span className="text-[var(--gold)]">af</span>
        </div>
      </Link>

      <div className="search-wrap flex-1 max-w-120 relative">
        <input
          type="text"
          placeholder="Search translations..."
          className="w-full h-[38px] pl-3.5 pr-10 bg-[var(--parchment-dark)] border border-[var(--border)] rounded-full font-[var(--font-crimson)] text-[15px] text-[var(--ink)] outline-none focus:border-[var(--gold)] placeholder:text-[var(--ink-faint)]"
          onKeyDown={handleSearch}
        />
        <button className="search-btn absolute right-2.5 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer text-[var(--ink-muted)] p-1">
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </button>
      </div>

      <button
        onClick={onToggleSettings}
        className="settings-btn bg-transparent border border-[var(--border)] rounded-lg px-2.5 py-1.5 cursor-pointer text-[var(--ink-muted)] font-[var(--font-crimson)] text-sm flex items-center gap-1.5 transition-all hover:border-[var(--gold)] hover:text-[var(--gold)]"
      >
        <svg
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
        Settings
      </button>
    </header>
  );
}
