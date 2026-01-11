"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import { GlassContainer } from "../cards/glassmorphism";

const avatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
];

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      <div className="absolute top-1/4 left-0 w-48 md:w-150 h-48 md:h-96 bg-cyan-500/25 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute top-1/4 right-0 w-48 md:w-150 h-48 md:h-96 bg-cyan-500/25 rounded-full blur-3xl translate-x-1/2" />

      <div className="absolute top-[-50px] md:top-[-100px] left-0 w-32 md:w-96 h-24 md:h-46 bg-red-500/25 rounded-full blur-2xl md:blur-3xl" />
      <div className="absolute top-[-50px] md:top-[-100px] left-1/4 w-32 md:w-96 h-24 md:h-46 bg-green-500/25 rounded-full blur-2xl md:blur-3xl -translate-x-1/2" />
      <div className="absolute top-[-50px] md:top-[-100px] left-1/2 w-32 md:w-96 h-24 md:h-46 bg-yellow-500/25 rounded-full blur-2xl md:blur-3xl -translate-x-1/2" />
      <div className="absolute top-[-50px] md:top-[-100px] left-3/4 w-32 md:w-96 h-24 md:h-46 bg-purple-500/25 rounded-full blur-2xl md:blur-3xl -translate-x-1/2" />
      <div className="absolute top-[-50px] md:top-[-100px] right-0 w-32 md:w-96 h-24 md:h-46 bg-blue-500/25 rounded-full blur-2xl md:blur-3xl translate-x-0" />

      {/* RERA Licensed Badge - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20 flex flex-col items-center gap-2 px-3 md:px-4 py-2.5 md:py-3 bg-white/60 rounded-full"
      >
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-10 h-10 md:w-14 md:h-14 relative">
            <Image
              src="/hero/dld.svg"
              alt="DLD"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-10 h-10 md:w-14 md:h-14 relative">
            <Image
              src="/hero/rera.svg"
              alt="RERA"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <span className="text-[9px] md:text-[10px] text-slate-600 font-medium text-center leading-tight">
          RERA Licensed Real Estate Company
        </span>
      </motion.div>

      <div className="relative z-10 h-full flex flex-col justify-between pt-20 md:pt-24 pb-0">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-6">
            {/* Rating with Avatars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <div className="flex -space-x-2">
                {avatars.map((avatar, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white overflow-hidden shadow-md"
                  >
                    <Image
                      src={avatar}
                      alt={`Customer ${i + 1}`}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white backdrop-blur-sm rounded-full">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <span className="text-xs md:text-sm text-slate-700 font-semibold">
                  500+ Reviews
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-700 leading-tight tracking-tight"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Your{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500/50 to-cyan-500/50">
                  Reliable
                </span>
                <svg
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 6C50 2 150 2 198 6"
                    stroke="url(#hero-underline)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="hero-underline"
                      x1="0"
                      y1="0"
                      x2="200"
                      y2="0"
                    >
                      <stop
                        offset="0"
                        stopColor="#00e7f4ff"
                        stopOpacity="0.3"
                      />
                      <stop
                        offset="0.33"
                        stopColor="#fde047"
                        stopOpacity="0.5"
                      />
                      <stop
                        offset="0.66"
                        stopColor="#93c5fd"
                        stopOpacity="0.5"
                      />
                      <stop offset="1" stopColor="#67e8f9" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{" "}
              Real Estate
              <br />
              Partner in Dubai
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="https://wa.me/971529368338"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 p-2 pl-4 text-md font-[500] text-black bg-gradient-to-r from-green-300/30 via-yellow-300/50 via-blue-300/50 to-cyan-300/50 transition-all duration-300 rounded-full hover:shadow-lg hover:shadow-cyan-500/30"
              >
                <span>Connect with us</span>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center ">
                  <ArrowRight
                    size={20}
                    className="text-black rotate-[-45deg]"
                  />
                </div>
              </a>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full"
        >
          <div className="container mx-auto w-full px-0 md:px-20 max-w-7xl ">
            <Image
              src="/hero/hero1.png"
              alt="Dubai Skyline"
              width={1400}
              height={600}
              className="w-full h-[300px] sm:h-[500px] md:h-auto object-cover md:object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
