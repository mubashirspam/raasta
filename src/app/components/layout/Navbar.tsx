"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { GlassContainer } from "../cards/glassmorphism";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Invest", href: "/invest" },
  { label: "Career", href: "/career" },
  { label: "Agents", href: "/agents" },
  { label: "Properties", href: "/properties" },
];

interface NavbarProps {
  onContact?: () => void;
}

export const Navbar = ({ onContact = () => {} }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Handle Scroll Effect for Glass Transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navbar styles based on page and scroll
  const getNavbarClasses = () => {
    if (isHomePage) {
      // Home page - solid blue navbar
      return "top-0 left-0 right-0 py-6 bg-[#2DB3FF] border-transparent";
    } else {
      // Other pages - glassmorphism effect
      return isScrolled
        ? "top-0 left-0 right-0 py-4 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 shadow-lg shadow-slate-200/20"
        : "top-0 left-0 right-0 py-6 bg-white/50 backdrop-blur-md border-b border-white/60";
    }
  };

  // Text color based on page
  const getTextColor = (isActive: boolean) => {
    if (isHomePage) {
      return isActive ? "text-white" : "text-white/80 hover:text-white";
    } else {
      return isActive
        ? "text-[#2EA8FF]"
        : "text-slate-700 hover:text-[#2EA8FF]";
    }
  };

  // Underline color based on page
  const getUnderlineColor = () => {
    return isHomePage ? "bg-transparent" : "bg-[#2EA8FF]";
  };

  return (
    <>
      <nav
        className={` ${isHomePage ? "relative" : "fixed"} z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${getNavbarClasses()}`}
      >
        <div className="mx-auto flex items-center justify-between max-w-7xl px-6 md:px-12">
          {/* --- Branding --- */}
          <div className="flex items-center gap-2.5 z-50 relative">
            <Link href="/">
              <img
                src={isHomePage ? "/logo_white.svg" : "/logo_black.svg"}
                alt="Raasta Realty Logo"
                className="h-12 rounded-xl"
              />
            </Link>
          </div>

          {/* --- Desktop Links --- */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-colors relative group ${getTextColor(
                    isActive
                  )}`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 ${getUnderlineColor()} transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}

            {/* Contact Button */}
            <Link href="/contact">
              {isHomePage ? (
                <GlassContainer
                  variant="rounded"
                  bgColor="rgba(255, 255, 255, 0.15)"
                  blurAmount={20}
                >
                  <span className="group inline-flex h-10 items-center text-white px-6 rounded-full font-medium text-lg hover:shadow-xl transition-all">
                    Contact Us
                  </span>
                </GlassContainer>
              ) : (
                <span className="inline-flex h-10 items-center px-6 rounded-full font-medium text-lg bg-gradient-to-r from-[#2EA8FF] to-cyan-500 text-white shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all">
                  Contact Us
                </span>
              )}
            </Link>
          </div>

          {/* --- Mobile Menu Toggle --- */}
          <button
            className={`md:hidden z-50 p-2 rounded-full transition-colors ${
              isHomePage
                ? "text-white hover:bg-white/10"
                : "text-slate-800 hover:bg-black/5"
            }`}
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
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileOpen(false)}
              className={`text-4xl font-bold transition-colors tracking-tight ${
                isActive
                  ? "text-[#2EA8FF]"
                  : "text-slate-900 hover:text-[#2EA8FF]"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item.label}
            </Link>
          );
        })}
        <Link
          href="/contact"
          onClick={() => setIsMobileOpen(false)}
          className="mt-8 px-10 py-4 rounded-full bg-[#2EA8FF] text-white text-lg font-bold shadow-xl shadow-blue-500/30 transform transition-transform active:scale-95"
        >
          Contact Us
        </Link>
      </div>
    </>
  );
};
