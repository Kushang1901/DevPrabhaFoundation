import React from "react";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data";

export const metadata = {
  title: "Social Projects & 200-Bed Hospital | Dev Prabha Foundation",
  description:
    "Explore our flagship initiatives: DevPrabha Memorial Hospital in Sugauli, Sanjeevani Free Medical Camps, and rural women agro-cooperatives.",
};

export default function ProjectsPage() {
  return (
    <div
      id="projects-tab-content"
      className="py-16 md:py-24 bg-[#faf8f5] animate-in fade-in duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#b45309] bg-[#fef3c7] px-3.5 py-1.5 rounded-full">
            Sustainable Infrastructure
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#1b4332] tracking-tight">
            Strategic Social Projects
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Including the upcoming 200-Bed DevPrabha Memorial Hospital in Sugauli, Bihar, Sanjeevani Free Medical Camps, and rural women agro-kendras.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl p-6 md:p-8 border border-[#e7e5e4] shadow-soft grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {/* Project Details */}
              <div className="space-y-5">
                <div className="flex items-center space-x-1.5 text-xs font-mono text-stone-500">
                  <MapPin size={13} className="text-[#b45309] shrink-0" />
                  <span>{project.location}</span>
                </div>

                <h3 className="font-display font-bold text-2xl text-[#1b4332] tracking-tight leading-snug">
                  {project.title}
                </h3>

                <p className="text-stone-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-3">
                  <Link
                    href="/donate"
                    className="bg-[#b45309] hover:bg-[#92400e] text-white text-xs font-bold py-2.5 px-5 rounded-xl shadow-soft hover:scale-[1.01] transition-all flex items-center space-x-1.5"
                  >
                    <span>Fund This Project</span>
                    <ArrowRight size={14} />
                  </Link>

                  <Link
                    href="/join"
                    className="bg-[#f5f2eb] hover:bg-[#e7e5e4] text-stone-800 text-xs font-bold py-2.5 px-5 rounded-xl border border-[#e7e5e4] transition-colors"
                  >
                    Volunteer with Us
                  </Link>
                </div>
              </div>

              {/* Project Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-900 border border-[#e7e5e4]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
