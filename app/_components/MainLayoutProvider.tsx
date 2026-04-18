"use client";

import React, { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";
import Header from "./Header";
import SettingsPanel from "./SettingsPanel";
import ScrollTop from "./ScrollTop";
import { applyTheme } from "@/util/theme";

export default function MainLayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [settings, setSettings] = useState({
    font: 1,
    arabicSize: 26,
    transSize: 16,
  });
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [settingsReady, setSettingsReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("mushaf-settings");
    requestAnimationFrame(() => {
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setSettings((prev) => ({ ...prev, ...parsed }));
        } catch {}
      }
      setSettingsReady(true);
    });
    setTimeout(() => setLoading(false), 1200);
  }, []);

  useEffect(() => {
    if (!settingsReady) return;
    localStorage.setItem("mushaf-settings", JSON.stringify(settings));
    applyTheme(settings);
  }, [settings, settingsReady]);

  return (
    <div>
      {loading && <LoadingScreen />}
      <Header onToggleSettings={() => setSettingsOpen(!settingsOpen)} />
      <SettingsPanel
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        settings={settings}
        onSettingsChange={setSettings}
      />
      <ScrollTop />
      {children}
    </div>
  );
}
