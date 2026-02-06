import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials as fallbackTestimonials } from "@/app/data/testmonial";
import TestimonialCard from "../cards/TestmonialCard";
import { Testimonial as TestimonialType } from "@/app/types";

const AUTO_SLIDE_INTERVAL = 5000;

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

interface TestimonialProps {
  sanityTestimonials?: SanityTestimonial[];
}

const transformSanityTestimonial = (
  t: SanityTestimonial,
  idx: number,
): TestimonialType => ({
  id: idx + 1,
  name: t.name,
  role: t.role,
  purchase: t.purchase || "",
  content: t.content,
  rating: t.rating,
  image:
    t.image?.asset?.url ||
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
});

export const Testimonial: React.FC<TestimonialProps> = ({
  sanityTestimonials,
}) => {
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = sanityTestimonials
    ? sanityTestimonials.map(transformSanityTestimonial)
    : fallbackTestimonials;

  // Determine items per slide based on screen size
  const itemsPerSlide = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;
    const interval = setInterval(nextSlide, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide, totalSlides]);

  const getVisibleTestimonials = () => {
    const startIndex = currentIndex * itemsPerSlide;
    return testimonials.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <section id="testimonials" className="relative w-full py-16 md:py-24 overflow-hidden font-sans">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #fdfbf7 0%, #eef2ff 40%, #fdf2f8 100%)",
        }}
      />

      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute -left-[10%] -top-[10%] w-[50vw] h-[50vw] rounded-full blur-[100px] opacity-40 mix-blend-multiply"
          style={{ background: "#ddd6fe", transform: "rotate(0deg)" }}
        />

        <div
          className="absolute -right-[5%] top-[10%] w-[50vw] h-[50vw] rounded-full blur-[100px] opacity-40 mix-blend-multiply"
          style={{ background: "#bae6fd", transform: "rotate(-20deg)" }}
        />

        <div
          className="absolute left-[10%] bottom-[10%] w-[40vw] h-[40vw] rounded-full blur-[100px] opacity-40 mix-blend-multiply"
          style={{ background: "#fbcfe8" }}
        />

        <div
          className="absolute right-[0%] -bottom-[10%] w-[40vw] h-[40vw] rounded-full blur-[100px] opacity-30 mix-blend-multiply"
          style={{ background: "#fde68a" }}
        />
      </div>

      <div className="absolute inset-0 z-20 bg-white/30 backdrop-blur-[60px]" />
      <div
        className="absolute inset-0 z-20 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-12">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Decorative quote marks */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-4">
            <span className="text-6xl font-serif text-rose-300/50">"</span>
          </div>

          <div className="pt-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-500/10 to-amber-500/10 border border-rose-500/20 text-rose-600 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm backdrop-blur-sm">
              <Star size={12} className="fill-current" />
              <span>Trusted by the Elite</span>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight mb-4 leading-[1.1]">
              Stories from
              <br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500">
                  Our Residents
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 10"
                  fill="none"
                >
                  <path
                    d="M0 5C30 2 50 8 80 5C110 2 130 8 160 5C190 2 200 5 200 5"
                    stroke="url(#testimonial-wave)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="testimonial-wave"
                      x1="0"
                      y1="0"
                      x2="200"
                      y2="0"
                    >
                      <stop stopColor="#F43F5E" />
                      <stop offset="0.5" stopColor="#F97316" />
                      <stop offset="1" stopColor="#F59E0B" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>

            <p className="max-w-4xl mx-auto text-base md:text-xl text-slate-600 leading-relaxed mt-6">
              Real People. Real Feedback. Real Results.
            </p>
          </div>

          {/* Side quote decorations */}
          <div className="hidden md:block absolute left-[8%] top-1/2 -translate-y-1/2 text-4xl font-serif text-rose-200">
            "
          </div>
          <div className="hidden md:block absolute right-[8%] top-1/2 -translate-y-1/2 text-4xl font-serif text-amber-200">
            "
          </div>
        </div>

        {/* Slider Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full shadow-lg flex items-center justify-center text-slate-700 hover:bg-white hover:scale-110 transition-all duration-300"
                aria-label="Previous testimonials"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full shadow-lg flex items-center justify-center text-slate-700 hover:bg-white hover:scale-110 transition-all duration-300"
                aria-label="Next testimonials"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Testimonials Grid with Animation */}
          <div className="overflow-hidden px-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {getVisibleTestimonials().map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`transition-all duration-1000 transform ${
                      mounted
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-20"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <TestimonialCard data={testimonial} index={index} />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          {totalSlides > 1 && (
            <div className="flex justify-center gap-2 mt-5">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-rose-500 to-amber-500 w-8"
                      : "bg-slate-300 hover:bg-slate-400 w-3"
                  }`}
                  aria-label={`Go to testimonial group ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        <div
          className={`mt-10 pt-10 border-t border-white/40 flex flex-wrap justify-center md:justify-between items-center gap-8 transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center md:text-left">
            <h3
              className="text-3xl font-bold text-slate-900"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              AED 2.5B+
            </h3>
            <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">
              Property Sold
            </p>
          </div>
          <div className="hidden md:block w-px h-12 bg-slate-300/50"></div>
          <div className="text-center md:text-left">
            <h3
              className="text-3xl font-bold text-slate-900"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              30+
            </h3>
            <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">
              Nationalities Served
            </p>
          </div>
          <div className="hidden md:block w-px h-12 bg-slate-300/50"></div>
          <div className="text-center md:text-left">
            <h3
              className="text-3xl font-bold text-slate-900"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              98%
            </h3>
            <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">
              Client Retention
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
