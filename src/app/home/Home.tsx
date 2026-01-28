"use client";

import React, { useState } from "react";
import { Navbar, Footer } from "./layout";
import { ContactModal, OffersPopup } from "./ui";
import {
  HeroSection,
 
  GallerySection,
  Services,
  WhoWeSupport,
  RealEstatePrinciples,
  AboutSection,
  Testimonial,
  Marquee,
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

interface SanityDeveloper {
  _id: string;
  name: string;
  logo: { asset: { url: string } };
  order: number;
}

interface SanityGalleryMedia {
  _id: string;
  title: string;
  mediaType: "image" | "video";
  video?: { asset: { url: string } };
  image?: { asset: { url: string } };
  likes?: string;
  order: number;
}

interface HomeProps {
  sanityTestimonials?: SanityTestimonial[];
  sanityProperties?: SanityProperty[];
  sanityDevelopers?: SanityDeveloper[];
  sanityGalleryVideos?: SanityGalleryMedia[];
}

export default function Home({
  sanityTestimonials,
  sanityProperties,
  sanityDevelopers,
  sanityGalleryVideos,
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
        <HeroSection />
         <AboutSection />
        <Services />
        <Marquee developers={sanityDevelopers} />
        <WhoWeSupport />
        <RealEstatePrinciples />
        {/* <FeaturedListings sanityProperties={sanityProperties} /> */}
        {/* <WhyDubai /> */}
        <Testimonial sanityTestimonials={sanityTestimonials} />
        <GallerySection videos={sanityGalleryVideos} />

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
