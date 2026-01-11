"use client";

import React, { useEffect, useState } from "react";
import { RevealSection } from "../ui";
import { AgentCard } from "../cards";
import { AGENTS } from "../../data";
import { Agent } from "../../types";
import { ArrowRight, Play, Star, Users } from "lucide-react";

export const Agents: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch("/api/agents");
        if (response.ok) {
          const data = await response.json();
          setAgents(data);
        } else {
          setAgents(AGENTS);
        }
      } catch (error) {
        console.error("Failed to fetch agents:", error);
        setAgents(AGENTS);
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);
  return (
    <section className="relative w-full py-24 overflow-hidden font-sans">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%)",
          }}
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-xl" />
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-12">
        <RevealSection>
          <div className="text-center mb-16 relative">
            {/* Decorative stars */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-8 flex items-center gap-1">
              <Star size={8} className="text-[#fa93cb]/40 fill-current" />
              <Star size={12} className="text-[#fa93cb] fill-current" />
              <Star size={8} className="text-[#fa93cb]/40 fill-current" />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 top-4 w-px h-8 bg-gradient-to-b from-[#fa93cb] to-transparent" />

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight mb-4 leading-[1.1]">
              Meet Our
              <br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-red-500">
                  Elite Agents
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 10"
                  fill="none"
                >
                  <path
                    d="M2 8C50 2 150 2 198 8"
                    stroke="url(#agents-underline)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="agents-underline"
                      x1="0"
                      y1="0"
                      x2="200"
                      y2="0"
                    >
                      <stop stopColor="#EC4899" />
                      <stop offset="0.5" stopColor="#F43F5E" />
                      <stop offset="1" stopColor="#EF4444" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed mt-6">
              Industry leaders with specialized knowledge in Dubai's most
              prestigious districts. Your success is our mission.
            </p>

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

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {agents.map((agent, idx) => (
              <RevealSection key={agent._id || agent.id} delay={idx * 150}>
                <AgentCard agent={agent} />
              </RevealSection>
            ))}
          </div>
        )}
        <div
          className={`mt-24 relative w-full h-[450px] md:h-[500px] rounded-[2.5rem] overflow-hidden group transition-all duration-1000 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Background YouTube Video */}
          <div className="absolute inset-0">
            <iframe
              src="https://www.youtube.com/embed/ZV70-WYRNnU?autoplay=1&mute=1&loop=1&playlist=ZV70-WYRNnU&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
              title="Background Video"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] min-w-full min-h-full object-cover pointer-events-none"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ border: 0 }}
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 px-6 text-center z-10">
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
