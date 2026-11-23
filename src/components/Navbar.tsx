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
      <div className="hidden md:block bg-[#143527] text-stone-200 text-[10px] lg:text-[11px] py-1.5 border-b border-[#0d2319]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-3 lg:space-x-5">
            <span className="flex items-center space-x-1.5 text-stone-300">
              <MapPin size={12} className="text-amber-400 shrink-0" />
              <span className="truncate max-w-[180px] lg:max-w-none">Sugauli, East Champaran, Bihar</span>
            </span>
            <span className="text-stone-500">•</span>
            <a
              href="tel:+919480259311"
              className="flex items-center space-x-1.5 hover:text-white transition-colors text-stone-300 shrink-0"
            >
              <Phone size={12} className="text-amber-400" />
              <span>Helpline: +91 9480259311</span>
            </a>
          </div>

          <div className="flex items-center space-x-3 lg:space-x-4">
            <span className="flex items-center space-x-1 text-emerald-300 font-medium shrink-0">
              <ShieldCheck size={13} />
              <span>80G Certified (Reg: 2034/2017)</span>
            </span>
            <span className="text-stone-500 hidden xl:inline">•</span>
            <span className="text-amber-300 font-medium hidden xl:inline">
              Direct Account Donation (0% Fee)
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-soft py-2 border-b border-[#e7e5e4]"
            : "bg-white/95 backdrop-blur-md shadow-sm py-2.5 sm:py-3 lg:py-3.5 border-b border-[#f0eee9]"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Brand Identity: Emblem + Stacked Typography with Underline image */}
            <Link
              href="/"
              className="group flex items-center space-x-2.5 sm:space-x-3 shrink-0 mr-3 sm:mr-5 lg:mr-8 xl:mr-10 py-1 transition-transform group-hover:scale-[1.01]"
            >
              {/* Emblem Icon */}
              <img
                src="/images/logo.png"
                alt="Dev Prabha Foundation"
                className="h-[40px] min-[360px]:h-[44px] sm:h-[50px] md:h-[54px] lg:h-[58px] w-auto object-contain shrink-0"
              />

              {/* Brand Wordmark (Stacked Two-Line Typography with Underline Image Below Foundation) */}
              <div className="flex flex-col justify-center leading-none select-none text-left">
                <span className="font-display font-black text-[16px] min-[360px]:text-[17px] sm:text-[19px] md:text-[21px] lg:text-[23px] tracking-tight text-[#b45309] leading-none">
                  DevPrabha
                </span>
                <div className="relative inline-block mt-0.5">
                  <span className="font-display font-black text-[14px] min-[360px]:text-[15px] sm:text-[17px] md:text-[19px] lg:text-[20px] tracking-tight text-[#163352] leading-none block">
                    Foundation
                  </span>
                  {/* Underline Image below title */}
                  <img
                    src="/images/underline.png"
                    alt=""
                    className="w-full h-auto max-h-[7px] sm:max-h-[8px] md:max-h-[9px] object-contain select-none pointer-events-none mt-0.5"
                  />
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-0.5 xl:space-x-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`px-2 xl:px-3 py-1.5 xl:py-2 rounded-xl text-[11px] xl:text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${isActive
                        ? "bg-[#1b4332] text-white shadow-soft"
                        : "text-stone-700 hover:text-[#1b4332] hover:bg-[#f5f2eb]"
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Right Action: Warm Amber Harvest CTA */}
            <div className="hidden lg:flex items-center space-x-3 shrink-0">
              <Link
                href="/donate"
                className="px-4 xl:px-5 py-2 xl:py-2.5 rounded-full bg-[#b45309] hover:bg-[#92400e] text-white font-bold text-[11px] xl:text-xs uppercase tracking-wider shadow-soft hover:shadow-soft-lg active:scale-95 transition-all flex items-center space-x-1.5"
              >
                <Heart size={14} className="fill-white" />
                <span>Donate Direct</span>
              </Link>
            </div>

            {/* Mobile & Tablet Controls: Fully responsive, never pushes Hamburger off-screen */}
            <div className="lg:hidden flex items-center space-x-1.5 sm:space-x-2 shrink-0">
              <Link
                href="/donate"
                className="px-2.5 sm:px-3 py-1.5 bg-[#b45309] hover:bg-[#92400e] text-white rounded-full flex items-center space-x-1 shadow-soft text-[11px] sm:text-xs font-bold uppercase tracking-wider shrink-0 transition-transform active:scale-95"
                title="Donate Direct"
              >
                <Heart size={12} className="fill-white" />
                <span className="hidden min-[340px]:inline">Donate</span>
              </Link>

              <button
                onClick={() => setIsOpen(true)}
                className="p-1.5 sm:p-2 rounded-xl hover:bg-[#f5f2eb] text-[#1b4332] transition-colors border border-stone-200/80 bg-stone-50 shrink-0"
                aria-label="Open Navigation Drawer"
              >
                <Menu size={20} className="sm:hidden" />
                <Menu size={22} className="hidden sm:block" />
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
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center space-x-2.5">
            <img
              src="/images/logo.png"
              alt="Dev Prabha Foundation"
              className="h-9 sm:h-10 w-auto object-contain shrink-0"
            />
            <div className="flex flex-col justify-center leading-none select-none text-left">
              <span className="font-display font-black text-base tracking-tight text-[#b45309] leading-none">
                DevPrabha
              </span>
              <div className="relative inline-block mt-0.5">
                <span className="font-display font-black text-sm tracking-tight text-[#163352] leading-none block">
                  Foundation
                </span>
                <img
                  src="/images/underline.png"
                  alt=""
                  className="w-full h-auto max-h-[7px] object-contain select-none pointer-events-none mt-0.5"
                />
              </div>
            </div>
          </Link>

          <button
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 rounded-full bg-stone-200/80 hover:bg-stone-300 text-stone-700 flex items-center justify-center transition-colors"
            aria-label="Close Navigation Menu"
          >
            <X size={20} />
          </button>
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
