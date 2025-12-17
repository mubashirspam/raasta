import React, { useState, useEffect } from "react";
import {
  Search,
  MapPin,
  ArrowRight,
  Play,
  Star,
  ShieldCheck,
} from "lucide-react";

export const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<"buy" | "rent" | "off-plan">(
    "buy"
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full min-h-[90vh] flex items-center bg-slate-50 font-sans overflow-hidden">
      {/* --- Shared Background (Same as Services for continuity) --- */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        {/* Deep ambient background */}
        <div className="absolute inset-0 bg-slate-50"></div>

        {/* Animated Gradient Orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] rounded-full bg-gradient-to-l from-violet-200/40 via-pink-200/40 to-fuchsia-200/40 blur-[130px] animate-pulse-slow mix-blend-multiply"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-r from-blue-200/40 via-cyan-200/40 to-sky-200/40 blur-[130px] animate-pulse-slow delay-1000 mix-blend-multiply"></div>

        {/* Architectural Grid Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.03) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          }}
        ></div>

        {/* Noise Texture */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Text & Search */}
          <div className="flex flex-col items-start text-left">
            {/* Badge */}
            <div
              className={`transition-all duration-700 transform ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/60 backdrop-blur-md border border-white/60 shadow-sm text-indigo-900 text-xs font-bold tracking-widest uppercase mb-6">
                <Star size={12} className="text-amber-500 fill-amber-500" />
                <span>#1 Real Estate Agency in Dubai</span>
              </div>
            </div>

            {/* Headline */}
            <h1
              className={`text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6 transition-all duration-700 delay-100 transform ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Find Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                Dream Sanctuary
              </span>{" "}
              <br />
              in Dubai.
            </h1>

            <p
              className={`text-lg text-slate-500 leading-relaxed max-w-lg mb-10 transition-all duration-700 delay-200 transform ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Access the most exclusive off-plan projects and luxury waterfront
              villas. Experience a seamless buying process with our VIP
              concierge.
            </p>

            {/* Glassmorphic Search Bar */}
            <div
              className={`w-full max-w-md bg-white/40 backdrop-blur-xl border border-white/60 p-2 rounded-[2rem] shadow-2xl shadow-indigo-500/10 mb-8 transition-all duration-700 delay-300 transform ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {/* Tabs */}
              <div className="flex gap-1 mb-2 px-2">
                {["buy", "rent", "off-plan"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeTab === tab
                        ? "bg-white text-indigo-900 shadow-sm"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Input Area */}
              <div className="relative flex items-center">
                <div className="absolute left-4 text-slate-400">
                  <MapPin size={20} />
                </div>
                <input
                  type="text"
                  placeholder="Palm Jumeirah, Downtown, Marina..."
                  className="w-full bg-white/50 border border-transparent focus:border-indigo-300 focus:ring-0 rounded-full py-4 pl-12 pr-32 text-slate-800 placeholder:text-slate-400 outline-none transition-all"
                />
                <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-slate-900 hover:bg-indigo-600 text-white px-6 rounded-full font-medium transition-colors duration-300 flex items-center justify-center">
                  <Search size={18} />
                </button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div
              className={`flex items-center gap-8 transition-all duration-700 delay-400 transform ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-900">
                  12k+ Happy Clients
                </span>
                <div className="flex items-center gap-1 text-xs text-slate-500">
                  <Star size={12} className="fill-amber-400 text-amber-400" />
                  <span>4.9/5 Average Rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition */}
          <div
            className={`relative h-[600px] w-full hidden lg:block transition-all duration-1000 delay-300 transform ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Background Blob for Image */}
            <div className="absolute top-[10%] right-[10%] w-[80%] h-[80%] bg-gradient-to-tr from-indigo-200 to-pink-200 rounded-full blur-3xl opacity-60 animate-pulse-slow"></div>

            {/* Main Tall Image */}
            <div className="absolute right-0 top-0 w-[80%] h-[90%] rounded-[3rem] overflow-hidden shadow-2xl shadow-indigo-900/20 border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1512453979798-5ea90b2009f4?q=80&w=1000&auto=format&fit=crop"
                alt="Dubai Skyline"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
            </div>

            {/* Floating Glass Card 1: Golden Visa */}
            <div className="absolute bottom-[15%] left-[5%] bg-white/70 backdrop-blur-xl border border-white p-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-[240px] animate-float">
              <div className="p-3 bg-amber-100 rounded-xl text-amber-600">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">
                  Eligible for
                </p>
                <p className="text-sm font-bold text-slate-900">
                  10-Year Golden Visa
                </p>
              </div>
            </div>

            {/* Floating Glass Card 2: Video Play */}
            <div className="absolute top-[15%] left-[0%]">
              <button className="group relative flex items-center justify-center w-20 h-20 bg-white/30 backdrop-blur-md border border-white/50 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
                <div className="absolute inset-0 bg-white/50 rounded-full animate-ping opacity-20"></div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Play
                    size={20}
                    className="fill-indigo-600 text-indigo-600 ml-1"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- CSS for Custom Animations --- */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(0, -15px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
