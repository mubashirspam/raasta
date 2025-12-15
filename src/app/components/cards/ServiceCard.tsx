"use client";

import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Service } from "../../types";

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = service.icon;

  return (
    <div className="group relative p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 h-full">
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl z-0 transition-colors duration-300 group-hover:bg-white/60"></div>

      {/* Gradient Blob for Glow Effect on Hover */}
      <div
        className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 rounded-full pointer-events-none`}
      ></div>
      <div
        className={`absolute -left-10 -bottom-10 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 rounded-full pointer-events-none`}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon Container */}
        <div className="mb-6 flex items-center justify-between">
          <div
            className={`p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg shadow-indigo-500/10 text-white transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
          >
            <Icon size={28} strokeWidth={1.5} />
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
            <ArrowUpRight className="text-slate-400" size={20} />
          </div>
        </div>

        {/* Text */}
        <h3 className="text-2xl font-bold text-slate-800 mb-3 tracking-tight group-hover:text-indigo-900 transition-colors">
          {service.title}
        </h3>
        <p className="text-slate-600 leading-relaxed mb-6 flex-grow font-light">
          {service.description}
        </p>

        {/* CTA Link */}
        <div className="flex items-center text-sm font-semibold text-indigo-600 mt-auto cursor-pointer group/link">
          <span className="relative">
            Learn More
            <span className="absolute left-0 -bottom-1 w-0 h-px bg-indigo-600 transition-all duration-300 group-hover/link:w-full"></span>
          </span>
          <ArrowRight
            size={16}
            className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1"
          />
        </div>
      </div>
    </div>
  );
};
