"use client";

import React, { useState } from "react";
import { Navbar, Footer } from "./layout";
import { ContactModal, OffersPopup } from "./ui";
import {
  Hero,
  FeaturedListings,
  // VideoShowcase,
  Services,
  WhoWeSupport,
  RealEstatePrinciples,
  WhyDubai,
  Agents,
  Testimonial,
  FooterCTA,
  Marquee,
  // GallerySection,
  VideoShowcase,
  ContactSection,
} from "./sections";

interface SanityTestimonial {
  _id: string;
  name: string;
  role: string;
  purchase?: string;
  content: string;
  rating: number;
  featured?: boolean;
  image?: { asset: { url: string } };
}

interface SanityProperty {
  _id: string;
  title: string;
  slug: { current: string };
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  propertyType: string;
  status: string;
  location: string;
  featured: boolean;
  mainImage?: { asset: { url: string } };
}

interface HomeProps {
  sanityTestimonials?: SanityTestimonial[];
  sanityProperties?: SanityProperty[];
}

export default function Home({
  sanityTestimonials,
  sanityProperties,
}: HomeProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#2EA8FF]/30">
      <Navbar onContact={() => setIsModalOpen(true)} />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <OffersPopup />
      <main className="relative z-10">
        <Hero />
        <Services />
        <Marquee />
        <WhoWeSupport />
        <RealEstatePrinciples />
        <FeaturedListings sanityProperties={sanityProperties} />
        {/* <WhyDubai /> */}
        <Agents />
        {/* <GallerySection /> */}
        <Testimonial sanityTestimonials={sanityTestimonials} />
        <FooterCTA onContact={() => setIsModalOpen(true)} />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
