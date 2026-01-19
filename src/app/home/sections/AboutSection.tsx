"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RevealSection } from "../ui";
import { Heart, ArrowRight, Star, Target, Eye } from "lucide-react";

export const AboutSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full py-24 overflow-hidden font-sans">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 50%, #a7f3d0 100%)",
          }}
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-xl" />
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-12">
        <RevealSection>
          <div className="text-center mb-16 relative">
            {/* Decorative stars */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-8 flex items-center gap-1">
              <Star size={8} className="text-emerald-400/40 fill-current" />
              <Star size={12} className="text-emerald-500 fill-current" />
              <Star size={8} className="text-emerald-400/40 fill-current" />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 top-4 w-px h-8 bg-gradient-to-b from-emerald-500 to-transparent" />

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight mb-4 leading-[1.1]">
              About
              <br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
                  Raasta Realty
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 10"
                  fill="none"
                >
                  <path
                    d="M2 8C50 2 150 2 198 8"
                    stroke="url(#about-underline)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="about-underline"
                      x1="0"
                      y1="0"
                      x2="200"
                      y2="0"
                    >
                      <stop stopColor="#10B981" />
                      <stop offset="0.5" stopColor="#14B8A6" />
                      <stop offset="1" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed mt-6">
              More than a real estate company — a purpose-driven platform built
              to create long-term value, meaningful growth, and lasting impact.
            </p>

            {/* Side decorative elements */}
            <div className="hidden md:block absolute left-[12%] top-1/2 -translate-y-1/2">
              <div className="flex flex-col gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
              </div>
            </div>
            <div className="hidden md:block absolute right-[12%] top-1/2 -translate-y-1/2">
              <div className="flex flex-col gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Key Points Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <RevealSection delay={100}>
            <div className="p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center text-white mb-6 shadow-lg">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                6% for Charity
              </h3>
              <p className="text-slate-600 leading-relaxed">
                A fixed 6% of our revenue from every deal is dedicated to
                charitable causes — education, healthcare, shelter, and
                essential needs.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={200}>
            <div className="p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white mb-6 shadow-lg">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed">
                To transform the lives of everyone connected to Raasta —
                clients, investors, agents, and partners — through trust and
                transparency.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={300}>
            <div className="p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center text-white mb-6 shadow-lg">
                <Eye size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Our Vision
              </h3>
              <p className="text-slate-600 leading-relaxed">
                To be remembered not for the number of sales we made, but for
                the difference we created in people's lives.
              </p>
            </div>
          </RevealSection>
        </div>

        {/* CTA Banner */}
        <div
          className={`relative w-full h-[350px] md:h-[400px] rounded-[2.5rem] overflow-hidden group transition-all duration-1000 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500" />

          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              A Path Where{" "}
              <span className="italic font-serif">Business Meets Belief</span>
            </h2>
            <p className="text-white/90 max-w-lg mb-8 text-lg font-light">
              Three minds. One Raasta. Built on belief. Join us on a journey
              where success creates legacy.
            </p>

            <Link href="/about">
              <button className="px-8 py-4 bg-white text-emerald-600 rounded-full font-bold flex items-center gap-2 hover:bg-slate-100 transition-colors duration-300 shadow-xl">
                Learn More About Us
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
