"use client";

import React from "react";
import { ORBIT_ITEMS } from "@/app/data/gallery";
import { ArrowRight, Send } from "lucide-react";

interface FooterCTAProps {
  onContact: () => void;
}

export const FooterCTA: React.FC<FooterCTAProps> = ({ onContact }) => {
  const DURATION = 60;

  return (
    <section className="relative w-full overflow-hidden font-sans flex flex-col items-center justify-center lg:h-[900px] py-20 lg:py-0">
      <style>{`
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-counter-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .orbit-container {
          width: 80vw;
          height: 80vw;
          max-width: 1000px;
          max-height: 1000px;
        }
      `}</style>

      <div className="absolute inset-0 z-0 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-pink-50 via-orange-50 to-emerald-50 opacity-80" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-white/40 to-white/90" />

      <div
        className="absolute inset-0 z-10 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="hidden lg:flex absolute inset-0 items-center justify-center z-10 pointer-events-none pt-70">
        <div
          className="orbit-container relative"
          style={{
            animation: `orbit-spin ${DURATION}s linear infinite`,
          }}
        >
          <div className="absolute inset-0 rounded-full border border-slate-900/5 border-dashed" />

          {[...ORBIT_ITEMS, ...ORBIT_ITEMS].map((item, index) => {
            const totalItems = ORBIT_ITEMS.length * 2;
            const angle = (360 / totalItems) * index;
            const radians = (angle * Math.PI) / 180;
            const x = 50 + 50 * Math.sin(radians);
            const y = 50 - 50 * Math.cos(radians);

            return (
              <div
                key={`orbit-${index}`}
                className="absolute"
                style={{
                  left: `${x.toFixed(4)}%`,
                  top: `${y.toFixed(4)}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div
                  className="relative w-16 h-16 rounded-2xl shadow-lg border border-white/60"
                  style={{
                    animation: `orbit-counter-spin ${DURATION}s linear infinite`,
                  }}
                >
                  <div className="w-full h-full rounded-xl overflow-hidden relative">
                    <img
                      src={item.url}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 border border-black/5 rounded-xl"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="hidden lg:block absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t bg-gradient-to-r from-pink-100 via-pink-100 to-via-orange-100  z-15 pointer-events-none" />
      <div className="hidden lg:block absolute inset-x-0 bottom-0 h-full w-full bg-gradient-to-t bg-gradient-to-r from-pink-100 to-orange-100 z-1 " />

      <div className="relative z-20 flex flex-col items-center text-center max-w-lg px-6">
        <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-orange-500 rounded-3xl flex items-center justify-center mb-6 shadow-2xl ">
          <Send size={36} className="text-white ml-1" />
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
          Let's{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
            Connect
          </span>
        </h2>

        <p className="text-slate-600 text-lg mb-10 leading-relaxed">
          Your dream property is just a conversation away.{" "}
          <br className="hidden md:block" />
          Join the circle of satisfied homeowners.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
            Start Chatting
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <button
            onClick={onContact}
            className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm hover:shadow-md"
          >
            View Properties
          </button>
        </div>
      </div>

      <div className="lg:hidden w-full mt-16 flex flex-col gap-4 overflow-hidden mask-linear-fade">
        <div
          className="flex w-max gap-3"
          style={{ animation: "marquee-left 20s linear infinite" }}
        >
          {[...ORBIT_ITEMS, ...ORBIT_ITEMS].map((item, i) => (
            <div
              key={`r1-${i}`}
              className="w-24 h-24 p-1.5 bg-white rounded-xl shadow-sm border border-slate-100 flex-shrink-0"
            >
              <img
                src={item.url}
                className="w-full h-full object-cover rounded-lg"
                alt=""
              />
            </div>
          ))}
        </div>

        <div
          className="flex w-max gap-3"
          style={{ animation: "marquee-right 22s linear infinite" }}
        >
          {[
            ...ORBIT_ITEMS.slice().reverse(),
            ...ORBIT_ITEMS.slice().reverse(),
          ].map((item, i) => (
            <div
              key={`r2-${i}`}
              className="w-24 h-24 p-1.5 bg-white rounded-xl shadow-sm border border-slate-100 flex-shrink-0"
            >
              <img
                src={item.url}
                className="w-full h-full object-cover rounded-lg"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
