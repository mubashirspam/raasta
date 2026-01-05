"use client";

import React from "react";
import { TrendingUp, Building2, Percent, Globe, Shield } from "lucide-react";
import { RevealSection } from "../ui";

const DUBAI_STATS = [
  {
    value: "0%",
    label: "Income Tax",
    icon: Percent,
    color: "from-emerald-400 to-teal-400",
  },
  {
    value: "12%",
    label: "Avg ROI",
    icon: TrendingUp,
    color: "from-[#2EA8FF] to-cyan-400",
  },
  {
    value: "#1",
    label: "Global Safety",
    icon: Shield,
    color: "from-violet-400 to-purple-400",
  },
  {
    value: "200+",
    label: "Nationalities",
    icon: Globe,
    color: "from-amber-400 to-orange-400",
  },
];

export const WhyDubai: React.FC = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 overflow-hidden">
      {/* Light gradient background */}
      <div className="absolute inset-0 bg-slate-50" />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-l from-[#2EA8FF]/20 via-cyan-300/20 to-transparent blur-[100px] animate-pulse" />
        <div
          className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-r from-emerald-300/20 via-teal-300/20 to-transparent blur-[100px] animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <RevealSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full mb-6 shadow-sm">
              <Building2 className="w-4 h-4 text-[#2EA8FF]" />
              <span className="text-slate-700 text-sm font-semibold">
                Market Insights
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6">
              Why Invest in{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2EA8FF] to-cyan-500">
                  Dubai
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                >
                  <path
                    d="M0 4Q50 0 100 4T200 4"
                    stroke="url(#dubai-underline)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <defs>
                    <linearGradient
                      id="dubai-underline"
                      x1="0"
                      y1="0"
                      x2="200"
                      y2="0"
                    >
                      <stop stopColor="#2EA8FF" />
                      <stop offset="1" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              ?
            </h2>

            <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
              Dubai offers the highest ROIs globally with a tax-free
              environment, world-class infrastructure, and unmatched lifestyle
              opportunities.
            </p>
          </div>
        </RevealSection>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {DUBAI_STATS.map((stat, idx) => (
            <RevealSection key={idx} delay={100 + idx * 100}>
              <div className="group relative p-6 md:p-8 bg-white/80 backdrop-blur-md border border-white rounded-3xl shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/50 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                {/* Hover gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Corner glow */}
                <div
                  className={`absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-20 blur-2xl rounded-full group-hover:scale-150 transition-transform duration-700`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    <stat.icon
                      className="w-7 h-7 text-white"
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className="text-4xl md:text-5xl font-black text-slate-900 mb-2">
                    {stat.value}
                  </div>

                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-100">
                  <div
                    className={`h-full bg-gradient-to-r ${stat.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}
                  />
                </div>
              </div>
            </RevealSection>
          ))}
        </div>

        {/* Additional Info Cards */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <RevealSection delay={500}>
            <div className="p-8 bg-gradient-to-r from-[#2EA8FF] to-cyan-500 rounded-3xl text-white shadow-xl shadow-blue-500/20">
              <h3 className="text-2xl font-bold mb-3">Tax-Free Investment</h3>
              <p className="text-white/90 leading-relaxed">
                Enjoy 0% income tax, 0% capital gains tax, and full repatriation
                of profits. Your investment grows without tax burdens.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={600}>
            <div className="p-8 bg-white/80 backdrop-blur-md border border-white rounded-3xl shadow-lg shadow-slate-200/50">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Golden Visa Eligibility
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Property investments above AED 2M qualify for a 10-year Golden
                Visa, granting long-term residency for you and your family.
              </p>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
};
