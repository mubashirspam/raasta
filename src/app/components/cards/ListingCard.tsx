"use client";

import React from "react";
import { MapPin, Bed, Bath, Maximize, Star } from "lucide-react";
import { Property } from "../../types";

interface ListingCardProps {
  data: Property;
}

export const ListingCard: React.FC<ListingCardProps> = ({ data }) => {
  return (
    <div className="group bg-white/50 backdrop-blur-md border border-white/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#2EA8FF] uppercase tracking-wide">
          {data.tag}
        </div>
        <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-red-500 transition-colors">
          <Star size={16} />
        </button>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <p className="font-bold text-2xl drop-shadow-md">{data.price}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-slate-800 mb-1 truncate">
          {data.title}
        </h3>
        <p className="text-slate-500 text-sm mb-4 flex items-center gap-1">
          <MapPin size={14} /> {data.location}
        </p>

        <div className="flex items-center justify-between py-4 border-t border-slate-200/60">
          <div className="flex items-center gap-2 text-slate-600 text-sm">
            <Bed size={16} className="text-[#2EA8FF]" />
            <span>{data.beds} Beds</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600 text-sm">
            <Bath size={16} className="text-[#2EA8FF]" />
            <span>{data.baths} Baths</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600 text-sm">
            <Maximize size={16} className="text-[#2EA8FF]" />
            <span>{data.sqft.toLocaleString()} sqft</span>
          </div>
        </div>

        <button className="w-full mt-2 py-3 rounded-xl bg-slate-50 text-slate-700 font-medium hover:bg-[#2EA8FF] hover:text-white transition-all flex items-center justify-center gap-2 group-hover:bg-[#2EA8FF] group-hover:text-white">
          View Details
        </button>
      </div>
    </div>
  );
};
