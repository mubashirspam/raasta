import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { testimonials } from "@/app/data/testmonial";
import TestimonialCard from "../cards/TestmonialCard";

export const Testimonial: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full py-24 overflow-hidden font-sans">
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

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight mb-4 leading-[1.1]">
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

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed mt-6">
              We facilitate life-changing investments. Hear from families who
              trusted us.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
        </div>

        <div
          className={`mt-20 pt-10 border-t border-white/40 flex flex-wrap justify-center md:justify-between items-center gap-8 transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-slate-900">AED 2.5B+</h3>
            <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">
              Property Sold
            </p>
          </div>
          <div className="hidden md:block w-px h-12 bg-slate-300/50"></div>
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-slate-900">50+</h3>
            <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">
              Nationalities Served
            </p>
          </div>
          <div className="hidden md:block w-px h-12 bg-slate-300/50"></div>
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-slate-900">98%</h3>
            <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">
              Client Retention
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
