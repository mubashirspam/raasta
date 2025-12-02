// StartFreeButton.tsx
export default function StartFreeButton() {
  return (
    <button
      className="
        inline-flex relative overflow-hidden group text-sm font-medium
        text-white rounded-full h-[60px] px-5 gap-2 items-center
        transition-transform duration-300 ease-out
        bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]
        border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.5)]
        hover:-translate-y-1
        hover:shadow-[0_12px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.6),0_0_0_2px_rgba(244,63,94,0.3)]
      "
    >
      {/* Loader background mask */}
      <div className="loader absolute inset-0 z-[1] pointer-events-none"></div>

      {/* Text */}
      <span className="relative z-[2] font-semibold flex gap-1">
        {["S", "t", "a", "r", "t", "", "f", "r", "e", "e"].map((letter, i) => (
          <span
            key={i}
            className="loader-letter inline-block opacity-0"
            style={{ animationDelay: `${0.1 + i * 0.105}s` }}
          >
            {letter === "" ? <span className="w-1" /> : letter}
          </span>
        ))}
      </span>
    </button>
  );
}
