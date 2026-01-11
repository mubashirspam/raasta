"use client";

import React, { useState, useMemo } from "react";
import { Search, Filter, MapPin, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ListingCard } from "../components/cards";
import { Breadcrumbs, RevealSection, ThemeBackground } from "../components/ui";
import { Property } from "../types";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { ContactModal } from "../components/ui/ContactModal";
import { PROPERTIES as FALLBACK_PROPERTIES } from "../data";

const PROPERTY_TYPES = ["All", "Villa", "Penthouse", "Apartment", "Townhouse"];
const BEDROOM_OPTIONS = ["Any", "1", "2", "3", "4", "5+"];
const BATHROOM_OPTIONS = ["Any", "1", "2", "3", "4+"];
const PRICE_RANGES = [
  { label: "Any Price", min: 0, max: Infinity },
  { label: "Under 2M", min: 0, max: 2000000 },
  { label: "2M - 5M", min: 2000000, max: 5000000 },
  { label: "5M - 10M", min: 5000000, max: 10000000 },
  { label: "10M - 20M", min: 10000000, max: 20000000 },
  { label: "20M+", min: 20000000, max: Infinity },
];

interface SanityProperty {
  _id: string;
  title: string;
  slug: { current: string };
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  propertyType: string;
  status: string;
  location: string;
  featured: boolean;
  mainImage?: { asset: { url: string } };
}

interface PropertiesClientProps {
  sanityProperties?: SanityProperty[];
}

const transformSanityProperty = (
  prop: SanityProperty
): Property & { slug: string } => ({
  id: prop._id as unknown as number,
  title: prop.title,
  slug: prop.slug?.current || prop._id,
  location: prop.location,
  price: `AED ${prop.price?.toLocaleString() || 0}`,
  beds: prop.bedrooms || 0,
  baths: prop.bathrooms || 0,
  sqft: prop.area || 0,
  type: prop.propertyType
    ? prop.propertyType.charAt(0).toUpperCase() + prop.propertyType.slice(1)
    : "Property",
  image:
    prop.mainImage?.asset?.url ||
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
  tag:
    prop.status === "offplan"
      ? "Off-Plan"
      : prop.featured
        ? "Featured"
        : "For Sale",
});

