/* eslint-disable @typescript-eslint/no-explicit-any */
const ARABIC_FONTS = [
  "var(--font-amiri)",
  "var(--font-scheherazade)",
  "var(--font-lateef)",
] as const;

export const applyTheme = (settings: any) => {
  if (typeof document === "undefined" || !document.body) return;

  const rawFont = Number(settings?.font);
  const fontIndex = Math.min(
    Math.max(1, Number.isFinite(rawFont) ? rawFont : 1),
    ARABIC_FONTS.length,
  );

  const el = document.body;

  el.style.setProperty("--arabic-size", `${settings.arabicSize}px`);
  el.style.setProperty("--trans-size", `${settings.transSize}px`);
  el.style.setProperty("--arabic-font", ARABIC_FONTS[fontIndex - 1]);
};
