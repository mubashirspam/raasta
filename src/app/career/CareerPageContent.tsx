"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "../home/layout/Navbar";
import { Footer } from "../home/layout/Footer";
import { ContactModal } from "../home/ui/ContactModal";
import { GalleryModal } from "../home/ui/GalleryModal";
import CareerApplicationForm from "./CareerApplicationForm";
import {
  Briefcase,
  Users,
  TrendingUp,
  Heart,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  Globe,
  X,
} from "lucide-react";

interface JobPosition {
  _id: string;
  title: string;
  slug: { current: string };
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities?: string[];
  requirements?: string[];
  active: boolean;
  order: number;
  publishedAt: string;
}

interface CareerGalleryImage {
  _id: string;
  title: string;
  category: string;
  mediaType: "image" | "video";
  order: number;
  image?: {
    asset: {
      url: string;
    };
  };
  video?: {
    asset: {
      url: string;
    };
  };
}

interface CareerPageContentProps {
  jobPositions: JobPosition[];
  careerGallery: CareerGalleryImage[];
}

const benefits = [
  {
    icon: Heart,
    title: "Purpose-Driven Work",
    description:
      "Makes an impact with each deal. 6% of every transaction goes to charity.",
  },
  {
    icon: TrendingUp,
    title: "Growth & Learning",
    description:
      "Regular training, mentorship, and clear career paths to help you level up.",
  },
  {
    icon: Users,
    title: "Supportive Team Culture",
    description:
      "Work with passionate professionals who support, challenge, and grow together.",
  },
  {
    icon: Globe,
    title: "Diversity & Inclusion",
    description: "We celebrate talent from different backgrounds and cultures.",
  },
];

// Default fallback images when no Sanity images available
const defaultImages = [
  {
    url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=500&auto=format&fit=crop",
    alt: "Team work",
  },
  {
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=500&auto=format&fit=crop",
    alt: "Meeting",
  },
  {
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=500&auto=format&fit=crop",
    alt: "Office",
  },
  {
    url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=500&auto=format&fit=crop",
    alt: "Success",
  },
];

