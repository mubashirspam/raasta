"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Play } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #e8f5e9 0%, #e0f7fa 30%, #f3e5f5 70%, #fce4ec 100%)",
        }}
      />

      {/* Decorative Stars */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute top-20 right-[45%] z-10"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
            fill="#6366f1"
          />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="absolute top-32 right-[15%] z-10"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
            fill="#f59e0b"
          />
        </svg>
      </motion.div>

      {/* Small decorative circles */}
      <div className="absolute bottom-32 right-[12%] w-3 h-3 rounded-full border-2 border-emerald-400 z-10" />
      <div className="absolute top-1/2 right-[8%] w-2 h-2 rounded-full bg-emerald-400 z-10" />

      {/* Main Content Container */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 lg:px-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="text-sm font-medium text-slate-700">
                Your Trusted Real Estate Partner
              </span>
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 leading-[1.1] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Find Your{" "}
              <span
                className="italic"
                style={{
                  backgroundImage: "linear-gradient(90deg, #2EA8FF, #06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Dream
              </span>
              <br />
              Property &amp; Grow
              <br />
              Your Portfolio
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-base md:text-lg text-slate-600 mb-8 max-w-md"
            >
              We have 10+ years of experience helping clients find the perfect
              properties and investment opportunities in Dubai.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center gap-4 flex-wrap"
            >
              <Link
                href="/properties"
                className="group flex items-center gap-2 px-7 py-4 bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white rounded-full font-semibold shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 hover:scale-105 transition-all duration-300 uppercase tracking-wide text-sm"
              >
                <span>Explore Properties</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <a
                href="https://wa.me/971000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-2 py-2 text-slate-800 font-semibold hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center shadow-lg shadow-amber-400/30">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <span className="uppercase tracking-wide text-sm">
                  Chat With Us
                </span>
              </a>
            </motion.div>

            {/* RERA Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex items-center gap-3 mt-10 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm"
            >
              <span className="text-xs md:text-sm text-slate-600 font-medium">
                RERA Licensed Brokerage
              </span>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 md:w-10 md:h-10 relative">
                  <Image
                    src="/hero/dld.svg"
                    alt="DLD"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 relative">
                  <Image
                    src="/hero/rera.svg"
                    alt="RERA"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            {/* Circular Frame */}
            <div className="relative">
              {/* Outer circle border */}
              <div className="absolute inset-0 rounded-full border-2 border-slate-200 scale-110" />

              {/* Main image container */}
              <div className="relative w-[300px] h-[400px] md:w-[380px] md:h-[500px] lg:w-[420px] lg:h-[560px] rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="/hero/IMG_3323-min.jpeg"
                  alt="Dubai Property Expert"
                  fill
                  className="object-cover grayscale"
                  priority
                />
              </div>

              {/* Decorative curved arrow */}
              <motion.svg
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute -bottom-4 -left-16 w-32 h-24"
                viewBox="0 0 120 80"
                fill="none"
              >
                <motion.path
                  d="M10 70 Q 60 80 80 40 Q 100 0 110 20"
                  stroke="#6366f1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                />
                <motion.path
                  d="M105 10 L 110 20 L 100 22"
                  stroke="#6366f1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.3 }}
                />
              </motion.svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
