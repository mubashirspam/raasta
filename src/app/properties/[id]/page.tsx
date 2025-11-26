"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Bed,
  Bath,
  Maximize,
  Calendar,
  Building,
  Phone,
  Mail,
  MessageCircle,
  Share2,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";

// Property data interface
interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  type: string;
  status: string;
  developer: string;
  completionDate: string;
  images: string[];
  description: string;
  features: string[];
  amenities: string[];
}

// Property data - in a real app, this would come from a CMS or API
const propertyData: Record<string, Property> = {
  "1": {
    id: 1,
    title: "Luxury Penthouse with Burj Khalifa View",
    location: "Downtown Dubai",
    price: "AED 15.5M",
    bedrooms: 4,
    bathrooms: 5,
    area: "5,500 sq ft",
    type: "Penthouse",
    status: "For Sale",
    developer: "Emaar Properties",
    completionDate: "Ready to Move",
    images: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&h=800&fit=crop",
    ],
    description:
      "Experience unparalleled luxury in this stunning penthouse located in the heart of Downtown Dubai. Featuring breathtaking views of the Burj Khalifa and Dubai Fountain, this residence offers the epitome of sophisticated urban living. The spacious layout includes 4 generous bedrooms, 5 bathrooms, a gourmet kitchen, and expansive living areas perfect for entertaining.",
    features: [
      "Panoramic views of Burj Khalifa",
      "Private elevator access",
      "Smart home automation",
      "Premium Italian kitchen",
      "Master suite with walk-in closet",
      "Private terrace with jacuzzi",
      "Maid's room with bathroom",
      "2 covered parking spaces",
      "24/7 concierge service",
      "Access to pool and gym",
    ],
    amenities: [
      "Swimming Pool",
      "Fully Equipped Gym",
      "Children's Play Area",
      "BBQ Area",
      "Landscaped Gardens",
      "24/7 Security",
      "Covered Parking",
      "Concierge Service",
    ],
  },
  "2": {
    id: 2,
    title: "Modern Waterfront Apartment",
    location: "Dubai Marina",
    price: "AED 3.2M",
    bedrooms: 2,
    bathrooms: 3,
    area: "1,850 sq ft",
    type: "Apartment",
    status: "For Sale",
    developer: "Select Group",
    completionDate: "Q4 2024",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop",
    ],
    description:
      "Beautiful 2-bedroom apartment in the prestigious Dubai Marina. This modern residence features floor-to-ceiling windows offering stunning marina and sea views. Perfect for professionals and small families looking for a vibrant waterfront lifestyle.",
    features: [
      "Marina and sea views",
      "Floor-to-ceiling windows",
      "Modern kitchen",
      "Built-in wardrobes",
      "Balcony",
      "Covered parking",
      "Storage room",
      "Pet-friendly",
    ],
    amenities: [
      "Swimming Pool",
      "Gym",
      "Marina Walk Access",
      "24/7 Security",
      "Covered Parking",
      "Retail Outlets",
    ],
  },
};

export default function PropertyDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const property = propertyData[resolvedParams.id];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!property) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Property Not Found
          </h1>
          <Link href="/properties">
            <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all">
              Browse Properties
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Properties", href: "/properties" },
    { label: property.title },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <main className="min-h-screen bg-black">
        {/* Image Gallery */}
        <section className="relative bg-black">
          <div className="relative h-[500px] md:h-[600px]">
            <Image
              src={property.images[currentImageIndex]}
              alt={property.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            {/* Image Navigation */}
            {property.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {property.images.map((_: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "w-8 bg-green-600"
                          : "w-2 bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Status Badge */}
            <div className="absolute top-4 left-4 px-4 py-2 bg-green-600 text-white font-semibold rounded-full">
              {property.status}
            </div>

            {/* Favorite & Share */}
            <div className="absolute top-4 right-4 flex gap-2">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                  isFavorite
                    ? "bg-red-600 text-white"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
              </button>
              <button className="w-12 h-12 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all">
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </section>

        {/* Property Details */}
        <section className="py-12 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Title & Price */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 text-gray-400 mb-3">
                    <MapPin size={18} className="text-red-600" />
                    <span>{property.location}</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                    {property.title}
                  </h1>
                  <div className="text-4xl font-black text-green-600">
                    {property.price}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {property.bedrooms > 0 && (
                    <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-gray-400 mb-2">
                        <Bed size={20} />
                        <span className="text-sm">Bedrooms</span>
                      </div>
                      <div className="text-2xl font-bold text-white">
                        {property.bedrooms}
                      </div>
                    </div>
                  )}
                  {property.bathrooms > 0 && (
                    <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-gray-400 mb-2">
                        <Bath size={20} />
                        <span className="text-sm">Bathrooms</span>
                      </div>
                      <div className="text-2xl font-bold text-white">
                        {property.bathrooms}
                      </div>
                    </div>
                  )}
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-gray-400 mb-2">
                      <Maximize size={20} />
                      <span className="text-sm">Area</span>
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {property.area}
                    </div>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-gray-400 mb-2">
                      <Building size={20} />
                      <span className="text-sm">Type</span>
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {property.type}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Description
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {property.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Property Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {property.features.map((feature: string, index: number) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Building Amenities
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {property.amenities.map(
                      (amenity: string, index: number) => (
                        <div
                          key={index}
                          className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center"
                        >
                          <div className="text-green-600 mb-2">✓</div>
                          <div className="text-white text-sm">{amenity}</div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Property Info */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Property Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Building size={20} className="text-green-600" />
                      <div>
                        <div className="text-gray-400 text-sm">Developer</div>
                        <div className="text-white font-semibold">
                          {property.developer}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar size={20} className="text-green-600" />
                      <div>
                        <div className="text-gray-400 text-sm">Completion</div>
                        <div className="text-white font-semibold">
                          {property.completionDate}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-6">
                      Interested in this property?
                    </h3>

                    {/* Contact Form */}
                    <form className="space-y-4 mb-6">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-600"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-600"
                      />
                      <input
                        type="tel"
                        placeholder="Your Phone"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-600"
                      />
                      <textarea
                        placeholder="Message"
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-600 resize-none"
                      ></textarea>
                      <button
                        type="submit"
                        className="w-full px-6 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all hover:scale-105"
                      >
                        Send Inquiry
                      </button>
                    </form>

                    {/* Quick Contact */}
                    <div className="space-y-3">
                      <div className="text-gray-400 text-sm mb-3">
                        Or reach us directly:
                      </div>
                      <a
                        href="tel:+971501234567"
                        className="flex items-center gap-3 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                      >
                        <Phone size={20} className="text-red-600" />
                        <div>
                          <div className="text-white font-semibold">
                            Call Us
                          </div>
                          <div className="text-gray-400 text-sm">
                            +971 50 123 4567
                          </div>
                        </div>
                      </a>
                      <a
                        href="https://wa.me/971501234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                      >
                        <MessageCircle size={20} className="text-green-600" />
                        <div>
                          <div className="text-white font-semibold">
                            WhatsApp
                          </div>
                          <div className="text-gray-400 text-sm">
                            Chat with us
                          </div>
                        </div>
                      </a>
                      <a
                        href="mailto:info@raastarealty.com"
                        className="flex items-center gap-3 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                      >
                        <Mail size={20} className="text-red-600" />
                        <div>
                          <div className="text-white font-semibold">
                            Email Us
                          </div>
                          <div className="text-gray-400 text-sm">
                            info@raastarealty.com
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
