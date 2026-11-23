"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  MapPin,
  Heart,
  Stethoscope,
  Users,
  BedDouble,
  Leaf,
} from "lucide-react";

// Components
import QuoteSlider from "@/components/QuoteSlider";
import AnimatedCounter from "@/components/AnimatedCounter";

// Data
import {
  PROJECTS,
  WORKING_AREAS,
  GALLERY_IMAGES,
  FOUNDERS,
  BANK_DETAILS,
} from "@/data";
import { getIconWidget } from "@/utils/getIconWidget";

export default function HomePage() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const heroSlides = [
    {
      image: "/images/Aboutus.jpeg",
      tag: "REG. PUBLIC CHARITABLE TRUST • 80G CERTIFIED",
      headlineLine1: "Transforming Lives Through",
      headlineHighlight: "Healthcare, Education & Social Dignity",
      description:
        "Dev Prabha Foundation (DPF) is actively constructing a 200-bed Multispecialty Hospital in Sugauli, Bihar, bringing high-quality medical facilities, girl-child retention schools, and women self-help empowerment to underprivileged families.",
      primaryCtaText: "DONATE DIRECT (80G TAX EXEMPT)",
      primaryCtaLink: "/donate",
      secondaryCtaText: "OUR 200-BED HOSPITAL",
      secondaryCtaLink: "/projects",
    },
    {
      image: "/images/medicalcamp.jpg",
      tag: "PREVENTIVE RURAL HEALTHCARE • FREE MEDICINES",
      headlineLine1: "Delivering Free Healthcare to",
      headlineHighlight: "Bihar's Most Underserved Remote Villages",
      description:
        "Conducting diagnosis, pediatric screenings, distributing free medicines and eyeglasses across remote rural blocks in East Champaran and adjoining districts.",
      primaryCtaText: "SUPPORT MEDICAL CAMPS",
      primaryCtaLink: "/donate",
      secondaryCtaText: "EXPLORE HEALTH INITIATIVES",
      secondaryCtaLink: "/activities",
    },
    {
      image: "/images/slider3.png",
      tag: "WOMEN EMPOWERMENT • VOCATIONAL SKILLING",
      headlineLine1: "Fostering Self-Reliance Through",
      headlineHighlight: "Women Skilling & Micro-Enterprises",
      description:
        "Empowering rural women with vocational tailoring, organic composting training, and financial self-reliance through active Self-Help Groups (SHGs).",
      primaryCtaText: "SPONSOR WOMEN LIVELIHOOD",
      primaryCtaLink: "/donate",
      secondaryCtaText: "OUR WELFARE ACTIVITIES",
      secondaryCtaLink: "/activities",
    },
    {
      image: "/images/slider1.jpg",
      tag: "CHILD RETENTION • VILLAGE LIBRARIES",
      headlineLine1: "Igniting Young Minds Through",
      headlineHighlight: "Quality Education & Retention Hubs",
      description:
        "Supplying textbooks, smart educational modules, school retention scholarships, and village study centers to eliminate rural drop-out rates.",
      primaryCtaText: "SPONSOR A CHILD'S EDUCATION",
      primaryCtaLink: "/donate",
      secondaryCtaText: "VIEW IMPACT GALLERY",
      secondaryCtaLink: "/gallery",
    },
  ];

  // Smooth auto-slide every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setSliderIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, heroSlides.length]);

  const nextSlide = () => {
    setSliderIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setSliderIndex((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <div id="home-page-container" className="space-y-16 sm:space-y-24">
      {/* ========================================================
          1. FULL-WIDTH HERO SECTION: DYNAMIC CINEMATIC SLIDER
          (Background Image & Hero Content Translate Smoothly Together)
      ======================================================== */}
      <section className="relative w-full overflow-hidden">
        <div
          className="relative w-full overflow-hidden bg-stone-950"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Horizontal sliding track: Silky smooth quintic easing curve */}
          <div
            className="flex w-full transition-transform duration-1000"
            style={{
              transform: `translateX(-${sliderIndex * 100}%)`,
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {heroSlides.map((slide, idx) => {
              const isActive = sliderIndex === idx;
              return (
                <div
                  key={idx}
                  className="w-full shrink-0 relative flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-12 pt-12 sm:pt-14 lg:pt-16 pb-20 sm:pb-24 lg:pb-26 min-h-[560px] sm:min-h-[600px] lg:min-h-[630px]"
                >
                  {/* Full-bleed background image with subtle live motion */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img
                      src={slide.image}
                      alt={slide.headlineHighlight}
                      className={`w-full h-full object-cover object-center transition-transform duration-[7000ms] ease-out ${
                        isActive ? "scale-105" : "scale-100"
                      }`}
                    />
                    {/* Rich Dark Forest Teal Gradient Overlay matching reference screenshot */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#071f16]/95 via-[#0e3325]/85 to-[#071f16]/95" />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>

                  {/* Centered Hero Content with Silky Smooth Cascade Transition */}
                  <div
                    className={`relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-5 sm:space-y-6 transition-all duration-700 ease-out ${
                      isActive
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-5 scale-[0.98] pointer-events-none"
                    }`}
                  >
                    {/* Trust Pill Badge */}
                    <div
                      className={`inline-flex items-center space-x-2 bg-black/35 backdrop-blur-md border border-white/25 px-3.5 sm:px-4 py-1.5 rounded-full shadow-sm transition-all duration-700 delay-100 ease-out ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-2"
                      }`}
                    >
                      <Leaf size={14} className="text-emerald-400 fill-emerald-400 shrink-0" />
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-300">
                        {slide.tag}
                      </span>
                    </div>

                    {/* Main Headline with Warm Gold Highlight */}
                    <h1
                      className={`font-display font-black text-2xl sm:text-4xl md:text-5xl lg:text-[50px] text-white tracking-tight leading-[1.16] drop-shadow-md transition-all duration-700 delay-200 ease-out ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      <span>{slide.headlineLine1}</span>{" "}
                      <span className="text-[#f59e0b]">
                        {slide.headlineHighlight}
                      </span>
                    </h1>

                    {/* Centered Golden Decorative Underline Image Between Hero Title and Sub-content (Tight Balanced Spacing) */}
                    <div
                      className={`transition-all duration-700 delay-250 ease-out !-mt-0.5 sm:!-mt-1 ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-3"
                      }`}
                    >
                      <img
                        src="/images/underline.png"
                        alt=""
                        className="w-32 sm:w-44 md:w-56 lg:w-64 h-auto mx-auto object-contain select-none pointer-events-none drop-shadow-sm"
                      />
                    </div>

                    {/* Subtitle / Mission Paragraph with Reduced Equal Gap */}
                    <p
                      className={`text-stone-200 text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-normal drop-shadow transition-all duration-700 delay-300 ease-out !mt-1.5 sm:!mt-2 ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      {slide.description}
                    </p>

                    {/* Call-to-Action Buttons */}
                    <div
                      className={`flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-1 w-full sm:w-auto transition-all duration-700 delay-400 ease-out ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      <Link
                        href={slide.primaryCtaLink}
                        className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#b45309] hover:bg-[#92400e] text-white font-bold px-7 py-3.5 rounded-2xl shadow-lg transition-all hover:scale-105 active:scale-95 text-xs sm:text-sm uppercase tracking-wider"
                      >
                        <Heart size={16} className="fill-white" />
                        <span>{slide.primaryCtaText}</span>
                      </Link>

                      <Link
                        href={slide.secondaryCtaLink}
                        className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-black/30 hover:bg-white/15 text-white border border-white/70 font-bold px-7 py-3.5 rounded-2xl shadow-lg backdrop-blur-sm transition-all hover:scale-105 active:scale-95 text-xs sm:text-sm uppercase tracking-wider"
                      >
                        <span>{slide.secondaryCtaText}</span>
                        <ArrowRight size={16} className="text-white" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            className="absolute left-3 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/40 bg-black/30 hover:bg-black/60 text-white backdrop-blur-md flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-lg"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            className="absolute right-3 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/40 bg-black/30 hover:bg-black/60 text-white backdrop-blur-md flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-lg"
            aria-label="Next Slide"
          >
            <ChevronRight size={22} />
          </button>

          {/* Indicator Dots */}
          <div className="absolute bottom-14 sm:bottom-16 inset-x-0 flex justify-center items-center space-x-2.5 z-20">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSliderIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  sliderIndex === i
                    ? "w-8 bg-[#f59e0b] shadow-sm"
                    : "w-2.5 bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Floating Overlapping Stats Card directly matching reference screenshot */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-30 -mt-10 sm:-mt-14">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-stone-200/90 py-5 sm:py-6 px-6 sm:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-stone-200">
              {/* Stat 1: 107+ Health Camps */}
              <div className="flex items-center space-x-4 justify-center sm:justify-start pt-2 sm:pt-0 sm:pr-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100 shadow-xs">
                  <Stethoscope size={24} className="text-emerald-700" />
                </div>
                <div>
                  <span className="block font-display font-black text-2xl sm:text-3xl text-emerald-800 leading-none">
                    <AnimatedCounter target={107} suffix="+" duration={1800} />
                  </span>
                  <span className="text-xs sm:text-sm text-stone-500 font-medium">
                    Health Camps Conducted
                  </span>
                </div>
              </div>

              {/* Stat 2: 8,500+ Rural Patients */}
              <div className="flex items-center space-x-4 justify-center sm:justify-start pt-4 sm:pt-0 sm:px-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100 shadow-xs">
                  <Users size={24} className="text-emerald-700" />
                </div>
                <div>
                  <span className="block font-display font-black text-2xl sm:text-3xl text-emerald-800 leading-none">
                    <AnimatedCounter target={8500} suffix="+" formatComma duration={2200} />
                  </span>
                  <span className="text-xs sm:text-sm text-stone-500 font-medium">
                    Rural Patients Treated
                  </span>
                </div>
              </div>

              {/* Stat 3: 200 Beds Hospital */}
              <div className="flex items-center space-x-4 justify-center sm:justify-start pt-4 sm:pt-0 sm:pl-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#b45309] flex items-center justify-center shrink-0 border border-amber-100 shadow-xs">
                  <BedDouble size={24} className="text-[#b45309]" />
                </div>
                <div>
                  <span className="block font-display font-black text-2xl sm:text-3xl text-[#b45309] leading-none">
                    <AnimatedCounter target={200} suffix=" Beds" duration={1800} />
                  </span>
                  <span className="text-xs sm:text-sm text-stone-500 font-medium">
                    Hospital Under Construction
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. CORE VALUES: VISION, MISSION, AND FOUNDING OBJECTIVES
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#b45309] bg-[#fef3c7] px-3.5 py-1.5 rounded-full">
            Our Purpose & Compass
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#1b4332] tracking-tight mt-3">
            Building An Inclusive & Self-Reliant Society
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Vision */}
          <div className="bg-[#1b4332] text-white rounded-3xl p-8 shadow-soft-lg flex flex-col justify-between hover:-translate-y-1.5 transition-transform duration-300 border border-[#143527]">
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-amber-300">
                {getIconWidget("Eye", "text-amber-300", 24)}
              </div>
              <h3 className="font-display font-bold text-xl tracking-tight mb-3">
                Our Vision
              </h3>
              <p className="text-stone-200 text-sm leading-relaxed">
                To transform the horizon of health and education systems,
                creating viable avenues for sustainable livelihoods and
                widespread prosperity for every human being regardless of origin.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-[#166534] text-white rounded-3xl p-8 shadow-soft-lg flex flex-col justify-between hover:-translate-y-1.5 transition-transform duration-300 border border-[#14532d]">
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-white">
                {getIconWidget("Compass", "text-white", 24)}
              </div>
              <h3 className="font-display font-bold text-xl tracking-tight mb-3">
                Our Mission
              </h3>
              <p className="text-emerald-100 text-sm leading-relaxed">
                To provide every individual access to modern diagnostic
                healthcare, foundational and career-oriented schooling, women
                vocational empowerment, and environmental preservation.
              </p>
            </div>
          </div>

          {/* Objectives */}
          <div className="bg-[#b45309] text-white rounded-3xl p-8 shadow-soft-lg flex flex-col justify-between hover:-translate-y-1.5 transition-transform duration-300 border border-[#92400e]">
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-white">
                {getIconWidget("Target", "text-white", 24)}
              </div>
              <h3 className="font-display font-bold text-xl tracking-tight mb-3">
                Our Objectives
              </h3>
              <p className="text-amber-100 text-sm leading-relaxed">
                Rooted in “Health & Education for All”, DPF establishes medical
                camps, secondary school study shelters, tree plantation
                ecosystems, and disaster-relief emergency networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. WELFARE WINGS (WORKING AREAS)
      ======================================================== */}
      <section className="bg-[#f5f2eb]/70 py-16 border-y border-[#e7e5e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1b4332] bg-[#1b4332]/10 px-3.5 py-1.5 rounded-full">
                Core Domains
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#1b4332] tracking-tight mt-3">
                Our Welfare Wings & Initiatives
              </h2>
            </div>

            <Link
              href="/activities"
              className="text-xs font-bold uppercase tracking-wider bg-white px-5 py-3 rounded-2xl border border-[#e7e5e4] shadow-soft text-stone-800 hover:bg-[#faf8f5] transition-colors flex items-center space-x-1.5"
            >
              <span>Explore All Activities</span>
              <ArrowRight size={14} className="text-[#b45309]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {WORKING_AREAS.map((area) => (
              <div
                key={area.id}
                className="bg-white rounded-3xl border border-[#e7e5e4] overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-lg bg-white/95 flex items-center justify-center text-stone-900 shadow">
                      {getIconWidget(area.icon, "text-[#b45309]", 18)}
                    </div>
                    <span className="text-xs font-bold text-white drop-shadow">
                      {area.title}
                    </span>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <p className="text-stone-600 text-xs leading-relaxed">
                    {area.description}
                  </p>
                  <Link
                    href="/activities"
                    className="text-[11px] font-bold text-[#b45309] hover:text-[#92400e] mt-3 inline-flex items-center space-x-1"
                  >
                    <span>Learn More</span>
                    <ChevronRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. FLAGSHIP PROJECTS SHOWCASE
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#b45309] bg-[#fef3c7] px-3.5 py-1.5 rounded-full">
            Direct Ground Impact
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#1b4332] tracking-tight mt-3">
            Featured Social Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.slice(0, 2).map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl border border-[#e7e5e4] overflow-hidden shadow-soft hover:shadow-soft-lg transition-all flex flex-col"
            >
              <div className="relative h-60 overflow-hidden bg-stone-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#1b4332] flex items-center space-x-1 shadow">
                  <MapPin size={11} className="text-[#b45309]" />
                  <span>{project.location}</span>
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-display font-bold text-xl text-[#1b4332] tracking-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#e7e5e4] flex items-center justify-between">
                  <span className="text-xs text-stone-500 font-semibold">
                    Beneficiaries:{" "}
                    <strong className="text-stone-800">
                      {project.beneficiaries}
                    </strong>
                  </span>
                  <Link
                    href="/projects"
                    className="text-xs font-bold text-[#b45309] hover:underline flex items-center space-x-1"
                  >
                    <span>Read Details</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          6. INSPIRING VOICES & QUOTE SLIDER
      ======================================================== */}
      <QuoteSlider />

      {/* ========================================================
          7. IMPACT PHOTO GALLERY TEASER
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1b4332] bg-[#1b4332]/10 px-3.5 py-1.5 rounded-full">
              Photo Evidence
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#1b4332] tracking-tight mt-3">
              Moments from Ground Drives
            </h2>
          </div>

          <Link
            href="/gallery"
            className="text-xs font-bold uppercase tracking-wider text-[#b45309] hover:text-[#92400e] flex items-center space-x-1"
          >
            <span>View All Photos ({GALLERY_IMAGES.length})</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {GALLERY_IMAGES.slice(0, 6).map((img, index) => (
            <Link
              href="/gallery"
              key={index}
              className="relative rounded-2xl overflow-hidden aspect-square bg-[#f5f2eb] group border border-[#e7e5e4] shadow-soft"
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                <span className="text-[10px] text-white font-semibold line-clamp-2 leading-tight">
                  {img.caption}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ========================================================
          8. LEADERSHIP & FOUNDERS
      ======================================================== */}
      <section className="bg-[#f5f2eb]/60 py-16 border-t border-[#e7e5e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#b45309] bg-[#fef3c7] px-3.5 py-1.5 rounded-full">
              Steering Committee
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#1b4332] tracking-tight mt-3">
              Guiding Leadership of Dev Prabha Foundation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FOUNDERS.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 border border-[#e7e5e4] shadow-soft hover:shadow-soft-lg transition-all flex flex-col items-center text-center space-y-4"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#b45309]/30 shadow-inner">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-display font-bold text-lg text-[#1b4332]">
                    {member.name}
                  </h4>
                  <span className="text-[11px] font-semibold text-[#b45309] block leading-tight mt-0.5">
                    {member.role}
                  </span>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
