"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Heart,
  Phone,
  ShieldCheck,
  MapPin,
  Home,
  Users,
  Activity,
  Building2,
  Image as ImageIcon,
  UserPlus,
  PhoneCall,
  ChevronRight,
} from "lucide-react";
import LanguageSelector from "@/components/LanguageSelector";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close drawer on route change or Escape key
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About Us", icon: Users },
    { path: "/activities", label: "Activities", icon: Activity },
    { path: "/projects", label: "Projects", icon: Building2 },
    { path: "/gallery", label: "Gallery", icon: ImageIcon },
    { path: "/join", label: "Volunteer", icon: UserPlus },
    { path: "/contact", label: "Contact", icon: PhoneCall },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Top Utility Bar (Subtle, Grounded Forest - Responsive for Tablet & Desktop) */}
      <div className="hidden md:block bg-[#143527] text-stone-200 text-[10px] lg:text-[10.5px] py-1 border-b border-[#0d2319]">
        <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3 lg:space-x-5">
            <span className="flex items-center space-x-1.5 text-stone-300">
              <MapPin size={11} className="text-amber-400 shrink-0" />
              <span className="truncate max-w-[180px] lg:max-w-none">Sugauli, East Champaran, Bihar</span>
            </span>
            <span className="text-stone-500">•</span>
            <a
              href="tel:+919480259311"
              className="flex items-center space-x-1.5 hover:text-white transition-colors text-stone-300 shrink-0"
            >
              <Phone size={11} className="text-amber-400" />
              <span>Helpline: +91 9480259311</span>
            </a>
          </div>

          <div className="flex items-center space-x-3 lg:space-x-4">
            <span className="flex items-center space-x-1 text-emerald-300 font-medium shrink-0">
              <ShieldCheck size={12} />
              <span>80G Certified (Reg: 2034/2017)</span>
            </span>
            <span className="text-stone-500 hidden xl:inline">•</span>
            <span className="text-amber-300 font-medium hidden xl:inline">
              Direct Account Donation (0% Fee)
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar with Sleek Proportions */}
      <nav
        className={`w-full transition-all duration-300 ${isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-soft py-1 sm:py-1.5 border-b border-[#e7e5e4]"
            : "bg-white/95 backdrop-blur-md shadow-sm py-1.5 sm:py-2 border-b border-[#f0eee9]"
          }`}
      >
        <div className="max-w-7xl mx-auto px-2.5 sm:px-5 lg:px-6">
          <div className="flex justify-between items-center w-full">
            {/* Brand Identity: Respected Logo with Title (Responsively sized for Mobile & Desktop) */}
            <Link
              href="/"
              className="group flex items-center shrink min-w-0 -ml-0.5 sm:-ml-1.5 lg:-ml-2.5 py-0.5 mr-1.5 sm:mr-3 transition-transform group-hover:scale-[1.01] notranslate"
              translate="no"
              aria-label="DevPrabha Foundation Home"
            >
              <img
                src="/images/triallogo-3.png"
                alt="DevPrabha Foundation - HELP - Healthcare, Education, Livelihood in Partnership"
                className="h-[30px] min-[360px]:h-[34px] min-[400px]:h-[38px] sm:h-[44px] md:h-[48px] lg:h-[52px] xl:h-[56px] w-auto max-w-[165px] min-[360px]:max-w-[195px] min-[400px]:max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[330px] xl:max-w-[350px] object-contain shrink notranslate"
                translate="no"
              />
            </Link>

            {/* Desktop Navigation Group (Shifted to the Right Side as in Reference Mockup) */}
            <div className="hidden lg:flex items-center space-x-3 xl:space-x-5 ml-auto">
              {/* Navigation Links */}
              <div className="flex items-center space-x-0.5 xl:space-x-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      href={link.path}
                      className={`px-2 xl:px-2.5 py-1 xl:py-1.5 rounded-lg text-[11px] xl:text-[11.5px] font-bold uppercase tracking-wider transition-all whitespace-nowrap ${isActive
                          ? "bg-[#1b4332] text-white shadow-soft"
                          : "text-stone-700 hover:text-[#1b4332] hover:bg-[#f5f2eb]"
                        }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* Action Group: Language Selector + Warm Amber Harvest CTA */}
              <div className="flex items-center space-x-2.5 shrink-0 pl-1">
                <LanguageSelector variant="navbar" />
                <Link
                  href="/donate"
                  className="px-3.5 xl:px-4 py-1.5 xl:py-2 rounded-full bg-[#b45309] hover:bg-[#92400e] text-white font-bold text-[10.5px] xl:text-[11.5px] uppercase tracking-wider shadow-soft hover:shadow-soft-lg active:scale-95 transition-all flex items-center space-x-1.5 whitespace-nowrap"
                >
                  <Heart size={13} className="fill-white" />
                  <span>Donate Direct</span>
                </Link>
              </div>
            </div>

            {/* Mobile & Tablet Controls: Fully responsive, guaranteed never cropped or pushed off-screen */}
            <div className="lg:hidden flex items-center space-x-1 sm:space-x-1.5 shrink-0">
              <LanguageSelector variant="navbar" />

              <Link
                href="/donate"
                className="h-8 w-8 min-[440px]:w-auto min-[440px]:px-2.5 rounded-full bg-[#b45309] hover:bg-[#92400e] text-white flex items-center justify-center space-x-1 shadow-soft text-[11px] font-bold uppercase tracking-wider shrink-0 transition-transform active:scale-95"
                title="Donate Direct"
                aria-label="Donate Direct"
              >
                <Heart size={13} className="fill-white" />
                <span className="hidden min-[440px]:inline">Donate</span>
              </Link>

              <button
                onClick={() => setIsOpen(true)}
                className="h-8 w-8 sm:h-9 sm:w-9 rounded-xl hover:bg-[#f5f2eb] text-[#1b4332] transition-colors border border-stone-200/80 bg-stone-50 shrink-0 flex items-center justify-center"
                aria-label="Open Navigation Drawer"
              >
                <Menu size={19} className="sm:hidden" />
                <Menu size={21} className="hidden sm:block" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ========================================================
          MOBILE SLIDE-IN DRAWER (RIGHT TO LEFT ANIMATION)
      ======================================================== */}

      {/* Semi-transparent Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-stone-950/60 backdrop-blur-xs z-50 transition-opacity duration-300 lg:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Right Drawer Sheet */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[84%] max-w-sm bg-white z-50 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out transform lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-white">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center notranslate" translate="no" aria-label="DevPrabha Foundation Home">
            <img
              src="/images/triallogo-3.png"
              alt="DevPrabha Foundation"
              className="h-9 sm:h-11 w-auto max-w-[210px] sm:max-w-[240px] object-contain shrink-0 notranslate"
              translate="no"
            />
          </Link>

          <button
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 rounded-full bg-stone-200/80 hover:bg-stone-300 text-stone-700 flex items-center justify-center transition-colors"
            aria-label="Close Navigation Menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Language Selection in Drawer */}
        <div className="px-4 py-3 bg-stone-50/90 border-b border-stone-200/80">
          <LanguageSelector variant="drawer" />
        </div>

        {/* Drawer Navigation Links */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-1.5">
          <div className="text-[10px] font-bold uppercase tracking-widest text-stone-400 px-3 pb-1">
            Navigation Menu
          </div>

          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            const Icon = link.icon;
            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all ${isActive
                    ? "bg-[#1b4332] text-white shadow-soft"
                    : "text-stone-700 hover:text-[#1b4332] hover:bg-[#f5f2eb]"
                  }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon
                    size={16}
                    className={isActive ? "text-amber-400" : "text-stone-400"}
                  />
                  <span>{link.label}</span>
                </div>
                <ChevronRight
                  size={14}
                  className={isActive ? "text-white" : "text-stone-400"}
                />
              </Link>
            );
          })}

          {/* Trust & Tax Exemption Badge inside Drawer */}
          <div className="mt-5 p-3.5 bg-emerald-50/80 border border-emerald-100 rounded-2xl space-y-1">
            <div className="flex items-center space-x-1.5 text-emerald-800 font-bold text-xs">
              <ShieldCheck size={15} className="text-emerald-600" />
              <span>Section 80G Certified</span>
            </div>
            <p className="text-[11px] text-emerald-900/80 leading-snug">
              50% tax exemption on donations. Reg No: 2034/2017 • NITI Aayog Darpan: BR/2018/0207803
            </p>
          </div>
        </div>

        {/* Drawer Bottom Actions */}
        <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50/60 space-y-2.5">
          <Link
            href="/donate"
            onClick={() => setIsOpen(false)}
            className="w-full py-3.5 px-4 rounded-2xl bg-[#b45309] hover:bg-[#92400e] text-white font-bold text-xs uppercase tracking-wider shadow-soft flex items-center justify-center space-x-2 transition-all active:scale-95"
          >
            <Heart size={15} className="fill-white" />
            <span>Donate Direct & Get 80G Receipt</span>
          </Link>

          <a
            href="tel:+919480259311"
            className="w-full py-2.5 px-3 rounded-xl border border-stone-200 bg-white text-stone-700 hover:text-[#1b4332] text-xs font-semibold flex items-center justify-center space-x-2 transition-colors shadow-2xs"
          >
            <Phone size={13} className="text-amber-600" />
            <span>Helpline: +91 9480259311</span>
          </a>
        </div>
      </div>
    </header>
  );
}
