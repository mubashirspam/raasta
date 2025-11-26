"use client";

import React from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import ExplorePrimeLocations from "./ExplorePrimeLocations";
import BrandPartners from "./BrandPartners";
import AboutUs from "./AboutUs";
import OffplanLaunches from "./OffplanLaunches";
import Consultation from "./Consultation";
import OurStory from "./OurStory";
import CounterSection from "./CounterSection";
import GridMotionSection from "./GridMotionSection";
import ReelSection from "./ReelSection";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import AnimatedSection from "./AnimatedSection";
import ParallaxSection from "./ParallaxSection";
import ScrollProgress from "./ScrollProgress";
// import SideBanners from "./SideBanners";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      {/* <SideBanners /> */}
      <Navigation />

      <HeroSection />

      <AnimatedSection direction="up" delay={0}>
        <BrandPartners />
      </AnimatedSection>

      <AnimatedSection direction="fade" delay={0.1}>
        <AboutUs />
      </AnimatedSection>

      <AnimatedSection direction="right" delay={0}>
        <OffplanLaunches />
      </AnimatedSection>

      <ParallaxSection offset={80}>
        <AnimatedSection direction="fade" delay={0.1}>
          <ReelSection />
        </AnimatedSection>
      </ParallaxSection>

      <AnimatedSection direction="left" delay={0}>
        <GridMotionSection gradientColor="rgba(5, 150, 105, 0.3)" />
      </AnimatedSection>

      <ParallaxSection offset={70}>
        <AnimatedSection direction="up" delay={0.1}>
          <ExplorePrimeLocations />
        </AnimatedSection>
      </ParallaxSection>

      <AnimatedSection direction="fade" delay={0}>
        <Consultation />
      </AnimatedSection>

      <ParallaxSection offset={60}>
        <AnimatedSection direction="right" delay={0.1}>
          <OurStory />
        </AnimatedSection>
      </ParallaxSection>

      <AnimatedSection direction="up" delay={0}>
        <CounterSection />
      </AnimatedSection>

      <ParallaxSection offset={75}>
        <AnimatedSection direction="fade" delay={0.1}>
          <BlogSection />
        </AnimatedSection>
      </ParallaxSection>

      <AnimatedSection direction="left" delay={0}>
        <ContactSection />
      </AnimatedSection>

      <AnimatedSection direction="fade" delay={0}>
        <Footer />
      </AnimatedSection>
    </>
  );
}

// https://reactbits.dev/components/flowing-menu
