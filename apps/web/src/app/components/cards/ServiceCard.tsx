"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Service } from "../../types";

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = service.icon;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative p-6 md:p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20">
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl z-0 transition-colors duration-300 group-hover:bg-white/60"></div>

      {/* Gradient Blob for Glow Effect on Hover */}
      <div
        className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 rounded-full pointer-events-none`}
      ></div>
      <div
        className={`absolute -left-10 -bottom-10 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 rounded-full pointer-events-none`}
      ></div>

      {/* Content - Desktop Layout */}
      <div className="relative z-10 hidden md:grid md:grid-cols-[auto_1fr] md:gap-6 md:items-start">
        {/* Icon and Title Row */}
        <div className="flex items-center gap-4 col-span-2">
          <div
            className={`p-3 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg shadow-indigo-500/10 text-white transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 flex-shrink-0`}
          >
            <Icon size={24} strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-bold text-slate-800 tracking-tight group-hover:text-indigo-900 transition-colors">
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-slate-600 leading-relaxed font-light col-span-2 mt-2">
          {service.description}
        </p>
      </div>

      {/* Content - Mobile Layout */}
      <div className="relative z-10 md:hidden">
        {/* Icon and Title Row */}
        <div className="flex items-center gap-3 mb-3">
          <div
            className={`p-3 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg shadow-indigo-500/10 text-white flex-shrink-0`}
          >
            <Icon size={22} strokeWidth={1.5} />
          </div>
          <h3 className="text-lg font-bold text-slate-800 tracking-tight flex-1">
            {service.title}
          </h3>
        </div>

        {/* Learn More Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-sm font-semibold text-indigo-600 mt-2"
        >
          <span>Learn More</span>
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Expandable Description */}
        <div
          className={`grid transition-all duration-300 ${
            isExpanded ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <p className="text-slate-600 leading-relaxed font-light text-sm">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
