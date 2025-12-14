"use client";

import React from "react";
import { Service } from "../../types";

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = service.icon;

  return (
    <div className="h-full bg-white/60 hover:bg-white/90 backdrop-blur-xl border border-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all group">
      <div className="w-14 h-14 bg-[#2EA8FF]/10 rounded-2xl flex items-center justify-center text-[#2EA8FF] mb-6 group-hover:scale-110 transition-transform duration-500">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
    </div>
  );
};
