"use client";

import React, { useState, useMemo } from "react";
import { Search, Filter, MapPin } from "lucide-react";
import Link from "next/link";
import { PROPERTIES } from "../data";
import { ListingCard } from "../components/cards";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { RevealSection } from "../components/ui";
import { Property } from "../types";

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [areaFilter, setAreaFilter] = useState("All");

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
    <main className="min-h-screen bg-[#0B1121] text-white pt-24 pb-20">
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-[#2EA8FF]/10 to-transparent pointer-events-none" />

      <div className="px-6 max-w-7xl mx-auto relative z-10">
        <div className="mb-8">
          <Breadcrumbs items={[{ label: "Properties" }]} />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              Explore Properties
            </h1>
            <p className="text-slate-400 max-w-xl">
              Discover our exclusive portfolio of premium properties in
              Dubai&apos;s most sought-after locations.
            </p>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search properties, locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-[#2EA8FF]/50 transition-colors"
              />
            </div>

            <div className="w-full md:w-64 relative">
              <Filter
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={20}
              />
              <select
                value={areaFilter}
                onChange={(e) => setAreaFilter(e.target.value)}
                className="w-full pl-12 pr-10 py-3 bg-white/5 border border-white/10 rounded-xl text-white appearance-none focus:outline-none focus:border-[#2EA8FF]/50 transition-colors cursor-pointer"
              >
                {areas.map((area) => (
                  <option
                    key={area}
                    value={area}
                    className="bg-[#0B1121] text-white"
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
              <RevealSection key={prop.id} delay={idx * 50}>
                <Link href={`/properties/${prop.id}`}>
                  <ListingCard data={prop} />
                </Link>
              </RevealSection>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
            <MapPin className="mx-auto text-slate-500 mb-4" size={48} />
            <h3 className="text-xl font-bold text-white mb-2">
              No properties found
            </h3>
            <p className="text-slate-400">
              Try adjusting your search criteria or clear filters
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setAreaFilter("All");
              }}
              className="mt-6 px-6 py-2 bg-[#2EA8FF] hover:bg-blue-600 text-white rounded-full transition-colors font-medium"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
