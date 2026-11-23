import React from "react";
import { HeartPulse, BookOpen, Sprout, ShieldCheck, CheckCircle2 } from "lucide-react";
import { FOUNDERS } from "@/data";

export const metadata = {
  title: "About Us & Biographies | Dev Prabha Foundation",
  description:
    "Learn about Dev Prabha Foundation, our founding history in 2010, executive trustees, and our tripartite mission of Health, Education, and Livelihood in rural India.",
};

export default function AboutPage() {
  return (
    <div
      id="about-tab-content"
      className="py-12 md:py-20 bg-[#faf8f5] animate-in fade-in duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#b45309] bg-[#fef3c7] px-3.5 py-1.5 rounded-full">
            Our History & Identity
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#1b4332] tracking-tight">
            Biography & Social Welfare Mission
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Registered Non-Government Public Charitable Trust operating since
            2010 to foster health, education, and livelihood security in rural India.
          </p>
        </div>

        {/* Foundation Story & Image Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4 text-stone-700 text-sm leading-relaxed">
            <p className="text-base font-semibold text-[#1b4332]">
              DevPrabha Foundation ® has started its journey in 2010 with the
              objective of “Bringing change in the lives of People” through the
              way of individual and social development, by working in the core
              fields of Health, Education, Livelihood and Prosperity (HELP).
            </p>

            <p>
              Founders of the DevPrabha Foundation are of a strong opinion that
              human beings are the Social Cells of society and country at large.
              We believe that the development of society and the country is only
              possible when human beings are developed and self-reliant.
            </p>

            <p>
              DevPrabha Foundation aims to transform the lives of people by
              improving their Health index, imparting Education (Academic and
              Professional) to encourage both entrepreneurship and employment,
              creating avenues of Livelihood available to them, and bringing
              Prosperity in their lives.
            </p>

            {/* Official Legal Credentials Card */}
            <div className="bg-white rounded-2xl p-5 border border-[#e7e5e4] shadow-soft space-y-3 mt-4">
              <div className="flex items-center space-x-2 text-[#1b4332] font-bold text-xs uppercase tracking-wider">
                <ShieldCheck size={16} className="text-emerald-600" />
                <span>Statutory Registrations & Legal Identity</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-600">
                <div className="flex items-start space-x-2">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Trust Reg No:</strong> 2034/2017 (Sub-Registrar Act 60)
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>NITI Aayog Darpan:</strong> BR/2018/0207803
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Section 12A:</strong> CIT/FBD/Tech/12A/2014-15/1503
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Section 80G:</strong> CIT(E)/Pat/12AA/04(341)/2018-19/616-20
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-soft-xl border-4 border-white bg-stone-900">
              <img
                src="/images/Aboutus.jpeg"
                alt="Dev Prabha Foundation Team and Beneficiaries"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex items-end p-5">
                <span className="text-xs text-white font-medium">
                  DPF Community Health & Education Drive in Bihar
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Operational Objectives */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1b4332] bg-[#1b4332]/10 px-3.5 py-1.5 rounded-full">
              Triad of Progress
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#1b4332] tracking-tight">
              Operational Focus Areas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-7 border border-[#e7e5e4] shadow-soft hover:shadow-soft-lg transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#fef3c7] flex items-center justify-center text-[#b45309]">
                <HeartPulse size={24} />
              </div>
              <h3 className="font-display font-bold text-lg text-[#1b4332]">
                Health Objectives
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                Strengthening local health systems, organizing diagnostic mega
                camps, providing pediatric vitamins, and building the upcoming
                200-bed multispecialty hospital in Sugauli.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-7 border border-[#e7e5e4] shadow-soft hover:shadow-soft-lg transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#1b4332]/10 flex items-center justify-center text-[#1b4332]">
                <BookOpen size={24} />
              </div>
              <h3 className="font-display font-bold text-lg text-[#1b4332]">
                Educational Objectives
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                Empowering children through digitized reading materials,
                girl-child school retention bicycles, evening study circles,
                and technical career guidance for backward youths.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-7 border border-[#e7e5e4] shadow-soft hover:shadow-soft-lg transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                <Sprout size={24} />
              </div>
              <h3 className="font-display font-bold text-lg text-[#1b4332]">
                Livelihood Objectives
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                Creating sustainable livelihood opportunities through women
                tailoring centers, organic composting agro-cooperatives, and
                micro-lending self-help groups.
              </p>
            </div>
          </div>
        </section>

        {/* Pillars / Leadership */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#b45309] bg-[#fef3c7] px-3.5 py-1.5 rounded-full">
              Pillars of the Foundation
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#1b4332] tracking-tight">
              Founders & Executive Trustees
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FOUNDERS.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl border border-[#e7e5e4] p-6 flex flex-col items-center text-center shadow-soft hover:shadow-soft-lg transition-all space-y-3"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#b45309]/30 shadow-inner">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-display font-bold text-base text-[#1b4332]">
                    {member.name}
                  </h3>
                  <span className="text-[11px] font-semibold text-[#b45309] block mt-0.5">
                    {member.role}
                  </span>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
