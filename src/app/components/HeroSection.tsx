"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { useThemeContext } from "../../../context/ThemeContext";
import dynamic from "next/dynamic";

const LightRays = dynamic(() => import("./ui/LightRays"), { ssr: false });

export default function HeroSection() {
  const { theme } = useThemeContext();

  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowFloatingCTA(scrollY > 400);
      setIsSticky(scrollY < 800);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open("https://wa.me/971501234567", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+971501234567";
  };

  return (
    <>
      <section
        id="home"
        className={`w-full min-h-screen overflow-x-hidden flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-[url('/light-hero-gradient.svg')] dark:bg-[url('/dark-hero-gradient.svg')] bg-no-repeat bg-cover z-10 ${
          isSticky ? "sticky top-0" : "relative"
        }`}
      >
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden "
          style={{ width: "100%", height: "800px", position: "absolute" }}
        >
          {theme === "dark" ? (
            <LightRays
              raysOrigin="top-center"
              raysColor="#99ff00"
              raysSpeed={2}
              lightSpread={3}
              rayLength={5}
              followMouse={true}
              mouseInfluence={0.5}
              noiseAmount={0.3}
              distortion={0.0}
              className="custom-rays"
            />
          ) : (
            <div></div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex flex-col items-center justify-center text-center w-full py-16 sm:py-24 md:py-32 max-w-4xl mx-auto"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 pr-3 sm:pr-4 mb-6 sm:mb-8 rounded-full border border-slate-300 dark:border-slate-100 bg-white/70 dark:bg-slate-600/20 backdrop-blur-sm">
            <div className="flex items-center -space-x-3">
              <Image
                className="size-7 rounded-full object-cover border-2 border-white dark:border-slate-700"
                height={28}
                width={28}
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=28"
                alt="Investor 1"
              />
              <Image
                className="size-7 rounded-full object-cover border-2 border-white dark:border-slate-700"
                height={28}
                width={28}
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=28"
                alt="Investor 2"
              />
              <Image
                className="size-7 rounded-full object-cover border-2 border-white dark:border-slate-700"
                height={28}
                width={28}
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=28&h=28&auto=format&fit=crop"
                alt="Investor 3"
              />
            </div>
            <p className="text-xs font-medium text-slate-600 dark:text-slate-100">
              Join 100+ satisfied investors
            </p>
          </div>

          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-[1.15] md:leading-[1.1] font-semibold text-slate-900 dark:text-white mb-4 sm:mb-6 px-2">
            Find your perfect{" "}
            <span className="bg-gradient-to-r from-[#10b981] dark:from-[#22c55e] to-[#059669] dark:to-[#16a34a] bg-clip-text text-transparent">
              investment properties
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg mx-auto mb-8 sm:mb-10 px-2"
          >
            Explore a selection of high-value real estate opportunities designed
            for financial growth and stability.
          </motion.p>

          {/* <StartFreeButton/> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto transition-all duration-500 ${
              showFloatingCTA ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto bg-[#10b981] dark:bg-green-600 hover:bg-green-700 transition text-white rounded-md px-6 sm:px-8 h-11 sm:h-12 flex items-center justify-center gap-2 font-medium shadow-lg hover:shadow-green-500/25 text-sm sm:text-base"
            >
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={handleCall}
              className="w-full sm:w-auto flex items-center justify-center gap-2 border border-green-200 dark:border-green-900 hover:border-green-300 dark:hover:border-green-700 bg-transparent hover:bg-green-50 dark:hover:bg-green-900/20 transition text-slate-600 dark:text-white rounded-md px-6 sm:px-8 h-11 sm:h-12 font-medium text-sm sm:text-base"
            >
              <Phone size={20} />
              <span>15-Minute Call</span>
            </button>
          </motion.div>
        </motion.div>
      </section>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
