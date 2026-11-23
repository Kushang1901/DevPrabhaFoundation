"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { GALLERY_IMAGES } from "@/data";

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      lightboxIndex === 0 ? GALLERY_IMAGES.length - 1 : lightboxIndex - 1
    );
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      lightboxIndex === GALLERY_IMAGES.length - 1 ? 0 : lightboxIndex + 1
    );
  };

  const currentImage =
    lightboxIndex !== null ? GALLERY_IMAGES[lightboxIndex] : null;

  return (
    <div
      id="gallery-tab-content"
      className="py-16 md:py-24 bg-[#faf8f5] animate-in fade-in duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#b45309] bg-[#fef3c7] px-3.5 py-1.5 rounded-full">
            Field Evidence
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#1b4332] tracking-tight">
            Impact Photo Gallery
          </h1>
          <p className="text-stone-600 text-sm md:text-base leading-relaxed">
            A visual journey through our health camps, school libraries, women skilling workshops, and rural community welfare drives.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((image, index) => (
            <div
              key={index}
              onClick={() => setLightboxIndex(index)}
              className="group relative overflow-hidden rounded-3xl bg-stone-900 border border-[#e7e5e4] shadow-soft hover:shadow-soft-lg cursor-pointer transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.caption || `Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-stone-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <p className="text-xs text-white font-medium leading-relaxed">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors p-2"
              title="Close Lightbox"
            >
              <X size={28} />
            </button>

            {/* Previous */}
            <button
              onClick={handlePrev}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white rounded-full p-3 z-10 transition-colors"
              title="Previous Photo"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next */}
            <button
              onClick={handleNext}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white rounded-full p-3 z-10 transition-colors"
              title="Next Photo"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image & Caption */}
            <div className="bg-stone-950 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={currentImage.src}
                alt={currentImage.caption}
                className="w-full max-h-[75vh] object-contain mx-auto"
              />
              {currentImage.caption && (
                <div className="p-4 text-center bg-stone-900 border-t border-stone-800 text-stone-200 text-xs sm:text-sm">
                  {currentImage.caption}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
