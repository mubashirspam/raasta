"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [visibleImageIndices, setVisibleImageIndices] = useState([0, 1, 2, 3]);
  const [heroImageIndex, setHeroImageIndex] = useState(0);

  // Filter and sort office images for hero section
  const officeImages = careerGallery
    .filter((item) => item.category === "office")
    .sort((a, b) => a.order - b.order) // Sort by order (1, 2, 3...)
    .map((item) => ({
      url: item.image?.asset?.url,
      alt: item.title,
    }))
    .filter((img) => img.url); // Only include images with valid URLs

  // Get images from Sanity or use defaults
  const images =
    careerGallery.length > 0
      ? careerGallery.map((item) => ({
          url: item.image?.asset?.url || defaultImages[0].url,
          alt: item.title,
        }))
      : defaultImages;

  // Rotate hero images (office category only)
  useEffect(() => {
    if (officeImages.length <= 1) return;

    const interval = setInterval(() => {
      setHeroImageIndex((prev) => (prev + 1) % officeImages.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [officeImages.length]);

  // Rotate life at raasta images if more than 4 available
  useEffect(() => {
    if (images.length <= 4) return;

    const interval = setInterval(() => {
      setVisibleImageIndices((prev) => {
        // Rotate: move each index forward by 1
        return prev.map((idx) => (idx + 1) % images.length);
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

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
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #dbeafe 0%, #e0e7ff 50%, #ede9fe 100%)",
            }}
          />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-white/50 text-indigo-600 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm backdrop-blur-sm"
              >
                <Briefcase size={14} />
                <span>Join Our Team</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight mb-6 leading-[1.1]"
              >
                Build Your
                <br />
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
                    Career With Us
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 250 10"
                    fill="none"
                  >
                    <path
                      d="M2 8C70 2 180 2 248 8"
                      stroke="url(#career-underline)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="career-underline"
                        x1="0"
                        y1="0"
                        x2="250"
                        y2="0"
                      >
                        <stop stopColor="#6366F1" />
                        <stop offset="0.5" stopColor="#A855F7" />
                        <stop offset="1" stopColor="#EC4899" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8"
              >
                Join one of Dubai’s fastest-growing, purpose-driven real estate
                companies. At Raasta, we don’t just sell properties, we build
                careers, transform lives, and create long-term impact.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#positions"
                  className="px-8 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors shadow-xl flex items-center gap-2"
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
            </div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="aspect-4/3 rounded-3xl overflow-hidden shadow-2xl relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={heroImageIndex}
                    src={
                      officeImages.length > 0
                        ? officeImages[heroImageIndex]?.url
                        : defaultImages[0].url
                    }
                    alt={
                      officeImages.length > 0
                        ? officeImages[heroImageIndex]?.alt
                        : "Team collaboration"
                    }
                    className="w-full h-full object-cover absolute inset-0"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </AnimatePresence>
              </div>
              <div className="absolute -bottom-6 -left-6 p-5 rounded-2xl bg-white shadow-xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white">
                    <Users size={24} />
                  </div>
                  <div>
                    <p
                      className="font-bold text-slate-900"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      30+ Team Members
                    </p>
                    <p className="text-sm text-slate-600">Growing fast</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-white/50 text-indigo-600 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm backdrop-blur-sm"
              >
                <Sparkles size={14} />
                <span>Our Culture</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Life at{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  Raasta
                </span>
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                We work hard, celebrate wins, and grow together. From team
                outings to training sessions, we believe culture creates
                success.
              </p>

              <button
                onClick={() => setIsGalleryModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg"
              >
                See Our Culture
                <ArrowRight size={18} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden relative">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={visibleImageIndices[0]}
                      src={images[visibleImageIndices[0]]?.url}
                      alt={images[visibleImageIndices[0]]?.alt}
                      className="w-full h-full object-cover absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AnimatePresence>
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={visibleImageIndices[1]}
                      src={images[visibleImageIndices[1]]?.url}
                      alt={images[visibleImageIndices[1]]?.alt}
                      className="w-full h-full object-cover absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AnimatePresence>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-4/3 rounded-2xl overflow-hidden relative">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={visibleImageIndices[2]}
                      src={images[visibleImageIndices[2]]?.url}
                      alt={images[visibleImageIndices[2]]?.alt}
                      className="w-full h-full object-cover absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AnimatePresence>
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden relative">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={visibleImageIndices[3]}
                      src={images[visibleImageIndices[3]]?.url}
                      alt={images[visibleImageIndices[3]]?.alt}
                      className="w-full h-full object-cover absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AnimatePresence>
                </div>
              </div>
            </div>
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
