"use client";

import React, { useState } from "react";
import { Navbar, Footer } from "./layout";
import { ContactModal } from "./ui";
import {
  Hero,
  FeaturedListings,
  VideoShowcase,
  Services,
  WhyDubai,
  Agents,
  Testimonial,
  FooterCTA,
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
        <VideoShowcase />
        <FeaturedListings />
        <Services />
        <WhyDubai />
        <Agents />
        <Testimonial />
        <FooterCTA onContact={() => setIsModalOpen(true)} />
      </main>

      <Footer />
    </div>
  );
}
