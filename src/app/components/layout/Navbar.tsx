"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, TrendingUp } from "lucide-react";

interface NavbarProps {
  onContact?: () => void;
}

export const Navbar = ({ onContact = () => {} }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Handle Scroll Effect for Glass Transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isScrolled
            ? "top-2 left-4 right-4 md:left-12 md:right-12 py-4 rounded-full bg-sky-300/30 backdrop-blur-[5px] border border-white/40 shadow-xl shadow-blue-900/5 supports-[backdrop-filter]:bg-sky-100/30"
            : "top-0 left-0 right-0 py-6 bg-transparent border-transparent"
        }`}
      >
        <div
          className={`mx-auto flex items-center justify-between ${
            isScrolled ? "px-6" : "max-w-7xl px-6 md:px-12"
          }`}
        >
          {/* --- Branding --- */}
          <div className="flex items-center gap-2.5 z-50 relative">
            <div className="w-10 h-10 bg-[#2EA8FF] rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <TrendingUp size={20} strokeWidth={2.5} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900 transition-colors">
              Raasta<span className="font-light text-slate-600">Realty</span>
            </span>
          </div>

          {/* --- Desktop Links --- */}
          <div className="hidden md:flex items-center gap-8">
            {["Buy", "Rent", "Sell", "Agents"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-slate-700 hover:text-[#2EA8FF] transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2EA8FF] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* Contact Button */}
            <button
              onClick={onContact}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:-translate-y-0.5 ${
                isScrolled
                  ? "bg-[#2EA8FF] text-white hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
                  : "bg-white/80 backdrop-blur-md border border-white/40 text-slate-900 shadow-sm hover:bg-white hover:shadow-md"
              }`}
            >
              Contact Us
            </button>
          </div>

          {/* --- Mobile Menu Toggle --- */}
          <button
            className="md:hidden z-50 p-2 text-slate-800 hover:bg-black/5 rounded-full transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* --- Mobile Menu Overlay --- */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden flex flex-col items-center justify-center gap-8 ${
          isMobileOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        {["Buy", "Rent", "Sell", "Agents"].map((item, index) => (
          <a
            key={item}
            href="#"
            onClick={() => setIsMobileOpen(false)}
            className="text-4xl font-bold text-slate-900 hover:text-[#2EA8FF] transition-colors tracking-tight"
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {item}
          </a>
        ))}
        <button
          onClick={() => {
            setIsMobileOpen(false);
            onContact?.();
          }}
          className="mt-8 px-10 py-4 rounded-full bg-[#2EA8FF] text-white text-lg font-bold shadow-xl shadow-blue-500/30 transform transition-transform active:scale-95"
        >
          Contact Us
        </button>
      </div>
    </>
  );
};
