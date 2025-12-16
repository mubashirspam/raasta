"use client";

import React, { use } from "react";
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
} from "lucide-react";
import Link from "next/link";
import { PROPERTIES } from "../../data";
import { ThemeBackground } from "../../components/ui";

export default function PropertyDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const property = PROPERTIES.find((p) => p.id === Number(resolvedParams.id));

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

  // Mock amenities since they aren't in the data
  const amenities = [
    "Smart Home System",
    "Private Pool",
    "Concierge Service",
    "Gym & Spa Access",
    "Parking Space",
    "24/7 Security",
  ];

  return (
    <main className="min-h-screen relative font-sans">
      <ThemeBackground />

      {/* Hero Image Section */}
      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10" />
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
        />

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
                {property.tag}
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
                {property.price}
              </div>
            </div>
          </div>
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
                  {property.beds}
                </span>
                <span className="text-slate-500 text-sm">Bedrooms</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 border-r border-slate-100 last:border-0">
                <Bath
                  className="text-[#2EA8FF] mb-2 w-8 h-8"
                  strokeWidth={1.5}
                />
                <span className="text-2xl font-bold text-slate-900">
                  {property.baths}
                </span>
                <span className="text-slate-500 text-sm">Bathrooms</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4">
                <Maximize
                  className="text-[#2EA8FF] mb-2 w-8 h-8"
                  strokeWidth={1.5}
                />
                <span className="text-2xl font-bold text-slate-900">
                  {property.sqft.toLocaleString()}
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
                <p>
                  Experience the epitome of luxury living with this stunning{" "}
                  <span className="font-semibold text-slate-800">
                    {property.type.toLowerCase()}
                  </span>{" "}
                  in {property.location}. This exceptional property offers a
                  unique blend of contemporary design and comfort, featuring
                  spacious living areas, high-end finishes, and panoramic views.
                </p>
                <p>
                  Perfectly positioned to offer both privacy and accessibility,
                  residents can enjoy world-class amenities and easy access to
                  the city&apos;s finest dining, shopping, and entertainment
                  destinations.
                </p>
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
  );
}
