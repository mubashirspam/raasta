"use client";

import React from "react";
import { ArrowUpRight, MessageCircle, Phone, Star } from "lucide-react";
import { Agent } from "../../types";

interface AgentCardProps {
  agent: Agent;
}

interface AgentCardProps {
  agent: Agent;
}

export const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  const getImageUrl = () => {
    if (typeof agent.image === "string") {
      return agent.image;
    }
    if (
      agent.image &&
      typeof agent.image === "object" &&
      "asset" in agent.image
    ) {
      return (
        agent.image.asset?.url ||
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
      );
    }
    return "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop";
  };

  return (
    <div className="group relative w-full h-[300px] rounded-[1.25rem] overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-300">
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 bg-slate-200">
        <img
          src={getImageUrl()}
          alt={agent.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
      </div>

      {/* Full-screen gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#00f6ff] via-[#03d0ff]/20 to-transparent" />

      {/* Top Right Arrow - Always visible with tinted bg */}
      <div className="absolute top-3 right-3 z-20">
        <div className="w-8 h-8 bg-[#00f6ff]/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-[#00f6ff]/40">
          <ArrowUpRight size={16} />
        </div>
      </div>

      {/* Bottom text content */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-5">
        <h3 className="text-2xl font-bold text-white leading-tight mb-1">
          {agent.name}
        </h3>
        <p className="text-sm text-white/80">{agent.role}</p>
      </div>
    </div>
  );
};

// export const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
//   return (
//     <div className="group relative h-full bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/20 hover:shadow-2xl hover:shadow-[#2EA8FF]/10 transition-all duration-500 hover:-translate-y-2">
//       {/* Image Container */}
//       <div className="relative aspect-[4/5] overflow-hidden">
//         <img
//           src={agent.image}
//           alt={agent.name}
//           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//         />

//         {/* Hover Overlay with Actions */}
//         <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
//           <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
//              <div className="flex gap-3">
//               <button className="flex-1 bg-white/90 backdrop-blur text-slate-900 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#2EA8FF] hover:text-white transition-colors">
//                 <Phone size={16} /> Call
//               </button>
//               <button className="flex-1 bg-[#25D366] text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#20b857] transition-colors shadow-lg">
//                 <MessageCircle size={16} /> WhatsApp
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Top Tag */}
//         <div className="absolute top-4 left-4">
//            <span className="px-3 py-1 bg-white/80 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-slate-900 rounded-lg shadow-sm">
//              {agent.role}
//            </span>
//         </div>
//       </div>

//       {/* Info Content */}
//       <div className="p-6 text-center relative z-10">
//         <div className="absolute -top-10 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-[#2EA8FF] group-hover:scale-110 transition-transform duration-300">
//            <ArrowUpRight size={24} />
//         </div>

//         <h3 className="text-xl font-bold text-slate-900 mb-1">{agent.name}</h3>
//         <p className="text-slate-500 text-sm font-medium uppercase tracking-wide mb-4">
//            {agent.specialty}
//         </p>

//         {/* Decorative Line */}
//         <div className="w-12 h-1 bg-gradient-to-r from-[#2EA8FF] to-purple-400 mx-auto rounded-full mb-4 opacity-50"></div>

//         <div className="flex items-center justify-center gap-1 text-amber-400 text-xs font-bold">
//            <Star size={12} fill="currentColor" />
//            <Star size={12} fill="currentColor" />
//            <Star size={12} fill="currentColor" />
//            <Star size={12} fill="currentColor" />
//            <Star size={12} fill="currentColor" />
//            <span className="text-slate-400 ml-1 font-normal">(48 Reviews)</span>
//         </div>
//       </div>
//     </div>
//   );
// };
