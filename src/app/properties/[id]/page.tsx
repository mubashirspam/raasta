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
} from "lucide-react";
import Link from "next/link";
import { PROPERTIES } from "../../data";
import { Breadcrumbs } from "../../components/ui/Breadcrumbs";

export default function PropertyDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const property = PROPERTIES.find((p) => p.id === Number(resolvedParams.id));

  if (!property) {
    return (
      <div className="min-h-screen bg-[#0B1121] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Property Not Found</h1>
          <Link href="/properties" className="text-[#2EA8FF] hover:underline">
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
    <main className="min-h-screen bg-[#0B1121] text-white pt-24 pb-20">
      {/* Hero Image Section */}
      <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1121] via-transparent to-transparent z-10" />
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-0 left-0 w-full z-20 px-6 pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <span className="px-4 py-1.5 bg-[#2EA8FF] text-white font-bold rounded-full text-sm uppercase tracking-wider">
                {property.tag}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-3xl drop-shadow-lg">
              {property.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <MapPin className="text-[#2EA8FF]" />
                <span>{property.location}</span>
              </div>
              <div className="text-3xl font-bold text-[#2EA8FF]">
                {property.price}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 max-w-7xl mx-auto -mt-8 relative z-30">
        <Breadcrumbs
          items={[
            { label: "Properties", href: "/properties" },
            { label: property.title },
          ]}
          className="mb-8"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
              <div className="flex flex-col items-center justify-center p-4 border-r border-white/10 last:border-0">
                <Bed className="text-[#2EA8FF] mb-2 w-8 h-8" />
                <span className="text-2xl font-bold">{property.beds}</span>
                <span className="text-slate-400">Bedrooms</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 border-r border-white/10 last:border-0">
                <Bath className="text-[#2EA8FF] mb-2 w-8 h-8" />
                <span className="text-2xl font-bold">{property.baths}</span>
                <span className="text-slate-400">Bathrooms</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4">
                <Maximize className="text-[#2EA8FF] mb-2 w-8 h-8" />
                <span className="text-2xl font-bold">
                  {property.sqft.toLocaleString()}
                </span>
                <span className="text-slate-400">Square Feet</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                About this property
                <div className="h-px bg-white/10 flex-1 ml-4" />
              </h2>
              <div className="bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl p-8 text-slate-300 leading-relaxed space-y-4">
                <p>
                  Experience the epitome of luxury living with this stunning{" "}
                  {property.type.toLowerCase()} in {property.location}. This
                  exceptional property offers a unique blend of contemporary
                  design and comfort, featuring spacious living areas, high-end
                  finishes, and panoramic views.
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
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                Key Features
                <div className="h-px bg-white/10 flex-1 ml-4" />
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {amenities.map((amenity, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <CheckCircle className="text-[#2EA8FF]" size={20} />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="sticky top-32">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6">
                  Interested in this property?
                </h3>

                <div className="space-y-4 mb-8">
                  <button className="w-full py-4 bg-[#2EA8FF] hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2">
                    <Phone size={20} />
                    Call Agent
                  </button>
                  <button className="w-full py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/10 flex items-center justify-center gap-2">
                    <Mail size={20} />
                    Email Enquiry
                  </button>
                  <button className="w-full py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all border border-white/5 flex items-center justify-center gap-2">
                    <Calendar size={20} />
                    Book Viewing
                  </button>
                </div>

                <div className="pt-6 border-t border-white/10 text-center">
                  <p className="text-slate-400 text-sm mb-4">
                    Share this property
                  </p>
                  <div className="flex justify-center gap-4">
                    <button className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                      <Share2 size={20} />
                    </button>
                    <button className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
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
