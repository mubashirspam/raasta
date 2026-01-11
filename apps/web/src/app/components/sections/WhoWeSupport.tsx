"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  TrendingUp,
  Globe,
  Heart,
  Crown,
  Users,
  ArrowRight,
  Sparkles,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { RevealSection } from "../ui";

const PERSONAS = [
  {
    id: 1,
    title: "First-Time Home Buyers",
    shortTitle: "First-Time Buyers",
    description: "We make your first step feel safe, clear, and confident.",
    longDescription:
      "Navigating the Dubai real estate market for the first time can be overwhelming. We simplify every stage—from understanding areas and budgets to documentation and handover—so you feel confident with every decision.",
    icon: Home,
    color: "#2EA8FF",
    bgGradient: "from-blue-400/20 to-cyan-400/20",
    stat: "500+",
    statLabel: "First-time buyers guided",
  },
  {
    id: 2,
    title: "Investors",
    shortTitle: "Investors",
    description:
      "We guide you to invest with clarity, conviction, and long-term vision.",
    longDescription:
      "Our approach combines market analysis, government initiatives like D33 and 2040 Master Plan insights to help you invest strategically. Whether off-plan or ready properties, we help you build a portfolio designed for appreciation.",
    icon: TrendingUp,
    color: "#10B981",
    bgGradient: "from-emerald-400/20 to-teal-400/20",
    stat: "AED 2B+",
    statLabel: "Investment portfolio",
  },
  {
    id: 3,
    title: "NRI Clients",
    shortTitle: "NRI Clients",
    description: "No matter where you are, we stay close to your journey.",
    longDescription:
      "Distance should never be a barrier to smart investing. We provide end-to-end virtual consultations, transparent documentation, and ongoing support for Non-Resident Indians looking to invest in Dubai's premium real estate.",
    icon: Globe,
    color: "#8B5CF6",
    bgGradient: "from-violet-400/20 to-purple-400/20",
    stat: "30+",
    statLabel: "Countries served",
  },
  {
    id: 4,
    title: "End-Users",
    shortTitle: "End-Users",
    description: "We support you in finding a place you'll love living in.",
    longDescription:
      "Beyond investment returns, we understand the emotional value of finding a home. We listen to your lifestyle preferences, family needs, and long-term goals to match you with properties that truly feel like home.",
    icon: Heart,
    color: "#F43F5E",
    bgGradient: "from-rose-400/20 to-pink-400/20",
    stat: "98%",
    statLabel: "Client satisfaction",
  },
  {
    id: 5,
    title: "The 1% Circle",
    shortTitle: "1% Circle",
    description:
      "We help to discover the rare assets that symbolize your success, status, and legacy.",
    longDescription:
      "For clients seeking the extraordinary—ultra-premium penthouses, beachfront villas, and exclusive off-market opportunities. Our VIP concierge service provides white-glove treatment for the most discerning investors.",
    icon: Crown,
    color: "#F59E0B",
    bgGradient: "from-amber-400/20 to-orange-400/20",
    stat: "AED 50M+",
    statLabel: "Luxury transactions",
  },
  {
    id: 6,
    title: "Referral Clients & Friends",
    shortTitle: "Referrals",
    description: "Introduced with trust, welcomed like family.",
    longDescription:
      "Word-of-mouth is our highest compliment. Clients referred to us receive the same personalized care and commitment that earned their trust in the first place. Every referral is treated as an extension of our family.",
    icon: Users,
    color: "#6366F1",
    bgGradient: "from-indigo-400/20 to-blue-400/20",
    stat: "70%",
    statLabel: "Referral-based clients",
  },
];

const AUTO_ROTATE_INTERVAL = 4000; // 4 seconds

