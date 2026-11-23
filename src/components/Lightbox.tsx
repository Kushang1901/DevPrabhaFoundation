"use client";

import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { useState, useEffect } from "react";

interface LightboxProps {
  images: { src: string; caption: string }[];
  selectedIndex: number | null;
  onClose: () => void;
}

export default function Lightbox({ images, selectedIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(selectedIndex);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    setCurrentIndex(selectedIndex);
    setZoom(1);
  }, [selectedIndex]);

  // Handle escape and arrow keys
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  if (currentIndex === null || images.length === 0) return null;

  const currentImage = images[currentIndex];

  const handleNext = () => {
    setZoom(1);
    setCurrentIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setZoom(1);
    setCurrentIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
  };

  return (
    <div
      id="lightbox-backdrop"
      className="fixed inset-0 bg-slate-950/95 backdrop-blur-md z-9999 flex flex-col justify-between p-4 selection:bg-none"
    >
      {/* Top Header controls */}
      <div id="lightbox-header" className="flex justify-between items-center text-white pt-2 px-2 md:px-6">
        <div className="font-mono text-sm tracking-widest text-slate-400 font-bold">
          {currentIndex + 1} / {images.length}
        </div>
        <div className="flex items-center space-x-3">
          <button
            id="btn-lightbox-zoomin"
            onClick={() => setZoom((z) => Math.min(z + 0.25, 2.5))}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-300 hover:text-white"
            title="Zoom In"
          >
            <ZoomIn size={20} />
          </button>
          <button
            id="btn-lightbox-zoomout"
            onClick={() => setZoom((z) => Math.max(z - 0.25, 0.75))}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-300 hover:text-white"
            title="Zoom Out"
          >
            <ZoomOut size={20} />
          </button>
          <button
            id="btn-lightbox-close"
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-300 hover:text-white"
            title="Close Lightbox"
          >
            <X size={24} />
          </button>
        </div>
      </div>

      {/* Main Image viewport */}
      <div id="lightbox-viewport" className="relative flex-1 flex items-center justify-center p-4">
        {/* Navigation Arrows */}
        <button
          id="btn-lightbox-prev"
          onClick={handlePrev}
          className="absolute left-4 md:left-8 z-10 p-3 bg-white/5 hover:bg-white/15 hover:scale-105 active:scale-95 text-white rounded-full transition-all duration-200"
          title="Previous Image"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Central Display Image */}
        <div
          id="lightbox-image-wrapper"
          className="max-h-[70vh] max-w-[90vw] md:max-w-[75vw] flex items-center justify-center transition-all duration-300"
          style={{ transform: `scale(${zoom})` }}
        >
          <img
            id="lightbox-current-image"
            src={currentImage.src}
            alt={currentImage.caption}
            referrerPolicy="no-referrer"
            className="max-h-[70vh] max-w-[90vw] md:max-w-[75vw] object-contain rounded-xl shadow-2xl pointer-events-none"
          />
        </div>

        <button
          id="btn-lightbox-next"
          onClick={handleNext}
          className="absolute right-4 md:right-8 z-10 p-3 bg-white/5 hover:bg-white/15 hover:scale-105 active:scale-95 text-white rounded-full transition-all duration-200"
          title="Next Image"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Caption footer overlay */}
      
    </div>
  );
}
