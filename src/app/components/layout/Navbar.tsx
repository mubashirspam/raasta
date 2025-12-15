"use client";

import React, { useState } from "react";
import { Menu, X, TrendingUp } from "lucide-react";
import { GlassContainer } from "../cards/glassmorphism";

interface NavbarProps {
  onContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContact }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 z-50 px-15 py-5 ">
      <GlassContainer
        bgColor="rgba(1, 149, 255, 0.8)"
        highlightColor="rgba(255, 255, 255, 0.2)"
        blurAmount={5}
        className="transition-all duration-300"
        variant="large"
      >
        <div className=" mx-auto px-5 h-17 flex items-center justify-between">
          <div className="flex items-center gap-2 z-50">
            <div className="w-8 h-8 bg-[#2EA8FF] rounded-lg flex items-center justify-center text-white">
              <TrendingUp size={18} strokeWidth={3} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white transition-colors">
              Raasta<span className="text-white">Realty</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-white font-lg">
            <a href="#" className="hover:text-white/80 transition-colors">
              Buy
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              Rent
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              Sell
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              Agents
            </a>
            <GlassContainer
              variant="rounded"
              bgColor="rgba(255, 255, 255, 0.15)"
              blurAmount={20}
            >
              <button
                onClick={onContact}
                className="px-5 py-2.5 rounded-full text-slate-800/ border border-white/20 hover:shadow-xl transition-all "
              >
                Contact Us
              </button>
            </GlassContainer>
          </div>

          <button
            className="md:hidden z-50 p-2 text-white"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X /> : <Menu />}
          </button>

          {isMobileOpen && (
            <div className="absolute top-0 left-0 w-full h-screen bg-white z-40 flex flex-col items-center justify-center gap-8 text-xl text-slate-800">
              <a href="#" onClick={() => setIsMobileOpen(false)}>
                Buy
              </a>
              <a href="#" onClick={() => setIsMobileOpen(false)}>
                Rent
              </a>
              <a href="#" onClick={() => setIsMobileOpen(false)}>
                Sell
              </a>
              <a href="#" onClick={() => setIsMobileOpen(false)}>
                Agents
              </a>
              <button
                onClick={() => {
                  setIsMobileOpen(false);
                  onContact();
                }}
                className="text-[#2EA8FF] font-semibold"
              >
                Contact Us
              </button>
            </div>
          )}
        </div>
      </GlassContainer>
    </nav>
  );
};
