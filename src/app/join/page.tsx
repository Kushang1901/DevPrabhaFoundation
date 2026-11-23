"use client";

import React, { useState } from "react";
import { Sparkles, CheckCircle, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";

export default function JoinPage() {
  const [volunteerForm, setVolunteerForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    occupation: "",
    message: "",
  });
  const [volunteerStatus, setVolunteerStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);
  const [isVolunteering, setIsVolunteering] = useState(false);

  const triggerSuccesConfetti = () => {
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
  };

  const handleVolunteerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !volunteerForm.name ||
      !volunteerForm.email ||
      !volunteerForm.phone ||
      !volunteerForm.address ||
      !volunteerForm.occupation
    ) {
      setVolunteerStatus({
        success: false,
        message: "Please fill out all required parameters.",
      });
      return;
    }
    setIsVolunteering(true);
    setVolunteerStatus(null);

    try {
      const response = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(volunteerForm),
      });
      const data = await response.json();
      if (response.ok) {
        setVolunteerStatus({ success: true, message: data.message });
        setVolunteerForm({
          name: "",
          email: "",
          phone: "",
          address: "",
          occupation: "",
          message: "",
        });
        triggerSuccesConfetti();
      } else {
        setVolunteerStatus({
          success: false,
          message: data.error || "Failed to submit volunteer registration.",
        });
      }
    } catch {
      setVolunteerStatus({
        success: false,
        message: "Network error occurred. Please try again.",
      });
    } finally {
      setIsVolunteering(false);
    }
  };

  return (
    <div
      id="join-tab-content"
      className="py-16 md:py-24 bg-[#faf8f5] animate-in fade-in duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#b45309] bg-[#fef3c7] px-3.5 py-1.5 rounded-full">
            Become a Changemaker
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#1b4332] tracking-tight">
            Join Us as a Volunteer
          </h1>
          <p className="text-stone-600 text-sm md:text-base leading-relaxed">
            Contribute your time, healthcare expertise, teaching skills, or organizing capacity to our village welfare missions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Volunteer Information */}
          <div className="space-y-6">
            <h2 className="font-display font-bold text-2xl text-[#1b4332] tracking-tight">
              Why Volunteer with DPF?
            </h2>

            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              We believe in structured tasks rather than vague affiliations.
              When you register with Dev Prabha Foundation, you are aligned
              based on your geographical proximity, professional expertise and
              schedule availability.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Clinical Support Camp Coordinator",
                  desc: "For nursing elements, doctors, and logistics directors to supervise medical testing and supplement layouts in rural wards.",
                },
                {
                  title: "Smart Study Tutoring Core",
                  desc: "For instructors, young scholars, and engineering backgrounds to teach digital basics or language classes in evening camps.",
                },
                {
                  title: "Afforestation & Awareness Watch",
                  desc: "For university students and physical planners to map native tree clusters and coordinate municipal cleanup camps.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-2xl border border-[#e7e5e4] flex items-start space-x-3 shadow-soft"
                >
                  <div className="p-2 bg-[#b45309]/10 rounded-xl text-[#b45309] shrink-0">
                    <Sparkles size={16} />
                  </div>

                  <div>
                    <h4 className="font-sans font-extrabold text-sm text-[#1b4332] leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-stone-600 text-xs mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteer Registration Form */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-[#e7e5e4] shadow-soft space-y-6">
            <div className="border-b border-[#e7e5e4] pb-4">
              <h3 className="font-display font-bold text-lg text-[#1b4332]">
                Volunteer Recruitment Application
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Provide verified contact coordinates. Forms are audited by coordinators.
              </p>
            </div>

            <form
              onSubmit={handleVolunteerSubmit}
              className="space-y-4 text-xs font-semibold"
            >
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-stone-500 font-extrabold mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Meenakshi Iyer"
                  value={volunteerForm.name}
                  onChange={(e) =>
                    setVolunteerForm({ ...volunteerForm, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[#faf8f5] border border-[#e7e5e4] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#b45309] text-stone-800"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-stone-500 font-extrabold mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. meenakshi@gmail.com"
                    value={volunteerForm.email}
                    onChange={(e) =>
                      setVolunteerForm({
                        ...volunteerForm,
                        email: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-[#faf8f5] border border-[#e7e5e4] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#b45309] text-stone-800"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-stone-500 font-extrabold mb-1">
                    Phone Contact *
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="10-digit mobile"
                    value={volunteerForm.phone}
                    onChange={(e) =>
                      setVolunteerForm({
                        ...volunteerForm,
                        phone: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-[#faf8f5] border border-[#e7e5e4] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#b45309] text-stone-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-stone-500 font-extrabold mb-1">
                    City Address *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Varanasi, UP"
                    value={volunteerForm.address}
                    onChange={(e) =>
                      setVolunteerForm({
                        ...volunteerForm,
                        address: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-[#faf8f5] border border-[#e7e5e4] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#b45309] text-stone-800"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-stone-500 font-extrabold mb-1">
                    Current Occupation *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Clinical Pharmacist / Student"
                    value={volunteerForm.occupation}
                    onChange={(e) =>
                      setVolunteerForm({
                        ...volunteerForm,
                        occupation: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-[#faf8f5] border border-[#e7e5e4] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#b45309] text-stone-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-stone-500 font-extrabold mb-1">
                  Describe how you could assist DPF charter
                </label>
                <textarea
                  rows={4}
                  placeholder="Provide any comments about your available hours or medical qualifications..."
                  value={volunteerForm.message}
                  onChange={(e) =>
                    setVolunteerForm({
                      ...volunteerForm,
                      message: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 bg-[#faf8f5] border border-[#e7e5e4] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#b45309] text-stone-800 text-xs font-semibold"
                />
              </div>

              {volunteerStatus && (
                <div
                  className={`p-3 rounded-xl text-xs font-bold ${
                    volunteerStatus.success
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-100"
                      : "bg-rose-50 text-rose-500 border border-rose-100"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {volunteerStatus.success ? (
                      <CheckCircle size={16} className="text-emerald-600 shrink-0" />
                    ) : (
                      <AlertCircle size={16} className="text-rose-600 shrink-0" />
                    )}
                    <span>{volunteerStatus.message}</span>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isVolunteering}
                className="w-full bg-[#b45309] hover:bg-[#92400e] text-white py-3 rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all shadow-soft active:scale-95"
              >
                {isVolunteering ? (
                  <span className="w-4 h-4 border border-white border-t-transparent rounded-full animate-spin block" />
                ) : (
                  <span>Submit Volunteer Registration</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
