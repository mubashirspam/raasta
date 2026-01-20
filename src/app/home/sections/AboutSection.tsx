"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RevealSection } from "../ui";
import {
  Heart,
  ArrowRight,
  Star,
  Target,
  Eye,
  Users,
  Sparkles,
} from "lucide-react";

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

        {/* Our Story Card */}
        <RevealSection delay={400}>
          <div className="relative rounded-3xl md:rounded-[2.5rem] overflow-hidden mb-12">
            {/* Card Background with gradient and pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2740%27%20height=%2740%27%20viewBox=%270%200%2040%2040%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg%20fill=%27none%27%20fill-rule=%27evenodd%27%3E%3Cg%20fill=%27%2310b981%27%20fill-opacity=%270.06%27%3E%3Cpath%20d=%27M0%2040L40%200H20L0%2020M40%2040V20L20%2040%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

            {/* Card Content */}
            <div className="relative z-10 p-6 md:p-12">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                {/* Left - Content */}
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold tracking-widest uppercase mb-6">
                    <Sparkles size={14} />
                    <span>Our Story</span>
                  </div>

                  <div className="space-y-5 text-slate-700 leading-relaxed text-base md:text-lg">
                    <p>
                      Raasta was not built overnight; it was shaped through
                      conversations, trust, shared risks, and a deep belief in
                      doing things the right way.
                    </p>
                    <p>
                      Founded by{" "}
                      <strong className="text-emerald-600">
                        Muhammad Navas Nazar
                      </strong>
                      ,{" "}
                      <strong className="text-emerald-600">
                        Geetansh Suri
                      </strong>
                      , and{" "}
                      <strong className="text-emerald-600">
                        Muhammad Najeeb Nazar
                      </strong>
                      .
                    </p>
                    <p>
                      At the heart of Raasta is a simple truth — every path we
                      create begins with the client. Their goals, concerns, and
                      dreams shape every decision we take.
                    </p>
                    <p className="text-lg font-semibold text-slate-800 pt-2">
                      We don't see ourselves ahead of you — we walk with you.
                    </p>

                    <Link href="/about">
                      <button className="mt-4 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300">
                        Learn More About Us
                        <ArrowRight size={16} />
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Right - Image with Founders */}
                <div className="order-1 lg:order-2">
                  {/* Image Container */}
                  <div className="relative group">
                    {/* Decorative frame */}
                    <div className="absolute -top-3 -left-3 w-16 h-16 border-t-4 border-l-4 border-emerald-400 rounded-tl-2xl opacity-70" />
                    <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-4 border-r-4 border-teal-400 rounded-br-2xl opacity-70" />

                    {/* Glow effect */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

                    <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                      <img
                        src="https://cdn.sanity.io/images/8dj8qon7/production/a072261628072bed1efabe3b92f407f96b05667d-2432x1550.png"
                        alt="Raasta Realty Founders"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* Founders Names - Below Image */}
                  <div className="mt-6 space-y-3">
                    {[
                      { name: "Muhammad Navas Nazar" },
                      { name: "Geetansh Suri" },
                      { name: "Muhammad Najeeb Nazar" },
                    ].map((founder, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 rounded-xl bg-white/90 backdrop-blur-sm border border-emerald-100/50 hover:border-emerald-200 transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform duration-300" />
                          <p className="text-sm font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
                            {founder.name}
                          </p>
                        </div>
                        <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100">
                          Co-Founder
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        {/*  Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          <RevealSection delay={500}>
            <div className="relative h-full p-8 md:p-10 rounded-3xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2740%27%20height=%2740%27%20viewBox=%270%200%2040%2040%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg%20fill=%27none%27%20fill-rule=%27evenodd%27%3E%3Cg%20fill=%27%23ffffff%27%20fill-opacity=%270.1%27%3E%3Cpath%20d=%27M0%2040L40%200H20L0%2020M40%2040V20L20%2040%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Target size={28} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Our Mission
                  </h3>
                </div>
                <p className="text-white/90 text-base md:text-lg leading-relaxed">
                  To transform the lives of everyone connected to Raasta Realty
                  i.e. clients, investors, agents, and referral partners, while
                  extending our impact to the deserving souls supported through
                  our legacy fund.
                </p>
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={600}>
            <div className="relative h-full p-8 md:p-10 rounded-3xl bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 text-white shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2740%27%20height=%2740%27%20viewBox=%270%200%2040%2040%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg%20fill=%27none%27%20fill-rule=%27evenodd%27%3E%3Cg%20fill=%27%23ffffff%27%20fill-opacity=%270.1%27%3E%3Cpath%20d=%27M0%2040L40%200H20L0%2020M40%2040V20L20%2040%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Eye size={28} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">Our Vision</h3>
                </div>
                <p className="text-white/90 text-base md:text-lg leading-relaxed">
                  Through every deal, we uplift lives. Our vision is to be
                  remembered not for the number of sales we made, but for the
                  difference we created in people's lives.
                </p>
              </div>
            </div>
          </RevealSection>
        </div>

        {/* CTA */}
        <div
          className={`relative w-full rounded-[2.5rem] overflow-hidden transition-all duration-1000 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
          <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 px-6 py-16 md:py-20 text-center">
            <Sparkles className="w-12 h-12 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Walk This Path With Us?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Join us on a journey where success creates legacy.
            </p>
            <Link href="/about">
              <button className="px-8 py-4 bg-white text-emerald-600 rounded-full font-bold flex items-center gap-2 hover:bg-slate-100 transition-colors shadow-xl mx-auto">
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
