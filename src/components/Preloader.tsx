"use client";

import { useState, useEffect } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Graceful initial reveal timer
    const timer = setTimeout(() => {
      setLoading(false);
    }, 750);

    // Completely unmount after fade transition
    const unmountTimer = setTimeout(() => {
      setVisible(false);
    }, 1450);

    return () => {
      clearTimeout(timer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden={!loading}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#faf8f5] select-none transition-all duration-700 ease-out ${
        loading
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none scale-105"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Emblem Badge */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
          {/* Subtle slow dashed ring */}
          <div
            className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-700/25 animate-spin"
            style={{ animationDuration: "8s" }}
          />

          {/* Smooth accent spinning arc */}
          <div
            className="absolute inset-0 rounded-full border-t-2 border-r-2 border-[#b45309] animate-spin"
            style={{ animationDuration: "1.6s" }}
          />

          {/* Central White Badge with logo.png */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white shadow-soft-lg flex items-center justify-center p-2.5 border border-stone-200/90 transition-transform">
            <img
              src="/images/logo.png"
              alt="Dev Prabha Foundation"
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain animate-pulse"
            />
          </div>
        </div>

        {/* Brand Text */}
        <div className="text-center mt-5 space-y-1">
          <h2 className="font-display font-black text-lg sm:text-xl text-[#1b4332] tracking-wider uppercase">
            Dev Prabha Foundation
          </h2>
          <p className="text-[11px] sm:text-xs text-stone-500 font-medium tracking-widest uppercase">
            Transforming Lives • 80G Certified Trust
          </p>
        </div>

        {/* Minimal Progress Bar */}
        <div className="w-32 sm:w-40 h-1 bg-stone-200/80 rounded-full overflow-hidden mt-4 relative">
          <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#1b4332] via-[#b45309] to-[#166534] w-full animate-pulse" />
        </div>
      </div>
    </div>
  );
}