export const WhoWeSupport: React.FC = () => {
  const [activePersona, setActivePersona] = useState<number>(1);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const currentPersona =
    PERSONAS.find((p) => p.id === activePersona) || PERSONAS[0];

  // Auto-rotate personas when user is not interacting
  const nextPersona = useCallback(() => {
    setActivePersona((prev) => {
      const next = prev >= PERSONAS.length ? 1 : prev + 1;
      return next;
    });
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(nextPersona, AUTO_ROTATE_INTERVAL);
    return () => clearInterval(interval);
  }, [isPaused, nextPersona]);

  // Handle user interaction - pause auto-rotate
  const handlePersonaClick = (id: number) => {
    setActivePersona(id);
    setIsPaused(true);
    // Resume auto-rotate after 10 seconds of inactivity
    setTimeout(() => setIsPaused(false), 10000);
  };

  // Scroll mobile selector into view when active persona changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeButton = scrollContainerRef.current.querySelector(
        `[data-persona-id="${activePersona}"]`
      );
      if (activeButton) {
        activeButton.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activePersona]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Beautiful Light Gradient Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #f0f9ff 0%, #faf5ff 25%, #fdf2f8 50%, #fff7ed 75%, #f0fdfa 100%)",
        }}
      />

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute -left-[10%] top-[10%] w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-40 mix-blend-multiply animate-pulse"
          style={{ background: "#bfdbfe" }}
        />
        <div
          className="absolute -right-[5%] top-[30%] w-[45vw] h-[45vw] rounded-full blur-[120px] opacity-40 mix-blend-multiply animate-pulse"
          style={{ background: "#ddd6fe", animationDelay: "1s" }}
        />
        <div
          className="absolute left-[20%] -bottom-[10%] w-[40vw] h-[40vw] rounded-full blur-[120px] opacity-30 mix-blend-multiply animate-pulse"
          style={{ background: "#fce7f3", animationDelay: "2s" }}
        />
        <div
          className="absolute right-[10%] bottom-[20%] w-[35vw] h-[35vw] rounded-full blur-[100px] opacity-30 mix-blend-multiply animate-pulse"
          style={{ background: "#ccfbf1", animationDelay: "1.5s" }}
        />
      </div>

      {/* Premium Noise Texture */}
      <div className="absolute inset-0 z-20 bg-white/20 backdrop-blur-[1px]" />
      <div
        className="absolute inset-0 z-20 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-30 max-w-7xl mx-auto">
        {/* Premium Header with Illustrations */}
        <RevealSection>
          <div className="text-center mb-10 sm:mb-16 lg:mb-20 relative">
            {/* Top Decorative Element */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-2 sm:-top-4 flex items-center gap-2">
              <Sparkles
                size={14}
                className="text-amber-400 fill-current animate-pulse sm:w-4 sm:h-4"
              />
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
              <Sparkles
                size={14}
                className="text-amber-400 fill-current animate-pulse sm:w-4 sm:h-4"
                style={{ animationDelay: "0.5s" }}
              />
            </div>

            <div className="pt-6 sm:pt-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#2EA8FF]/10 via-violet-500/10 to-rose-500/10 border border-[#2EA8FF]/20 text-[#2EA8FF] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4 sm:mb-8 shadow-md backdrop-blur-sm">
                <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#2EA8FF] animate-pulse" />
                <span>Tailored For Every Journey</span>
              </div>

              {/* Main Title with Decorative SVG */}
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight mb-4 sm:mb-6 leading-[1.1]">
                Who We{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2EA8FF] via-violet-500 to-rose-500">
                    Support
                  </span>
                  {/* Decorative underline */}
                  <svg
                    className="absolute -bottom-1 sm:-bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                  >
                    <path
                      d="M2 6 Q 40 2, 80 8 Q 120 14, 160 6 Q 180 2, 198 6"
                      stroke="url(#support-wave)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <defs>
                      <linearGradient
                        id="support-wave"
                        x1="0"
                        y1="0"
                        x2="200"
                        y2="0"
                      >
                        <stop stopColor="#2EA8FF" />
                        <stop offset="0.5" stopColor="#8B5CF6" />
                        <stop offset="1" stopColor="#F43F5E" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h2>

              <p className="max-w-3xl mx-auto text-sm sm:text-lg md:text-xl text-slate-600 leading-relaxed px-2">
                We support people at every stage of their journey—from
                understanding goals and shortlisting opportunities to
                documentation, handover, and beyond.
              </p>
            </div>

            {/* Side Decorative Elements - Hidden on Mobile */}
            <div className="hidden lg:flex absolute left-[8%] top-1/2 -translate-y-1/2 flex-col items-center gap-3">
              <div className="w-px h-16 bg-gradient-to-b from-[#2EA8FF] to-transparent" />
              <div className="w-3 h-3 rounded-full border-2 border-[#2EA8FF] bg-white" />
              <div className="w-px h-8 bg-gradient-to-b from-[#2EA8FF]/50 to-transparent" />
            </div>
            <div className="hidden lg:flex absolute right-[8%] top-1/2 -translate-y-1/2 flex-col items-center gap-3">
              <div className="w-px h-8 bg-gradient-to-b from-transparent to-rose-500/50" />
              <div className="w-3 h-3 rounded-full border-2 border-rose-500 bg-white" />
              <div className="w-px h-16 bg-gradient-to-b from-transparent to-rose-500" />
            </div>
          </div>
        </RevealSection>

        {/* MOBILE: Horizontal Scrollable Persona Selector */}
        <div className="lg:hidden mb-6">
          <RevealSection delay={0.2}>
            <div className="relative">
              {/* Scroll Arrows */}
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/90 backdrop-blur-sm shadow-lg rounded-full flex items-center justify-center text-slate-600 hover:bg-white transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/90 backdrop-blur-sm shadow-lg rounded-full flex items-center justify-center text-slate-600 hover:bg-white transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight size={18} />
              </button>

              {/* Scrollable Container */}
              <div
                ref={scrollContainerRef}
                className="flex gap-3 overflow-x-auto scrollbar-hide px-10 py-2 -mx-4 sm:-mx-6"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {PERSONAS.map((persona) => (
                  <motion.button
                    key={persona.id}
                    data-persona-id={persona.id}
                    onClick={() => handlePersonaClick(persona.id)}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      flex-shrink-0 flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-all duration-300
                      ${
                        activePersona === persona.id
                          ? "bg-white shadow-lg shadow-slate-200/50"
                          : "bg-white/60 backdrop-blur-sm"
                      }
                    `}
                    style={{
                      borderWidth: 2,
                      borderColor:
                        activePersona === persona.id
                          ? persona.color
                          : "transparent",
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${persona.color}20, ${persona.color}40)`,
                      }}
                    >
                      <persona.icon
                        size={16}
                        style={{ color: persona.color }}
                        strokeWidth={2}
                      />
                    </div>
                    <span className="text-sm font-semibold text-slate-800 whitespace-nowrap">
                      {persona.shortTitle}
                    </span>
                    {activePersona === persona.id && (
                      <ChevronRight
                        size={14}
                        style={{ color: persona.color }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Progress Indicator */}
              <div className="flex justify-center gap-1 mt-3">
                {PERSONAS.map((persona) => (
                  <button
                    key={persona.id}
                    onClick={() => handlePersonaClick(persona.id)}
                    className="relative h-1 rounded-full overflow-hidden transition-all duration-300"
                    style={{
                      width: activePersona === persona.id ? 24 : 8,
                      background:
                        activePersona === persona.id
                          ? persona.color
                          : "#e2e8f0",
                    }}
                  >
                    {activePersona === persona.id && !isPaused && (
                      <motion.div
                        className="absolute inset-0 bg-white/50"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                          duration: AUTO_ROTATE_INTERVAL / 1000,
                          ease: "linear",
                          repeat: Infinity,
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 lg:gap-16 items-stretch">
          {/* DESKTOP: Left Persona Selector Grid */}
          <RevealSection delay={0.2} className="h-full">
            <div
              className="hidden lg:flex flex-col h-full relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Persona Buttons - Desktop Grid with Icon + Title in same row */}
              <div className="grid grid-cols-1 gap-3 flex-1">
                {PERSONAS.map((persona, idx) => (
                  <motion.button
                    key={persona.id}
                    onClick={() => handlePersonaClick(persona.id)}
                    onMouseEnter={() => setHoveredId(persona.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`
                      relative group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 text-left
                      ${
                        activePersona === persona.id
                          ? "bg-white shadow-xl shadow-slate-200/60"
                          : "bg-white/50 backdrop-blur-sm hover:bg-white hover:shadow-lg"
                      }
                    `}
                  >
                    {/* Active Indicator */}
                    {activePersona === persona.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full"
                        style={{ background: persona.color }}
                        transition={{ type: "spring", bounce: 0.2 }}
                      />
                    )}

                    {/* Icon */}
                    <div
                      className={`
                        w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
                        transition-all duration-300
                        ${
                          activePersona === persona.id
                            ? "scale-110"
                            : "group-hover:scale-105"
                        }
                      `}
                      style={{
                        background: `linear-gradient(135deg, ${persona.color}20, ${persona.color}40)`,
                      }}
                    >
                      <persona.icon
                        size={22}
                        style={{ color: persona.color }}
                        strokeWidth={2}
                      />
                    </div>

                    {/* Title */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-slate-900 text-sm leading-tight truncate">
                        {persona.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5 truncate">
                        {persona.description.slice(0, 40)}...
                      </p>
                    </div>

                    {/* Arrow */}
                    <div
                      className={`
                        w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                        ${
                          activePersona === persona.id
                            ? "bg-opacity-100"
                            : "bg-opacity-0 group-hover:bg-opacity-100"
                        }
                      `}
                      style={{
                        background:
                          activePersona === persona.id ||
                          hoveredId === persona.id
                            ? `${persona.color}15`
                            : "transparent",
                      }}
                    >
                      <ArrowRight
                        size={16}
                        className={`transition-all duration-300 ${
                          activePersona === persona.id
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                        }`}
                        style={{ color: persona.color }}
                      />
                    </div>

                    {/* Progress bar for current item */}
                    {activePersona === persona.id && !isPaused && (
                      <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: persona.color }}
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: AUTO_ROTATE_INTERVAL / 1000,
                            ease: "linear",
                          }}
                          key={`progress-${activePersona}`}
                        />
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </RevealSection>

          {/* Right: Detail Panel - Glassmorphism Style */}
          <RevealSection delay={0.4} className="h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPersona.id}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-[2rem] lg:rounded-[3rem] p-5 sm:p-8 lg:p-12 shadow-xl sm:shadow-2xl shadow-slate-200/60 overflow-hidden h-full flex flex-col"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${currentPersona.bgGradient} opacity-50`}
                />

                {/* Decorative Circles */}
                <div
                  className="absolute -right-10 sm:-right-20 -top-10 sm:-top-20 w-32 sm:w-60 h-32 sm:h-60 rounded-full blur-2xl sm:blur-3xl opacity-30"
                  style={{ background: currentPersona.color }}
                />
                <div
                  className="absolute -left-5 sm:-left-10 -bottom-5 sm:-bottom-10 w-20 sm:w-40 h-20 sm:h-40 rounded-full blur-xl sm:blur-2xl opacity-20"
                  style={{ background: currentPersona.color }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon & Title Row */}
                  <div className="flex items-start gap-3 sm:gap-5 mb-4 sm:mb-8">
                    <motion.div
                      initial={{ rotate: -10, scale: 0.8 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{ type: "spring", bounce: 0.4 }}
                      className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg sm:shadow-xl flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${currentPersona.color}, ${currentPersona.color}CC)`,
                      }}
                    >
                      <currentPersona.icon
                        size={28}
                        className="text-white sm:w-9 sm:h-9"
                        strokeWidth={1.5}
                      />
                    </motion.div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-2xl lg:text-3xl font-black text-slate-900 mb-1 sm:mb-2">
                        {currentPersona.title}
                      </h3>
                      <p className="text-slate-500 text-sm sm:text-base font-medium line-clamp-2">
                        {currentPersona.description}
                      </p>
                    </div>
                  </div>

                  {/* Long Description */}
                  <p className="text-slate-600 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-10 flex-1">
                    {currentPersona.longDescription}
                  </p>

                  {/* Stats Card - Updated UI, shadow removed */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-50/50 backdrop-blur-sm border border-slate-100">
                    <div className="flex items-center gap-4 sm:flex-col sm:gap-2">
                      <div
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center bg-white/60 border border-slate-100"
                        style={{ background: `${currentPersona.color}05` }}
                      >
                        <span
                          className="text-xl sm:text-2xl font-black"
                          style={{ color: currentPersona.color }}
                        >
                          {currentPersona.stat}
                        </span>
                      </div>
                      <p className="text-slate-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest sm:text-center">
                        {currentPersona.statLabel}
                      </p>
                    </div>
                    <div className="flex-1 hidden sm:block" />
                    <button
                      className="flex items-center justify-center gap-2 px-5 sm:px-8 py-3 rounded-xl sm:rounded-full font-bold text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20"
                      style={{
                        background: `linear-gradient(135deg, ${currentPersona.color}, ${currentPersona.color}DD)`,
                      }}
                    >
                      <span>Get Started</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </RevealSection>
        </div>
      </div>
    </section>
  );
};
