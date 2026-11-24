"use client";

import { useState, useEffect } from "react";
import { Globe, Sparkles } from "lucide-react";
import { Language } from "./LanguageSelector";

export default function TranslationLoader() {
  const [active, setActive] = useState(false);
  const [targetLang, setTargetLang] = useState<Language | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleStartTranslation = (e: Event) => {
      const customEvent = e as CustomEvent<Language>;
      const lang = customEvent.detail;
      if (!lang) return;

      setTargetLang(lang);
      setActive(true);

      // Keep loader visible while DOM translates, then smoothly dissolve
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        setActive(false);
      }, 1100);
    };

    window.addEventListener("dpf-translate-language", handleStartTranslation);
    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("dpf-translate-language", handleStartTranslation);
    };
  }, []);

  if (!active || !targetLang) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-stone-950/65 backdrop-blur-md select-none animate-in fade-in duration-200 notranslate"
      translate="no"
      aria-live="polite"
    >
      <div className="relative bg-white/95 backdrop-blur-xl border border-stone-200/90 shadow-2xl rounded-3xl p-6 sm:p-8 max-w-sm w-[90%] mx-auto flex flex-col items-center text-center animate-in zoom-in-95 duration-200">
        {/* Animated Dual-Ring Emblem Badge */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Outer glowing pulsing emerald ring */}
          <div className="absolute inset-0 rounded-full border-2 border-emerald-500/30 animate-ping opacity-25" />

          {/* Slow dashed emerald ring */}
          <div
            className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-600/40 animate-spin"
            style={{ animationDuration: "6s" }}
          />

          {/* Smooth spinning amber accent ring */}
          <div
            className="absolute inset-0 rounded-full border-t-2 border-r-2 border-[#b45309] animate-spin"
            style={{ animationDuration: "1.2s" }}
          />

          {/* Center circular badge with logo */}
          <div className="relative w-16 h-16 rounded-full bg-white shadow-soft flex items-center justify-center p-2 border border-stone-200/90">
            <img
              src="/images/logo.png"
              alt="Dev Prabha Foundation"
              className="w-10 h-10 object-contain animate-pulse"
            />
          </div>
        </div>

        {/* Translation Status Badge */}
        <div className="mt-4 space-y-1.5">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-[11px] font-bold">
            <Globe
              size={13}
              className="text-emerald-700 animate-spin"
              style={{ animationDuration: "3s" }}
            />
            <span>Translating Content</span>
            <Sparkles size={11} className="text-amber-500" />
          </div>

          <h3 className="font-display font-black text-lg sm:text-xl text-stone-900 tracking-tight leading-snug">
            Switching to {targetLang.native}
          </h3>

          <p className="text-xs text-stone-500 font-medium max-w-[260px] mx-auto leading-relaxed">
            Converting entire website content into {targetLang.name}...
          </p>
        </div>

        {/* Animated Gradient Progress Bar */}
        <div className="w-48 h-1.5 bg-stone-100 rounded-full overflow-hidden mt-5 relative border border-stone-200/60">
          <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#1b4332] via-[#b45309] to-[#166534] w-full animate-pulse" />
        </div>
      </div>
    </div>
  );
}
