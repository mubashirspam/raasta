"use client";

import React from "react";
import { Phone } from "lucide-react";
import { Agent } from "../../types";

interface AgentCardProps {
  agent: Agent;
}

export const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  return (
    <div className="group relative bg-white/40 backdrop-blur-md border border-white rounded-2xl overflow-hidden hover:shadow-xl transition-all">
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={agent.image}
          alt={agent.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <div className="flex gap-2">
            <button className="flex-1 bg-white text-slate-900 py-2 rounded-lg font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#2EA8FF] hover:text-white transition-colors">
              <Phone size={14} /> Call
            </button>
            <button className="flex-1 bg-[#25D366] text-white py-2 rounded-lg font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#20b857] transition-colors">
              WhatsApp
            </button>
          </div>
        </div>
      </div>
      <div className="p-5 text-center">
        <h3 className="text-xl font-bold text-slate-800">{agent.name}</h3>
        <p className="text-[#2EA8FF] font-medium text-sm mb-2">{agent.role}</p>
        <p className="text-slate-400 text-xs uppercase tracking-wide">
          Specialty: {agent.specialty}
        </p>
      </div>
    </div>
  );
};
