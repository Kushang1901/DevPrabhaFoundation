"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal when scrolled down beyond 280px
      if (window.scrollY > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      id="back-to-top-container"
      className="fixed bottom-6 left-6 z-40"
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1b4332] hover:bg-[#143527] text-white shadow-soft-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border border-white/20 group relative ${
          isVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        <ChevronUp
          size={22}
          className="group-hover:-translate-y-0.5 transition-transform duration-200"
        />

        {/* Hover Tooltip on Right of Button */}
        <span className="absolute left-14 scale-0 group-hover:scale-100 bg-[#143527] text-white font-medium text-[11px] py-1 px-2.5 rounded-lg shadow-md whitespace-nowrap origin-left transition-all duration-200 pointer-events-none hidden sm:inline-block">
          Back to top
        </span>
      </button>
    </div>
  );
}
