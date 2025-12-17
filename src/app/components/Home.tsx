"use client";

import React, { useState } from "react";
import { Navbar, Footer } from "./layout";
import { ContactModal } from "./ui";
import {
  Hero,
  FeaturedListings,
  // VideoShowcase,
  Services,
  WhyDubai,
  Agents,
  Testimonial,
  FooterCTA,
  Marquee,
  GallerySection,
  ContactSection,
} from "./sections";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#2EA8FF]/30">
      <Navbar onContact={() => setIsModalOpen(true)} />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <main className="relative z-10">
        <Hero />
        {/* <HeroSection /> */}
        {/* <VideoShowcase /> */}
        <Services />
        <Marquee />
        <FeaturedListings />
        <WhyDubai />
        <Agents />
        <GallerySection />
        <Testimonial />
        <FooterCTA onContact={() => setIsModalOpen(true)} />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
