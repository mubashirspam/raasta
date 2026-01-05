"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  TrendingUp,
  Globe,
  Heart,
  Crown,
  Users,
  ArrowRight,
} from "lucide-react";
import { RevealSection } from "../ui";

const PERSONAS = [
  {
    id: 1,
    title: "First-Time Home Buyers",
    description: "We make your first step feel safe, clear, and confident.",
    icon: Home,
    color: "from-blue-400 to-cyan-400",
    delay: 0.1,
  },
  {
    id: 2,
    title: "Investors",
    description:
      "We guide you to invest with clarity, conviction, and long-term vision.",
    icon: TrendingUp,
    color: "from-emerald-400 to-teal-400",
    delay: 0.2,
  },
  {
    id: 3,
    title: "NRI Clients",
    description: "No matter where you are, we stay close to your journey.",
    icon: Globe,
    color: "from-violet-400 to-purple-400",
    delay: 0.3,
  },
  {
    id: 4,
    title: "End-Users",
    description: "We support you in finding a place you’ll love living in.",
    icon: Heart,
    color: "from-rose-400 to-pink-400",
    delay: 0.4,
  },
  {
    id: 5,
    title: "The 1% Circle",
    description:
      "We help to discover the rare assets that symbolize your success, status, and legacy.",
    icon: Crown,
    color: "from-amber-400 to-orange-400",
    delay: 0.5,
  },
  {
    id: 6,
    title: "Referral Clients & Friends",
    description: "Introduced with trust, welcomed like family.",
    icon: Users,
    color: "from-indigo-400 to-blue-400",
    delay: 0.6,
  },
];

export const WhoWeSupport: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Radial Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 3% 48%, #ffdedc 22%, #f5c1f5 58%, #7fbdff 100%)",
        }}
      />

      {/* Subtle dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.08) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Glassmorphism overlay for softer look */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <RevealSection>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6">
              Who We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2EA8FF] to-cyan-500">
                Support
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-700 leading-relaxed font-light">
              We support people at every stage of their journey - from
              understanding the goals and shortlisting the right opportunities
              to documentation, handover, and beyond.
            </p>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PERSONAS.map((persona) => (
            <RevealSection key={persona.id} delay={persona.delay}>
              <div
                className="group relative h-full"
                onMouseEnter={() => setHoveredId(persona.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className={`
                  relative h-full p-8 rounded-3xl border border-white/60 bg-white/70 backdrop-blur-md overflow-hidden
                  transition-all duration-500 hover:-translate-y-2 hover:bg-white/90 hover:border-white hover:shadow-2xl hover:shadow-slate-300/50
                `}
                >
                  {/* Hover Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${persona.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Glowing corner blob */}
                  <div
                    className={`absolute -right-12 -top-12 w-32 h-32 bg-gradient-to-br ${persona.color} opacity-30 blur-2xl rounded-full group-hover:scale-150 transition-transform duration-700`}
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-6 flex items-start justify-between">
                      <div
                        className={`
                        p-4 rounded-2xl bg-gradient-to-br ${persona.color}
                        shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500
                      `}
                      >
                        <persona.icon
                          className="text-white w-8 h-8"
                          strokeWidth={1.5}
                        />
                      </div>

                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                          opacity: hoveredId === persona.id ? 1 : 0,
                          x: hoveredId === persona.id ? 0 : -10,
                        }}
                        className="p-2 rounded-full bg-slate-100 shadow-sm"
                      >
                        <ArrowRight className="text-slate-600 w-4 h-4" />
                      </motion.div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 transition-all">
                      {persona.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed font-light group-hover:text-slate-700 transition-colors">
                      {persona.description}
                    </p>

                    {/* Bottom Line Progress */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-100">
                      <div
                        className={`h-full bg-gradient-to-r ${persona.color} transform origin-left transition-transform duration-700 ease-out scale-x-0 group-hover:scale-x-100`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
};
