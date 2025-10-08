"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Camera } from "lucide-react";

export default function PropertyGallery() {
  const galleryImages = [
    {
      id: "01",
      title: "Luxury Living Room",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      gridClass: "col-span-2 row-span-2",
    },
    {
      id: "02",
      title: "Modern Kitchen",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      gridClass: "col-span-1 row-span-2",
    },
    {
      id: "03",
      title: "Elegant Dining",
      image:
        "https://images.unsplash.com/photo-1574180566232-aadb1beeb5ca?w=600&h=800&fit=crop",
      gridClass: "col-span-1 row-span-2",
    },
    {
      id: "04",
      title: "Master Bedroom",
      image:
        "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=800&h=600&fit=crop",
      gridClass: "col-span-2 row-span-1",
    },
    {
      id: "05",
      title: "Balcony View",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=800&fit=crop",
      gridClass: "col-span-1 row-span-2",
    },
    {
      id: "06",
      title: "Guest Bedroom",
      image:
        "https://images.unsplash.com/photo-1560448075-bb485b067938?w=600&h=400&fit=crop",
      gridClass: "col-span-1 row-span-1",
    },
    {
      id: "07",
      title: "Home Office",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      gridClass: "col-span-2 row-span-1",
    },
    {
      id: "08",
      title: "Bathroom Spa",
      image:
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop",
      gridClass: "col-span-1 row-span-1",
    },
  ];

  return (
    <section className="py-[60px] px-[12px] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-[60px] right-[60px] w-[240px] h-[240px] bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[60px] left-[60px] w-[288px] h-[288px] bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-[60px]">
          <div className="inline-flex items-center gap-[9px] mb-[12px]">
            <Camera className="text-cyan-400" size={15} />
            <span className="text-[0.875rem] text-cyan-400 font-medium">
              Gallery
            </span>
          </div>

          <h2 className="text-[2.5rem] md:text-[3.5rem] font-black mb-[24px] text-white leading-tight">
            Inside the Luxury
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Dubai Properties
            </span>
          </h2>
        </div>

        {/* Gallery Grid - Masonry Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[12px] auto-rows-[180px]">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className={`${item.gridClass} group relative cursor-pointer overflow-hidden rounded-[18px]`}
            >
              {/* Background Glow */}
              <div className="absolute -inset-[3px] bg-gradient-to-br from-cyan-400/30 to-purple-600/30 rounded-[21px] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Main Container */}
              <div className="relative h-full overflow-hidden rounded-[18px] border border-white/10 group-hover:border-cyan-400/30 transition-all duration-300">
                {/* Property Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Room Number Badge */}
                <div className="absolute top-[15px] right-[15px] w-[36px] h-[36px] bg-gradient-to-br from-cyan-400 to-blue-600 backdrop-blur-sm rounded-[9px] flex items-center justify-center text-white text-[0.875rem] font-black border border-white/30 shadow-lg">
                  {item.id}
                </div>

                {/* Room Title */}
                <div className="absolute bottom-[15px] left-[15px] right-[15px]">
                  <div className="backdrop-blur-xl bg-white/10 rounded-[12px] border border-white/20 p-[12px] transform translate-y-0 group-hover:-translate-y-[3px] transition-transform duration-300">
                    <h3 className="text-[0.875rem] md:text-[1rem] font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Hover Overlay Icon */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-[54px] h-[54px] bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/40 transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                    <ArrowRight className="text-white" size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-[48px]">
          <p className="text-[1rem] text-white/70 mb-[18px]">
            Explore more stunning properties in our exclusive collection
          </p>
          <button className="group inline-flex items-center gap-[9px] px-[24px] py-[9px] backdrop-blur-xl bg-white/10 hover:bg-white/20 rounded-[12px] border border-white/20 hover:border-white/30 text-white font-bold text-[1rem] transition-all duration-300 hover:scale-105">
            <Camera
              className="group-hover:rotate-12 transition-transform duration-300"
              size={15}
            />
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
}
