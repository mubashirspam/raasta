"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealSection } from "../ui";
import { ListingCard } from "../cards";
import { PROPERTIES } from "../../data";
import { Property } from "../../types";

const AUTO_SLIDE_INTERVAL = 5000;

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
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [direction, setDirection] = useState(0);

  const properties = sanityProperties
    ? sanityProperties.map(transformSanityProperty)
    : PROPERTIES.slice(0, 12);

  const totalItems = properties.length;

  // Update items per page based on screen size
  useEffect(() => {
    const getItemsPerPage = () => {
      if (typeof window === "undefined") return 3;
      if (window.innerWidth < 768) return 1; // Mobile: 1 card
      return 3; // Desktop: 3 cards
    };
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
      setCurrentPage(0); // Reset to first page on resize
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Get current page items
  const getCurrentPageItems = () => {
    const startIndex = currentPage * itemsPerPage;
    return properties.slice(startIndex, startIndex + itemsPerPage);
  };

  const nextPage = useCallback(() => {
    setDirection(1);
    setCurrentPage((prev) => (prev >= totalPages - 1 ? 0 : prev + 1));
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setDirection(-1);
    setCurrentPage((prev) => (prev <= 0 ? totalPages - 1 : prev - 1));
  }, [totalPages]);

  const goToPage = (pageIndex: number) => {
    setDirection(pageIndex > currentPage ? 1 : -1);
    setCurrentPage(pageIndex);
  };

  // Auto-scroll
  useEffect(() => {
    if (isPaused || totalPages <= 1) return;
    const interval = setInterval(nextPage, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [isPaused, nextPage, totalPages]);

  // Animation variants for page transitions
  const pageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
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

      <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-12 py-5">
        {/* Header Area */}
        <RevealSection>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Hot{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 via-orange-500 to-rose-500">
                  Offers
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
              Handpicked opportunities. Real value. Right timing.
            </p>
          </div>
        </RevealSection>

        {/* Carousel Container */}
        <RevealSection>
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Carousel Track - Page-based */}
            <div className="overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentPage}
                  custom={direction}
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className={`grid gap-6 ${
                    itemsPerPage === 1 ? "grid-cols-1 px-4" : "grid-cols-3"
                  }`}
                >
                  {getCurrentPageItems().map((prop) => (
                    <div key={prop.id} className="w-full">
                      <Link
                        href={
                          sanityProperties
                            ? `/properties/${(prop as Property & { slug?: { current: string } }).slug?.current || prop.id}`
                            : `/properties/${prop.id}`
                        }
                        className="block h-full"
                      >
                        <ListingCard data={prop} />
                      </Link>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot Indicators Only */}
            <div className="flex items-center justify-center gap-3 mt-10">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentPage
                      ? "w-10 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 shadow-lg"
                      : "w-3 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </RevealSection>

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
