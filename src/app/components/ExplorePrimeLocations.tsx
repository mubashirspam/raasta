"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function ExplorePrimeLocations() {
  const router = useRouter();
  const locations = [
    {
      name: "Palm Jebel Ali",
      image:
        "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=1200&h=800&fit=crop",
      size: "large",
    },
    {
      name: "Business Bay",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
      size: "small",
    },
    {
      name: "Dubai Marina",
      image:
        "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&h=600&fit=crop",
      size: "small",
    },
    {
      name: "Downtown Dubai",
      image:
        "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=800&h=600&fit=crop",
      size: "medium",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Explore Prime Locations
          </h2>
          <button
            onClick={() => router.push("/properties")}
            className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            View More Areas
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Palm Jebel Ali - Large */}
          <div
            onClick={() => router.push("/properties?location=Palm Jumeirah")}
            className="lg:col-span-2 lg:row-span-1 relative group overflow-hidden rounded-2xl h-[300px] cursor-pointer"
          >
            <Image
              src={locations[0].image}
              alt={locations[0].name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <h3 className="absolute bottom-6 left-6 text-3xl font-black text-white">
              {locations[0].name}
            </h3>
          </div>

          {/* Downtown Dubai - Medium */}
          <div
            onClick={() => router.push("/properties?location=Downtown Dubai")}
            className="lg:row-span-2 relative group overflow-hidden rounded-2xl h-[300px] lg:h-full cursor-pointer"
          >
            <Image
              src={locations[3].image}
              alt={locations[3].name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <h3 className="absolute bottom-6 left-6 text-3xl font-black text-white">
              {locations[3].name}
            </h3>
          </div>

          {/* Business Bay - Small */}
          <div
            onClick={() => router.push("/properties?location=Business Bay")}
            className="relative group overflow-hidden rounded-2xl h-[300px] cursor-pointer"
          >
            <Image
              src={locations[1].image}
              alt={locations[1].name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <h3 className="absolute bottom-6 left-6 text-2xl font-black text-white">
              {locations[1].name}
            </h3>
          </div>

          {/* Dubai Marina - Small */}
          <div
            onClick={() => router.push("/properties?location=Dubai Marina")}
            className="relative group overflow-hidden rounded-2xl h-[300px] cursor-pointer"
          >
            <Image
              src={locations[2].image}
              alt={locations[2].name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <h3 className="absolute bottom-6 left-6 text-2xl font-black text-white">
              {locations[2].name}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
