"use client";

import React from "react";
import { Search, MapPin, Home } from "lucide-react";

export const SearchStrip: React.FC = () => {
  return (
    <div className="bg-white/60 backdrop-blur-xl border border-white/60 p-4 rounded-2xl shadow-xl max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
      <div className="flex-1 relative group">
        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 block pl-1">
          Location
        </label>
        <div className="flex items-center gap-2 h-10 px-2 rounded-lg bg-white/50 border border-transparent focus-within:border-[#2EA8FF] focus-within:ring-2 focus-within:ring-[#2EA8FF]/20 transition-all">
          <MapPin size={18} className="text-[#2EA8FF]" />
          <input
            type="text"
            placeholder="Downtown, Palm Jumeirah..."
            className="w-full bg-transparent outline-none text-slate-800 placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="flex-1 md:border-l border-slate-200/50 md:pl-4">
        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 block pl-1">
          Property Type
        </label>
        <div className="flex items-center gap-2 h-10 px-2 rounded-lg bg-white/50 border border-transparent focus-within:border-[#2EA8FF] transition-all">
          <Home size={18} className="text-[#2EA8FF]" />
          <select className="w-full bg-transparent outline-none text-slate-800 cursor-pointer">
            <option>All Types</option>
            <option>Villa</option>
            <option>Penthouse</option>
            <option>Apartment</option>
          </select>
        </div>
      </div>

      <div className="flex-1 md:border-l border-slate-200/50 md:pl-4">
        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 block pl-1">
          Price Range
        </label>
        <div className="flex items-center gap-2 h-10 px-2 rounded-lg bg-white/50 border border-transparent focus-within:border-[#2EA8FF] transition-all">
          <span className="text-[#2EA8FF] font-bold text-sm">AED</span>
          <select className="w-full bg-transparent outline-none text-slate-800 cursor-pointer">
            <option>Any Price</option>
            <option>2M - 5M</option>
            <option>5M - 15M</option>
            <option>15M+</option>
          </select>
        </div>
      </div>

      <button className="bg-[#2EA8FF] hover:bg-[#2590db] text-white rounded-xl px-8 py-2 font-medium transition-all shadow-lg hover:shadow-[#2EA8FF]/30 active:scale-95 flex items-center justify-center gap-2 md:self-end md:h-[46px]">
        <Search size={20} />
        <span>Search</span>
      </button>
    </div>
  );
};
