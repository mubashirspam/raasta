"use client";

import React from "react";
import { MapPin, Building2, Building } from "lucide-react";

export default function Location() {
  return (
    <section className="py-[45px] px-[12px] relative overflow-hidden">
      {/* Background Map */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=600&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80"></div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-[45px]">
          <div className="flex items-center justify-center gap-[6px] mb-[9px]">
            <div className="w-[6px] h-[6px] bg-red-400 rounded-full"></div>
            <span className="text-[0.75rem] text-red-400 font-medium uppercase tracking-wider">Location</span>
          </div>
          
          <h2 className="text-[2.25rem] md:text-[3rem] font-black text-white leading-tight">
            Where You&apos;ll Find Us
          </h2>
        </div>

        {/* Location Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mb-[30px]">
          {/* Neighborhood */}
          <div className="text-center group">
            <div className="mb-[12px]">
              <span className="text-[0.875rem] text-white/60 font-medium">Neighborhood:</span>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-[12px] blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-[12px] p-[18px] group-hover:border-white/20 transition-all duration-300">
                <div className="flex items-center justify-center mb-[9px]">
                  <div className="w-[30px] h-[30px] bg-gradient-to-br from-emerald-400 to-teal-600 rounded-[6px] flex items-center justify-center">
                    <Building2 className="text-white" size={15} />
                  </div>
                </div>
                <h3 className="text-[1.25rem] font-bold text-white mb-[3px]">Dubai Marina</h3>
                <p className="text-[1rem] text-emerald-300 font-medium">Premium District</p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="text-center group">
            <div className="mb-[12px]">
              <span className="text-[0.875rem] text-white/60 font-medium">Address:</span>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-[12px] blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-[12px] p-[18px] group-hover:border-white/20 transition-all duration-300">
                <div className="flex items-center justify-center mb-[9px]">
                  <div className="w-[30px] h-[30px] bg-gradient-to-br from-red-500 to-red-700 rounded-[6px] flex items-center justify-center">
                    <MapPin className="text-white" size={15} />
                  </div>
                </div>
                <h3 className="text-[1.25rem] font-bold text-white mb-[3px]">Marina Walk Boulevard</h3>
                <p className="text-[1rem] text-red-200 font-medium">Dubai, UAE</p>
              </div>
            </div>
          </div>

          {/* Floor */}
          <div className="text-center group">
            <div className="mb-[12px]">
              <span className="text-[0.875rem] text-white/60 font-medium">Office:</span>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-gray-800/20 rounded-[12px] blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-[12px] p-[18px] group-hover:border-white/20 transition-all duration-300">
                <div className="flex items-center justify-center mb-[9px]">
                  <div className="w-[30px] h-[30px] bg-gradient-to-br from-gray-600 to-black rounded-[6px] flex items-center justify-center">
                    <Building className="text-white" size={15} />
                  </div>
                </div>
                <h3 className="text-[1.25rem] font-bold text-white mb-[3px]">20th Floor</h3>
                <p className="text-[1rem] text-gray-200 font-medium">With City View</p>
              </div>
            </div>
          </div>
        </div>

        {/* Location Marker */}
        <div className="flex justify-center">
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 to-emerald-600/30 rounded-full blur-xl animate-pulse"></div>
            <div className="relative w-[60px] h-[60px] bg-gradient-to-br from-red-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20 group-hover:scale-110 transition-transform duration-300">
              <Building2 className="text-white" size={24} />
            </div>
            {/* Ripple effect */}
            <div className="absolute inset-0 rounded-full border-2 border-red-400/50 animate-ping"></div>
            <div className="absolute inset-0 rounded-full border-2 border-emerald-400/50 animate-ping animation-delay-1000"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
