"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import ThemeToggle from "./ui/ThemeToggle";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Property", href: "/properties" },
    { name: "Blog", href: "#blog" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav
      className={`flex items-center justify-between fixed z-50 top-0 w-full px-6 md:px-12 lg:px-20 py-4 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white/40 dark:bg-black/40 backdrop-blur-md"
          : "bg-transparent dark:bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex-shrink-0 z-50">
        <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
          Raasta
          <span className=" text-[#10b981] dark:text-green-600">Realty</span>
        </h1>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8 lg:gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-slate-600 dark:text-slate-100 hover:text-green-600 dark:hover:text-white transition-colors relative group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#10b981] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <button className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-[#10b981] dark:bg-green-600  hover:bg-green-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-green-900/20 hover:scale-105">
          <Phone size={18} />
          <span>15-Min Call</span>
        </button>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-slate-900 dark:text-white z-50 p-2"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-slate-950/95 dark:bg-white/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-6 w-full px-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold text-slate-900 dark:text-white hover:text-green-600 transition-colors"
              style={{
                transitionDelay: `${index * 50}ms`,
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen
                  ? "translateY(0)"
                  : "translateY(20px)",
                transition: "all 0.3s ease-out",
              }}
            >
              {link.name}
            </Link>
          ))}

          <div
            className="w-full max-w-xs pt-8"
            style={{
              transitionDelay: "300ms",
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen
                ? "translateY(0)"
                : "translateY(20px)",
              transition: "all 0.3s ease-out",
            }}
          >
            <button className="w-full py-4 dark:bg-green-600 bg-[#10b981] hover:bg-green-700 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl">
              <Phone size={20} />
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
