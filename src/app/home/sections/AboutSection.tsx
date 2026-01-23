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



  const ExpandableText = ({ content }: { content: string }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);
  
    return (
      <div className="relative group/text">
        <p
          className={`text-lg text-white/90 leading-relaxed font-medium transition-all duration-300 ${
            isExpanded ? "" : "line-clamp-1 md:line-clamp-none"
          }`}
        >
          {content}
        </p>
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsExpanded(!isExpanded);
          }}
          className={`mt-3 inline-flex items-center gap-1 text-sm font-bold text-white uppercase tracking-wider md:hidden ${
            isExpanded ? "opacity-80" : "opacity-100"
          }`}
        >
          {isExpanded ? (
            <>
              Show Less <span className="text-xs">▲</span>
            </>
          ) : (
            <>
              Read More <span className="text-xs">▼</span>
            </>
          )}
        </button>
      </div>
    );
  };

  return (
    <section className="relative w-full py-16 overflow-hidden font-sans">
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
          <div className="text-center mb-5 relative">
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
              More than a real estate company a purpose driven platform built to
              create long term value, meaningful growth, and lasting impact.
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
                        Muhammad Najeeb Nazar
                      </strong>
                      ,{" "}
                      <strong className="text-emerald-600">
                        Geetansh Suri
                      </strong>
                      , and{" "}
                      <strong className="text-emerald-600">
                        Muhammad Navas Nazar
                      </strong>
                      .
                    </p>
                    <p>
                      Our concept is simple {"-> "}
                      Real estate should never be about transactions alone. It
                      can be a tool to create impact, not just income.
                    </p>
                    <p className="text-lg font-semibold text-slate-800 pt-2">
                      We don't see ourselves ahead of you, we walk with
                      you.
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
                        src="https://cdn.sanity.io/images/8dj8qon7/production/a59b2b9203cd812167fc0ccb744c191e5d34a2a5-768x512.jpg"
                        alt="Raasta Realty Founders"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        {/*  Mission & Vision */}
        <div className="grid lg:grid-cols-3 gap-5 md:gap-6 mb-0">
          <RevealSection delay={500}>
            <div className="relative h-full p-5 md:p-7 rounded-3xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2740%27%20height=%2740%27%20viewBox=%270%200%2040%2040%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg%20fill=%27none%27%20fill-rule=%27evenodd%27%3E%3Cg%20fill=%27%23ffffff%27%20fill-opacity=%270.1%27%3E%3Cpath%20d=%27M0%2040L40%200H20L0%2020M40%2040V20L20%2040%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Target size={28} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Our Mission
                  </h3>
                </div>
                <ExpandableText
                  content="To transform the lives of everyone connected to Raasta Realty i.e. clients, investors, agents, and referral partners, while extending our impact to the deserving souls supported through our legacy fund."
                />
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={600}>
            <div className="relative h-full p-5 md:p-7 rounded-3xl bg-gradient-to-br from-orange-400 via-orange-400 to-pink-400 text-white shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2740%27%20height=%2740%27%20viewBox=%270%200%2040%2040%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg%20fill=%27none%27%20fill-rule=%27evenodd%27%3E%3Cg%20fill=%27%23ffffff%27%20fill-opacity=%270.1%27%3E%3Cpath%20d=%27M0%2040L40%200H20L0%2020M40%2040V20L20%2040%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Heart size={28} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">Why Raasta</h3>
                </div>
                <ExpandableText
                  content="A fixed 6% of our revenue from every deal is dedicated to charitable causes education, healthcare, shelter, and essential needs."
                />
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={600}>
            <div className="relative h-full p-5 md:p-7 rounded-3xl bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 text-white shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2740%27%20height=%2740%27%20viewBox=%270%200%2040%2040%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg%20fill=%27none%27%20fill-rule=%27evenodd%27%3E%3Cg%20fill=%27%23ffffff%27%20fill-opacity=%270.1%27%3E%3Cpath%20d=%27M0%2040L40%200H20L0%2020M40%2040V20L20%2040%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Eye size={28} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">Our Vision</h3>
                </div>
                <ExpandableText
                  content="Through every deal, we uplift lives. Our vision is to be remembered not for the number of sales we made, but for the difference we created in people's lives."
                />
              </div>
            </div>
          </RevealSection>
        </div>

        {/* CTA */}
      </div>
    </section>
  );
};
