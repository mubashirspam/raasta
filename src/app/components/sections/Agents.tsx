"use client";

import React from "react";
import { RevealSection } from "../ui";
import { AgentCard } from "../cards";
import { AGENTS } from "../../data";
import { Star } from "lucide-react";

export const Agents: React.FC = () => {
  return (
    <section className="relative w-full py-24 overflow-hidden font-sans">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #fdfbf7 0%, #eef2ff 40%, #fdf2f8 100%)",
        }}
      />

      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute -left-[10%] -top-[10%] w-[50vw] h-[50vw] rounded-full blur-[100px] opacity-40 mix-blend-multiply"
          style={{ background: "#ddd6fe", transform: "rotate(0deg)" }}
        />
        <div
          className="absolute -right-[5%] top-[10%] w-[50vw] h-[50vw] rounded-full blur-[100px] opacity-40 mix-blend-multiply"
          style={{ background: "#bae6fd", transform: "rotate(-20deg)" }}
        />
        <div
          className="absolute left-[10%] bottom-[10%] w-[40vw] h-[40vw] rounded-full blur-[100px] opacity-40 mix-blend-multiply"
          style={{ background: "#fbcfe8" }}
        />
        <div
          className="absolute right-[0%] -bottom-[10%] w-[40vw] h-[40vw] rounded-full blur-[100px] opacity-30 mix-blend-multiply"
          style={{ background: "#fde68a" }}
        />
      </div>

      <div className="absolute inset-0 z-20 bg-white/30 backdrop-blur-[60px]" />
      <div
        className="absolute inset-0 z-20 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-12">
        <RevealSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 border border-white/50 text-[#2EA8FF] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
              <Star size={12} className="fill-current" />
              <span>Expert Guidance</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Meet Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2EA8FF] via-purple-500 to-pink-500">
                Elite Agents
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
              Our team consists of industry leaders with specialized knowledge
              in Dubai's most prestigious districts.
            </p>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AGENTS.map((agent, idx) => (
            <RevealSection key={agent.id} delay={idx * 150}>
              <AgentCard agent={agent} />
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
};
