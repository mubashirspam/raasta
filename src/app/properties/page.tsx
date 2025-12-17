"use client";

import React, { useState, useMemo } from "react";
import { Search, Filter, MapPin, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PROPERTIES } from "../data";
import { ListingCard } from "../components/cards";
import { Breadcrumbs, RevealSection, ThemeBackground } from "../components/ui";
import { Property } from "../types";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { ContactModal } from "../components/ui/ContactModal";

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [areaFilter, setAreaFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const areas = useMemo(() => {
    const locations = PROPERTIES.map((p) => p.location);
    return ["All", ...Array.from(new Set(locations))];
  }, []);

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((property: Property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesArea =
        areaFilter === "All" || property.location === areaFilter;
      return matchesSearch && matchesArea;
    });
  }, [searchQuery, areaFilter]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar onContact={() => setIsModalOpen(true)} />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <main className="relative selection:bg-[#2EA8FF]/20 selection:text-[#2EA8FF]">
        <ThemeBackground />

        <div className="relative z-10 pt-28 pb-20 px-6 max-w-7xl mx-auto">
          <div className="mb-8">
            <Breadcrumbs items={[{ label: "Properties" }]} />
          </div>

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

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Explore
              <br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500">
                  Properties
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
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed">
              Discover our exclusive portfolio of premium properties in
              Dubai&apos;s most sought-after locations.
            </p>
          </div>

          {/* Glass Filters Section */}
          <div className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl shadow-slate-200/50 rounded-2xl p-6 mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 relative group">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#2EA8FF] transition-colors"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search properties, locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/60 border border-white/50 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2EA8FF]/20 focus:bg-white transition-all"
                />
              </div>

              {/* Filter Dropdown */}
              <div className="w-full md:w-64 relative group">
                <Filter
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#2EA8FF] transition-colors"
                  size={20}
                />
                <select
                  value={areaFilter}
                  onChange={(e) => setAreaFilter(e.target.value)}
                  className="w-full pl-12 pr-10 py-3 bg-white/60 border border-white/50 rounded-xl text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#2EA8FF]/20 focus:bg-white transition-all cursor-pointer"
                >
                  {areas.map((area) => (
                    <option
                      key={area}
                      value={area}
                      className="bg-white text-slate-900"
                    >
                      {area}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 4.5L6 8L9.5 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((prop: Property, idx: number) => (
                <RevealSection key={prop.id} delay={idx * 100}>
                  <Link href={`/properties/${prop.id}`}>
                    <ListingCard data={prop} />
                  </Link>
                </RevealSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 shadow-sm">
              <div className="inline-flex p-4 rounded-full bg-slate-100 mb-4">
                <MapPin className="text-slate-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                No properties found
              </h3>
              <p className="text-slate-500 mb-6">
                Try adjusting your search criteria or clear filters
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setAreaFilter("All");
                }}
                className="px-8 py-3 bg-[#2EA8FF] hover:bg-blue-600 text-white rounded-full transition-all shadow-lg shadow-blue-500/20 font-medium transform hover:-translate-y-1"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </main>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2EA8FF] via-cyan-500 to-teal-400">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Sparkles className="w-12 h-12 text-white/80 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Let our experts help you find your perfect property in Dubai.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 rounded-full bg-white text-[#2EA8FF] font-bold hover:bg-slate-100 transition-colors shadow-xl inline-flex items-center gap-2"
          >
            Get Expert Help
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
