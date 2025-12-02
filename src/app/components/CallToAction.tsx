import React, { useEffect, useRef } from "react";
import { useThemeContext } from "../../../context/ThemeContext";

const CallToAction = () => {
  const { theme } = useThemeContext();
  const dotColor = "rgba(255, 255, 255, 1)";
  return (
    <section
      className={`w-full h-screen p-4 sm:p-8 md:p-20 transition-colors duration-500`}
    >
      <div className="relative w-full h-full overflow-hidden bg-red-700  transition-colors duration-500 flex flex-col items-center justify-center rounded-3xl">
        <DotGrid dotColor={dotColor} />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pointer-events-none select-none">
          <h1
            className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[1.2] transition-colors duration-500 text-white `}
          >
            Start your project <br />
            with Raasta
            <sup className="text-2xl md:text-4xl align-top top-0">®</sup>
          </h1>

          <div className="mt-12 pointer-events-auto">
            <button className="group relative bg-white text-emerald-900 px-8 py-4 rounded-full font-medium text-lg transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95 flex items-center gap-2 mx-auto">
              Get in touch
              <span className="relative flex h-2 w-2 ml-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface Dot {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  baseSize: number;
  size: number;
  phase: number;
}

const DotGrid = ({ dotColor }: { dotColor: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const timeRef = useRef(0);

  const SPACING = 35;
  const RADIUS = 250;
  const DAMPING = 0.92;
  const STIFFNESS = 0.05;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dots: Dot[] = [];

    const initDots = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      dots = [];

      const centerX = width / 2;
      const centerY = height / 2;

      const radiusX = width * 0.35;
      const radiusY = height * 0.35;

      const cols = Math.ceil(width / SPACING);
      const rows = Math.ceil(height / SPACING);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * SPACING;
          const y = j * SPACING;

          const dx = x - centerX;
          const dy = y - centerY;
          const normalizedDist =
            (dx * dx) / (radiusX * radiusX) + (dy * dy) / (radiusY * radiusY);

          if (normalizedDist <= 1.0) {
            const jitterX = (Math.random() - 0.5) * 15;
            const jitterY = (Math.random() - 0.5) * 15;

            const finalX = x + jitterX;
            const finalY = y + jitterY;

            dots.push({
              x: finalX,
              y: finalY,
              originX: finalX,
              originY: finalY,
              vx: 0,
              vy: 0,
              baseSize: Math.random() * 1.5 + 1,
              size: 0,
              phase: Math.random() * Math.PI * 2,
            });
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      timeRef.current += 0.02;
      const waveAmplitude = 10;

      dots.forEach((dot) => {
        const waveY =
          Math.sin(dot.originX * 0.01 + timeRef.current) * waveAmplitude;
        const waveX = Math.cos(dot.originY * 0.01 + timeRef.current) * 5;

        const targetX = dot.originX + waveX;
        const targetY = dot.originY + waveY;

        dot.size =
          dot.baseSize + Math.sin(timeRef.current * 2 + dot.phase) * 0.5;
        if (dot.size < 0.5) dot.size = 0.5;

        const dx = mouseRef.current.x - dot.x;
        const dy = mouseRef.current.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        let forceX = 0;
        let forceY = 0;

        if (distance < RADIUS) {
          const force = (RADIUS - distance) / RADIUS;

          forceX = dx * force * 0.05;
          forceY = dy * force * 0.05;
        }

        const springX = (targetX - dot.x) * STIFFNESS;
        const springY = (targetY - dot.y) * STIFFNESS;

        dot.vx += springX + forceX;
        dot.vy += springY + forceY;

        dot.vx *= DAMPING;
        dot.vy *= DAMPING;

        dot.x += dot.vx;
        dot.y += dot.vy;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      initDots();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current = {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        };
      }
    };

    initDots();
    animate();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, [dotColor]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

export default CallToAction;
