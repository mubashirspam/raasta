"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, X } from "lucide-react";


export const Hero: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-linear-to-r from-[#ffdedc] from 14% via-[#f5c1f5] to-[#7fbdff] to 95%  w-full overflow-hidden">

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://www.canva.com/design/DAG-F9sqUbI/43ZWGMNmhM9ZW_fIh5pLng/edit?ui=eyJBIjp7IkEiOiJkb3dubG9hZF9wbmciLCJGIjp0cnVlfX0"
          type="video/mp4"
        />
      </video>

      {/* Overlay for better text readability */}

      {/* Main Content Container */}
      <div className="relative  z-10 container mx-auto px-6 md:px-12 lg:px-20 min-h-screen flex flex-col justify-between py-8 pt-24">
        {/* Main Hero Content */}
        <div className="flex-1 flex flex-col justify-center">
          {/* First Line - YOUR RELIABLE */}
          <div className="flex items-center gap-4 md:gap-8 mb-2 md:mb-4">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl md:text-8xl lg:text-[120px] xl:text-[160px] font-black text-slate-800 leading-[0.9] tracking-tighter"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              YOUR
            </motion.h1>

            {/* Rotating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              ref={badgeRef}
              className="relative w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 flex-shrink-0"
            >
              {/* Rotating text circle */}
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text className="text-[9px] uppercase tracking-[0.3em] fill-white font-medium">
                  <textPath href="#circlePath">
                    • SEE PROPERTIES • SEE PROPERTIES • SEE PROPERTIES
                  </textPath>
                </text>
              </svg>
              {/* Center arrow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full border-2 border-white flex items-center justify-center">
                  <ArrowDownRight className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Second Line - REAL ESTATE */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[100px] xl:text-[120px] uppercase font-black text-slate-800 leading-[0.9] tracking-tighter"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span className="text-[#f466d3] lg:text-[140px] ">RELIABLE</span>{" "}
            REAL ESTATE PARTNER IN DUBAI
          </motion.h1>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pb-8"
        >
          {/* Left - Description & CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 max-w-2xl">
            <p className="text-white/80 text-sm md:text-base max-w-xs leading-relaxed">
              We transform your property dreams into reality — from finding your
              perfect home to smart investments — creating wealth that lasts
              generations.
            </p>

            <Link
              href="https://wa.me/971000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-white text-slate-900 rounded-full font-semibold hover:bg-white/90 hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              <span className="uppercase tracking-wide text-sm">
                Let&apos;s Talk
              </span>
              <X
                size={18}
                strokeWidth={3}
                className="group-hover:rotate-90 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Right - Social Links */}
          <div className="flex flex-col gap-2 text-right">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-white hover:text-white/80 transition-colors"
            >
              <span className="text-sm font-medium">Facebook</span>
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-white hover:text-white/80 transition-colors"
            >
              <span className="text-sm font-medium">LinkedIn</span>
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-white hover:text-white/80 transition-colors"
            >
              <span className="text-sm font-medium">Instagram</span>
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
