"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { RevealSection } from "../ui";
import { ServiceCard } from "../cards";
import { SERVICES } from "../../data";

export const Services: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 px-6 md:px-12 lg:px-20">
      {/* --- Dynamic Background --- */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        {/* Deep ambient background */}
        <div className="absolute inset-0 bg-slate-50"></div>

        {/* Animated Gradient Orbs */}
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-r from-violet-200/30 via-pink-200/30 to-fuchsia-200/30 blur-[130px] animate-pulse mix-blend-multiply"></div>
        <div
          className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-l from-blue-200/30 via-cyan-200/30 to-sky-200/30 blur-[130px] animate-pulse mix-blend-multiply"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-[30%] left-[20%] w-[50%] h-[50%] rounded-full bg-indigo-300/10 blur-[100px] mix-blend-multiply"></div>

        {/* Architectural Grid Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.03) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          }}
        ></div>

        {/* Noise Texture for Premium Paper Feel */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <RevealSection>
          <div className="text-center mb-20">
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
              Premium Real Estate
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
              Tailored{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                Services
              </span>{" "}
              <br />
              for the Elite
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-500 leading-relaxed">
              Experience the pinnacle of Dubai real estate. From off-plan
              investments in the Burj Khalifa district to waterfront villas, our
              concierge approach ensures your legacy is secure.
            </p>
          </div>
        </RevealSection>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <RevealSection key={service.id} delay={idx * 100}>
              <ServiceCard service={service} />
            </RevealSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <RevealSection delay={600}>
          <div className="mt-20 text-center">
            <button className="relative px-8 py-4 bg-slate-900 text-white rounded-full font-semibold shadow-2xl shadow-slate-900/30 overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2">
                Schedule a Consultation
                <ArrowRight size={18} />
              </span>
            </button>
            <p className="mt-4 text-sm text-slate-400">
              Trusted by over 500+ High Net Worth Individuals
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
