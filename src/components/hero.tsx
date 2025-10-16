"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Building2,
  ArrowRight,
  Star,
  Heart,
  MapPin,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const propertyImages = [
  {
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=900&fit=crop",
    title: "Modern Villa",
    location: "Dubai Marina",
  },
  {
    url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=900&fit=crop",
    title: "Luxury Apartment",
    location: "Downtown Dubai",
  },
  {
    url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=900&fit=crop",
    title: "Penthouse Suite",
    location: "Palm Jumeirah",
  },
  {
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=900&fit=crop",
    title: "Beachfront Property",
    location: "Jumeirah Beach",
  },
];

export default function Hero({ scrollToSection }: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextImage = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length);
  };

  const prevImage = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex(
      (prev) => (prev - 1 + propertyImages.length) % propertyImages.length
    );
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-[12px] sm:px-[24px] py-[80px] md:py-[100px] relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-gradient-to-r from-red-600/15 to-red-800/15 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-[10%] right-[5%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-gradient-to-r from-emerald-600/15 to-emerald-800/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-[50%] left-[50%] w-[150px] h-[150px] md:w-[250px] md:h-[250px] bg-gradient-to-r from-black/10 to-gray-800/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[36px] md:gap-[60px] items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-[24px] md:space-y-[30px] order-2 lg:order-1">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-[9px] px-[18px] py-[9px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
              <MapPin className="text-red-300" size={15} />
              <span className="text-[0.875rem] text-white/80 font-medium">
                Dubai Marina, UAE
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-[2.25rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4rem] font-black text-white leading-[1.1] tracking-tight">
              Discover Your
              <br />
              <span className="bg-gradient-to-r from-red-300 via-emerald-400 to-white bg-clip-text text-transparent">
                Dream Home
              </span>
              <br />
              in Dubai
            </h1>

            {/* Description */}
            <p className="text-[1rem] md:text-[1.125rem] text-white/70 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Experience luxury living with premium properties in Dubai&apos;s
              most prestigious locations. Your perfect home awaits.
            </p>

            {/* Happy Clients */}
            <div className="flex items-center gap-[12px] justify-center lg:justify-start">
              <div className="flex -space-x-[6px]">
                {["R", "A", "S", "T", "A"].map((letter, i) => (
                  <div
                    key={i}
                    className="w-[36px] h-[36px] bg-gradient-to-br from-red-600 to-red-700 rounded-full border-2 border-[#0a0a1f] flex items-center justify-center text-white text-[0.75rem] font-bold shadow-lg"
                    style={{
                      background:
                        i % 3 === 0
                          ? "linear-gradient(135deg, #dc2626, #991b1b)"
                          : i % 3 === 1
                          ? "linear-gradient(135deg, #059669, #064e3b)"
                          : "linear-gradient(135deg, #374151, #111827)",
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="text-[0.875rem] text-white font-bold">
                  500+ Families
                </div>
                <div className="text-[0.75rem] text-white/60">Trust Raasta</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-[12px] justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection("services")}
                className="group inline-flex items-center justify-center gap-[9px] px-[30px] py-[14px] bg-gradient-to-r from-red-600 via-emerald-600 to-black hover:from-red-500 hover:via-emerald-500 hover:to-gray-800 rounded-[12px] text-white font-bold text-[1rem] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30 shadow-xl"
              >
                <span>Explore Properties</span>
                <ArrowRight
                  className="group-hover:translate-x-[3px] transition-transform duration-300"
                  size={18}
                />
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center justify-center gap-[9px] px-[30px] py-[14px] bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 rounded-[12px] text-white font-bold text-[1rem] transition-all duration-300 hover:scale-105"
              >
                <span>Contact Us</span>
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-[18px] md:gap-[24px] pt-[12px]">
              {/* Client Favorite */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-[42px] h-[42px] bg-gradient-to-br from-rose-400/20 to-pink-600/20 rounded-[12px] mb-[9px] border border-rose-400/30">
                  <Heart className="text-rose-400" size={18} />
                </div>
                <div className="text-[0.875rem] md:text-[1rem] font-bold text-white mb-[3px]">
                  Client
                </div>
                <div className="text-[0.75rem] md:text-[0.875rem] text-white/60">
                  Favorite
                </div>
              </div>

              {/* Success Rate */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-[42px] h-[42px] bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-[12px] mb-[9px] border border-emerald-400/30">
                  <CheckCircle className="text-emerald-400" size={18} />
                </div>
                <div className="text-[0.875rem] md:text-[1rem] font-bold text-white mb-[3px]">
                  98%
                </div>
                <div className="text-[0.75rem] md:text-[0.875rem] text-white/60">
                  Success
                </div>
              </div>

              {/* Rating */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-[42px] h-[42px] bg-gradient-to-br from-amber-400/20 to-orange-600/20 rounded-[12px] mb-[9px] border border-amber-400/30">
                  <Star
                    className="text-amber-400"
                    size={18}
                    fill="currentColor"
                  />
                </div>
                <div className="text-[0.875rem] md:text-[1rem] font-bold text-white mb-[3px]">
                  4.9
                </div>
                <div className="text-[0.75rem] md:text-[0.875rem] text-white/60">
                  Rating
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Carousel */}
          <div className="relative order-1 lg:order-2 w-full">
            <div className="relative group w-full">
              {/* Decorative Elements */}
              <div className="absolute -top-[12px] -left-[12px] w-[80px] h-[80px] bg-gradient-to-br from-red-600/30 to-red-800/30 rounded-[18px] blur-xl animate-pulse"></div>
              <div
                className="absolute -bottom-[12px] -right-[12px] w-[80px] h-[80px] bg-gradient-to-br from-emerald-600/30 to-emerald-800/30 rounded-full blur-xl animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>

              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-[24px] shadow-2xl w-full aspect-[4/5] max-h-[600px]">
                {/* Images */}
                {propertyImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={image.url}
                      alt={image.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-[12px] top-1/2 -translate-y-1/2 w-[36px] h-[36px] bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="text-white" size={20} />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[36px] h-[36px] bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
                  aria-label="Next image"
                >
                  <ChevronRight className="text-white" size={20} />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-[24px] left-1/2 -translate-x-1/2 flex gap-[6px]">
                  {propertyImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentImageIndex(index);
                        setIsAutoPlaying(false);
                      }}
                      className={`w-[8px] h-[8px] rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "bg-white w-[24px]"
                          : "bg-white/40 hover:bg-white/60"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Floating Info Badge */}
                <div className="absolute bottom-[60px] left-[24px] right-[24px] backdrop-blur-xl bg-white/10 rounded-[15px] border border-white/20 p-[15px] shadow-xl">
                  <div className="flex items-center gap-[12px]">
                    <div className="w-[42px] h-[42px] bg-gradient-to-br from-red-600/30 to-emerald-600/30 rounded-[12px] flex items-center justify-center border border-red-500/30">
                      <Building2 className="text-red-300" size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="text-[0.875rem] md:text-[1rem] font-bold text-white">
                        {propertyImages[currentImageIndex].title}
                      </div>
                      <div className="text-[0.75rem] md:text-[0.875rem] text-white/70 flex items-center gap-[6px]">
                        <MapPin size={12} />
                        {propertyImages[currentImageIndex].location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
