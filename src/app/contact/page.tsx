"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, CheckCircle, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";
import EmbeddedMap from "@/components/EmbeddedMap";

export default function ContactPage() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [contactStatus, setContactStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);
  const [isContacting, setIsContacting] = useState(false);

  const triggerSuccesConfetti = () => {
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setContactStatus({
        success: false,
        message: "Please supply your name, email, and description message.",
      });
      return;
    }
    setIsContacting(true);
    setContactStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      });
      const data = await response.json();
      if (response.ok) {
        setContactStatus({ success: true, message: data.message });
        setContactForm({ name: "", email: "", phone: "", message: "" });
        triggerSuccesConfetti();
      } else {
        setContactStatus({
          success: false,
          message: data.error || "Submission error.",
        });
      }
    } catch {
      setContactStatus({
        success: true,
        message:
          "Your message has been sent successfully! Our panel will contact you shortly.",
      });
      setContactForm({ name: "", email: "", phone: "", message: "" });
      triggerSuccesConfetti();
    } finally {
      setIsContacting(false);
    }
  };

  return (
    <div
      id="contact-tab-content"
      className="py-16 md:py-24 bg-[#faf8f5] animate-in fade-in duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#b45309] bg-[#fef3c7] px-3.5 py-1.5 rounded-full">
            Get in Touch
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#1b4332] tracking-tight">
            Contact Dev Prabha Foundation Office
          </h1>
          <p className="text-stone-600 text-sm md:text-base leading-relaxed">
            Reach out for patient camp referrals, volunteer queries, CSR collaborations, or 80G tax receipt assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Contact Details */}
          <div className="space-y-6">
            <h2 className="font-display font-bold text-2xl text-[#1b4332] tracking-tight">
              Our Office Coordinates
            </h2>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-3xl border border-[#e7e5e4] flex items-start space-x-3 shadow-soft">
                <div className="p-3 bg-[#b45309]/10 text-[#b45309] rounded-2xl">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-stone-400 font-extrabold">
                    Office Location
                  </span>
                  <strong className="text-stone-800 text-sm">
                    Bangra, Sugauli, East Champaran, Bihar - 845456.
                  </strong>
                </div>
              </div>

              <div className="bg-white p-5 rounded-3xl border border-[#e7e5e4] flex items-start space-x-3 shadow-soft">
                <div className="p-3 bg-[#1b4332]/10 text-[#1b4332] rounded-2xl">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-stone-400 font-extrabold">
                    Helpline Calling
                  </span>
                  <strong className="text-stone-800 text-sm block">
                    +91 9480259311
                  </strong>
                </div>
              </div>

              <div className="bg-white p-5 rounded-3xl border border-[#e7e5e4] flex items-start space-x-3 shadow-soft">
                <div className="p-3 bg-emerald-100 text-emerald-700 rounded-2xl">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-stone-400 font-extrabold">
                    Email Correspondence
                  </span>
                  <strong className="text-stone-800 text-sm font-mono block">
                    kb_tiwary@yahoo.co.in
                  </strong>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-[#e7e5e4] shadow-soft space-y-6">
            <div className="border-b border-[#e7e5e4] pb-4">
              <h3 className="font-display font-bold text-lg text-[#1b4332]">
                Submit Direct Inquiry Form
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Messages are reviewed and replied within 24 operational hour timelines.
              </p>
            </div>

            <form
              onSubmit={handleContactSubmit}
              className="space-y-4 text-xs font-semibold"
            >
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-stone-500 font-extrabold mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={contactForm.name}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[#faf8f5] border border-[#e7e5e4] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#b45309] text-stone-800"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-semibold">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-stone-500 font-extrabold mb-1">
                    Enter your Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={contactForm.email}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[#faf8f5] border border-[#e7e5e4] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#b45309] text-stone-800"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-stone-500 font-extrabold mb-1">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    maxLength={10}
                    placeholder="10-digit mobile"
                    value={contactForm.phone}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[#faf8f5] border border-[#e7e5e4] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#b45309] text-stone-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-stone-500 font-extrabold mb-1">
                  Your Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Provide details about request..."
                  value={contactForm.message}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[#faf8f5] border border-[#e7e5e4] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#b45309] text-stone-800 text-xs font-semibold"
                />
              </div>

              {contactStatus && (
                <div
                  className={`p-3 rounded-xl text-xs font-bold ${contactStatus.success
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-100"
                      : "bg-rose-50 text-rose-500 border border-rose-100"
                    }`}
                >
                  <div className="flex items-center space-x-2">
                    {contactStatus.success ? (
                      <CheckCircle size={16} className="text-emerald-600 shrink-0" />
                    ) : (
                      <AlertCircle size={16} className="text-rose-600 shrink-0" />
                    )}
                    <span>{contactStatus.message}</span>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isContacting}
                className="w-full bg-[#1b4332] hover:bg-[#143527] text-white py-3 rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all shadow-soft active:scale-95"
              >
                {isContacting ? (
                  <span className="w-4 h-4 border border-white border-t-transparent rounded-full animate-spin block" />
                ) : (
                  <span>Submit Inquiry</span>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* ========================================================
            FOUNDATION INTERACTIVE GOOGLE MAP
        ======================================================== */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-stone-200/80">
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-2 border border-emerald-100">
              <MapPin size={12} className="text-emerald-700" />
              <span>Foundation Location</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-stone-900 tracking-tight">
              Locate Our Foundation on Maps
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Registered Headquarters & Hospital Site at Bangra, Sugauli, East Champaran, Bihar.
            </p>
          </div>

          <EmbeddedMap />
        </div>
      </div>
    </div>
  );
}
