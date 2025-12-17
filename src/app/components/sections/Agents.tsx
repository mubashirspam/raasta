"use client";

import React, { useEffect, useState } from "react";
import { RevealSection } from "../ui";
import { AgentCard } from "../cards";
import { AGENTS } from "../../data";
import { ArrowRight, Play, Star } from "lucide-react";

export const Agents: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <section className="relative w-full py-24 overflow-hidden font-sans">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #fdfbf7 0%, #eef2ff 40%, #fdf2f8 100%)",
        }}
      />

      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute -left-[10%] -top-[10%] w-[50vw] h-[50vw] rounded-full blur-[100px] opacity-40 mix-blend-multiply"
          style={{ background: "#ddd6fe", transform: "rotate(0deg)" }}
        />
        <div
          className="absolute -right-[5%] top-[10%] w-[50vw] h-[50vw] rounded-full blur-[100px] opacity-40 mix-blend-multiply"
          style={{ background: "#bae6fd", transform: "rotate(-20deg)" }}
        />
        <div
          className="absolute left-[10%] bottom-[10%] w-[40vw] h-[40vw] rounded-full blur-[100px] opacity-40 mix-blend-multiply"
          style={{ background: "#fbcfe8" }}
        />
        <div
          className="absolute right-[0%] -bottom-[10%] w-[40vw] h-[40vw] rounded-full blur-[100px] opacity-30 mix-blend-multiply"
          style={{ background: "#fde68a" }}
        />
      </div>

      <div className="absolute inset-0 z-20 bg-white/30 backdrop-blur-[60px]" />
      <div
        className="absolute inset-0 z-20 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-12">
        <RevealSection>
          <div className="text-center mb-16 relative">
            {/* Decorative stars */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-2 flex items-center gap-1">
              <Star size={8} className="text-[#2EA8FF]/40 fill-current" />
              <Star size={12} className="text-[#2EA8FF] fill-current" />
              <Star size={8} className="text-[#2EA8FF]/40 fill-current" />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 top-4 w-px h-8 bg-gradient-to-b from-[#2EA8FF] to-transparent" />

            <div className="pt-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#2EA8FF]/10 to-purple-500/10 border border-[#2EA8FF]/20 text-[#2EA8FF] text-xs font-bold tracking-widest uppercase mb-6 shadow-sm backdrop-blur-sm">
                <Star size={12} className="fill-current" />
                <span>Expert Guidance</span>
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight mb-4 leading-[1.1]">
                Meet Our
                <br />
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2EA8FF] via-purple-500 to-pink-500">
                    Elite Agents
                  </span>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1">
                    <div className="w-8 h-0.5 rounded-full bg-[#2EA8FF]" />
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                    <div className="w-8 h-0.5 rounded-full bg-pink-500" />
                  </div>
                </span>
              </h2>

              <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed mt-6">
                Industry leaders with specialized knowledge in Dubai's most
                prestigious districts.
              </p>
            </div>

            {/* Side decorative elements */}
            <div className="hidden md:block absolute left-[12%] top-1/2 -translate-y-1/2">
              <div className="flex flex-col gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2EA8FF]/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-pink-500/50" />
              </div>
            </div>
            <div className="hidden md:block absolute right-[12%] top-1/2 -translate-y-1/2">
              <div className="flex flex-col gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-500/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#2EA8FF]/50" />
              </div>
            </div>
          </div>
        </RevealSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {AGENTS.map((agent, idx) => (
            <RevealSection key={agent.id} delay={idx * 150}>
              <AgentCard agent={agent} />
            </RevealSection>
          ))}
        </div>
        <div
          className={`mt-24 relative w-full h-[450px] md:h-[500px] rounded-[2.5rem] overflow-hidden group transition-all duration-1000 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop"
              alt="Luxury Interior"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          {/* Content Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 px-6 text-center z-10">
            {/* Play Button Icon (Optional aesthetic touch) */}
            <div className="mb-8 w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center text-white cursor-pointer hover:bg-white hover:text-slate-900 transition-all duration-300 hover:scale-110">
              <Play size={24} fill="currentColor" className="ml-1" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Experience the{" "}
              <span className="italic font-serif">Extraordinary</span>
            </h2>
            <p className="text-white/80 max-w-lg mb-8 text-lg font-light">
              Join an exclusive community of homeowners who demand nothing but
              the best.
            </p>

            <button className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold flex items-center gap-2 hover:bg-[#2EA8FF] hover:text-white transition-colors duration-300 shadow-xl">
              Begin Your Journey
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// export const Agents: React.FC = () => {
//   return (
//     <section className="relative w-full py-20 overflow-hidden font-sans">

//       {/* Cleaner Background */}
//       <div className="absolute inset-0 z-0 bg-[#fdfbf7]" />

//       {/* Subtle Noise */}
//       <div className="absolute inset-0 z-10 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

//       <div className="relative z-30 w-full px-4 md:px-8">

//         {/* Section Header */}
//         <div className="text-center mb-10">
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[#2EA8FF] text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
//               <Star size={12} className="fill-current" />
//               <span>Expert Guidance</span>
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-3">
//               Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2EA8FF] via-purple-500 to-pink-500">Elite Agents</span>
//             </h2>
//             <p className="max-w-2xl mx-auto text-sm text-slate-600 leading-relaxed">
//               Our team consists of industry leaders with specialized knowledge
//               in Dubai's most prestigious districts.
//             </p>
//         </div>

//         {/* Agents Grid (6 Columns on Desktop) */}
//         {/* Adjusted grid to show 2 cols mobile, 3 tablet, 6 desktop */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
//           {AGENTS.map((agent) => (
//             <AgentCard key={agent.id} agent={agent} />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };
