"use client";

import React from "react";
import { MapPin, Bed, Bath, Maximize, Heart, ArrowUpRight } from "lucide-react";
import { Property } from "../../types";

interface ListingCardProps {
  data: Property;
}

export const ListingCard: React.FC<ListingCardProps> = ({ data }) => {
  return (
    <div className="group relative bg-white/40 backdrop-blur-sm border border-white rounded-3xl md:rounded-4xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-2 h-full">
      {/* Image Section */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Tags */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur text-xs font-bold uppercase tracking-wider text-slate-900 rounded-lg">
            {data.tag}
          </span>
        </div>

        <button
          className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white hover:bg-white hover:text-red-500 transition-colors"
          onClick={(e) => e.preventDefault()}
        >
          <Heart size={18} />
        </button>

        {/* Price Tag Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-white/80 backdrop-blur-md px-4 py-3 rounded-xl flex justify-between items-center shadow-lg">
            <span className="text-indigo-900 font-bold">{data.price}</span>
            <span className="text-xs text-slate-500 font-medium">
              {data.type}
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-indigo-700 transition-colors">
            {data.title}
          </h3>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
            <ArrowUpRight className="text-indigo-600" />
          </div>
        </div>

        <div className="flex items-center text-slate-500 text-sm mb-6">
          <MapPin size={16} className="mr-1 text-indigo-400" />
          {data.location}
        </div>

        {/* Features Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-6"></div>

        {/* Features Grid */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50 group-hover:bg-indigo-50/50 transition-colors">
            <Bed
              size={20}
              className="text-slate-400 mb-1 group-hover:text-indigo-500"
            />
            <span className="text-xs font-bold text-slate-700">
              {data.beds} Beds
            </span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50 group-hover:bg-indigo-50/50 transition-colors">
            <Bath
              size={20}
              className="text-slate-400 mb-1 group-hover:text-indigo-500"
            />
            <span className="text-xs font-bold text-slate-700">
              {data.baths} Baths
            </span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50 group-hover:bg-indigo-50/50 transition-colors">
            <Maximize
              size={20}
              className="text-slate-400 mb-1 group-hover:text-indigo-500"
            />
            <span className="text-xs font-bold text-slate-700">
              {data.sqft.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
