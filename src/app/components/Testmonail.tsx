"use client";

import React from "react";
import { Star, ArrowRight } from "lucide-react";

/**
 * DATA
 */
const TESTIMONIALS = [
  {
    id: 1,
    text: "The hiking trail offers breathtaking views and a chance to connect with nature. It was a refreshing escape from the city.",
    author: "Laura Martinez",
    role: "Nature Enthusiast",
    rating: 5,
  },
  {
    id: 2,
    text: "Absolutely blown away by the innovative design and meticulous attention to detail. Our new office space is a masterpiece.",
    author: "Danie Roberts",
    role: "22 years experience",
    rating: 5,
  },
  {
    id: 3,
    text: "I never thought our historic property could be so beautifully modernized while retaining its charm. They are geniuses.",
    author: "Chris Taylor",
    role: "Homeowner",
    rating: 5,
  },
  {
    id: 4,
    text: "Their commitment to quality is unmatched. The team went above and beyond to ensure every requirement was met perfectly.",
    author: "Sarah Jenkins",
    role: "Project Manager",
    rating: 4,
  },
  {
    id: 5,
    text: "From concept to execution, the process was seamless. The red and green accents in the design really popped!",
    author: "Michael Chen",
    role: "Art Director",
    rating: 5,
  },
  {
    id: 6,
    text: "Exceptional service and distinct style. It blends traditional aesthetics with modern functionality flawlessly.",
    author: "Jessica Alba",
    role: "Interior Designer",
    rating: 5,
  },
];

/**
 * SUB-COMPONENTS
 */

// Review Card
const TestimonialCard = ({ data }: { data: (typeof TESTIMONIALS)[0] }) => {
  return (
    <div className="rounded-xl p-6 mb-6 mx-2 transition-all duration-300 dark:bg-zinc-900 bg-white border border-gray-100 dark:border-zinc-800">
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={`${
              i < data.rating
                ? "fill-green-600 text-green-600" // Always green stars
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <p className="text-sm md:text-base leading-relaxed mb-4 font-medium text-gray-800 dark:text-gray-200">
        {data.text}
      </p>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center text-red-700 dark:text-red-300 font-bold text-xs">
          {data.author.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-sm text-gray-900 dark:text-white">
            {data.author}
          </p>
          {data.role && (
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {data.role}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

// Marquee Column
const MarqueeColumn = ({
  items,
  duration = "40s",
  reverse = false,
}: {
  items: typeof TESTIMONIALS;
  duration?: string;
  reverse?: boolean;
}) => {
  return (
    <div className="relative h-full overflow-hidden flex-1 group">
      <div
        className={`absolute w-full flex flex-col ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ animationDuration: duration }}
      >
        {/* Render items twice to create the seamless loop */}
        {items.concat(items).map((item, idx) => (
          <TestimonialCard key={`${item.id}-${idx}`} data={item} />
        ))}
      </div>

      {/* Gradient Fade Overlays */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-gray-50 via-gray-50/80 to-transparent dark:from-black dark:via-black/80 z-10 pointer-events-none"></div>
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent dark:from-black dark:via-black/80 z-10 pointer-events-none"></div>
    </div>
  );
};

/**
 * MAIN COMPONENT
 */
const Testimonials = () => {
  const col1 = TESTIMONIALS.filter((_, i) => i % 2 === 0);
  const col2 = TESTIMONIALS.filter((_, i) => i % 2 !== 0);

  return (
    <section className="relative w-full py-12 lg:py-24 bg-gray-50 dark:bg-black text-gray-900 dark:text-white transition-colors duration-500 overflow-hidden">
    
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        @keyframes marquee-reverse {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse linear infinite;
        }
        /* Pause on hover */
        .group:hover .animate-marquee,
        .group:hover .animate-marquee-reverse {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start h-[800px] lg:h-[600px]">
        {/* LEFT SIDE: Sticky Content (Minimal Version) */}
        <div className="flex flex-col justify-center h-full lg:sticky lg:top-0 lg:pr-10">
          <h2 className="text-5xl lg:text-8xl font-black mb-8 leading-none tracking-tighter text-gray-900 dark:text-white">
            <span className="text-green-600 dark:text-green-500">
              Quality & Style
            </span>
            <br />
          </h2>

          <p className="text-xl font-light text-gray-600 dark:text-gray-400 mb-10 max-w-sm leading-relaxed">
            Crafting spaces that blend aesthetics with durability. Don&apos;t
            just take our word for it.
          </p>

          <button className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white w-fit hover:text-red-600 dark:hover:text-green-400 transition-colors mb-16">
            View all stories
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* RIGHT SIDE: Scrolling Marquee */}
        <div className="relative h-full overflow-hidden flex gap-6 mask-gradient">
          <MarqueeColumn items={col1} duration="35s" />
          <MarqueeColumn items={col2} duration="45s" reverse />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
