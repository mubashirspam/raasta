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

      {/* =========================================================================
          CONTENT SECTION
         ========================================================================= */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-12 py-24">
        {/* Header Area */}
        <RevealSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-[2px] bg-indigo-600"></span>
                <span className="text-indigo-900 font-bold uppercase tracking-widest text-xs">
                  Premium Portfolio
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Exclusive{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  Listings
                </span>
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-white/60 backdrop-blur-md rounded-full border border-white/50 shadow-sm">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-slate-900 text-white shadow-lg"
                      : "text-slate-600 hover:bg-white/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
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
