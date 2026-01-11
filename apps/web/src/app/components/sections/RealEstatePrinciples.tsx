"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BookOpen,
  TrendingUp,
  Wallet,
  ArrowRight,
  Lightbulb,
} from "lucide-react";
import { RevealSection } from "../ui";

const PRINCIPLES = [
  {
    id: 1,
    title: "Learn",
    description:
      "Understand Dubai's long-term direction, government visions like D33 and the 2040 Master Plan.",
    icon: BookOpen,
    color: "from-blue-500 to-cyan-500",
    delay: 0.1,
  },
  {
    id: 2,
    title: "Invest",
    description:
      "Invest with clarity and logic behind every location and project, aligned with future growth.",
    icon: TrendingUp,
    color: "from-violet-500 to-purple-500",
    delay: 0.2,
  },
  {
    id: 3,
    title: "Earn",
    description:
      "Your money moves with purpose, confidence, and long-term capital appreciation.",
    icon: Wallet,
    color: "from-emerald-500 to-teal-500",
    delay: 0.3,
  },
];

export const RealEstatePrinciples: React.FC = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Light gradient background with multiple colors */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #a6f5faff 0%, #fae8ff 30%, #fef3c7 60%, #d1fae5 100%)",
        }}
      />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[15%] w-[40%] h-[40%] rounded-full bg-gradient-to-bl from-yellow-300/30 via-green-200/20 to-transparent blur-[80px] animate-pulse" />
        <div
          className="absolute bottom-[10%] left-[10%] w-[35%] h-[35%] rounded-full bg-gradient-to-tr from-green-300/30 via-yellow-400/20 to-transparent blur-[80px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-[40%] left-[40%] w-[30%] h-[30%] rounded-full bg-gradient-to-r from-green-200/20 via-yellow-400/15 to-transparent blur-[60px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Soft white overlay for better readability */}
      <div className="absolute inset-0 bg-white/30" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column: Content */}
          <div className="order-2 lg:order-1">
            <RevealSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-white shadow-sm text-violet-600 text-xs font-bold uppercase tracking-wider mb-6">
                <Lightbulb size={14} />
                <span>Real Estate Basic Principle</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-8 leading-tight">
                Learn. Invest. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2EA8FF] to-cyan-500">
                  Earn.
                </span>
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
                At Raasta, we don’t sell projects—we guide decisions. Learn the
                vision, invest with clarity, and earn with confidence, aligned
                with Dubai’s future—not speculation.
              </p>

              <div className="prose prose-lg text-slate-600 mb-10">
                <p>
                  We don’t rush you into investments. We educate you first—about
                  Dubai’s long-term direction, government visions like D33 and
                  the 2040 Master Plan, and the real logic behind every location
                  and project. So your money moves with purpose, confidence, and
                  long-term growth.
                </p>
                <p className="font-bold text-slate-800 mt-6 border-l-4 border-[#2EA8FF] pl-4">
                  Here are a few essential things you should understand before
                  investing even a single dirham.
                </p>
              </div>
            </RevealSection>

            <RevealSection delay={0.2}>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2EA8FF] to-cyan-500 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 shadow-lg shadow-blue-500/20 group">
                <span>Start Learning</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </RevealSection>
          </div>

          {/* Right Column: Featured Image */}
          <div className="order-1 lg:order-2 relative">
            <RevealSection delay={0.3}>
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 aspect-[4/5] w-full">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                <Image
                  src="/IMG_3323-min.JPG"
                  alt="Dubai Real Estate Vision"
                  fill
                  className="object-cover"
                />

                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                    <p className="text-white text-lg font-medium leading-relaxed">
                      "We guide you to invest with clarity, conviction, and
                      long-term vision."
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements around image */}
              <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-cyan-200 rounded-[2.5rem]" />
              <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-[#2EA8FF]/20 rounded-full blur-2xl" />
            </RevealSection>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {PRINCIPLES.map((item, idx) => (
            <RevealSection key={item.id} delay={0.4 + idx * 0.1}>
              <div className="group relative bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-white shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Hover gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                />

                {/* Corner glow */}
                <div
                  className={`absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br ${item.color} opacity-20 blur-2xl rounded-full group-hover:scale-150 transition-transform duration-700`}
                />

                <div className="relative z-10">
                  <div
                    className={`
                    w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} 
                    flex items-center justify-center text-white shadow-lg mb-6
                    group-hover:scale-110 group-hover:rotate-6 transition-all duration-500
                  `}
                  >
                    <item.icon size={26} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-100">
                  <div
                    className={`h-full bg-gradient-to-r ${item.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}
                  />
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
};
