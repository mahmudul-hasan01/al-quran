"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + Math.random() * 25, 95));
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-[var(--parchment)] flex flex-col items-center justify-center z-[999] gap-4 transition-opacity duration-400">
      <div className="loading-arabic text-5xl rtl text-[var(--gold)]">
        القرآن الكريم
      </div>
      <div className="loading-text text-sm text-[var(--ink-faint)] tracking-wide">
        Loading the Noble Quran...
      </div>
      <div className="progress-bar w-[200px] h-[2px] bg-[var(--border)] rounded-full overflow-hidden">
        <div
          className="progress-fill h-full bg-[var(--gold)] rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
