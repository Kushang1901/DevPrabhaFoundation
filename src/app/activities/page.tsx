"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle, X } from "lucide-react";

export default function ActivitiesPage() {
  const router = useRouter();
  const [activeActivityId, setActiveActivityId] = useState<string | null>(null);

  const ACTIVITIES = [
    {
      id: "act-1",
      title: "Health Development Camps",
      description:
        "Free medical screening, pediatric vitamins, dental care, and cardiac check-up drives conducted across remote blocks using modern testing equipment.",
      category: "healthcare",
      image:
        "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800",
      fullContent:
        "Dev Prabha Foundation coordinates with community healthcare professionals to organize intensive Health Development Camps in underserved locations. These camps offer direct consultations, deliver critical diagnostics for hypertension and blood sugar, and provide free medicines, children's nutrition syrups, and specialized referrals.",
      impact:
        "Over 5,000 households received preventive screenings in the past year.",
    },
    {
      id: "act-2",
      title: "Educational Support Programs",
      description:
        "Supplying notebooks, bicycles for girls from remote villages, tablets, and tutoring lessons to prevent public school drop-outs.",
      category: "education",
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800",
      fullContent:
        "Our educational wing targets villages with severe dropout rates among first-generation school-goers. We establish evening study hubs, deliver quality syllabus books, and reward merit through bicycles and uniforms.",
      impact:
        "Over 200 village children retained in formal academic learning.",
    },
    {
      id: "act-3",
      title: "Women Vocational Skilling Centers",
      description:
        "Sewing schools, digital literacy classes, and sanitary awareness clusters to build female micro-entrepreneurs in villages.",
      category: "women",
      image: "/images/womenempowerment.jfif",
      fullContent:
        "Dev Prabha Foundation runs neighborhood tailoring centers and micro-enterprise workshops. By imparting hands-on sewing, design skills, and financial literacy, we help rural women establish home boutiques and artisan cooperatives.",
      impact:
        "Over 75 women actively generating monthly incomes through self-employment.",
    },
    {
      id: "act-4",
      title: "Environmental Afforestation Drives",
      description:
        "Mass tree plantation initiatives across highway embankments, schools, and ponds to build community bio-shields and clean air canopies.",
      category: "environment",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
      fullContent:
        "Under our green belt campaign, DPF conducts seasonal plantations of indigenous fruit-bearing and shade trees (Neem, Peepal, Mango, Jamun). We involve village students and panchayats to adopt trees for sustainable nourishment.",
      impact:
        "More than 1,200 saplings planted with 85% survival rate.",
    },
    {
      id: "act-5",
      title: "Blood Donation Drives",
      description:
        "Regular voluntary donor camps linking youth volunteers with district hospital blood banks to tackle emergency shortages.",
      category: "healthcare",
      image: "/images/bloodonations.jpeg",
      fullContent:
        "Partnering with licensed district government blood banks, DPF mobilizes healthy volunteers to donate blood safely. Every donor is recognized with certificates and health profiling to foster a culture of voluntary life-saving.",
      impact:
        "Hundreds of units donated to emergency maternity and trauma wards.",
    },
    {
      id: "act-6",
      title: "Flood & Disaster Emergency Relief",
      description:
        "Emergency relief packets, water purification tablets, dry rations, and plastic sheets distributed during river flooding in Champaran.",
      category: "rural",
      image:
        "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=800",
      fullContent:
        "When monsoon waters overflow embankments in North Bihar, DPF emergency squads mobilize food packets, clean water, tarpaulins, and medical kits to families marooned on high ground.",
      impact:
        "Rapid disaster assistance provided to over 1,500 displaced persons.",
    },
  ];

  return (
    <div
      id="activities-tab-content"
      className="py-16 md:py-24 bg-[#faf8f5] animate-in fade-in duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#b45309] bg-[#fef3c7] px-3.5 py-1.5 rounded-full">
            Ground Initiatives
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#1b4332] tracking-tight">
            Comprehensive Welfare Activities
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            From free health screening camps to rural girl education, women tailoring schools, and agro-plantations.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACTIVITIES.map((act) => (
            <div
              key={act.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#e7e5e4] shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-52 overflow-hidden bg-stone-900">
                <img
                  src={act.image}
                  alt={act.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#1b4332] uppercase tracking-wider shadow">
                  {act.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-xl text-[#1b4332] tracking-tight">
                    {act.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {act.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#e7e5e4]">
                  <button
                    onClick={() => setActiveActivityId(act.id)}
                    className="w-full bg-[#1b4332] hover:bg-[#143527] text-white font-bold uppercase text-xs py-2.5 rounded-xl transition-all shadow-soft"
                  >
                    Read Activity Log
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Modal */}
      {activeActivityId &&
        (() => {
          const matchedAct = ACTIVITIES.find((a) => a.id === activeActivityId);
          if (!matchedAct) return null;

          return (
            <div
              className="fixed inset-0 bg-stone-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setActiveActivityId(null)}
            >
              <div
                className="w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-soft-xl border border-[#e7e5e4] animate-in zoom-in duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Image */}
                <div className="relative h-64 bg-stone-950">
                  <img
                    src={matchedAct.image}
                    alt={matchedAct.title}
                    className="w-full h-full object-cover opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                  <button
                    onClick={() => setActiveActivityId(null)}
                    className="absolute top-4 right-4 p-2 bg-stone-900/60 hover:bg-stone-900 text-white rounded-full backdrop-blur shadow transition-colors"
                    title="Close"
                  >
                    <X size={18} />
                  </button>

                  <div className="absolute bottom-6 left-6 text-white space-y-1">
                    <span className="text-[10px] font-mono tracking-widest text-[#b45309] bg-white px-2.5 py-0.5 rounded-full uppercase font-bold">
                      {matchedAct.category}
                    </span>
                    <h3 className="font-display font-bold text-2xl tracking-tight leading-none text-white">
                      {matchedAct.title}
                    </h3>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6 md:p-8 space-y-6">
                  <div className="space-y-4">
                    <h4 className="font-display font-bold text-sm text-[#1b4332] uppercase tracking-wider">
                      Welfare Case Study & Chronicles
                    </h4>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {matchedAct.fullContent || matchedAct.description}
                    </p>
                  </div>

                  {matchedAct.impact && (
                    <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-2xl flex items-start space-x-2.5">
                      <CheckCircle className="text-emerald-600 mt-0.5" size={16} />
                      <div>
                        <strong className="block text-emerald-800 text-xs font-mono uppercase tracking-wide">
                          Audited Metrics
                        </strong>
                        <p className="text-stone-600 text-xs mt-1">
                          {matchedAct.impact}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-3 justify-end pt-4 border-t border-[#e7e5e4]">
                    <button
                      onClick={() => setActiveActivityId(null)}
                      className="px-5 py-2.5 border border-[#e7e5e4] text-stone-700 hover:bg-[#faf8f5] font-bold rounded-xl text-xs transition-colors"
                    >
                      Close Report
                    </button>
                    <button
                      onClick={() => {
                        setActiveActivityId(null);
                        router.push("/join");
                      }}
                      className="px-5 py-2.5 bg-[#b45309] hover:bg-[#92400e] text-white font-bold rounded-xl text-xs transition-colors shadow-soft"
                    >
                      Register to Assist Campaign
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
    </div>
  );
}
