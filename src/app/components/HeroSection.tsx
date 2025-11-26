"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

export default function HeroSection() {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCTA(window.scrollY > 400);
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
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&q=80"
            alt="Dubai Skyline"
            fill
            priority
            className="object-cover"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4"
          >
            Find your perfect
            <br />
            investment properties
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm md:text-base text-gray-200 leading-relaxed max-w-xl mx-auto mb-8"
          >
            Explore a selection of high-value real estate opportunities
            <br />
            designed for financial growth and stability
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-500 ${
              showFloatingCTA ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsApp}
              className="group flex items-center justify-center gap-2 w-40 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold text-xs shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCall}
              className="group flex items-center justify-center gap-2 w-40 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold text-xs shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Phone size={16} />
              <span>15-Minute Call</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {showFloatingCTA && (
        <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-3 animate-slide-up">
          <button
            onClick={handleWhatsApp}
            className="group w-16 h-16 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center relative"
            aria-label="WhatsApp"
          >
            <MessageCircle size={24} />
            <span className="absolute right-full mr-3 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              WhatsApp Message
            </span>
          </button>
          <button
            onClick={handleCall}
            className="group w-16 h-16 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center relative"
            aria-label="Call"
          >
            <Phone size={24} />
            <span className="absolute right-full mr-3 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              15-Minute Call
            </span>
          </button>
        </div>
      )}

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
