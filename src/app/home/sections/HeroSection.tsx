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
    position: { top: "25%", left: "15%" },
    rotate: -12,
    parallaxFactor: 0.7,
  },
  {
    text: "Proven Success",
    color: "bg-gradient-to-r from-orange-400 to-red-400 text-white",
    position: { top: "22%", right: "12%" },
    rotate: 8,
    parallaxFactor: 0.5,
  },
  {
    text: "Dubai Marina",
    color: "bg-gradient-to-r from-cyan-400 to-blue-500 text-white",
    position: { top: "50%", left: "17%" },
    rotate: -8,
    parallaxFactor: 0.5,
  },
  {
    text: "Investment",
    color: "bg-gradient-to-r from-violet-400 to-purple-500 text-white",
    position: { top: "30%", left: "48%" },
    rotate: 15,
    parallaxFactor: 0.4,
  },
  {
    text: "Golden Visa",
    color: "bg-gradient-to-r from-emerald-400 to-teal-500 text-white",
    position: { top: "48%", right: "18%" },
    rotate: -6,
    parallaxFactor: 0.3,
  },
];

export const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / window.innerWidth,
        y: (e.clientY - window.innerHeight / 2) / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-50">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-0 w-48 md:w-150 h-48 md:h-96 bg-cyan-500/20 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute top-1/4 right-0 w-48 md:w-150 h-48 md:h-96 bg-cyan-500/20 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute top-[-50px] md:top-[-100px] left-0 w-32 md:w-96 h-24 md:h-46 bg-red-500/20 rounded-full blur-2xl md:blur-3xl" />
      <div className="absolute top-[-50px] md:top-[-100px] left-1/4 w-32 md:w-96 h-24 md:h-46 bg-green-500/20 rounded-full blur-2xl md:blur-3xl -translate-x-1/2" />
      <div className="absolute top-[-50px] md:top-[-100px] left-1/2 w-32 md:w-96 h-24 md:h-46 bg-yellow-500/20 rounded-full blur-2xl md:blur-3xl -translate-x-1/2" />
      <div className="absolute top-[-50px] md:top-[-100px] left-3/4 w-32 md:w-96 h-24 md:h-46 bg-purple-500/20 rounded-full blur-2xl md:blur-3xl -translate-x-1/2" />
      <div className="absolute top-[-50px] md:top-[-100px] right-0 w-32 md:w-96 h-24 md:h-46 bg-blue-500/20 rounded-full blur-2xl md:blur-3xl translate-x-0" />

      {/* Floating Chips - Scattered around content */}
      {chips.map((chip, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: mousePosition.x * 100 * chip.parallaxFactor,
            y: mousePosition.y * 100 * chip.parallaxFactor,
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.3 + i * 0.15 },
            scale: { duration: 0.8, delay: 0.3 + i * 0.15, type: "spring" },
            x: { duration: 0.3, ease: "easeOut" },
            y: { duration: 0.3, ease: "easeOut" },
          }}
          className={`absolute hidden md:block px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg z-30 cursor-default ${chip.color}`}
          style={{
            ...chip.position,
            rotate: `${chip.rotate}deg`,
            fontFamily: "'Raleway', sans-serif",
          }}
        >
          {chip.text}
        </motion.div>
      ))}

      {/* RERA Licensed Badge - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20 flex flex-col items-center gap-2 px-4 md:px-5 py-3 md:py-4 bg-white/80 backdrop-blur-sm rounded-2xl"
      >
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-12 h-12 md:w-20 md:h-20 relative">
            <Image
              src="/hero/dld.svg"
              alt="DLD"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-12 h-12 md:w-20 md:h-20 relative">
            <Image
              src="/hero/rera.svg"
              alt="RERA"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <span className="text-[10px] md:text-xs text-slate-700 font-semibold text-center leading-tight">
          RERA Licensed Real Estate Company
        </span>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-10 py-20">
        <div className="text-center w-full mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-9xl xl:text-8xl font-black text-slate-900 leading-[1.1] tracking-[-0.03em]"
            style={{
              fontFamily: "'Raleway', sans-serif",
            }}
          >
            Your{" "}
            <span className="relative inline-block group">
              <motion.span
                className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
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
                className="absolute -bottom-1 md:-bottom-2 left-0 w-full opacity-70"
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
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Connect Button */}
            <a
              href="https://wa.me/971529368338"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 transition-all duration-300 rounded-full hover:shadow-xl hover:shadow-cyan-500/25 hover:scale-[1.02]"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              <span className="tracking-wide">Connect with us</span>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <ArrowRight
                  size={16}
                  className="text-white rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300"
                />
              </div>
            </a>

            {/* Explore Button */}
            <Link
              href="#services"
              className="group inline-flex items-center gap-3 px-6 py-3 text-base font-semibold text-slate-800 bg-white border-2 border-slate-200 transition-all duration-300 rounded-full hover:border-slate-300 hover:shadow-lg hover:scale-[1.02]"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              <span className="tracking-wide">Explore Services</span>
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                <Compass
                  size={16}
                  className="text-slate-600 group-hover:rotate-45 transition-transform duration-300"
                />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Watermark */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none">
          <h1
            className="text-[14vw] font-black text-center whitespace-nowrap leading-none tracking-tighter text-slate-900"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            RAASTA REALTY
          </h1>
        </div>
      </div>
    </section>
  );
};
