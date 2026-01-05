"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { MoveRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealSection } from "../ui";
import { ListingCard } from "../cards";
import { PROPERTIES } from "../../data";
import { Property } from "../../types";

const AUTO_SLIDE_INTERVAL = 4000;

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

interface FeaturedListingsProps {
  sanityProperties?: SanityProperty[];
}

const transformSanityProperty = (prop: SanityProperty): Property => ({
  id: prop._id as unknown as number,
  title: prop.title,
  location: prop.location,
  price: `AED ${prop.price.toLocaleString()}`,
  beds: prop.bedrooms,
  baths: prop.bathrooms,
  sqft: prop.area,
  type: prop.propertyType.charAt(0).toUpperCase() + prop.propertyType.slice(1),
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

export const FeaturedListings: React.FC<FeaturedListingsProps> = ({
  sanityProperties,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const properties = sanityProperties
    ? sanityProperties.map(transformSanityProperty)
    : PROPERTIES.slice(0, 6);

  const totalSlides = properties.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const getVisibleProperties = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % totalSlides;
      visible.push({ ...properties[index], displayIndex: i });
    }
    return visible;
  };

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

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full shadow-lg flex items-center justify-center text-slate-700 hover:bg-white hover:scale-110 transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full shadow-lg flex items-center justify-center text-slate-700 hover:bg-white hover:scale-110 transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {getVisibleProperties().map((prop) => (
                  <motion.div
                    key={`${prop.id}-${currentIndex}`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <Link
                      href={
                        sanityProperties
                          ? `/properties/${(prop as Property & { slug?: { current: string } }).slug?.current || prop.id}`
                          : `/properties/${prop.id}`
                      }
                    >
                      <ListingCard data={prop} />
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {properties.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 w-8"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
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
