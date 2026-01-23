"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BookOpen,
  TrendingUp,
  Wallet,
  ArrowRight,
  Lightbulb,
  ExternalLink,
  Sparkles,
  Target,
  Heart,
  Users,
  Building2,
} from "lucide-react";
import { RevealSection } from "../ui";

const VISION_CARDS = [
  {
    id: 1,
    title: "2040 Urban Master Plan",
    subtitle: "Shaping Dubai's Future",
    description: "Dubai's comprehensive urban development vision",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
    link: "https://u.ae/en/about-the-uae/strategies-initiatives-and-awards/strategies-plans-and-visions/transport-and-infrastructure/dubai-2040-urban-master-plan",
    color: "#2EA8FF",
    icon: Building2,
  },
  {
    id: 2,
    title: "D33 Economic Agenda",
    subtitle: "Doubling Economy by 2033",
    description: "Dubai's ambitious economic transformation roadmap",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    link: "https://www.mediaoffice.ae/en/news/2023/January/04-01/Mohammed-bin-Rashid-launches-Dubai-Economic-Agenda-D33",
    color: "#10B981",
    icon: TrendingUp,
  },
  {
    id: 3,
    title: "Quality of Life Strategy",
    subtitle: "Best City to Live",
    description: "Enhancing residents' wellbeing and happiness",
    image:
      "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=2070&auto=format&fit=crop",
    link: "https://u.ae/en/about-the-uae/strategies-initiatives-and-awards/strategies-plans-and-visions/innovation-and-future-shaping/dubai-quality-life-strategy-2033",
    color: "#F43F5E",
    icon: Heart,
  },
  {
    id: 4,
    title: "Dubai Social Agenda 33",
    subtitle: "Community First",
    description: "Building stronger, connected communities",
    image:
      "https://images.unsplash.com/photo-1600450575795-410e03ec4a6f?q=80&w=2070&auto=format&fit=crop",
    link: "https://u.ae/en/about-the-uae/strategies-initiatives-and-awards/strategies-plans-and-visions/social-affairs/dubai-social-agenda-33",
    color: "#8B5CF6",
    icon: Users,
  },
];

const CONTENT_STEPS = [
  {
    id: "intro",
    content:
      "At Raasta Realty, we don't begin with selling a project. We begin with understanding.",
  },
  {
    id: "context",
    title: "The Context",
    content:
      "Before you invest even a single dirham, we believe you deserve clarity about where Dubai is heading, why certain locations matter, and how government visions shape real value over time. That's why we first educate you about Dubai's long-term direction.",
    icon: Lightbulb,
    gradient: "from-[#2EA8FF] via-blue-500 to-cyan-500",
    shadow: "shadow-blue-500/20",
  },
  {
    id: "process",
    title: "The Process",
    content:
      "We don't rush decisions. We help you see the bigger picture so your investment is not based on speculation, but on logic, planning, and purpose Because when you learn first, you invest with confidence and only then you truly earn.",
    icon: Target,
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    shadow: "shadow-violet-500/20",
  },
  {
    id: "promise",
    title: "The Raasta Promise",
    content:
      '"Here are the 4 important things you should aware before investing in Dubai."',
    icon: Heart,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    shadow: "shadow-emerald-500/20",
  },
];

const ExpandableText = ({ content }: { content: string }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="relative group/text">
      <p
        className={`text-lg text-white/90 leading-relaxed font-medium transition-all duration-300 ${
          isExpanded ? "" : "line-clamp-1 md:line-clamp-none"
        }`}
      >
        {content}
      </p>
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsExpanded(!isExpanded);
        }}
        className={`mt-3 inline-flex items-center gap-1 text-sm font-bold text-white uppercase tracking-wider md:hidden ${
          isExpanded ? "opacity-80" : "opacity-100"
        }`}
      >
        {isExpanded ? (
          <>
            Show Less <span className="text-xs">▲</span>
          </>
        ) : (
          <>
            Read More <span className="text-xs">▼</span>
          </>
        )}
      </button>
    </div>
  );
};

