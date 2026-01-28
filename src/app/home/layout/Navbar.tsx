"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Clients", href: "#testimonials" },
  { label: "Join Raasta", href: "/career" },
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getNavbarClasses = () => {
    const baseClasses =
      "fixed left-1/2 -translate-x-1/2 w-[calc(100%-24px)] max-w-[1400px] rounded-full transition-all duration-300 border px-4 md:px-3";

    if (isScrolled) {
      return `${baseClasses} top-4 py-3 bg-white/90 backdrop-blur-md border-slate-200/50 shadow-lg shadow-slate-200/10`;
    }

    return `${baseClasses} top-2 py-2 border-white/0`;
  };

  const getTextColor = (isActive: boolean) => {
    return isActive
      ? "text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 font-bold"
      : "text-slate-600 hover:text-teal-500";
  };

  const getUnderlineColor = () =>
    "bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500";

  return (
    <>
      <nav
        className={`fixed z-50 transition-all duration-500 ease-in-out ${getNavbarClasses()}`}
      >
        <div className="flex items-center justify-between w-full relative">
          {/* --- Left Side: Logo Only --- */}
          <div className="flex items-center z-50 relative shrink-0">
            <Link href="/">
              <img
                src="/logo_black.svg"
                alt="Raasta Realty Logo"
                className="h-10 md:h-10 rounded-xl"
              />
            </Link>
          </div>

          {/* --- Right Side: Links + Contact Button --- */}
          <div className="flex items-center gap-8">
            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`text-sm font-medium transition-colors relative group ${getTextColor(
                      isActive,
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
            </div>

            {/* Contact Button */}
            <Link href="/contact" className="hidden md:block">
              <span className="inline-flex h-10 items-center px-6 rounded-full font-medium text-base bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 transition-all hover:scale-[1.02]">
                Contact Us
              </span>
            </Link>

            {/* --- Mobile Menu Toggle --- */}
            <button
              className="md:hidden z-50 p-2 rounded-full transition-colors text-slate-800 hover:bg-black/5"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
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
                  ? "text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500"
                  : "text-slate-900 hover:text-teal-500"
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
          className="mt-8 px-10 py-4 rounded-full bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white text-lg font-bold shadow-xl shadow-cyan-500/30 transform transition-transform active:scale-95"
        >
          Contact Us
        </Link>
      </div>
    </>
  );
};
