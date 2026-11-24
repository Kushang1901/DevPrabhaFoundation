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
  BookOpen,
  GraduationCap,
  HeartPulse,
  Eye,
  Building2,
  HeartHandshake,
  ShieldCheck,
  Scissors,
  Sprout,
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
      image: "/images/slider1.jpg",

      desktopHeadline: (
        <>
          Igniting Young Minds<br />
          Through <span className="text-[#f59e0b]">Quality</span><br />
          Education & Retention Hubs
        </>
      ),
      mobileHeadline: (
        <>
          Igniting Young Minds<br />
          Through <span className="text-[#f59e0b]">Quality</span><br />
          Education & Retention Hubs
        </>
      ),
      description:
        "Supplying textbooks, smart educational modules, school retention scholarships, and village study centers to eliminate rural drop-out rates.",
      features: [
        { icon: "BookOpen", line1: "Education", line2: "Support" },
        { icon: "GraduationCap", line1: "Student", line2: "Retention" },
        { icon: "Users", line1: "Rural Study", line2: "Centers" },
      ],
      primaryCtaText: "SPONSOR A CHILD'S EDUCATION",
      primaryCtaLink: "/donate",
      secondaryCtaText: "VIEW IMPACT GALLERY",
      secondaryCtaLink: "/gallery",
    },
    {
      image: "/images/medicalcamp.jpg",

      desktopHeadline: (
        <>
          Delivering Free Healthcare<br />
          to <span className="text-[#f59e0b]">Bihar's Most</span><br />
          Underserved Remote Villages
        </>
      ),
      mobileHeadline: (
        <>
          Delivering Free Healthcare to<br />
          <span className="text-[#f59e0b]">Bihar's Most Underserved</span><br />
          Remote Villages
        </>
      ),
      description:
        "Conducting diagnosis, pediatric screenings, distributing free medicines and eyeglasses across remote rural blocks in East Champaran and adjoining districts.",
      features: [
        { icon: "Stethoscope", line1: "Free Medical", line2: "Checkups" },
        { icon: "HeartPulse", line1: "Essential", line2: "Medicines" },
        { icon: "Eye", line1: "Vision &", line2: "Eyeglasses" },
      ],
      primaryCtaText: "SUPPORT MEDICAL CAMPS",
      primaryCtaLink: "/donate",
      secondaryCtaText: "EXPLORE HEALTH INITIATIVES",
      secondaryCtaLink: "/activities",
    },
    {
      image: "/images/Aboutus.jpeg",
      tag: "200-Bed Hospital Project • Sugauli, Bihar",
      desktopHeadline: (
        <>
          Constructing A Modern<br />
          <span className="text-[#f59e0b]">200-Bed Multispecialty</span><br />
          Hospital in Champaran
        </>
      ),
      mobileHeadline: (
        <>
          Constructing A Modern<br />
          <span className="text-[#f59e0b]">200-Bed Multispecialty</span><br />
          Hospital in Champaran
        </>
      ),
      description:
        "Bringing high-grade ICU, emergency care, maternity wings, and affordable surgery to millions of underprivileged families in North Bihar.",
      features: [
        { icon: "Building2", line1: "200-Bed", line2: "Hospital" },
        { icon: "HeartHandshake", line1: "Specialist", line2: "Care" },
        { icon: "ShieldCheck", line1: "80G Tax", line2: "Exempt" },
      ],
      primaryCtaText: "DONATE TO HOSPITAL FUND",
      primaryCtaLink: "/donate",
      secondaryCtaText: "OUR 200-BED HOSPITAL",
      secondaryCtaLink: "/projects",
    },
    {
      image: "/images/slider3.png",

      desktopHeadline: (
        <>
          Fostering Self-Reliance<br />
          Through <span className="text-[#f59e0b]">Women Skilling</span><br />
          & Micro-Enterprises
        </>
      ),
      mobileHeadline: (
        <>
          Fostering Self-Reliance<br />
          Through <span className="text-[#f59e0b]">Women Skilling</span><br />
          & Micro-Enterprises
        </>
      ),
      description:
        "Empowering rural women with vocational tailoring, organic composting training, and financial self-reliance through active Self-Help Groups (SHGs).",
      features: [
        { icon: "Scissors", line1: "Vocational", line2: "Tailoring" },
        { icon: "Sprout", line1: "Organic", line2: "Composting" },
        { icon: "Users", line1: "Active SHG", line2: "Networks" },
      ],
      primaryCtaText: "SPONSOR WOMEN LIVELIHOOD",
      primaryCtaLink: "/donate",
      secondaryCtaText: "OUR WELFARE ACTIVITIES",
      secondaryCtaLink: "/activities",
    },
    {
      image: "/images/Aboutus.jpeg",

      desktopHeadline: (
        <>
          Transforming Lives Through<br />
          <span className="text-[#f59e0b]">Healthcare, Education</span><br />
          & Social Dignity
        </>
      ),
      mobileHeadline: (
        <>
          Transforming Lives Through<br />
          <span className="text-[#f59e0b]">Healthcare, Education</span><br />
          & Social Dignity
        </>
      ),
      description:
        "Dev Prabha Foundation (DPF) is actively constructing a 200-bed Multispecialty Hospital in Sugauli, Bihar, bringing high-quality medical facilities and girl-child retention schools to underprivileged families.",
      features: [
        { icon: "Users", line1: "Grassroots", line2: "Movement" },
        { icon: "Heart", line1: "100% Direct", line2: "Impact" },
        { icon: "ShieldCheck", line1: "Section 80G", line2: "Exempt" },
      ],
      primaryCtaText: "DONATE DIRECT (80G TAX EXEMPT)",
      primaryCtaLink: "/donate",
      secondaryCtaText: "OUR CORE VALUES",
      secondaryCtaLink: "/about",
    },
  ];

  const renderFeatureIcon = (name: string) => {
    switch (name) {
      case "BookOpen":
        return <BookOpen size={24} className="text-amber-400 shrink-0" />;
      case "GraduationCap":
        return <GraduationCap size={24} className="text-emerald-400 shrink-0" />;
      case "Users":
        return <Users size={24} className="text-amber-400 shrink-0" />;
      case "Stethoscope":
        return <Stethoscope size={24} className="text-amber-400 shrink-0" />;
      case "HeartPulse":
        return <HeartPulse size={24} className="text-amber-400 shrink-0" />;
      case "Eye":
        return <Eye size={24} className="text-amber-400 shrink-0" />;
      case "Building2":
        return <Building2 size={24} className="text-amber-400 shrink-0" />;
      case "HeartHandshake":
        return <HeartHandshake size={24} className="text-amber-400 shrink-0" />;
      case "ShieldCheck":
        return <ShieldCheck size={24} className="text-amber-400 shrink-0" />;
      case "Scissors":
        return <Scissors size={24} className="text-amber-400 shrink-0" />;
      case "Sprout":
        return <Sprout size={24} className="text-amber-400 shrink-0" />;
      default:
        return <Leaf size={24} className="text-amber-400 shrink-0" />;
    }
  };

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
          1. FULL-WIDTH HERO SECTION: ASYMMETRIC CINEMATIC SLIDER
          (Matching Provided Desktop & Mobile Reference Mockups)
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
                  className="w-full shrink-0 relative flex flex-col justify-center min-h-[calc(100vh-64px)] min-h-[calc(100svh-64px)] min-h-[calc(100dvh-64px)] sm:min-h-[calc(100dvh-82px)] lg:min-h-[660px]"
                >
                  {/* Full-bleed background image with responsive focal positioning */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img
                      src={slide.image}
                      alt="Dev Prabha Foundation"
                      className={`w-full h-full object-cover object-[center_12%] sm:object-center lg:object-[82%_center] transition-transform duration-[7000ms] ease-out ${isActive ? "scale-105" : "scale-100"
                        }`}
                    />
                    {/* Desktop Gradient: Rich Dark Forest Green on left, clear on right to reveal children */}
                    <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#051c13]/98 via-[#062419]/88 via-48% to-[#051c13]/15" />

                    {/* Mobile Gradient: Balanced green tint so children background image is visible while centered text remains crisp */}
                    <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-[#051c13]/60 via-[#062419]/55 to-[#04160f]/75" />
                  </div>

                  {/* ==================== DESKTOP CONTENT (Left-Aligned Split Layout) ==================== */}
                  <div className="hidden lg:block relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-8 pt-14 pb-18 xl:pt-16 xl:pb-20 -translate-y-1.5 xl:-translate-y-2">
                    <div className="max-w-2xl text-left space-y-4 xl:space-y-5">


                      {/* Main Headline */}
                      <h1
                        className={`font-display font-black text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] text-white tracking-tight leading-[1.14] drop-shadow-md transition-all duration-700 delay-200 ease-out ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                          }`}
                      >
                        {slide.desktopHeadline}
                      </h1>

                      {/* Golden Curved Decorative Underline (Desktop: Left-Aligned under Headline) */}
                      <div
                        className={`transition-all duration-700 delay-250 ease-out py-0.5 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                          }`}
                      >
                        <img
                          src="/images/underline.png"
                          alt=""
                          className="w-44 sm:w-52 h-auto object-contain select-none pointer-events-none drop-shadow"
                        />
                      </div>

                      {/* Description */}
                      <p
                        className={`text-stone-200 text-sm lg:text-[15px] leading-relaxed max-w-xl font-normal drop-shadow transition-all duration-700 delay-300 ease-out ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                          }`}
                      >
                        {slide.description}
                      </p>

                      {/* Feature Icons Row (Desktop Only) */}
                      <div
                        className={`flex items-center space-x-6 xl:space-x-8 pt-1.5 transition-all duration-700 delay-350 ease-out ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                          }`}
                      >
                        {slide.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center space-x-2.5">
                            <div className="shrink-0">{renderFeatureIcon(feat.icon)}</div>
                            <div className="text-left text-xs font-semibold text-stone-200 leading-tight">
                              <span>{feat.line1}</span>
                              <span className="block text-stone-300">{feat.line2}</span>
                            </div>
                            {fIdx < slide.features.length - 1 && (
                              <div className="h-7 w-[1px] bg-white/20 ml-6 hidden xl:block" />
                            )}
                          </div>
                        ))}
                      </div>

                      {/* CTA Buttons */}
                      <div
                        className={`flex items-center gap-4 pt-2.5 transition-all duration-700 delay-400 ease-out ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                          }`}
                      >
                        <Link
                          href={slide.primaryCtaLink}
                          className="inline-flex items-center justify-center space-x-2 bg-[#b45309] hover:bg-[#92400e] text-white font-bold px-7 py-3.5 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 text-xs uppercase tracking-wider"
                        >
                          <Heart size={14} className="fill-white" />
                          <span>{slide.primaryCtaText}</span>
                        </Link>
                        <Link
                          href={slide.secondaryCtaLink}
                          className="inline-flex items-center justify-center space-x-2 border border-white/60 hover:bg-white/10 text-white font-bold px-7 py-3.5 rounded-full backdrop-blur-sm transition-all hover:scale-105 active:scale-95 text-xs uppercase tracking-wider"
                        >
                          <span>{slide.secondaryCtaText}</span>
                          <ArrowRight size={14} className="text-white" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* ==================== MOBILE CONTENT (Centered Full-Cover Hero Stack) ==================== */}
                  <div className="lg:hidden relative z-10 w-full flex-1 flex flex-col justify-center items-center text-center px-4 sm:px-6 py-10 sm:py-14 pb-14 sm:pb-18 space-y-3.5 sm:space-y-4 my-auto">
                    {/* Trust Pill Badge */}
                    <div
                      className={`inline-flex items-center space-x-1.5 bg-black/40 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full shadow-sm transition-all duration-700 delay-100 ease-out ${isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                        }`}
                    >
                      <Leaf size={12} className="text-emerald-400 fill-emerald-400 shrink-0" />
                      <span className="text-[10px] sm:text-[11px] font-bold text-white tracking-wide">
                        {slide.tag}
                      </span>
                    </div>

                    {/* Main Headline */}
                    <h1
                      className={`font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-[1.2] drop-shadow-md transition-all duration-700 delay-200 ease-out px-1 max-w-sm sm:max-w-md`}
                    >
                      {slide.mobileHeadline}
                    </h1>

                    {/* Golden Curved Decorative Underline */}
                    <div
                      className={`transition-all duration-700 delay-250 ease-out py-0.5 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                        }`}
                    >
                      <img
                        src="/images/underline.png"
                        alt=""
                        className="w-32 sm:w-40 h-auto mx-auto object-contain select-none pointer-events-none drop-shadow"
                      />
                    </div>

                    {/* Subtitle / Description */}
                    <p
                      className={`text-stone-100 text-xs sm:text-[13px] leading-relaxed max-w-sm sm:max-w-md font-normal drop-shadow-md transition-all duration-700 delay-300 ease-out px-2 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                    >
                      {slide.description}
                    </p>

                    {/* CTA Buttons (Stacked Full-Width on Mobile) */}
                    <div
                      className={`flex flex-col w-full max-w-xs sm:max-w-sm gap-2.5 pt-1.5 transition-all duration-700 delay-400 ease-out ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                    >
                      <Link
                        href={slide.primaryCtaLink}
                        className="w-full inline-flex items-center justify-center space-x-2 bg-[#b45309] hover:bg-[#92400e] text-white font-bold py-3 px-5 rounded-full shadow-md text-xs uppercase tracking-wider active:scale-95 transition-transform"
                      >
                        <Heart size={14} className="fill-white" />
                        <span>{slide.primaryCtaText}</span>
                      </Link>
                      <Link
                        href={slide.secondaryCtaLink}
                        className="w-full inline-flex items-center justify-center space-x-2 border border-white/60 bg-black/30 hover:bg-black/50 text-white font-bold py-3 px-5 rounded-full backdrop-blur-sm text-xs uppercase tracking-wider active:scale-95 transition-transform"
                      >
                        <span>{slide.secondaryCtaText}</span>
                        <ArrowRight size={14} className="text-white" />
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
          <div className="absolute bottom-4 sm:bottom-8 lg:bottom-12 inset-x-0 flex justify-center items-center space-x-2 z-20">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSliderIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${sliderIndex === i
                  ? "w-7 bg-[#f59e0b] shadow-sm"
                  : "w-2.5 bg-white/50 hover:bg-white/80"
                  }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Subtle Organic Forest Green Waves Framing Bottom (Matching Reference Images) */}
          <div className="absolute -bottom-1 left-0 z-10 pointer-events-none w-[52%] sm:w-[48%] md:w-[44%] max-w-[580px] h-[95px] sm:h-[135px] md:h-[175px] lg:h-[200px] overflow-visible">
            <svg
              viewBox="0 0 700 240"
              preserveAspectRatio="none"
              className="w-full h-full drop-shadow-xl"
            >
              <defs>
                <linearGradient id="waveGradLeftGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#082b1d" stopOpacity="0.98" />
                  <stop offset="55%" stopColor="#051c13" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#02100a" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="crestGradLeftGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#86efac" stopOpacity="1" />
                  <stop offset="60%" stopColor="#4ade80" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#15803d" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <path
                d="M0,90 C220,110 440,170 700,230 L700,240 L0,240 Z"
                fill="url(#waveGradLeftGreen)"
              />
              <path
                d="M0,90 C220,110 440,170 700,230"
                fill="none"
                stroke="url(#crestGradLeftGreen)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="absolute -bottom-1 right-0 z-10 pointer-events-none w-[52%] sm:w-[48%] md:w-[44%] max-w-[580px] h-[95px] sm:h-[135px] md:h-[175px] lg:h-[200px] overflow-visible">
            <svg
              viewBox="0 0 700 240"
              preserveAspectRatio="none"
              className="w-full h-full drop-shadow-xl"
            >
              <defs>
                <linearGradient id="waveGradRightGreen" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#082b1d" stopOpacity="0.98" />
                  <stop offset="55%" stopColor="#051c13" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#02100a" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="crestGradRightGreen" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#86efac" stopOpacity="1" />
                  <stop offset="60%" stopColor="#4ade80" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#15803d" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <path
                d="M700,90 C480,110 260,170 0,230 L0,240 L700,240 Z"
                fill="url(#waveGradRightGreen)"
              />
              <path
                d="M700,90 C480,110 260,170 0,230"
                fill="none"
                stroke="url(#crestGradRightGreen)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Floating Overlapping Stats Card directly matching reference screenshot */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-30 -mt-6 sm:-mt-12 lg:-mt-14">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-stone-200/90 py-5 sm:py-6 px-6 sm:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-stone-200">
              {/* Stat 1: 107+ Health Camps */}
              <div className="flex items-center space-x-4 justify-center sm:justify-start pt-2 sm:pt-0 sm:pr-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100 shadow-xs">
                  <Users size={24} className="text-emerald-700" />
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
                  <Stethoscope size={24} className="text-emerald-700" />
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
