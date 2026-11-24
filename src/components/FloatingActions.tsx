"use client";

import { MessageCircle, PhoneCall } from "lucide-react";

export default function FloatingActions() {
  const whatsappUrl = "https://wa.me/919480259311?text=Hello%20Dev%20Prabha%20Foundation,%20I%20would%20like%20to%20know%20more%20about%20your%20welfare%20activities.";

  return (
    <div
      id="floating-comms-panel"
      className="fixed bottom-6 right-6 flex flex-col space-y-3 z-45"
    >
      {/* WhatsApp Floating Button */}
      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 hover:scale-110 active:scale-95 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 animate-float group"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={28} className="fill-white block group-hover:rotate-12 transition-transform" />
        <span className="absolute right-16 scale-0 group-hover:scale-100 bg-emerald-600 text-white font-semibold text-xs py-1.5 px-3 rounded-lg shadow-md whitespace-nowrap origin-right transition-all">
          Chat with Us
        </span>
      </a>

      {/* Calling Floating Button */}
      <a
        id="floating-calling-btn"
        href="tel:+919480259311"
        className="w-14 h-14 bg-[#b45309] hover:bg-[#92400e] hover:scale-110 active:scale-95 text-white rounded-full flex items-center justify-center shadow-soft-lg transition-all duration-300 animate-float group"
        style={{ animationDelay: "1s" }}
        title="Call Us Now"
      >
        <PhoneCall size={24} className="block group-hover:animate-bounce" />
        <span className="absolute right-16 scale-0 group-hover:scale-100 bg-[#143527] text-white font-semibold text-xs py-1.5 px-3 rounded-lg shadow-md whitespace-nowrap origin-right transition-all">
          Call Now
        </span>
      </a>
    </div>
  );
}
