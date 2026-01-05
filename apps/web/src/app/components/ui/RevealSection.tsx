"use client";

import React, { ReactNode } from "react";
import { useIntersectionObserver } from "../../hooks";

interface RevealSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Animated Section Wrapper
 * Uses IntersectionObserver to trigger a fade-up animation
 */
export const RevealSection: React.FC<RevealSectionProps> = ({
  children,
  delay = 0,
  className = "",
}) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