const MobileVisionSlider = ({ cards }: { cards: typeof VISION_CARDS }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [cards.length]);

  const scrollToCard = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="lg:hidden w-full">
      <div className="relative overflow-hidden w-full" ref={containerRef}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card) => (
            <div key={card.id} className="min-w-full px-1">
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block h-full"
              >
                <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50">
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                    {/* Gradient overlay */}
                    <div
                      className="absolute inset-0 opacity-60"
                      style={{
                        background: `linear-gradient(to top, ${card.color}, transparent)`,
                      }}
                    />
                    {/* Bottom Gradient for Text Contrast */}
                    <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    {/* Icon Badge */}
                    <div
                      className="absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md shadow-lg"
                      style={{ background: `${card.color}CC` }}
                    >
                      <card.icon className="w-5 h-5 text-white" />
                    </div>

                    {/* External Link Icon */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>

                    {/* Text Overlay on Image */}
                    <div className="absolute bottom-3 left-4 right-4 z-20 text-left">
                      <h4 className="text-xl font-bold text-white leading-tight shadow-black/50 drop-shadow-md">
                        {card.title}
                      </h4>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 pt-4 text-left">
                    <div
                      className="text-xs font-bold uppercase tracking-wider mb-2"
                      style={{ color: card.color }}
                    >
                      {card.subtitle}
                    </div>

                    <p className="text-sm text-slate-500 line-clamp-2 mb-3">
                      {card.description}
                    </p>

                    {/* Read More Link */}
                    <div
                      className="inline-flex items-center gap-2 text-sm font-semibold"
                      style={{ color: card.color }}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {cards.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToCard(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === idx ? "w-6 bg-slate-800" : "w-2 bg-slate-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export const RealEstatePrinciples: React.FC = () => {
  return (
    <section className="relative pt-10 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Light gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #f0f9ff 0%, #faf5ff 25%, #fdf2f8 50%, #fff7ed 75%, #f0fdfa 100%)",
        }}
      />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[15%] w-[40%] h-[40%] rounded-full bg-linear-to-bl from-cyan-300/30 via-blue-200/30 to-transparent blur-[100px] animate-pulse" />
        <div
          className="absolute bottom-[10%] left-[10%] w-[35%] h-[35%] rounded-full bg-linear-to-tr from-violet-300/30 via-purple-400/20 to-transparent blur-[100px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <RevealSection>
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 shadow-lg shadow-slate-200/30 text-slate-600 text-xs font-bold uppercase tracking-wider mb-4">
              <Lightbulb size={14} className="text-amber-500" />
              <span>Real Estate Basic Principle</span>
            </div>

            {/* Main Title - Learn. Invest. Earn. with Clipped Gradient */}
            <div className="relative inline-flex items-center justify-center">
              <h2 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter flex items-center justify-center flex-wrap gap-x-4 sm:gap-x-6">
                <span className="relative text-transparent bg-clip-text bg-linear-to-r from-[#2EA8FF] to-cyan-500 animate-gradient">
                  Learn
                </span>

                {/* Center Circle Separator */}
                <div className="w-3 h-3 rounded-full bg-cyan-500" />

                <span className="relative text-transparent bg-clip-text bg-linear-to-r from-violet-500 via-purple-500 to-fuchsia-500 animate-gradient">
                  Invest
                </span>

                {/* Center Circle Separator */}
                <div className="w-3 h-3 rounded-full bg-emerald-500" />

                <span className="relative text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 animate-gradient">
                  Earn
                </span>
              </h2>

              {/* Enhanced Sparkle Animations */}
              <motion.div
                className="absolute -top-10 -right-10 text-amber-400"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles size={32} />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-10 text-cyan-400"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.8, 0.2],
                  rotate: [0, -45, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <Sparkles size={24} />
              </motion.div>
            </div>

            {/* Decorative line */}
            <div className="flex items-center justify-center gap-3 mt-5">
              <div className="w-16 h-0.5 bg-linear-to-r from-transparent to-[#2EA8FF]" />
              <div className="w-2 h-2 rounded-full bg-[#2EA8FF]" />
              <div className="w-2 h-2 rounded-full bg-violet-500" />
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <div className="w-16 h-0.5 bg-linear-to-l from-transparent to-emerald-500" />
            </div>
          </div>
        </RevealSection>

        {/* Narrative Content Flow */}
        <div className="flex flex-col gap-8 relative">
          {/* 1. Intro Statement */}
          <RevealSection>
            <div className="text-center max-w-4xl mx-auto px-4">
              <h4 className="text-xl sm:text-xl md:text-2xl font-semibold text-slate-800 leading-relaxed">
                "At Raasta Realty, we don't begin with selling a project. We
                begin with understanding "
              </h4>
            </div>
          </RevealSection>

          {/* 2. Raasta Philosophy Section */}
          <div className="relative">
            {/* Philosophy Badge/Heading */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-slate-900 border border-slate-800 shadow-xl shadow-slate-900/10">
                <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-white font-bold tracking-widest uppercase text-sm">
                  Raasta Promise
                </span>
                <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" />
              </div>
            </div>

            {/* Context & Process Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* The Context Card */}
              <RevealSection delay={0.1} className="h-full">
                <div className="relative h-full bg-linear-to-br from-[#2EA8FF] via-blue-500 to-cyan-500 p-8 sm:p-10 rounded-[2.5rem] shadow-2xl shadow-blue-500/25 overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                  {/* Rich Background Pattern - Blueprint Grid */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2740%27%20height=%2740%27%20viewBox=%270%200%2040%2040%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg%20fill=%27none%27%20fill-rule=%27evenodd%27%3E%3Cg%20fill=%27%23ffffff%27%20fill-opacity=%270.1%27%3E%3Cpath%20d=%27M0%2040L40%200H20L0%2020M40%2040V20L20%2040%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-colors duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-lg">
                        <Lightbulb className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-white">
                        The Road Map
                      </h4>
                    </div>
                    <ExpandableText content={CONTENT_STEPS[1].content} />
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-cyan-300 to-transparent opacity-50" />
                </div>
              </RevealSection>

              {/* The Process Card */}
              <RevealSection delay={0.2} className="h-full">
                <div className="relative h-full bg-linear-to-br from-violet-500 via-purple-500 to-fuchsia-500 p-8 sm:p-10 rounded-[2.5rem] shadow-2xl shadow-violet-500/25 overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                  {/* Rich Background Pattern - Diagonal Lines */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2740%27%20height=%2740%27%20viewBox=%270%200%2040%2040%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg%20fill=%27none%27%20fill-rule=%27evenodd%27%3E%3Cg%20fill=%27%23ffffff%27%20fill-opacity=%270.1%27%3E%3Cpath%20d=%27M0%2040L40%200H20L0%2020M40%2040V20L20%2040%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-white/20 transition-colors duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-lg">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-white">
                        The Process
                      </h4>
                    </div>
                    <ExpandableText content={CONTENT_STEPS[2].content} />
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-fuchsia-300 to-transparent opacity-50" />
                </div>
              </RevealSection>
            </div>
          </div>

          {/* 3. The Raasta Promise */}
          <RevealSection delay={0.3}>
            <div className="relative mb-12">
              <div className="relative bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 p-8 sm:p-12 rounded-[2.5rem] shadow-2xl shadow-emerald-500/30 overflow-hidden text-center group">
                {/* Rich Background Pattern - Hexagons */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2724%27%20height=%2742%27%20viewBox=%270%200%2024%2042%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M12%2021l-12-7V0l12%207V21zm12-7l-12%207V42l12-7V14z%27%20fill=%27%23ffffff%27%20fill-opacity=%270.1%27%20fill-rule=%27evenodd%27/%3E%3C/svg%3E')] opacity-20" />

                {/* Dynamic Glow Background */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite]" />
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />

                <div className="relative z-10 max-w-4xl mx-auto">
                  {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white/90 text-sm font-bold uppercase tracking-wider mb-6">
                    <Heart className="w-4 h-4 text-emerald-100 fill-emerald-100" />
                    <span>The Raasta Promise</span>
                  </div> */}

                  <p className="text-lg sm:text-3xl md:text-4xl font-bold text-white leading-snug font-serif italic">
                    {CONTENT_STEPS[3].content}
                  </p>

                  <div className="mt-8 flex justify-center">
                    <div className="h-1 w-24 bg-linear-to-r from-transparent via-emerald-200 to-transparent rounded-full" />
                  </div>
                </div>

                {/* Decorative Elements */}
                <Sparkles className="absolute top-10 left-10 w-8 h-8 text-emerald-200 animate-pulse opacity-50" />
                <Sparkles
                  className="absolute bottom-10 right-10 w-6 h-6 text-teal-200 animate-pulse opacity-50"
                  style={{ animationDelay: "1s" }}
                />

                <MobileVisionSlider cards={VISION_CARDS} />

                {/* Desktop Grid */}
                <div className="hidden lg:grid lg:grid-cols-4 gap-6 mt-8">
                  {VISION_CARDS.map((card, idx) => (
                    <RevealSection
                      key={card.id}
                      delay={0.3 + idx * 0.1}
                      className="h-full"
                    >
                      <a
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative block h-full"
                      >
                        <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300/50 transition-all duration-500 hover:-translate-y-2">
                          {/* Image Container */}
                          <div className="relative h-40 overflow-hidden">
                            <Image
                              src={card.image}
                              alt={card.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Gradient overlay */}
                            <div
                              className="absolute inset-0 opacity-60 group-hover:opacity-70 transition-opacity duration-500"
                              style={{
                                background: `linear-gradient(to top, ${card.color}, transparent)`,
                              }}
                            />

                            {/* Bottom Gradient for Text Contrast */}
                            <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                            {/* Icon Badge */}
                            <div
                              className="absolute top-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                              style={{ background: `${card.color}CC` }}
                            >
                              <card.icon className="w-5 h-5 text-white" />
                            </div>

                            {/* External Link Icon */}
                            <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                              <ExternalLink className="w-4 h-4 text-white" />
                            </div>

                            {/* Text Overlay on Image */}
                            <div className="absolute bottom-3 left-3 right-3 z-20">
                              <h4 className="text-base font-bold text-white leading-tight shadow-black/50 drop-shadow-md">
                                {card.title}
                              </h4>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-5 pt-3">
                            <div
                              className="text-[10px] font-bold uppercase tracking-wider mb-1"
                              style={{ color: card.color }}
                            >
                              {card.subtitle}
                            </div>

                            <p className="text-xs text-slate-500 line-clamp-2">
                              {card.description}
                            </p>

                            {/* Read More Link */}
                            <div
                              className="mt-3 inline-flex items-center gap-2 text-xs font-semibold transition-all duration-300 group-hover:gap-3"
                              style={{ color: card.color }}
                            >
                              <span>Learn More</span>
                              <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                          </div>
                        </div>
                      </a>
                    </RevealSection>
                  ))}
                </div>
              </div>
            </div>
          </RevealSection>
        </div>

        {/* Vision Cards - Horizontal Scroll on Mobile */}
      </div>
    </section>
  );
};
