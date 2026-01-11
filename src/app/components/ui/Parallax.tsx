"use client";

import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxProps {
  children: ReactNode;
  /** Speed multiplier: positive = slower than scroll, negative = faster */
  speed?: number;
  /** Custom className for the wrapper */
  className?: string;
}

/**
 * Reusable Parallax Component
 * Wraps content and applies a parallax scroll effect
 *
 * @example
 * <Parallax speed={0.5}>
 *   <img src="..." />
 * </Parallax>
 *
 * @example With overlap effect (negative margin + faster scroll)
 * <Parallax speed={-0.3} className="-mt-32 relative z-10">
 *   <img src="..." />
 * </Parallax>
 */
export const Parallax: React.FC<ParallaxProps> = ({
  children,
  speed = 0.5,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Calculate transform based on speed
  // Positive speed = moves slower (parallax background effect)
  // Negative speed = moves faster (overlap effect)
  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      <>{children}</>
    </motion.div>
  );
};

interface ParallaxImageProps {
  src: string;
  alt: string;
  /** Speed multiplier for parallax effect */
  speed?: number;
  /** Container className */
  className?: string;
  /** Image className */
  imageClassName?: string;
  /** Whether image should have overlap effect (moves up on scroll) */
  overlap?: boolean;
}

/**
 * Parallax Image Component - Specialized for images with parallax
 *
 * @example Basic usage
 * <ParallaxImage src="/hero.jpg" alt="Hero" speed={0.3} />
 *
 * @example Overlap effect (image scrolls up over content)
 * <ParallaxImage src="/building.jpg" alt="Building" overlap className="-mt-20" />
 */
export const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  speed = 0.5,
  className = "",
  imageClassName = "",
  overlap = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // For overlap effect, use negative speed so image moves up faster
  const effectiveSpeed = overlap ? -Math.abs(speed) : speed;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [effectiveSpeed * 150, effectiveSpeed * -150]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`${className} ${overlap ? "relative z-10" : ""}`}
    >
      <img src={src} alt={alt} className={`w-full h-auto ${imageClassName}`} />
    </motion.div>
  );
};
