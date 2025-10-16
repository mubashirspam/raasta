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
    <div className="min-h-screen bg-gradient-to-br from-black via-red-900 to-emerald-900 text-white relative overflow-hidden">
      {/* Background decoration - UAE Flag inspired */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-emerald-900/20 to-black/40"></div>
      {/* UAE Flag accent stripes */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-white via-emerald-600 to-black"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-black via-emerald-600 via-white to-red-600"></div>
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

      {/* Scroll to top button - UAE themed */}
      <button
        onClick={() => scrollToSection("home")}
        className="fixed bottom-[24px] right-[24px] w-[36px] h-[36px] bg-gradient-to-br from-red-600/30 to-emerald-600/30 hover:from-red-500/40 hover:to-emerald-500/40 rounded-full flex items-center justify-center text-white hover:text-red-200 transition-all duration-300 hover:scale-110 border border-red-500/30 hover:border-emerald-400/50 backdrop-blur-sm z-50 shadow-lg shadow-red-500/20"
      >
        <ChevronUp size={15} />
      </button>
    </div>
  );
}
