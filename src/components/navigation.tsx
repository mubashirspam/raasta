"use client";

import React, { useState } from "react";
import { Menu, X, Building2 } from "lucide-react";
// Import scale constants if needed in future

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export default function Navigation({ activeSection, scrollToSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "story", label: "Our Story" },
    { id: "services", label: "Services" },
    { id: "legacy", label: "Legacy" },
    { id: "knowledge", label: "Knowledge Hub" },
    { id: "contact", label: "Contact" }
  ];

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-[12px]">
        <div className="flex items-center justify-between h-[48px]">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-[30px] h-[30px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 rounded-full flex items-center justify-center text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-110 border border-blue-500/20 hover:border-blue-400/40">
              <Building2 size={15} />
            </div>
            <span className="text-[1.125rem] font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Raasta Realty
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-[3px]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-[12px] py-[6px] rounded-full text-[0.875rem] font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/20"
                    : "text-blue-200/80 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => handleNavClick("contact")}
              className="px-[18px] py-[6px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 rounded-full border border-blue-500/20 hover:border-blue-400/40 text-blue-300 hover:text-white transition-all duration-300 text-[0.875rem] backdrop-blur-sm"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-[30px] h-[30px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 rounded-full flex items-center justify-center text-blue-400 hover:text-blue-300 transition-all duration-300 border border-blue-500/20 hover:border-blue-400/40"
          >
            {isMenuOpen ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 backdrop-blur-xl bg-black/40 border-b border-white/10">
            <div className="px-[12px] py-[18px] space-y-[9px]">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-[12px] py-[9px] rounded-[9px] text-[0.875rem] font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/20"
                      : "text-blue-200/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => handleNavClick("contact")}
                className="block w-full px-[12px] py-[9px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 rounded-[9px] border border-blue-500/20 hover:border-blue-400/40 text-blue-300 hover:text-white transition-all duration-300 text-[0.875rem] backdrop-blur-sm text-center mt-[12px]"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