export default function CareerPageContent({
  jobPositions,
  careerGallery,
}: CareerPageContentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [batchStartIndex, setBatchStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  // Office images → hero marquee
  const rawOfficeImages = careerGallery
    .filter((item) => item.category === "office")
    .sort((a, b) => a.order - b.order)
    .map((item) => ({ url: item.image?.asset?.url, alt: item.title }))
    .filter((img): img is { url: string; alt: string } => typeof img.url === "string");

  const heroMarqueeBase = rawOfficeImages.length >= 2 ? rawOfficeImages : defaultImages;
  // Repeat to fill marquee (need ≥8 for seamless loop on wide screens)
  const heroMarqueeImages = Array.from(
    { length: Math.ceil(8 / heroMarqueeBase.length) },
    () => heroMarqueeBase
  ).flat();

  // Culture images for accordion (non-office)
  const cultureImages =
    careerGallery.length > 0
      ? careerGallery
          .filter((item) => item.category !== "office")
          .sort((a, b) => a.order - b.order)
          .map((item) => ({
            url: item.image?.asset?.url || defaultImages[0].url,
            alt: item.title,
            category: item.category,
          }))
          .filter((img) => img.url)
      : defaultImages.map((img) => ({ ...img, category: "culture" }));

  const displayCultureImages = cultureImages.length > 0
    ? cultureImages
    : defaultImages.map((img) => ({ ...img, category: "culture" }));

  const visibleBatchImages = Array.from({ length: visibleCount }, (_, i) =>
    displayCultureImages[(batchStartIndex + i) % displayCultureImages.length]
  );

  // Responsive card count
  useEffect(() => {
    const update = () => setVisibleCount(window.innerWidth < 768 ? 3 : 4);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Auto-advance accordion + batch swap when a full cycle completes
  useEffect(() => {
    if (displayCultureImages.length <= 1) return;
    const interval = setInterval(() => {
      setActiveCardIndex((prev) => {
        const next = prev + 1;
        if (next >= visibleCount) {
          setBatchStartIndex((b) => (b + visibleCount) % displayCultureImages.length);
          return 0;
        }
        return next;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, [displayCultureImages.length, visibleCount]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar onContact={() => setIsModalOpen(true)} />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <GalleryModal
        isOpen={isGalleryModalOpen}
        onClose={() => setIsGalleryModalOpen(false)}
        media={careerGallery}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-0 overflow-hidden bg-[#FAFAF9]">
        {/* Decorative patterns */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Soft glow blobs — visible on all screens */}
          <div className="absolute -left-16 top-28 w-48 h-48 md:w-72 md:h-72 md:left-0 rounded-full bg-indigo-300/20 blur-3xl" />
          <div className="absolute -right-16 top-20 w-48 h-48 md:w-72 md:h-72 md:right-0 rounded-full bg-pink-300/20 blur-3xl" />

          {/* Top corner accents — visible on mobile too */}
          <svg
            className="absolute left-4 top-28 w-14 h-14 md:left-16 md:top-72 md:w-24 md:h-24 text-pink-400/40"
            viewBox="0 0 100 100"
            fill="none"
          >
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="3" />
            <circle cx="50" cy="50" r="26" stroke="currentColor" strokeWidth="3" />
          </svg>
          <svg
            className="absolute right-4 top-24 w-12 h-12 md:right-20 md:top-40 md:w-20 md:h-20 text-indigo-400/50"
            viewBox="0 0 100 100"
            fill="none"
          >
            <path
              d="M50 5 L61 39 L97 39 L68 61 L79 95 L50 73 L21 95 L32 61 L3 39 L39 39 Z"
              stroke="currentColor"
              strokeWidth="3"
            />
          </svg>

          {/* Dotted grids — large screens only */}
          <div
            className="absolute left-8 top-44 w-40 h-40 opacity-[0.15] hidden lg:block"
            style={{
              backgroundImage:
                "radial-gradient(circle, #6366f1 1.5px, transparent 1.5px)",
              backgroundSize: "18px 18px",
            }}
          />
          <div
            className="absolute right-8 top-56 w-40 h-40 opacity-[0.15] hidden lg:block"
            style={{
              backgroundImage:
                "radial-gradient(circle, #a855f7 1.5px, transparent 1.5px)",
              backgroundSize: "18px 18px",
            }}
          />

          {/* Small accent dots */}
          <div className="absolute right-8 top-48 w-2.5 h-2.5 md:right-32 md:top-80 md:w-3 md:h-3 rounded-full bg-purple-400/50" />
          <div className="absolute left-10 top-52 w-2.5 h-2.5 md:left-40 md:w-3 md:h-3 rounded-full bg-indigo-400/50" />
        </div>

        {/* Text Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 pb-12 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-slate-400 text-xs font-bold tracking-[0.25em] uppercase mb-6"
          >
            <Briefcase size={14} />
            <span>Join Our Team</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-6 leading-[0.95]"
          >
            Build Your{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
              Career
            </span>
            <br />
            With Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 leading-relaxed mb-8 max-w-2xl"
          >
            Join one of Dubai’s fastest-growing, purpose-driven real estate
            companies. At Raasta, we don’t just sell properties, we build
            careers, transform lives, and create long-term impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 items-center justify-center"
          >
            <a
              href="#positions"
              className="px-8 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors shadow-lg flex items-center gap-2"
            >
              View Open Positions
              <ArrowRight size={18} />
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              Submit Your CV
            </button>
          </motion.div>

          {/* Stat row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3 mt-8 text-slate-500"
          >
            <span className="text-2xl font-black text-slate-900">30+</span>
            <span className="text-sm font-bold uppercase tracking-widest">
              Team Members
            </span>
            <span className="w-px h-4 bg-slate-300" />
            <span className="text-sm text-emerald-600 font-semibold flex items-center gap-1">
              Growing fast <TrendingUp size={14} />
            </span>
          </motion.div>
        </div>

        {/* Arch Image Marquee — scrolls left to right */}
        <div className="relative z-10">
          {/* Fade edges */}
          <div className="absolute top-0 left-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#FAFAF9] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#FAFAF9] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-1.5 md:gap-2 w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            {[...heroMarqueeImages, ...heroMarqueeImages].map((img, idx) => {
              // Alternate top-left and top-right rounded for a varied look
              const radius =
                idx % 2 === 0
                  ? "70px 16px 16px 16px"
                  : "16px 70px 16px 16px";
              return (
                <div
                  key={idx}
                  className="flex-shrink-0 w-32 md:w-52 h-60 md:h-[400px] overflow-hidden bg-slate-100 group"
                  style={{ borderRadius: radius }}
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-15 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              WHY Raasta?
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
              We believe great people build great companies. At Raasta, we focus
              on growth, learning, and meaningful work, not just targets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 justify-center">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:border-indigo-200 transition-all group"
              >
                <div className="flex items-center gap-2">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform">
                    <benefit.icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                </div>

                <p className="text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-10 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-5 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Join Raasta Family
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
              Explore opportunities where your skills, ambition, and passion can
              thrive.
            </p>
          </div>

          {jobPositions.length === 0 ? (
            <div className="text-center py-5 md:py-12">
              <p className="text-slate-600 text-lg">
                No open positions at the moment. Please check back later or
                submit your CV for future opportunities.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {jobPositions.map((position, idx) => (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg hover:border-indigo-200 transition-all group"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                        {position.title}
                      </h3>
                      <p className="text-slate-600 mb-3">
                        {position.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm">
                          <Briefcase size={14} />
                          {position.department}
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm">
                          <MapPin size={14} />
                          {position.location}
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm">
                          <Clock size={14} />
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedPosition(position.title)}
                      className="px-6 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors whitespace-nowrap"
                    >
                      Apply Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Life at Raasta */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm"
              >
                <Sparkles size={14} />
                <span>Our Culture</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                Life at{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  Raasta
                </span>
              </h2>
              <p className="text-slate-500 text-lg mt-3 max-w-xl">
                We work hard, celebrate wins, and grow together. Culture creates
                success.
              </p>
            </div>
            <button
              onClick={() => setIsGalleryModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors whitespace-nowrap"
            >
              See All Photos
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Culture Accordion Cards */}
          <div className="flex gap-2 h-72 md:h-[500px]">
            {visibleBatchImages.map((img, idx) => {
              const isActive =
                (hoveredCardIndex !== null ? hoveredCardIndex : activeCardIndex) === idx;
              return (
                <motion.div
                  key={`${batchStartIndex}-${idx}`}
                  animate={{ flex: isActive ? 4 : 1 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative overflow-hidden rounded-2xl cursor-pointer min-w-0"
                  onMouseEnter={() => setHoveredCardIndex(idx)}
                  onMouseLeave={() => setHoveredCardIndex(null)}
                  onClick={() => setIsGalleryModalOpen(true)}
                >
                  <motion.img
                    key={img.url}
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Career Application Modal */}
      {selectedPosition && (
        <div className="fixed inset-0 z-[60] flex items-end md:items-center justify-center md:p-4 bg-slate-900/30 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white/90 backdrop-blur-xl border border-white rounded-t-3xl md:rounded-3xl shadow-2xl p-6 md:p-8 max-w-xl w-full relative h-[95vh] md:h-auto md:max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedPosition("")}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors z-10"
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              Career Application
            </h2>

            <CareerApplicationForm
              position={selectedPosition}
              onSuccess={() => {
                setTimeout(() => {
                  setSelectedPosition("");
                }, 2500);
              }}
            />
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-10 bg-gradient-to-r from-violet-500 to-indigo-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Sparkles className="w-12 h-12 text-white/80 mx-auto mb-6" />
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-white/80 text-base mb-8">
            Join our team and be part of something bigger. Your career starts
            here.
          </p>
          <button
            onClick={() => setSelectedPosition("General Application")}
            className="px-8 py-4 rounded-full bg-white text-violet-600 font-bold hover:bg-slate-100 transition-colors"
          >
            Apply Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
