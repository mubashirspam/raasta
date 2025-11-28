"use client";

import React, { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Consultation() {
  const containerRef = useRef(null);

  const agents = [
    {
      name: "Ahmed Al Mansouri",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
    },
    {
      name: "Mohammed Hassan",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop",
    },
    {
      name: "James Wilson",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop",
    },
    {
      name: "David Chen",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop",
    },
    {
      name: "Sarah Johnson",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop",
    },
    {
      name: "Elena Rodriguez",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop",
    },
    {
      name: "Michael Brown",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop",
    },
    {
      name: "Lisa Chen",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop",
    },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Scroll transforms for columns 2 & 3 (they scroll up faster)
  const centerScrollY = useTransform(scrollYProgress, [0, 0.5, 1], [300, 0, 0]);

  // Content animations
  const contentScale = useTransform(scrollYProgress, [0.3, 0.6], [1, 0.8]);
  const contentOpacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);

  return (
    <section className="relative py-24 bg-red-400 dark:bg-red-900 overflow-hidden"
    
    >
      <div className="w-full max-w-7xl mx-auto px-4">
        <div
          ref={containerRef}
          className="overflow-hidden relative"
          style={{ minHeight: "1200px" }}
        >
          {/* Content - Positioned in the space between columns 2 & 3 */}
          <motion.div
            className="relative z-20 text-center mx-auto mb-16"
            style={{
              scale: contentScale,
              opacity: contentOpacity,
            }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-600 dark:bg-red-900"></span>
              <span className="text-sm font-semibold text-red-600 dark:text-red-900 uppercase tracking-wider">
                Agent&apos;s Community
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Smart agent. More smarter
              <br />
              Real estate decisions.
            </h2>

            {/* CTA Button */}
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-red-500 hover:bg-amber-600 text-slate-900 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              Explore All Agents
              <ArrowUpRight size={20} />
            </button>
          </motion.div>

          {/* Agent Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
            {/* Column 1 - High position, Row 1 */}
            <div className="relative h-96  overflow-hidden group">
              <Image
                src={agents[0].image}
                alt={agents[0].name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                width={400}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6">
                  <p className="text-white font-semibold text-lg">
                    {agents[0].name}
                  </p>
                  <p className="text-gray-300 text-sm">Real Estate Agent</p>
                </div>
              </div>
            </div>

            {/* Column 2 - Lower position with scroll, Row 1 */}
            <motion.div
              className="relative h-96  overflow-hidden group"
              style={{ y: centerScrollY }}
            >
              <Image
                src={agents[1].image}
                alt={agents[1].name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                width={400}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6">
                  <p className="text-white font-semibold text-lg">
                    {agents[1].name}
                  </p>
                  <p className="text-gray-300 text-sm">Real Estate Agent</p>
                </div>
              </div>
            </motion.div>

            {/* Column 3 - Lower position with scroll, Row 1 */}
            <motion.div
              className="relative h-96  overflow-hidden group"
              style={{ y: centerScrollY }}
            >
              <Image
                src={agents[2].image}
                alt={agents[2].name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                width={400}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6">
                  <p className="text-white font-semibold text-lg">
                    {agents[2].name}
                  </p>
                  <p className="text-gray-300 text-sm">Real Estate Agent</p>
                </div>
              </div>
            </motion.div>

            {/* Column 4 - High position, Row 1 */}
            <div className="relative h-96  overflow-hidden group">
              <Image
                src={agents[3].image}
                alt={agents[3].name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                width={400}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6">
                  <p className="text-white font-semibold text-lg">
                    {agents[3].name}
                  </p>
                  <p className="text-gray-300 text-sm">Real Estate Agent</p>
                </div>
              </div>
            </div>

            {/* Column 1 - High position, Row 2 */}
            <div className="relative h-96  overflow-hidden group">
              <Image
                src={agents[4].image}
                alt={agents[4].name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                width={400}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6">
                  <p className="text-white font-semibold text-lg">
                    {agents[4].name}
                  </p>
                  <p className="text-gray-300 text-sm">Real Estate Agent</p>
                </div>
              </div>
            </div>

            {/* Column 2 - Lower position with scroll, Row 2 */}
            <motion.div
              className="relative h-96  overflow-hidden group"
              style={{ y: centerScrollY }}
            >
              <Image
                src={agents[5].image}
                alt={agents[5].name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                width={400}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6">
                  <p className="text-white font-semibold text-lg">
                    {agents[5].name}
                  </p>
                  <p className="text-gray-300 text-sm">Real Estate Agent</p>
                </div>
              </div>
            </motion.div>

            {/* Column 3 - Lower position with scroll, Row 2 */}
            <motion.div
              className="relative h-96  overflow-hidden group"
              style={{ y: centerScrollY }}
            >
              <Image
                src={agents[6].image}
                alt={agents[6].name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                width={400}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6">
                  <p className="text-white font-semibold text-lg">
                    {agents[6].name}
                  </p>
                  <p className="text-gray-300 text-sm">Real Estate Agent</p>
                </div>
              </div>
            </motion.div>

            {/* Column 4 - High position, Row 2 */}
            <div className="relative h-96  overflow-hidden group">
              <Image
                src={agents[7].image}
                alt={agents[7].name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                width={400}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6">
                  <p className="text-white font-semibold text-lg">
                    {agents[7].name}
                  </p>
                  <p className="text-gray-300 text-sm">Real Estate Agent</p>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="text-center mt-12">
            <p className="text-gray-400 text-sm">Scroll to see the effect</p>
          </div>
        </div>
      </div>
    </section>
  );
}
