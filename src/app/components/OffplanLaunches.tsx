"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Bed,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

export default function OffplanLaunches() {
  const properties = [
    {
      id: 1,
      title: "Ovelle at The Valley",
      developer: "Emaar",
      location: "The Valley",
      price: "AED 7.25M",
      bedrooms: "4, 5",
      handover: "Q4 2028",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Avelia at The Valley",
      developer: "Emaar",
      location: "The Valley",
      price: "AED 7.25M",
      bedrooms: "4, 5",
      handover: "Q4 2028",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Samana Boulevard Heights",
      developer: "Samana",
      location: "Dubailand",
      price: "AED 693K",
      bedrooms: "1, 2, Studio",
      handover: "Q4 2028",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section
      id="properties"
      className="py-20 bg-gradient-to-b from-red-900/50 via-black to-black relative overflow-hidden"
    >
      {/* BG pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Latest Offplan Launches
          </h2>

          <div className="flex items-center gap-4">
            <Link href="/properties">
              <button className="hidden md:block text-sm font-semibold text-gray-400 hover:text-green-600 transition-colors">
                More Off-plan Projects
              </button>
            </Link>

            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors text-white">
                <ChevronLeft size={20} />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors text-white">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((p) => (
            <Link key={p.id} href={`/properties/${p.id}`}>
              <article className="group relative bg-[#111] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-800 hover:border-gray-700">
                {/* Hover Image */}
                <div className="relative h-64 w-full">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover opacity-0 group-hover:opacity-30 transition-all duration-300"
                  />
                </div>

                {/* Floating Hover Info */}
                <div className="absolute top-0 left-0 w-full p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <div className="flex justify-end">
                    <div className="flex items-center gap-2 bg-black/90 px-3 py-1 rounded-lg text-sm font-medium text-gray-200 shadow border border-gray-800">
                      <span>Handover:</span>
                      <span className="font-bold text-white">{p.handover}</span>
                    </div>
                  </div>
                </div>

                {/* Visible Card Content */}
                <div className="relative bg-gr p-6 z-10 transition-all duration-300 group-hover:bg-transparent group-hover:text-white">
                  <span className="text-xs uppercase font-semibold tracking-wider text-gray-500 group-hover:text-gray-300">
                    {p.location}
                  </span>

                  <h3 className="text-xl font-bold mt-2 mb-1 text-white">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300">
                    by {p.developer}
                  </p>

                  <div className="mt-4">
                    <p className="text-sm text-gray-400 group-hover:text-gray-300">
                      Starting Price
                    </p>
                    <p className="text-2xl font-black text-white">{p.price}</p>
                  </div>

                  <div className="mt-4 flex justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-red-600" />
                      <span className="text-gray-400 group-hover:text-white">
                        {p.location}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Bed size={16} className="text-green-600" />
                      <span className="text-gray-400 group-hover:text-white">
                        {p.bedrooms}
                      </span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-3 gap-2 pt-4">
                    <button className="p-3 bg-gray-800 hover:bg-green-600 rounded-lg transition-colors border border-gray-700 hover:border-green-500">
                      <MessageCircle size={20} className="mx-auto text-white" />
                    </button>
                    <button className="p-3 bg-gray-800 hover:bg-red-600 rounded-lg transition-colors border border-gray-700 hover:border-red-500">
                      <Mail size={20} className="mx-auto text-white" />
                    </button>
                    <button className="p-3 bg-gray-800 hover:bg-red-600 rounded-lg transition-colors border border-gray-700 hover:border-red-500">
                      <Phone size={20} className="mx-auto text-white" />
                    </button>
                  </div>
                </div>

                {/* Hover full image overlay effect */}
                <div
                  className="absolute top-0 left-0 w-full h-64 bg-cover bg-center transition-all duration-300 group-hover:h-full opacity-100 group-hover:opacity-30"
                  style={{ backgroundImage: `url(${p.image})` }}
                ></div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
