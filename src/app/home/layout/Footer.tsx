import React, { useState, useEffect } from "react";
import { Instagram, Linkedin, ChevronRight, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="relative w-full pt-20 pb-10 overflow-hidden font-sans">
      {/* =========================================================================
          BACKGROUND COMPOSITION (Iridescent Grid Theme)
         ========================================================================= */}

      {/* 1. Base Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(to bottom, #ffffff 0%, #f1f5f9 100%)",
        }}
      />

      {/* 2. Architectural Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.4]"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.05) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 90%, transparent)",
        }}
      ></div>

      {/* 3. Soft Color Glows (Bottom focused) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -left-[10%] bottom-0 w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-40 mix-blend-multiply"
          style={{ background: "#e0e7ff" }} // Soft Indigo
        />
        <div
          className="absolute -right-[10%] -bottom-[10%] w-[60vw] h-[60vw] rounded-full blur-[120px] opacity-30 mix-blend-multiply"
          style={{ background: "#fce7f3" }} // Soft Pink
        />
      </div>

      {/* 4. Noise Texture */}
      <div
        className="absolute inset-0 z-10 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* =========================================================================
          CONTENT
         ========================================================================= */}

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Footer Content */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Column 1: Brand & Socials */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <img
                src="/logo_black.svg"
                alt="Raasta Realty Logo"
                className="h-12 rounded-xl"
              />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed pr-4">
              Premium real estate brokerage based in Dubai, specializing in
              luxury residential and high-yield investment properties.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/raasta_realty"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-[#2EA8FF] hover:text-white hover:border-[#2EA8FF] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/raasta-realty/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-[#2EA8FF] hover:text-white hover:border-[#2EA8FF] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Properties Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-lg">
              Properties
            </h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              {[
                "Dubai Marina",
                "Palm Jumeirah",
                "Downtown Dubai",
                "Dubai Hills",
                "New Projects",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="group flex items-center gap-2 hover:text-[#2EA8FF] transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#2EA8FF] transition-colors"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              {[
                "About Us",
                "Meet the Team",
                "Careers",
                "Market Reports",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-[#2EA8FF] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:pl-8">
            <h4 className="font-bold text-slate-900 mb-6 text-lg">
              Newsletter
            </h4>
            <p className="text-sm text-slate-500 mb-4">
              Subscribe for the latest off-plan deals and market updates.
            </p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#2EA8FF] focus:ring-4 focus:ring-[#2EA8FF]/10 transition-all shadow-sm"
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#2EA8FF] text-white rounded-lg px-3 hover:bg-blue-600 transition-colors shadow-md">
                <ChevronRight size={18} />
              </button>
            </div>
            <a
              href="https://www.cbre.ae/insights/figures/uae-real-estate-market-review-q3-2025"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-6 p-4 bg-white/60 backdrop-blur-sm border border-slate-100 rounded-xl hover:shadow-md transition-all group/report"
            >
              <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                <span>Latest Market Report</span>
                <ArrowUpRight
                  size={14}
                  className="text-[#2EA8FF] transition-transform group-hover/report:-translate-y-0.5 group-hover/report:translate-x-0.5"
                />
              </div>
              <p className="text-[10px] text-slate-400 mt-1">
                Q3 2026 Analysis Available
              </p>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200/60 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400">
          <p>&copy; 2026 RaastaRealty Dubai. All rights reserved.</p>
          <div className="flex gap-8">
            <a
              href="/privacy"
              className="hover:text-[#2EA8FF] transition-colors"
            >
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-[#2EA8FF] transition-colors">
              Terms of Service
            </a>
            <a href="/rera" className="hover:text-[#2EA8FF] transition-colors">
              RERA Info
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
