"use client";

import { useState, useEffect } from "react";
import { QUOTES } from "../data";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function QuoteSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev < QUOTES.length - 1 ? prev + 1 : 0));
    }, 6000); // Auto slide every 6s

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < QUOTES.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : QUOTES.length - 1));
  };

  return (
    <section
      id="quotes-slider-section"
      className="relative py-20 bg-[#143527] text-white overflow-hidden border-y border-[#0f291e]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/15 shadow-soft">
          <Quote size={28} className="text-amber-400 fill-amber-400/20 rotate-180" />
        </div>

        <div className="min-h-[180px] flex items-center justify-center">
          <div
            id={`quote-slide-${currentIndex}`}
            className="transition-all duration-500 transform scale-100"
          >
            <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl italic leading-relaxed text-stone-100 max-w-3xl mx-auto">
              "{QUOTES[currentIndex].text}"
            </blockquote>
            
            <div className="mt-6">
              <h4 className="font-display font-bold text-lg text-amber-300">
                — {QUOTES[currentIndex].author}
              </h4>
              {QUOTES[currentIndex].role && (
                <span className="text-xs uppercase tracking-widest text-stone-300 block mt-1 font-medium">
                  {QUOTES[currentIndex].role}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Action arrow selectors */}
        <div className="flex items-center justify-center space-x-6 mt-10">
          <button
            id="quote-prev-btn"
            onClick={handlePrev}
            className="p-2.5 bg-white/5 hover:bg-white/10 hover:scale-105 active:scale-95 border border-white/10 rounded-full text-white transition-all shadow"
            title="Previous Quote"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {QUOTES.map((_, index) => (
              <button
                id={`quote-dot-${index}`}
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "w-6 bg-[#b45309]" : "w-2 bg-stone-600"
                }`}
                title={`Skip to quote ${index + 1}`}
              />
            ))}
          </div>

          <button
            id="quote-next-btn"
            onClick={handleNext}
            className="p-2.5 bg-white/5 hover:bg-white/10 hover:scale-105 active:scale-95 border border-white/10 rounded-full text-white transition-all shadow"
            title="Next Quote"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
