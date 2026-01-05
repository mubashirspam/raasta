import React from "react";
import Link from "next/link";

const StarShape = () => (
  <svg
    viewBox="0 0 100 100"
    className="absolute -inset-4 w-[140%] h-[140%] text-[#9B8CFF] fill-current z-0 rotate-12"
    style={{ left: "-20%", top: "-20%" }}
  >
    <path d="M50 0L61 35H98L68 57L79 91L50 70L21 91L32 57L2 35H39L50 0Z" />
  </svg>
);

const CloudShape = () => (
  <svg
    viewBox="0 0 120 80"
    className="absolute -inset-2 w-[130%] h-[130%] text-slate-100 fill-white stroke-slate-300 stroke-2 z-0"
    style={{ left: "-15%", top: "-15%" }}
  >
    <path d="M10,50 Q0,50 0,40 Q0,30 10,20 Q15,0 40,0 Q60,0 70,20 Q90,10 100,30 Q120,30 120,50 Q120,70 100,70 Q90,80 60,80 Q40,80 30,70 Q10,70 10,50 Z" />
  </svg>
);

const StickyNoteShape = () => (
  <svg
    viewBox="0 0 100 100"
    className="absolute -inset-3 w-[130%] h-[130%] text-[#FFE87F] fill-current z-0 rotate-[-8deg] shadow-sm"
    style={{ left: "-15%", top: "-10%" }}
  >
    <path d="M0,0 H100 V90 L90,100 H0 V0 Z" />
    <path d="M90,100 V90 H100 Z" className="fill-black/10" />
  </svg>
);

export const Hero = () => {
  return (
    <section className="relative min-h-[100vh] w-full bg-white overflow-hidden flex flex-col items-center justify-center pt-24 pb-16">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-0">
        <div className="w-[934px] h-[616px] relative bg-radial-[at_3%_48%] from-[#ffdedc] from 22% via-[#f5c1f5] via 58% to-[#7fbdff] overflow-hidden blur-3xl opacity-50 scale-125">
          <img
            className="w-[934px] h-[616px] left-[1324px] top-[-773px] absolute"
            src="https://placehold.co/934x616"
            alt=""
          />
        </div>
      </div>

      <div className="z-10 flex flex-col items-center text-center max-w-5xl px-4 w-full">
        <h1 className="text-[2.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold tracking-tight text-slate-900 leading-[1.05] selection:bg-purple-100">
          <div className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-4">
            <span>Set goals</span>
            <div className="relative inline-flex items-center justify-center w-[90px] h-[60px] md:w-[130px] md:h-[80px] mx-1.5">
              <StarShape />
              <span className="relative z-10 text-xl md:text-2xl font-handwriting rotate-[-10deg] text-white font-medium italic">
                plan
              </span>
            </div>
            <span>Stay on</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-4 mt-2 md:mt-3">
            <span>track</span>
            <div className="relative inline-flex items-center justify-center w-[90px] h-[55px] md:w-[120px] md:h-[70px] mx-1.5">
              <CloudShape />
              <span className="relative z-10 text-xl md:text-2xl font-handwriting rotate-[5deg] text-slate-600 italic">
                step
              </span>
            </div>
            <span>Let time be your</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-4 mt-2 md:mt-3">
            <span>teammate</span>
            <div className="relative inline-flex items-center justify-center w-[80px] h-[60px] md:w-[110px] md:h-[80px] mx-1.5">
              <StickyNoteShape />
              <span className="relative z-10 text-xl md:text-2xl font-handwriting rotate-[-5deg] text-slate-800 font-medium">
                done
              </span>
            </div>
          </div>
        </h1>

        <p className="mt-8 text-base md:text-lg text-slate-500 max-w-xl font-medium leading-relaxed">
          Quests, challenges, and mini-victories are designed
          <br className="hidden md:block" />
          to help children learn to act with pleasure.
        </p>

        <button className="mt-8 px-8 py-4 bg-black text-white rounded-full font-bold text-base hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1 active:scale-95 duration-300 cursor-pointer">
          Start the Quest
        </button>
      </div>

      <div className="mt-16 flex items-center gap-6 md:gap-12 lg:gap-20 opacity-90 z-10">
        <div className="text-center group cursor-default">
          <div className="text-2xl md:text-3xl font-black text-slate-900 group-hover:text-amber-500 transition-colors">
            120+
          </div>
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-1">
            Methods
          </div>
        </div>
        <div className="w-px h-10 bg-slate-200" />
        <div className="text-center group cursor-default">
          <div className="text-2xl md:text-3xl font-black text-slate-900 group-hover:text-purple-500 transition-colors">
            23.4K
          </div>
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-1">
            Successes
          </div>
        </div>
        <div className="w-px h-10 bg-slate-200" />
        <div className="text-center group cursor-default">
          <div className="text-2xl md:text-3xl font-black text-slate-900 group-hover:text-blue-500 transition-colors">
            100%
          </div>
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-1">
            Outcome
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute left-[2%] bottom-[8%] xl:left-[8%] w-[200px] xl:w-[250px] animate-bounce-slow hover:scale-105 transition-transform duration-500">
        <img
          src="/hero/chick.svg"
          alt="Chick with notebook"
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>

      <div className="hidden lg:block absolute right-[2%] bottom-[8%] xl:right-[8%] w-[200px] xl:w-[250px] animate-float hover:scale-105 transition-transform duration-500">
        <img
          src="/hero/penguin.svg"
          alt="Penguin with checklist"
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>
    </section>
  );
};
