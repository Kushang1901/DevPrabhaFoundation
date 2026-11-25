"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Heart,
  ShieldCheck,
  ChevronRight,
  CheckCircle,
} from "lucide-react";
import { TRUST_DETAILS } from "../data";

export default function Footer() {
  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us & Biographies" },
    { path: "/activities", label: "Welfare Activities" },
    { path: "/projects", label: "Social Projects & Hospital" },
    { path: "/gallery", label: "Impact Photo Gallery" },
    { path: "/join", label: "Join as Volunteer" },
    { path: "/contact", label: "Contact Coordinates" },
    { path: "/donate", label: "Direct Donation & 80G" },
  ];

  return (
    <footer
      id="main-dpf-footer"
      className="bg-[#112a1f] text-stone-300 font-sans pt-16 pb-8 border-t border-[#0d2319]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          id="footer-top-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1b3d2f]"
        >
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group notranslate" translate="no">
              <div className="rounded-xl overflow-hidden border border-white/20 shadow-sm bg-white p-2.5 inline-flex items-center space-x-2.5 transition-transform group-hover:scale-105 notranslate" translate="no">
                <img
                  src="/images/logo.png"
                  alt="Dev Prabha Foundation"
                  className="h-9 sm:h-10 w-auto object-contain shrink-0 notranslate"
                  translate="no"
                />
                <div className="flex flex-col justify-center leading-none select-none text-left notranslate" translate="no">
                  <span className="font-display font-black text-base tracking-tight text-[#b45309] leading-none notranslate" translate="no">
                    DevPrabha
                  </span>
                  <div className="relative inline-block mt-0.5 notranslate" translate="no">
                    <span className="font-display font-black text-sm tracking-tight text-[#163352] leading-none block notranslate" translate="no">
                      Foundation
                    </span>
                    <img
                      src="/images/underline.png"
                      alt=""
                      className="w-full h-auto max-h-[7px] object-contain select-none pointer-events-none mt-0.5"
                    />
                  </div>
                </div>
              </div>
            </Link>

            <p className="text-xs leading-relaxed text-stone-300">
              DevPrabha Foundation ® has started its journey in 2010, aiming to
              transform lives by advancing Health, Education, Women Empowerment,
              and sustainable Livelihoods across rural India.
            </p>

            <div className="flex space-x-2.5 pt-1">
              <a
                href="https://www.facebook.com/devprabhafoundation/"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-[#1b4332] hover:bg-[#b45309] hover:text-white rounded-xl transition-colors text-stone-300"
                title="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-[#1b4332] hover:bg-[#b45309] hover:text-white rounded-xl transition-colors text-stone-300"
                title="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-[#1b4332] hover:bg-[#b45309] hover:text-white rounded-xl transition-colors text-stone-300"
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center space-x-2">
              <span className="w-2 h-2 bg-[#b45309] rounded-full" />
              <span>Quick Navigation</span>
            </h4>

            <div className="flex flex-col space-y-2 text-xs">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="text-stone-300 hover:text-white transition-colors flex items-center space-x-2 group"
                >
                  <ChevronRight
                    size={13}
                    className="text-[#b45309] opacity-80 group-hover:translate-x-1 group-hover:opacity-100 transition-all"
                  />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Coordinates */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center space-x-2">
              <span className="w-2 h-2 bg-[#b45309] rounded-full" />
              <span>Registered Coordinates</span>
            </h4>

            <div className="space-y-3 text-xs text-stone-300">
              <div className="flex items-start space-x-2.5">
                <MapPin size={16} className="text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {TRUST_DETAILS.registeredOffice}
                </span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone size={15} className="text-amber-400 shrink-0" />
                <a
                  href="tel:+919480259311"
                  className="hover:text-white transition-colors"
                >
                  +91 9480259311
                </a>
              </div>

              <div className="flex items-start space-x-2.5">
                <Mail size={15} className="text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a
                    href={`mailto:${TRUST_DETAILS.contactEmail}`}
                    className="hover:text-white transition-colors block text-xs"
                  >
                    {TRUST_DETAILS.contactEmail}
                  </a>
                  {TRUST_DETAILS.secondaryEmail && (
                    <a
                      href={`mailto:${TRUST_DETAILS.secondaryEmail}`}
                      className="hover:text-white transition-colors block text-xs text-stone-400"
                    >
                      {TRUST_DETAILS.secondaryEmail}
                    </a>
                  )}
                </div>
              </div>

              <div className="pt-2 text-[11px] space-y-1 border-t border-[#1b3d2f] text-stone-400">
                <div>
                  <strong className="text-stone-300">NGO Darpan ID:</strong>{" "}
                  {TRUST_DETAILS.darpanId}
                </div>
                <div>
                  <strong className="text-stone-300">Trust Reg No:</strong>{" "}
                  {TRUST_DETAILS.registrationNumber}
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Accreditations, 80G & Welfare Updates */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center space-x-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span>Accreditations & Impact</span>
            </h4>

            <div className="bg-[#0b1f16] border border-[#1b3d2f] rounded-2xl p-4 space-y-3 text-xs">
              <div className="space-y-2.5 text-stone-300">
                <div className="flex items-start space-x-2">
                  <ShieldCheck size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-snug text-[11px]">
                    <strong className="text-white block">Section 80G(5)(vi):</strong>
                    50% Tax Exemption on all voluntary contributions.
                  </span>
                </div>

                <div className="flex items-start space-x-2">
                  <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-snug text-[11px]">
                    <strong className="text-white block">Section 12AA(1)(b)(i):</strong>
                    Registered Public Charitable Trust.
                  </span>
                </div>

                <div className="flex items-start space-x-2">
                  <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-snug text-[11px]">
                    <strong className="text-white block">NITI Aayog Darpan:</strong>
                    Unique ID: <code className="text-amber-400 font-mono">{TRUST_DETAILS.darpanId}</code>
                  </span>
                </div>
              </div>

              <Link
                href="/donate"
                className="w-full mt-2 inline-flex items-center justify-center space-x-1.5 bg-[#b45309] hover:bg-[#92400e] text-white font-bold py-2.5 px-3 rounded-xl text-xs transition-all shadow-soft"
              >
                <Heart size={13} className="fill-white" />
                <span>Donate Direct & Get 80G Receipt</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright and Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-stone-400 gap-4">
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} {TRUST_DETAILS.ngoName} ®. All rights
            reserved. Registered Indian Public Charitable Trust.
          </p>

          <div className="flex space-x-4 text-stone-300">
            <Link href="/about" className="hover:text-white transition-colors">
              Trust By-Laws
            </Link>
            <span>•</span>
            <Link href="/donate" className="hover:text-white transition-colors">
              80G Tax Exemption
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Grievance & Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
