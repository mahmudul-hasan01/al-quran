// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import Header from "./_components/Header";
import LoadingScreen from "./_components/LoadingScreen";
import SettingsPanel from "./_components/SettingsPanel";
import ScrollTop from "./_components/ScrollTop";
import HomePage from "./_components/HomePage";
import SurahPage from "./_components/SurahPage";
import SearchPage from "./_components/SearchPage";

export type PageType = "home" | "surah" | "search";

export interface Settings {
  font: number;
  arabicSize: number;
  transSize: number;
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");
  const [selectedSurah, setSelectedSurah] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [settings, setSettings] = useState<Settings>({
    font: 1,
    arabicSize: 26,
    transSize: 16,
  });
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("mushaf-settings");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings((prev) => ({ ...prev, ...parsed }));
      } catch (e) {}
    }
    setTimeout(() => setLoading(false), 1200);
  }, []);

  useEffect(() => {
    localStorage.setItem("mushaf-settings", JSON.stringify(settings));
    document.documentElement.style.setProperty(
      "--arabic-size",
      `${settings.arabicSize}px`,
    );
    document.documentElement.style.setProperty(
      "--trans-size",
      `${settings.transSize}px`,
    );
    const fonts = [
      "",
      "var(--font-amiri)",
      "var(--font-scheherazade)",
      "var(--font-lateef)",
    ];
    document.documentElement.style.setProperty(
      "--arabic-font",
      fonts[settings.font],
    );
  }, [settings]);

  const showHome = () => {
    setCurrentPage("home");
    setSelectedSurah(null);
    setSearchQuery("");
  };

  const showSurah = (n: number) => {
    setSelectedSurah(n);
    setCurrentPage("surah");
    window.scrollTo(0, 0);
  };

  const showSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage("search");
  };

  return (
    <>
      {loading && <LoadingScreen />}
      <Header
        onShowHome={showHome}
        onSearch={showSearch}
        onToggleSettings={() => setSettingsOpen(!settingsOpen)}
      />
      <SettingsPanel
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        settings={settings}
        onSettingsChange={setSettings}
      />
      <ScrollTop />
      <div className="app-body flex-1 flex relative">
        <main className="flex-1 min-w-0">
          {currentPage === "home" && <HomePage onSelectSurah={showSurah} />}
          {currentPage === "surah" && selectedSurah && (
            <SurahPage surahNumber={selectedSurah} />
          )}
          {currentPage === "search" && (
            <SearchPage query={searchQuery} onSelectSurah={showSurah} />
          )}
        </main>
      </div>
    </>
  );
}
