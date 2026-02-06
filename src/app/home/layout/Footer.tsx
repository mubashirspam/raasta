import React, { useState, useEffect } from "react";
import {
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

export const Footer: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="relative w-full pt-20 pb-0 overflow-hidden font-sans">
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
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-8 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
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
              <a
                href="https://www.facebook.com/people/Raasta-Realty/61582162074282/?mibextid=wwXIfr&rdid=C3beyC24lEyBtYdu&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17qQijEB4k%2F%3Fmibextid%3DwwXIfr%26ref%3D1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-[#2EA8FF] hover:text-white hover:border-[#2EA8FF] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://youtube.com/@raastarealty?si=4pq1a5xN46XEPoKe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-[#2EA8FF] hover:text-white hover:border-[#2EA8FF] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                <Youtube size={18} />
              </a>
            </div>

            {/* Email Contacts */}
            <div className="space-y-2 mt-6">
              <div className="text-sm">
                <span className="text-slate-600 font-semibold">General: </span>
                <a
                  href="mailto:Admin@lykarealty.ae"
                  className="text-[#2EA8FF] hover:underline transition-colors"
                >
                  connect@raastarealty.com
                </a>
              </div>
              <div className="text-sm">
                <span className="text-slate-600 font-semibold">Career: </span>
                <a
                  href="mailto:hr@lykarealty.ae"
                  className="text-[#2EA8FF] hover:underline transition-colors"
                >
                  hr@raastarealty.com
                </a>
              </div>
            </div>
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

          {/* Column 4: Office Location */}
          <div className="lg:pl-8">
            <h4 className="font-bold text-slate-900 mb-6 text-lg">Location</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-slate-700 mb-2">
                  Office
                </p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  1610, 16th Floor, The Prism Tower,
                  <br />
                  Business Bay, Dubai, UAE
                </p>
              </div>
              <a
                href="https://www.google.com/maps?ll=25.18746,55.261116&z=16&t=m&hl=en-GB&gl=US&mapclient=embed&cid=5563669925211235611"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2EA8FF] hover:underline transition-colors"
              >
                View on Map
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200/60 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400">
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

        {/* Animated Brand Marquee */}
        <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bottom-[-20px] md:bottom-[-50px] overflow-hidden border-t border-slate-200/60">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center">
                <span className="text-9xl md:text-[10rem] lg:text-[20rem] font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20  tracking-tighter px-12">
                  Raasta Realty
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