export default function PropertiesClient({
  sanityProperties,
}: PropertiesClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [areaFilter, setAreaFilter] = useState("All");
  const [propertyTypeFilter, setPropertyTypeFilter] = useState("All");
  const [priceRangeIndex, setPriceRangeIndex] = useState(0);
  const [bedroomFilter, setBedroomFilter] = useState("Any");
  const [bathroomFilter, setBathroomFilter] = useState("Any");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Transform Sanity properties or use fallback
  const allProperties = useMemo(() => {
    if (sanityProperties && sanityProperties.length > 0) {
      return sanityProperties.map(transformSanityProperty);
    }
    return FALLBACK_PROPERTIES.map((p) => ({ ...p, slug: String(p.id) }));
  }, [sanityProperties]);

  const areas = useMemo(() => {
    const locations = allProperties.map((p) => p.location);
    return ["All", ...Array.from(new Set(locations))];
  }, [allProperties]);

  const parsePrice = (priceStr: string): number => {
    const numStr = priceStr.replace(/[^0-9.]/g, "");
    return parseFloat(numStr) || 0;
  };

  const filteredProperties = useMemo(() => {
    return allProperties.filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesArea =
        areaFilter === "All" || property.location === areaFilter;
      const matchesType =
        propertyTypeFilter === "All" || property.type === propertyTypeFilter;

      const priceRange = PRICE_RANGES[priceRangeIndex];
      const propertyPrice = parsePrice(property.price);
      const matchesPrice =
        propertyPrice >= priceRange.min && propertyPrice <= priceRange.max;

      const matchesBedrooms =
        bedroomFilter === "Any" ||
        (bedroomFilter === "5+"
          ? property.beds >= 5
          : property.beds === parseInt(bedroomFilter));

      const matchesBathrooms =
        bathroomFilter === "Any" ||
        (bathroomFilter === "4+"
          ? property.baths >= 4
          : property.baths === parseInt(bathroomFilter));

      return (
        matchesSearch &&
        matchesArea &&
        matchesType &&
        matchesPrice &&
        matchesBedrooms &&
        matchesBathrooms
      );
    });
  }, [
    allProperties,
    searchQuery,
    areaFilter,
    propertyTypeFilter,
    priceRangeIndex,
    bedroomFilter,
    bathroomFilter,
  ]);

  // Determine if using Sanity data
  const usingSanity = sanityProperties && sanityProperties.length > 0;

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
            {/* Row 1: Search and Location */}
            <div className="flex flex-col md:flex-row gap-4 mb-4">
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

              {/* Location Filter */}
              <div className="w-full md:w-48 relative group">
                <MapPin
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#2EA8FF] transition-colors"
                  size={18}
                />
                <select
                  value={areaFilter}
                  onChange={(e) => setAreaFilter(e.target.value)}
                  className="w-full pl-11 pr-10 py-3 bg-white/60 border border-white/50 rounded-xl text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#2EA8FF]/20 focus:bg-white transition-all cursor-pointer text-sm"
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
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
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

            {/* Row 2: Property Type, Price, Bedrooms, Bathrooms */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Property Type */}
              <div className="relative group">
                <Filter
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#2EA8FF] transition-colors"
                  size={18}
                />
                <select
                  value={propertyTypeFilter}
                  onChange={(e) => setPropertyTypeFilter(e.target.value)}
                  className="w-full pl-11 pr-10 py-3 bg-white/60 border border-white/50 rounded-xl text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#2EA8FF]/20 focus:bg-white transition-all cursor-pointer text-sm"
                >
                  {PROPERTY_TYPES.map((type) => (
                    <option
                      key={type}
                      value={type}
                      className="bg-white text-slate-900"
                    >
                      {type === "All" ? "All Types" : type}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
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

              {/* Price Range */}
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-medium">
                  AED
                </span>
                <select
                  value={priceRangeIndex}
                  onChange={(e) => setPriceRangeIndex(parseInt(e.target.value))}
                  className="w-full pl-12 pr-10 py-3 bg-white/60 border border-white/50 rounded-xl text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#2EA8FF]/20 focus:bg-white transition-all cursor-pointer text-sm"
                >
                  {PRICE_RANGES.map((range, idx) => (
                    <option
                      key={idx}
                      value={idx}
                      className="bg-white text-slate-900"
                    >
                      {range.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
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

              {/* Bedrooms */}
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                  🛏️
                </span>
                <select
                  value={bedroomFilter}
                  onChange={(e) => setBedroomFilter(e.target.value)}
                  className="w-full pl-11 pr-10 py-3 bg-white/60 border border-white/50 rounded-xl text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#2EA8FF]/20 focus:bg-white transition-all cursor-pointer text-sm"
                >
                  {BEDROOM_OPTIONS.map((opt) => (
                    <option
                      key={opt}
                      value={opt}
                      className="bg-white text-slate-900"
                    >
                      {opt === "Any"
                        ? "Any Beds"
                        : `${opt} Bed${opt === "1" ? "" : "s"}`}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
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

              {/* Bathrooms */}
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                  🚿
                </span>
                <select
                  value={bathroomFilter}
                  onChange={(e) => setBathroomFilter(e.target.value)}
                  className="w-full pl-11 pr-10 py-3 bg-white/60 border border-white/50 rounded-xl text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#2EA8FF]/20 focus:bg-white transition-all cursor-pointer text-sm"
                >
                  {BATHROOM_OPTIONS.map((opt) => (
                    <option
                      key={opt}
                      value={opt}
                      className="bg-white text-slate-900"
                    >
                      {opt === "Any"
                        ? "Any Baths"
                        : `${opt} Bath${opt === "1" ? "" : "s"}`}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
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

            {/* Active Filters Count */}
            {(propertyTypeFilter !== "All" ||
              priceRangeIndex !== 0 ||
              bedroomFilter !== "Any" ||
              bathroomFilter !== "Any" ||
              areaFilter !== "All") && (
              <div className="mt-4 pt-4 border-t border-white/40 flex items-center justify-between">
                <span className="text-sm text-slate-600">
                  {filteredProperties.length} properties found
                </span>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setAreaFilter("All");
                    setPropertyTypeFilter("All");
                    setPriceRangeIndex(0);
                    setBedroomFilter("Any");
                    setBathroomFilter("Any");
                  }}
                  className="text-sm text-[#2EA8FF] hover:text-blue-600 font-medium transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>

          {/* Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((prop, idx: number) => (
                <RevealSection key={prop.slug || prop.id} delay={idx * 100}>
                  <Link
                    href={`/properties/${usingSanity ? prop.slug : prop.id}`}
                  >
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
                  setPropertyTypeFilter("All");
                  setPriceRangeIndex(0);
                  setBedroomFilter("Any");
                  setBathroomFilter("Any");
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
