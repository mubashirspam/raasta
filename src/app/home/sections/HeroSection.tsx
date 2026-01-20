"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";
import Image from "next/image";

// Chip data with positions, rotations, and colors
const chips = [
  {
    text: "Premium Properties",
    color: "bg-gradient-to-r from-yellow-300 to-amber-400 text-amber-900",
    position: { top: "40%", left: "15%" },
    mobilePosition: { top: "15%", left: "5%" },
    rotate: -12,
    parallaxFactor: 0.7,
  },
  {
    text: "Proven Success",
    color: "bg-gradient-to-r from-orange-400 to-red-400 text-white",
    position: { top: "40%", right: "12%" },
    mobilePosition: { top: "15%", right: "5%" },
    rotate: 8,
    parallaxFactor: 0.5,
  },
  {
    text: "Dubai Marina",
    color: "bg-gradient-to-r from-cyan-400 to-blue-500 text-white",
    position: { top: "60%", left: "17%" },
    mobilePosition: { top: "78%", left: "5%" },
    rotate: -8,
    parallaxFactor: 0.5,
  },
  {
    text: "Investment",
    color: "bg-gradient-to-r from-violet-400 to-purple-500 text-white",
    position: { top: "43%", left: "48%" },
    mobilePosition: { top: "82%", left: "40%" },
    rotate: 15,
    parallaxFactor: 0.4,
  },
  {
    text: "Golden Visa",
    color: "bg-gradient-to-r from-emerald-400 to-teal-500 text-white",
    position: { top: "60%", right: "18%" },
    mobilePosition: { top: "78%", right: "5%" },
    rotate: -6,
    parallaxFactor: 0.3,
  },
];

