"use client";

import React, { useRef } from "react";
import { TrendingUp, ShieldCheck } from "lucide-react";
import { RevealSection } from "../ui";
import { StatCard } from "../cards";
import { STATS } from "../../data";
import { motion, useScroll, useTransform } from "framer-motion";

export const WhyDubai: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 px-6 overflow-hidden min-h-[90vh] flex items-center"
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ y, scale: 1.1 }}
          className="relative w-full h-full"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1519229642444-2c6c164c3aa5?q=80&w=2233&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            }}
          />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="backdrop-blur-[6px] bg-teal-50/10 border border-teal-50/20 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <RevealSection>
              <div className="relative">
                {/* Decorative glow circle */}
                <div className="absolute -left-6 top-0 w-12 h-12 rounded-full bg-emerald-400/20 blur-xl" />

                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-xs font-bold tracking-widest uppercase backdrop-blur-sm">
                    <TrendingUp size={12} />
                    Market Insights
                  </div>
                </div>

                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1]">
                  Why Invest in
                  <br />
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300">
                      Dubai Now?
                    </span>
                    <svg
                      className="absolute -bottom-1 left-0 w-full"
                      viewBox="0 0 200 6"
                      fill="none"
                    >
                      <path
                        d="M0 3Q50 0 100 3T200 3"
                        stroke="url(#dubai-wave)"
                        strokeWidth="2"
                        fill="none"
                      />
                      <defs>
                        <linearGradient
                          id="dubai-wave"
                          x1="0"
                          y1="0"
                          x2="200"
                          y2="0"
                        >
                          <stop stopColor="#6EE7B7" />
                          <stop offset="0.5" stopColor="#5EEAD4" />
                          <stop offset="1" stopColor="#22D3EE" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </h3>

                <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                  Dubai offers the highest ROIs globally with a tax-free
                  environment and world-class infrastructure.
                </p>
              </div>
            </RevealSection>

            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, idx) => (
                <RevealSection key={idx} delay={200 + idx * 100}>
                  <StatCard
                    stat={{
                      ...stat,
                      valueColor: "text-white",
                      labelColor: "text-slate-100",
                    }}
                  />
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
