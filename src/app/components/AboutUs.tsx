"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";


export default function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Scroll-based transforms for parallax effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end"],
  });

  const containerWidth = useTransform(scrollYProgress, [0, 1], ["80%", "100%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["50px", "0px"]);

  const stats = [
    {
      value: 3.5,
      suffix: "M",
      prefix: "$",
      label: "PROJECT VALUE",
    },
    {
      value: 100,
      suffix: "M+",
      prefix: "",
      label: "CLOSED SALES",
    },
    {
      value: 600,
      suffix: "+",
      prefix: "",
      label: "HOMES SOLD",
    },
  ];

  const Counter = ({
    end,
    prefix = "",
    suffix = "",
    duration = 2,
  }: {
    end: number;
    prefix?: string;
    suffix?: string;
    duration?: number;
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isInView) return;

      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min(
          (currentTime - startTime) / (duration * 1000),
          1
        );

        setCount(progress * end);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return (
      <span>
        {prefix}
        {Math.floor(count * 10) / 10}
        {suffix}
      </span>
    );
  };

  return (
    <section id="about" className="relative z-20 -mt-20 pb-20 ">
      <motion.div
        ref={ref}
        style={{
          width: containerWidth,
          borderRadius: borderRadius,
        }}
        className="items-center mx-auto bg-[#10b981] dark:bg-green-600 transition-colors duration-300 py-20"
      >
       
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
              <span className="text-2xl">🏠</span>
              <span className="text-sm font-semibold text-green-900 dark:text-green-300 uppercase tracking-wider">
                About Studio
              </span>
            </div>

            <h2 className="text-[2rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-slate-900 dark:text-white mb-8 max-w-5xl mx-auto leading-tight">
              We specialize in connecting buyers, sellers, and renters with
              exceptional properties. With years of expertise and a real
              customer-first approach, we make real estate simple.
            </h2>

            <Link href="/about">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#10b981] dark:bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25">
                Discover More
                <ArrowRight size={20} />
              </button>
            </Link>
          </div>

          {/* Stats and Images Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Stats Column */}
            <div ref={ref} className="flex flex-col gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 flex items-center justify-between transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                >
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">
                    <Counter
                      end={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </h3>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Images Column */}
            <div className="grid grid-cols-2 gap-6">
              <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800"
                  alt="Modern architecture house"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800"
                  alt="Contemporary home exterior"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
