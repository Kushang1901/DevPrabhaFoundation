"use client";

import { useState, useEffect, useRef } from "react";
import { Globe, ChevronDown, Check, Search, X } from "lucide-react";

export interface Language {
  code: string;
  name: string;
  native: string;
}

export const INDIAN_LANGUAGES: Language[] = [
  { code: "en", name: "English", native: "English (Default)" },
  { code: "hi", name: "Hindi", native: "हिन्दी" },
  { code: "bho", name: "Bhojpuri", native: "भोजपुरी" },
  { code: "mai", name: "Maithili", native: "मैथिली" },
  { code: "bn", name: "Bengali", native: "বাংলা" },
  { code: "mr", name: "Marathi", native: "मराठी" },
  { code: "te", name: "Telugu", native: "తెలుగు" },
  { code: "ta", name: "Tamil", native: "தமிழ்" },
  { code: "gu", name: "Gujarati", native: "ગુજરાતી" },
  { code: "ur", name: "Urdu", native: "اردو" },
  { code: "kn", name: "Kannada", native: "ಕನ್ನಡ" },
  { code: "ml", name: "Malayalam", native: "മലയാളം" },
  { code: "pa", name: "Punjabi", native: "ਪੰਜਾਬੀ" },
  { code: "or", name: "Odia", native: "ଓଡ଼ିଆ" },
  { code: "as", name: "Assamese", native: "অসমীয়া" },
  { code: "sa", name: "Sanskrit", native: "संस्कृतम्" },
  { code: "ne", name: "Nepali", native: "नेपाली" },
  { code: "sd", name: "Sindhi", native: "سنڌي" },
  { code: "doi", name: "Dogri", native: "डोगरी" },
  { code: "gom", name: "Konkani", native: "कोंकणी" },
  { code: "ks", name: "Kashmiri", native: "کٲشُر / कश्मीरी" },
  { code: "sat", name: "Santali", native: "ᱥᱟᱱᱛᱟᱲᱤ / संथाली" },
];

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
    __googleTranslateInitialized?: boolean;
  }
}

interface LanguageSelectorProps {
  variant?: "topbar" | "navbar" | "drawer";
}

