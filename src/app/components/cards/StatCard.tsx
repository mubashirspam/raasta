"use client";

import React from "react";
import { Stat } from "../../types";

interface StatCardProps {
  stat: Stat;
}

export const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  return (
    <div className="bg-white/30 backdrop-blur-md border border-white/60 p-6 rounded-2xl text-center hover:bg-white/50 transition-colors">
      <p className="text-4xl font-bold text-[#2EA8FF] mb-1">
        {stat.value}
        <span className="text-2xl">{stat.suffix}</span>
      </p>
      <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">
        {stat.label}
      </p>
    </div>
  );
};
