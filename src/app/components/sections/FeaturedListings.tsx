"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { RevealSection } from "../ui";
import { ListingCard } from "../cards";
import { PROPERTIES } from "../../data";

const categories = ["All", "Villas", "Penthouses", "Apartments", "Off-Plan"];

export const FeaturedListings: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* =========================================================================
          BACKGROUND COMPOSITION
         ========================================================================= */}

      {/* 1. Bottom Layer: Linear Gradient Base */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(43deg, #eed7f5 0%, #fccec2 50%, #c6e1fb 100%)",
        }}
      />

      {/* 2. Middle Layer: Rotated Blobs & Shapes */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {/* Blob 1: Blue/Linear Gradient - Top Left */}
        <div
          className="absolute -left-[10%] top-[5%] w-[60vw] h-[60vw] max-w-[877px] max-h-[877px] rounded-full blur-[45px] opacity-80"
          style={{
            background:
              "linear-gradient(43deg, #aed0f3 0%, rgba(174, 208, 243, 0) 100%)",
            transform: "rotate(33.69deg)",
            transformOrigin: "top left",
          }}
        />

        {/* Blob 2: Yellow - Center/Bottom */}
        <div
          className="absolute left-[30%] top-[40%] w-[40vw] h-[40vw] max-w-[553px] max-h-[553px] rounded-full blur-[45px] opacity-30 bg-[#ffe70f]"
          style={{
            transform: "rotate(33.69deg)",
            transformOrigin: "top left",
          }}
        />

        {/* Blob 3: Deep Blue - Right */}
        <div
          className="absolute -right-[10%] top-[20%] w-[50vw] h-[50vw] max-w-[734px] max-h-[734px] rounded-full blur-[55px] opacity-30 bg-[#4071ff]"
          style={{
            transform: "rotate(33.69deg)",
            transformOrigin: "top left",
          }}
        />
      </div>

      {/* 3. Top Layer: Glassmorphism Overlay */}
      <div className="absolute inset-0 z-20 bg-white/50 backdrop-blur-xl pointer-events-none" />

      <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-12 py-24">
        {/* Header Area */}
        <RevealSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="flex items-center gap-2 py-1.5 px-4 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 text-amber-700 text-xs font-bold tracking-widest uppercase shadow-sm">
                <svg
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                Premium Portfolio
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Exclusive
              <br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500">
                  Listings
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 10"
                  fill="none"
                >
                  <path
                    d="M2 8C50 2 150 2 198 8"
                    stroke="url(#listings-underline)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="listings-underline"
                      x1="0"
                      y1="0"
                      x2="200"
                      y2="0"
                    >
                      <stop stopColor="#F59E0B" />
                      <stop offset="0.5" stopColor="#F97316" />
                      <stop offset="1" stopColor="#F43F5E" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed">
              Handpicked luxury properties in Dubai&apos;s most prestigious
              locations.
            </p>
          </div>
        </RevealSection>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROPERTIES.slice(0, 6).map((prop, idx) => (
            <RevealSection key={prop.id} delay={idx * 100}>
              <Link href={`/properties/${prop.id}`}>
                <ListingCard data={prop} />
              </Link>
            </RevealSection>
          ))}
        </div>

        {/* View All Button */}
        <RevealSection delay={600}>
          <div className="mt-16 text-center">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-slate-200 rounded-full font-semibold text-slate-900 hover:bg-slate-50 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 group"
            >
              View All Properties
              <MoveRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