export default function LanguageSelector({ variant = "navbar" }: LanguageSelectorProps) {
  const [currentLang, setCurrentLang] = useState<Language>(INDIAN_LANGUAGES[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Sync active language from cookie on mount
  useEffect(() => {
    if (typeof document !== "undefined") {
      const match = document.cookie.match(/googtrans=\/en\/([a-zA-Z-]+)/);
      if (match && match[1]) {
        const found = INDIAN_LANGUAGES.find((l) => l.code === match[1]);
        if (found) setCurrentLang(found);
      }
    }

    // Reset back to English only on browser unload/reload
    const handleBeforeUnload = () => {
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "googtrans=/en/en; path=/;";
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  // Ensure body top offset remains 0px without deleting Google's translation worker iframes
  useEffect(() => {
    if (typeof window === "undefined") return;

    const enforceZeroTop = () => {
      if (document.body.style.top && document.body.style.top !== "0px") {
        document.body.style.setProperty("top", "0px", "important");
      }
      if (document.documentElement.style.top && document.documentElement.style.top !== "0px") {
        document.documentElement.style.setProperty("top", "0px", "important");
      }
      const banner = document.querySelector<HTMLElement>(".goog-te-banner-frame");
      if (banner) {
        banner.style.setProperty("display", "none", "important");
        banner.style.setProperty("visibility", "hidden", "important");
      }
    };

    enforceZeroTop();
    const interval = setInterval(enforceZeroTop, 300);
    return () => clearInterval(interval);
  }, []);

  // Initialize Google Translate Script
  useEffect(() => {
    if (typeof window === "undefined") return;

    window.googleTranslateElementInit = () => {
      if (!window.__googleTranslateInitialized && window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false,
          },
          "google_translate_element"
        );
        window.__googleTranslateInitialized = true;
      }
    };

    const existingScript = document.getElementById("google-translate-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google?.translate?.TranslateElement) {
      window.googleTranslateElementInit();
    }
  }, []);

  // Handle outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Translate handler
  const handleSelectLanguage = (lang: Language) => {
    setCurrentLang(lang);
    setIsOpen(false);
    setSearchQuery("");

    if (typeof window === "undefined") return;

    // Trigger visual translation loader transition
    window.dispatchEvent(
      new CustomEvent("dpf-translate-language", { detail: lang })
    );

    const targetCode = lang.code;
    const cookieVal = targetCode === "en" ? "/en/en" : `/en/${targetCode}`;

    // Set Google Translate cookie on root path and domain
    document.cookie = `googtrans=${cookieVal}; path=/;`;
    document.cookie = `googtrans=${cookieVal}; domain=${window.location.hostname}; path=/;`;

    // Trigger select element change
    const triggerCombo = () => {
      const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
      if (select) {
        select.value = targetCode;
        select.dispatchEvent(new Event("change"));
        select.dispatchEvent(new Event("input"));
        return true;
      }
      return false;
    };

    if (!triggerCombo()) {
      let attempts = 0;
      const pollTimer = setInterval(() => {
        attempts++;
        if (triggerCombo() || attempts > 30) {
          clearInterval(pollTimer);
        }
      }, 100);
    }
  };

  const filteredLanguages = INDIAN_LANGUAGES.filter(
    (l) =>
      l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.native.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Drawer variant (for mobile slide-in menu)
  if (variant === "drawer") {
    return (
      <div className="w-full notranslate" ref={dropdownRef}>
        <div className="flex items-center justify-between mb-2 px-1">
          <div className="flex items-center space-x-1.5 text-stone-600 text-xs font-bold uppercase tracking-wider">
            <Globe size={14} className="text-[#b45309]" />
            <span>Select Language</span>
          </div>
          <span className="text-[10px] text-stone-400">Default: English</span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-stone-800 text-xs font-bold hover:bg-stone-100 transition-colors shadow-xs"
        >
          <div className="flex items-center space-x-2">
            <Globe size={14} className="text-emerald-700" />
            <span className="text-stone-900">{currentLang.native}</span>
            <span className="text-[10px] text-stone-400 font-normal">({currentLang.name})</span>
          </div>
          <ChevronDown size={14} className={`text-stone-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {isOpen && (
          <div className="mt-2 w-full bg-white rounded-xl shadow-lg border border-stone-200 overflow-hidden">
            <div className="p-2 border-b border-stone-100 bg-stone-50 flex items-center space-x-2">
              <Search size={14} className="text-stone-400 shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search languages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-xs text-stone-800 placeholder-stone-400 focus:outline-none"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="text-stone-400 hover:text-stone-600">
                  <X size={12} />
                </button>
              )}
            </div>

            <div className="max-h-52 overflow-y-auto divide-y divide-stone-50 py-1 text-xs">
              {filteredLanguages.map((lang) => {
                const isSelected = currentLang.code === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => handleSelectLanguage(lang)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-left transition-colors ${
                      isSelected ? "bg-emerald-50 text-emerald-800 font-bold" : "hover:bg-stone-50 text-stone-700"
                    }`}
                  >
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold">{lang.native}</span>
                      <span className="text-[10px] text-stone-400 font-normal">{lang.name}</span>
                    </div>
                    {isSelected && <Check size={14} className="text-emerald-600 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Default navbar variant (clean pill next to Donate button)
  return (
    <div className="relative notranslate shrink-0" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 sm:space-x-1.5 px-2 sm:px-2.5 py-1.5 rounded-full border border-stone-200 hover:border-emerald-600 bg-stone-50 hover:bg-emerald-50/50 text-stone-700 hover:text-emerald-800 transition-all text-[10.5px] sm:text-xs font-bold shadow-xs active:scale-95 shrink-0 h-8 sm:h-auto"
        title="Change Language"
      >
        <Globe size={13} className="text-emerald-700 shrink-0" />
        <span className="hidden min-[380px]:inline truncate max-w-[65px] sm:max-w-[85px]">
          {currentLang.native.split(" ")[0]}
        </span>
        <span className="min-[380px]:hidden font-bold uppercase text-[10px] tracking-tight">
          {currentLang.code.slice(0, 2)}
        </span>
        <ChevronDown size={11} className={`text-stone-400 transition-transform shrink-0 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-64 sm:w-68 bg-white text-stone-900 rounded-2xl shadow-2xl border border-stone-200/90 z-[100] overflow-hidden animate-in fade-in zoom-in-95 duration-150">
          <div className="p-2.5 border-b border-stone-100 bg-stone-50/80 flex items-center space-x-2">
            <Search size={14} className="text-stone-400 shrink-0" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search Indian languages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-xs text-stone-800 placeholder-stone-400 focus:outline-none"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="text-stone-400 hover:text-stone-600">
                <X size={12} />
              </button>
            )}
          </div>

          <div className="max-h-64 overflow-y-auto divide-y divide-stone-50 py-1">
            {filteredLanguages.length === 0 ? (
              <div className="px-3 py-4 text-center text-stone-400 text-xs">No language found</div>
            ) : (
              filteredLanguages.map((lang) => {
                const isSelected = currentLang.code === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => handleSelectLanguage(lang)}
                    className={`w-full flex items-center justify-between px-3.5 py-2 text-left transition-colors ${
                      isSelected
                        ? "bg-emerald-50 text-emerald-800 font-bold"
                        : "hover:bg-stone-50 text-stone-700"
                    }`}
                  >
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold">{lang.native}</span>
                      <span className="text-[10px] text-stone-400 font-normal">{lang.name}</span>
                    </div>
                    {isSelected && <Check size={14} className="text-emerald-600 shrink-0" />}
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