export const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / window.innerWidth,
        y: (e.clientY - window.innerHeight / 2) / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-50">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-0 w-64 sm:w-80 md:w-150 h-64 sm:h-80 md:h-96 bg-cyan-500/30 md:bg-cyan-500/20 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute top-1/4 right-0 w-64 sm:w-80 md:w-150 h-64 sm:h-80 md:h-96 bg-cyan-500/30 md:bg-cyan-500/20 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute top-[-30px] sm:top-[-50px] md:top-[-100px] left-0 w-24 sm:w-32 md:w-96 h-20 sm:h-24 md:h-46 bg-red-500/20 rounded-full blur-xl sm:blur-2xl md:blur-3xl" />
      <div className="absolute top-[-30px] sm:top-[-50px] md:top-[-100px] left-1/4 w-24 sm:w-32 md:w-96 h-20 sm:h-24 md:h-46 bg-green-500/20 rounded-full blur-xl sm:blur-2xl md:blur-3xl -translate-x-1/2" />
      <div className="absolute top-[-30px] sm:top-[-50px] md:top-[-100px] left-1/2 w-24 sm:w-32 md:w-96 h-20 sm:h-24 md:h-46 bg-yellow-500/20 rounded-full blur-xl sm:blur-2xl md:blur-3xl -translate-x-1/2" />
      <div className="absolute top-[-30px] sm:top-[-50px] md:top-[-100px] left-3/4 w-24 sm:w-32 md:w-96 h-20 sm:h-24 md:h-46 bg-purple-500/20 rounded-full blur-xl sm:blur-2xl md:blur-3xl -translate-x-1/2" />
      <div className="absolute top-[-30px] sm:top-[-50px] md:top-[-100px] right-0 w-24 sm:w-32 md:w-96 h-20 sm:h-24 md:h-46 bg-blue-500/20 rounded-full blur-xl sm:blur-2xl md:blur-3xl translate-x-0" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2724%27%20height=%2742%27%20viewBox=%270%200%2024%2042%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M12%2021l-12-7V0l12%207V21zm12-7l-12%207V42l12-7V14z%27%20fill=%27%23ffffff%27%20fill-opacity=%270.1%27%20fill-rule=%27evenodd%27/%3E%3C/svg%3E')] opacity-100" />

      {/* Floating Chips - Scattered around content */}
      {chips.map((chip, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: mousePosition.x * 100 * chip.parallaxFactor,
            y: isMobile
              ? [0, -10, 0] // Floating keyframes for mobile
              : mousePosition.y * 100 * chip.parallaxFactor,
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.3 + i * 0.15 },
            scale: { duration: 0.8, delay: 0.3 + i * 0.15, type: "spring" },
            x: { duration: 0.3, ease: "easeOut" },
            y: isMobile
              ? {
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2, // Offset the start for each chip
                }
              : { duration: 0.3, ease: "easeOut" },
          }}
          className={`absolute px-2.5 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-lg md:rounded-xl text-[11px] sm:text-xs md:text-sm font-bold shadow-lg z-30 cursor-default ${chip.color}`}
          style={{
            ...(isMobile ? chip.mobilePosition : chip.position),
            rotate: `${chip.rotate}deg`,
          }}
        >
          {chip.text}
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-0 py-8 sm:py-10">
        <div className="text-center w-full max-w-7xl mx-auto">
          {/* RERA Badge - Above Heading */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="flex flex-col items-center gap-1 sm:gap-1.5 md:gap-1 mb-12 sm:mb-16 md:mb-20 "
          >
            {/* Logos Row */}
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
              <div className="w-35 h-24 sm:w-28 sm:h-28 md:w-50 md:h-30 relative">
                <Image
                  src="/hero/land_department.svg"
                  alt="land_department"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-35 h-24 sm:w-28 sm:h-28 md:w-60 md:h-30 relative">
                <Image
                  src="/hero/rera2.png"
                  alt="RERA"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* 5 Star Rating */}
            <div className="flex items-center gap-0.5 sm:gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-400 fill-yellow-400"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Text */}
            <span className="text-[10px] sm:text-xs md:text-sm text-slate-700 font-semibold px-2">
              RERA Licensed Real Estate Brokerage
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-black text-slate-900 leading-[1.1] tracking-[-0.03em] px-2 sm:px-4"
          >
            Your{" "}
            <span className="relative inline-block group">
              <motion.span className="absolute -top-6 sm:-top-8 md:-top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                Trust is our currency
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45" />
              </motion.span>
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 font-black"
                style={{
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
              >
                Reliable
              </span>
              <svg
                className="absolute -bottom-0.5 sm:-bottom-1 md:-bottom-2 left-0 w-full opacity-70"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6C50 2 150 2 198 6"
                  stroke="url(#hero-underline)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="animate-pulse"
                />
                <defs>
                  <linearGradient
                    id="hero-underline"
                    x1="0"
                    y1="0"
                    x2="200"
                    y2="0"
                  >
                    <stop offset="0" stopColor="#10b981" stopOpacity="0.9" />
                    <stop offset="0.5" stopColor="#06b6d4" stopOpacity="0.9" />
                    <stop offset="1" stopColor="#22d3ee" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{" "}
            Real Estate
            <br />
            <span>Partner in Dubai</span>
          </motion.h1>

          {/* Two Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 sm:mt-16 md:mt-24 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
          >
            {/* Connect Button */}
            <a
              href="https://wa.me/971529368338"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 transition-all duration-300 rounded-full hover:shadow-xl hover:shadow-cyan-500/25 hover:scale-[1.02] w-full sm:w-auto justify-center"
            >
              <span className="tracking-wide">Connect with us</span>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <ArrowRight
                  size={14}
                  className="sm:w-4 sm:h-4 text-white rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300"
                />
              </div>
            </a>

            {/* Explore Button */}
            <Link
              href="#services"
              className="group inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-slate-800 bg-white border-2 border-slate-200 transition-all duration-300 rounded-full hover:border-slate-300 hover:shadow-lg hover:scale-[1.02] w-full sm:w-auto justify-center"
            >
              <span className="tracking-wide">Book a meeting</span>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                <Compass
                  size={14}
                  className="sm:w-4 sm:h-4 text-slate-600 group-hover:rotate-45 transition-transform duration-300"
                />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Watermark */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none">
          <h1 className="text-[18vw] sm:text-[16vw] md:text-[14vw] font-black text-center whitespace-nowrap leading-none tracking-tighter text-slate-900">
            RAASTA REALTY
          </h1>
        </div>
      </div>
    </section>
  );
};
