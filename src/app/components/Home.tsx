"use client";

import React from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import ExplorePrimeLocations from "./ExplorePrimeLocations";
import AboutUs from "./AboutUs";
import OffplanLaunches from "./OffplanLaunches";
import Consultation from "./Consultation";
import OurStory from "./OurStory";

import GridMotionSection from "./GridMotionSection";
// import ReelSection from "./ReelSection";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import AnimatedSection from "./AnimatedSection";
import ProgressiveBlur from "./ui/ProgressiveBlur";
import ServicesSection from "./Service";
import CallToAction from "./CallToAction";
import Testimonials from "./Testmonail";

export default function Home() {
  return (
    <>
      <Navigation />

      <HeroSection />

      <AboutUs />

      <ServicesSection />

      <OffplanLaunches />

      <CallToAction />

      <GridMotionSection gradientColor="rgba(5, 150, 105, 0.3)" />

      <AnimatedSection direction="up" delay={0.1}>
        <ExplorePrimeLocations />
      </AnimatedSection>

      <AnimatedSection direction="fade" delay={0}>
        <Consultation />
      </AnimatedSection>

      <Testimonials />

      <OurStory />

      <AnimatedSection direction="fade" delay={0.1}>
        <BlogSection />
      </AnimatedSection>

      <AnimatedSection direction="left" delay={0}>
        <ContactSection />
      </AnimatedSection>

      <AnimatedSection direction="fade" delay={0}>
        <Footer />
      </AnimatedSection>

      <ProgressiveBlur />
    </>
  );
}

// https://reactbits.dev/components/flowing-menu
