"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { RevealSection } from "../ui";
import { ServiceCard } from "../cards";
import { SERVICES } from "../../data";

export const Services: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-15 px-6 md:px-12 lg:px-20">
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-slate-50"></div>

        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-r from-green-200/30 via-cyan-500/30 to-indigo-200/50 blur-[130px] animate-pulse mix-blend-multiply"></div>
        <div
          className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-l from-yellow-400/30 via-cyan-200/30 to-sky-200/30 blur-[130px] animate-pulse mix-blend-multiply"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-[30%] left-[20%] w-[50%] h-[50%] rounded-full bg-indigo-300/10 blur-[100px] mix-blend-multiply"></div>

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.03) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          }}
        ></div>

        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <RevealSection>
          <div className="text-center mb-10 relative">
          

            <div className="">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight mb-6 leading-[1.1]">
                Raasta{" "}
                <span className="relative inline-block pb-3">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2EA8FF] via-purple-500 to-pink-500">
                    Services
                  </span>
                  <svg
                    className="absolute -bottom-0 left-0 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                  >
                    <path
                      d="M2 8 Q 25 2, 50 6 T 100 6 Q 125 8, 150 4 T 198 8"
                      stroke="url(#services-underline)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <defs>
                      <linearGradient
                        id="services-underline"
                        x1="0"
                        y1="0"
                        x2="200"
                        y2="0"
                      >
                        <stop stopColor="#2EA8FF" />
                        <stop offset="0.5" stopColor="#9333EA" />
                        <stop offset="1" stopColor="#EC4899" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h2>

              <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 leading-relaxed">
                Your trusted partner in Dubai real estate. From off-plan
                investments to luxury rentals, golden visa consultation to VIP
                concierge services.
              </p>
            </div>

            <div className="hidden md:block absolute left-[10%] top-1/2 -translate-y-1/2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-indigo-300" />
                <div className="w-2 h-2 rounded-full bg-indigo-400/50" />
              </div>
            </div>
            <div className="hidden md:block absolute right-[10%] top-1/2 -translate-y-1/2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-400/50" />
                <div className="w-8 h-px bg-purple-300" />
              </div>
            </div>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, idx) => (
            <RevealSection key={service.id} delay={idx * 100}>
              <ServiceCard service={service} />
            </RevealSection>
          ))}
        </div>

        <RevealSection delay={600}>
          <div className="mt-20 text-center">
            <button className="relative px-8 py-4 bg-slate-900 text-white rounded-full font-semibold shadow-2xl shadow-slate-900/30 overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2">
                Schedule a Consultation
                <ArrowRight size={18} />
              </span>
            </button>
            <p className="mt-4 text-sm text-slate-400">
              Trusted by over 500+ High Net Worth Individuals
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
