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
              <h2 className="text-sm font-bold text-white uppercase tracking-widest mb-2">
                Market Insights
              </h2>
              <h3 className="text-4xl font-bold text-white mb-6">
                Why Invest in Dubai Now?
              </h3>
              <p className="text-white text-lg leading-relaxed mb-6">
                Dubai continues to offer one of the highest ROIs globally, with
                a tax-free environment and world-class infrastructure. At
                RaastaRealty, we leverage data-driven insights to find
                opportunities that others miss.
              </p>
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
