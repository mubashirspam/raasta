import React from "react";
import { motion } from "framer-motion";

export const VideoShowcase: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/dubai.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <span className="text-sm md:text-base font-medium uppercase tracking-[0.3em] text-white/80">
            Experience Luxury
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight">
            Life in Dubai
          </h2>
          <p className="max-w-md text-lg text-white/90 mt-4 font-light">
            Discover a world where architectural marvels meet cultural heritage
          </p>
        </motion.div>
      </div>
    </section>
  );
};
