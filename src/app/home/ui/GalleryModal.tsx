"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";

interface GalleryMedia {
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

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  media: GalleryMedia[];
}

const categories = [
  { label: "All", value: "all" },
  { label: "Office", value: "office" },
  { label: "Team Events", value: "team_events" },
  { label: "Training", value: "training" },
  { label: "Celebrations", value: "celebrations" },
];

export const GalleryModal: React.FC<GalleryModalProps> = ({
  isOpen,
  onClose,
  media,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredMedia =
    selectedCategory === "all"
      ? media
      : media.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const goToPrevious = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  const goToNext = () => {
    if (lightboxIndex !== null && lightboxIndex < filteredMedia.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };

  const currentMedia =
    lightboxIndex !== null ? filteredMedia[lightboxIndex] : null;

  const getMediaUrl = (item: GalleryMedia) => {
    if (item.mediaType === "video") {
      return item.video?.asset?.url || "";
    }
    return item.image?.asset?.url || "";
  };

  // Handle keyboard navigation - MUST be before early return
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxIndex !== null) {
          closeLightbox();
        } else {
          onClose();
        }
      } else if (lightboxIndex !== null) {
        if (e.key === "ArrowLeft") goToPrevious();
        if (e.key === "ArrowRight") goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, lightboxIndex, filteredMedia.length, onClose]);

  // Early return AFTER all hooks
  if (!isOpen) return null;

  return (
    <>
      {/* Main Gallery Modal */}
      <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
        <div className="bg-white/95 backdrop-blur-xl border border-white rounded-3xl shadow-2xl p-6 md:p-8 max-w-6xl w-full relative max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors z-10"
          >
            <X size={24} />
          </button>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Our Culture Gallery
          </h2>
          <p className="text-slate-600 text-sm md:text-base mb-6">
            Explore moments from our team events, office life, and celebrations
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === cat.value
                    ? "bg-linear-to-r from-indigo-500 to-purple-500 text-white shadow-lg"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Media Grid */}
          {filteredMedia.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-500 text-lg">
                No media available in this category
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredMedia.map((item, index) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(index)}
                >
                  {item.mediaType === "video" ? (
                    <div className="relative w-full h-full bg-slate-900">
                      <video
                        src={getMediaUrl(item)}
                        className="w-full h-full object-cover"
                        muted
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                          <Play size={28} className="text-indigo-600 ml-1" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={getMediaUrl(item)}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-semibold text-sm">
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && currentMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-70 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            >
              <X size={28} />
            </button>

            {/* Navigation Arrows */}
            {lightboxIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              >
                <ChevronLeft size={32} />
              </button>
            )}

            {lightboxIndex < filteredMedia.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              >
                <ChevronRight size={32} />
              </button>
            )}

            {/* Media Content */}
            <div
              className="max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {currentMedia.mediaType === "video" ? (
                <video
                  src={getMediaUrl(currentMedia)}
                  controls
                  autoPlay
                  className="w-full h-full max-h-[85vh] object-contain rounded-lg"
                />
              ) : (
                <img
                  src={getMediaUrl(currentMedia)}
                  alt={currentMedia.title}
                  className="w-full h-full max-h-[85vh] object-contain rounded-lg"
                />
              )}
              <div className="mt-4 text-center">
                <h3 className="text-white text-xl font-bold">
                  {currentMedia.title}
                </h3>
                <p className="text-white/70 text-sm mt-1">
                  {lightboxIndex + 1} / {filteredMedia.length}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
