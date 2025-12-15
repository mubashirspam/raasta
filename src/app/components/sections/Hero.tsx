"use client";

import React, { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { RevealSection } from "../ui";
import { GlassContainer } from "../cards/glassmorphism";

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <motion.section
      ref={sectionRef}
      className="relative flex flex-col overflow-clip h-[100vh] sm:h-[140vh] text-white"
    >
      <div className="absolute inset-0 bg-[#2DB3FF] pointer-events-none" />

      <div className="sticky top-0 py-15 sm:py-10  flex flex-col justify-center items-center text-center  z-10 pointer-events-none">
        <div className="max-w-[50rem] mx-auto flex flex-col items-center gap-9 pointer-events-auto">
          <RevealSection>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.1rem] font-normal text-white leading-[1.1] tracking-tight">
              Your gateway to
              <br />
              prestige properties
            </h1>
          </RevealSection>

          <RevealSection delay={100}>
            <p className="text-lg md:text-xl text-white/90 max-w-[28rem] font-normal leading-7 tracking-tight">
              Bring your architectural projects to life with a template that
              puts your work front and center.
            </p>
          </RevealSection>

          <RevealSection delay={200}>
            <GlassContainer
              variant="rounded"
              bgColor="rgba(255, 255, 255, 0.15)"
              blurAmount={20}
            >
              <button className="group inline-flex items-center gap-3 text-white pl-7 pr-1.5 py-1 rounded-full font-medium text-lg hover:shadow-xl transition-all">
                <span>Get started</span>
                <span className="w-[2.8rem] h-[2.8rem] rounded-full bg-white/20 text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight size={18} />
                </span>
              </button>
            </GlassContainer>
          </RevealSection>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-20 flex justify-center ">
        <img
          src="https://cdn.prod.website-files.com/67eaffa730db32af50362b3e/67eaffa730db32af50362c89_Hero%20-%20image.webp"
          alt="Modern architectural building"
          className="w-[95%] sm:w-[75%] md:w-[45rem] h-auto aspect-[1.07/1] object-cover"
        />

        <div className="absolute inset-x-0 bottom-0 h-20 sm:h-40 md:h-[17rem] bg-gradient-to-b from-transparent to-[#9EC2DF] pointer-events-none z-30" />
      </div>

      <div className="h-[120vh] flex-shrink-0" />
    </motion.section>
  );
};
