"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import Navigation from "./navigation";
import Hero from "./hero";
import Story from "./story";
import Services from "./services";
import Legacy from "./legacy";
import KnowledgeHub from "./knowledge-hub";
import ContactCompact from "./contact-compact";
import PropertyBrowse from "./property-browse";
import FeaturedDeals from "./featured-deals";
import PropertyGallery from "./property-gallery";
import Location from "./location";
// import FloatingParticles from "./floating-particles";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(sectionId);
      }
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "story",
        "services",
        "legacy",
        "knowledge",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Only add scroll listener on client side
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-900/20"></div>
      <div className="relative z-10">
        <Navigation
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />

        <Hero scrollToSection={scrollToSection} />
        <Story />
        <Services />
        <PropertyBrowse />
        <FeaturedDeals />
        <PropertyGallery />
        <Legacy />
        <KnowledgeHub />
        <Location />
        <ContactCompact />
      </div>

      {/* Copyright Footer */}
      <footer className="relative z-10 py-[24px] px-[12px] border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/60 text-[0.875rem]">
            © {new Date().getFullYear()} Raasta Realty. All rights reserved. |
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/mubashir-ahmad/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white font-medium transition-colors duration-300 underline"
            >
              Mubashir Ahmad
            </a>
          </p>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={() => scrollToSection("home")}
        className="fixed bottom-[24px] right-[24px] w-[36px] h-[36px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 rounded-full flex items-center justify-center text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-110 border border-blue-500/20 hover:border-blue-400/40 backdrop-blur-sm z-50"
      >
        <ChevronUp size={15} />
      </button>
    </div>
  );
}
