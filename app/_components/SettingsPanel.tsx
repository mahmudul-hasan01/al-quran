"use client";

interface Settings {
  font: number;
  arabicSize: number;
  transSize: number;
}

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  settings: Settings;
  onSettingsChange: (s: Settings) => void;
}

export default function SettingsPanel({
  isOpen,
  onClose,
  settings,
  onSettingsChange,
}: SettingsPanelProps) {
  const fonts = [
    { id: 1, name: "Amiri", css: "var(--font-amiri)" },
    { id: 2, name: "Scheherazade", css: "var(--font-scheherazade)" },
    { id: 3, name: "Lateef", css: "var(--font-lateef)" },
  ];

  const setFont = (fontId: number) => {
    onSettingsChange({ ...settings, font: fontId });
  };

  const setArabicSize = (arabicSize: number) => {
    onSettingsChange({ ...settings, arabicSize });
  };

  const setTransSize = (transSize: number) => {
    onSettingsChange({ ...settings, transSize });
  };

  return (
    <>
      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/30 z-80 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* PANEL */}
      <div
        className={`settings-panel fixed top-[60px] right-0 w-[var(--sidebar-w)] h-[calc(100vh-60px)] bg-[var(--parchment)] border-l border-[var(--border-strong)] p-6 overflow-y-auto z-90 shadow-[var(--shadow)] transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* FONT */}
        <h3 className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[var(--ink-faint)] mb-3">
          Arabic Font
        </h3>

        <div className="font-options flex flex-col gap-2">
          {fonts.map((opt) => (
            <div
              key={opt.id}
              onClick={() => setFont(opt.id)}
              className={`font-option flex items-center gap-2.5 p-2.5 rounded-lg border border-[var(--border)] cursor-pointer transition-all hover:border-[var(--gold)] hover:bg-[var(--gold-faint)] ${
                settings.font === opt.id
                  ? "border-[var(--gold)] bg-[var(--gold-faint)]"
                  : ""
              }`}
            >
              <span className="font-label text-xs text-[var(--ink-muted)]">
                {opt.name}
              </span>

              <span
                className="arabic-preview text-[22px] flex-1 text-right rtl text-[var(--ink)]"
                style={{
                  fontFamily: opt.css,
                }}
              >
                بِسْمِ اللَّهِ
              </span>
            </div>
          ))}
        </div>

        {/* ARABIC SIZE */}
        <h3 className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[var(--ink-faint)] mb-3 mt-5">
          Arabic Font Size
        </h3>

        <div className="size-row flex items-center gap-2.5 py-2">
          <label className="text-sm text-[var(--ink-muted)] flex-1">Size</label>

          <input
            type="range"
            min="18"
            max="48"
            value={settings.arabicSize}
            onChange={(e) => setArabicSize(Number(e.target.value))}
            className="flex-[2] accent-[var(--gold)]"
          />

          <span className="val text-[13px] min-w-[36px] text-right text-[var(--ink-faint)]">
            {settings.arabicSize}px
          </span>
        </div>

        {/* TRANSLATION SIZE */}
        <h3 className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[var(--ink-faint)] mb-3 mt-5">
          Translation Font Size
        </h3>

        <div className="size-row flex items-center gap-2.5 py-2">
          <label className="text-sm text-[var(--ink-muted)] flex-1">Size</label>

          <input
            type="range"
            min="12"
            max="24"
            value={settings.transSize}
            onChange={(e) => setTransSize(Number(e.target.value))}
            className="flex-[2] accent-[var(--gold)]"
          />

          <span className="val text-[13px] min-w-[36px] text-right text-[var(--ink-faint)]">
            {settings.transSize}px
          </span>
        </div>
      </div>
    </>
  );
}
