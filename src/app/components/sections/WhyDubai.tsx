"use client";

import React from "react";
import { TrendingUp, ShieldCheck } from "lucide-react";
import { RevealSection } from "../ui";
import { StatCard } from "../cards";
import { STATS } from "../../data";

export const WhyDubai: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <RevealSection>
          <h2 className="text-sm font-bold text-[#2EA8FF] uppercase tracking-widest mb-2">
            Market Insights
          </h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">
            Why Invest in Dubai Now?
          </h3>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Dubai continues to offer one of the highest ROIs globally, with a
            tax-free environment and world-class infrastructure. At
            RaastaRealty, we leverage data-driven insights to find opportunities
            that others miss.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-slate-700">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <TrendingUp size={14} />
              </div>
              <span>High rental yields averaging 6-8%</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <ShieldCheck size={14} />
              </div>
              <span>Safe, regulated, and transparent market</span>
            </div>
          </div>
        </RevealSection>

        <div className="grid grid-cols-2 gap-4">
          {STATS.map((stat, idx) => (
            <RevealSection key={idx} delay={200 + idx * 100}>
              <StatCard stat={stat} />
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
};
