"use client";

import React, { useState } from "react";
import {
  MapPin,
  Bed,
  Bath,
  Maximize,
  Star,
  Share2,
  CheckCircle,
  Phone,
  Mail,
  Calendar,
  ArrowLeft,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  Images,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeBackground } from "../../home/ui";
import { Navbar } from "../../home/layout/Navbar";
import { Footer } from "../../home/layout/Footer";
import { ContactModal } from "../../home/ui/ContactModal";

interface SanityProperty {
  _id: string;
  title: string;
  slug: { current: string };
  price: number;
  pricePerSqft?: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  propertyType: string;
  status: string;
  location: string;
  address?: string;
  description?: string;
  features?: string[];
  amenities?: string[];
  featured: boolean;
  mainImage?: { asset: { url: string } };
  images?: { asset: { url: string } }[];
}

interface PropertyDetailsClientProps {
  property: SanityProperty | null;
}

export default function PropertyDetailsClient({
  property,
}: PropertyDetailsClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen relative flex items-center justify-center font-sans">
        <ThemeBackground />
        <div className="relative z-10 text-center bg-white/40 backdrop-blur-xl p-12 rounded-3xl border border-white/60 shadow-xl">
          <h1 className="text-4xl font-bold mb-4 text-slate-900">
            Property Not Found
          </h1>
          <Link
            href="/properties"
            className="text-[#2EA8FF] hover:underline font-medium"
          >
            Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  // Build property images array
  const propertyImages = [
    property.mainImage?.asset?.url ||
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
    ...(property.images?.map((img) => img.asset?.url).filter(Boolean) || []),
  ];

  // If no additional images, add some placeholders
  if (propertyImages.length === 1) {
    propertyImages.push(
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000"
    );
  }

  // Default amenities if none provided
  const amenities = property.amenities?.length
    ? property.amenities
    : [
        "Smart Home System",
        "Private Pool",
        "Concierge Service",
        "Gym & Spa Access",
        "Parking Space",
        "24/7 Security",
      ];

  const tag =
    property.status === "offplan"
      ? "Off-Plan"
      : property.featured
      ? "Featured"
      : "For Sale";
  const formattedPrice = `AED ${property.price?.toLocaleString() || 0}`;
  const propertyType = property.propertyType
    ? property.propertyType.charAt(0).toUpperCase() +
      property.propertyType.slice(1)
    : "Property";

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + propertyImages.length) % propertyImages.length
    );
  };

  const openGallery = (index: number = 0) => {
    setGalleryIndex(index);
    setIsGalleryOpen(true);
  };

  const nextGalleryImage = () => {
    setGalleryIndex((prev) => (prev + 1) % propertyImages.length);
  };

  const prevGalleryImage = () => {
    setGalleryIndex(
      (prev) => (prev - 1 + propertyImages.length) % propertyImages.length
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar onContact={() => setIsModalOpen(true)} />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <main className="relative">
        <ThemeBackground />

        {/* Hero Image Section */}
        <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10" />

          {/* Background Image (no sliding) */}
          <img
            src={propertyImages[currentImageIndex]}
            alt={property.title}
            className="w-full h-full object-cover"
          />

          {/* Image Counter & View All Button */}
          <div className="absolute top-28 right-6 z-20 flex items-center gap-3">
            <button
              onClick={() => openGallery(currentImageIndex)}
              className="px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-white text-sm font-medium hover:bg-black/60 transition-colors flex items-center gap-2"
            >
              <Images size={16} />
              View All ({propertyImages.length})
            </button>
          </div>

          <div className="absolute top-28 left-6 z-20">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white hover:bg-white hover:text-slate-900 transition-all"
            >
              <ArrowLeft size={16} />
              <span>Back</span>
            </Link>
          </div>

          <div className="absolute bottom-0 left-0 w-full z-20 px-6 pb-12">
            <div className="max-w-7xl mx-auto">
              <div className="mb-6 animate-in slide-in-from-bottom-4 duration-700">
                <span className="px-5 py-2 bg-[#2EA8FF] text-white font-bold rounded-full text-sm uppercase tracking-wider shadow-lg shadow-blue-500/30">
                  {tag}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-3xl text-white drop-shadow-lg tracking-tight">
                {property.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-lg text-white/90 font-medium">
                <div className="flex items-center gap-2">
                  <MapPin className="text-[#2EA8FF]" />
                  <span>{property.location}</span>
                </div>
                <div className="text-3xl font-bold text-white drop-shadow-md">
                  {formattedPrice}
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-6 right-6 z-20 flex gap-2">
            {propertyImages.slice(0, 5).map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                  idx === currentImageIndex
                    ? "border-white scale-110 shadow-lg"
                    : "border-white/30 opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
            {propertyImages.length > 5 && (
              <button
                onClick={() => openGallery(5)}
                className="w-16 h-12 rounded-lg overflow-hidden border-2 border-white/30 bg-black/50 flex items-center justify-center text-white text-sm font-medium hover:bg-black/70 transition-all"
              >
                +{propertyImages.length - 5}
              </button>
            )}
          </div>
        </div>

        <div className="px-6 max-w-7xl mx-auto relative z-30 -mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8 pb-20">
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 p-6 bg-white/80 backdrop-blur-xl border border-white shadow-xl shadow-slate-200/50 rounded-3xl">
                <div className="flex flex-col items-center justify-center p-4 border-r border-slate-100 last:border-0">
                  <Bed
                    className="text-[#2EA8FF] mb-2 w-8 h-8"
                    strokeWidth={1.5}
                  />
                  <span className="text-2xl font-bold text-slate-900">
                    {property.bedrooms}
                  </span>
                  <span className="text-slate-500 text-sm">Bedrooms</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 border-r border-slate-100 last:border-0">
                  <Bath
                    className="text-[#2EA8FF] mb-2 w-8 h-8"
                    strokeWidth={1.5}
                  />
                  <span className="text-2xl font-bold text-slate-900">
                    {property.bathrooms}
                  </span>
                  <span className="text-slate-500 text-sm">Bathrooms</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4">
                  <Maximize
                    className="text-[#2EA8FF] mb-2 w-8 h-8"
                    strokeWidth={1.5}
                  />
                  <span className="text-2xl font-bold text-slate-900">
                    {property.area?.toLocaleString() || 0}
                  </span>
                  <span className="text-slate-500 text-sm">Square Feet</span>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white/60 backdrop-blur-md border border-white/60 rounded-3xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-900">
                  About this property
                  <div className="h-px bg-slate-200 flex-1 ml-4" />
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-4 text-lg">
                  {property.description ? (
                    <p>{property.description}</p>
                  ) : (
                    <>
                      <p>
                        Experience the epitome of luxury living with this
                        stunning{" "}
                        <span className="font-semibold text-slate-800">
                          {propertyType.toLowerCase()}
                        </span>{" "}
                        in {property.location}. This exceptional property offers
                        a unique blend of contemporary design and comfort,
                        featuring spacious living areas, high-end finishes, and
                        panoramic views.
                      </p>
                      <p>
                        Perfectly positioned to offer both privacy and
                        accessibility, residents can enjoy world-class amenities
                        and easy access to the city&apos;s finest dining,
                        shopping, and entertainment destinations.
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Amenities */}
              <div className="bg-white/60 backdrop-blur-md border border-white/60 rounded-3xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-900">
                  Key Features
                  <div className="h-px bg-slate-200 flex-1 ml-4" />
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {amenities.map((amenity, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-4 bg-white/50 border border-white rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
                    >
                      <CheckCircle className="text-[#2EA8FF]" size={20} />
                      <span className="text-slate-700 font-medium">
                        {amenity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="sticky top-32">
                <div className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl p-8 shadow-2xl shadow-slate-200/50">
                  <h3 className="text-xl font-bold mb-6 text-slate-900">
                    Interested in this property?
                  </h3>

                  <div className="space-y-4 mb-8">
                    <button className="w-full py-4 bg-[#2EA8FF] hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 transform hover:-translate-y-1">
                      <Phone size={20} />
                      Call Agent
                    </button>
                    <button className="w-full py-4 bg-white hover:bg-slate-50 text-slate-900 font-bold rounded-xl transition-all border border-slate-200 shadow-sm flex items-center justify-center gap-2">
                      <Mail size={20} />
                      Email Enquiry
                    </button>
                    <button className="w-full py-4 bg-transparent hover:bg-slate-100 text-slate-600 font-bold rounded-xl transition-all border border-slate-200 flex items-center justify-center gap-2">
                      <Calendar size={20} />
                      Book Viewing
                    </button>
                  </div>

                  <div className="pt-6 border-t border-slate-100 text-center">
                    <p className="text-slate-500 text-sm mb-4">
                      Share this property
                    </p>
                    <div className="flex justify-center gap-4">
                      <button className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors">
                        <Share2 size={20} />
                      </button>
                      <button className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors">
                        <Star size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2EA8FF] via-cyan-500 to-teal-400">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Sparkles className="w-12 h-12 text-white/80 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interested in Similar Properties?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Let our experts help you find more options that match your
            preferences.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 rounded-full bg-white text-[#2EA8FF] font-bold hover:bg-slate-100 transition-colors shadow-xl inline-flex items-center gap-2"
          >
            Get More Options
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <Footer />

      {/* Full Screen Image Gallery Modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
              aria-label="Close gallery"
            >
              <X size={24} />
            </button>

            {/* Image Counter */}
            <div className="absolute top-6 left-6 z-50 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium">
              {galleryIndex + 1} / {propertyImages.length}
            </div>

            {/* Main Image */}
            <div className="h-full flex items-center justify-center px-20">
              <AnimatePresence mode="wait">
                <motion.img
                  key={galleryIndex}
                  src={propertyImages[galleryIndex]}
                  alt={`${property.title} - Image ${galleryIndex + 1}`}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevGalleryImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-50 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={nextGalleryImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-50 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>

            {/* Thumbnail Strip at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-black/80 to-transparent pt-12 pb-6">
              <div className="flex justify-center gap-2 px-6 overflow-x-auto">
                {propertyImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setGalleryIndex(idx)}
                    className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                      idx === galleryIndex
                        ? "border-white scale-110 shadow-lg"
                        : "border-white/30 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {propertyImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setGalleryIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === galleryIndex
                        ? "bg-white w-6"
                        : "bg-white/40 w-2 hover:bg-white/60"
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
