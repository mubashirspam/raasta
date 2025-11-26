"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Mail, Phone, Linkedin } from "lucide-react";

export default function Consultation() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [mouseOnGrid, setMouseOnGrid] = useState(false);

  const consultants = [
    {
      name: "Ahmed Al Mansouri",
      role: "Senior Real Estate Consultant",
      specialization: "Luxury Properties",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      email: "ahmed@raastarealty.com",
      phone: "+971 50 123 4567",
      linkedin: "#",
    },
    {
      name: "Sarah Johnson",
      role: "Investment Advisor",
      specialization: "Off-Plan Projects",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      email: "sarah@raastarealty.com",
      phone: "+971 50 123 4568",
      linkedin: "#",
    },
    {
      name: "Mohammed Hassan",
      role: "Property Consultant",
      specialization: "Commercial Real Estate",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      email: "mohammed@raastarealty.com",
      phone: "+971 50 123 4569",
      linkedin: "#",
    },
    {
      name: "Elena Rodriguez",
      role: "Market Analyst",
      specialization: "Market Trends & Analysis",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      email: "elena@raastarealty.com",
      phone: "+971 50 123 4570",
      linkedin: "#",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (gridRef.current) {
        const rect = gridRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setCursor({ x, y });
        setMouseOnGrid(
          e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="py-20 bg-[#111] text-white min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#111] to-[#050505]" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Book Your Consultation
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Connect with our expert team of consultants who are ready to guide
            you through your real estate journey
          </p>
        </div>

        {/* Chroma Grid Container */}
        <div
          ref={gridRef}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center max-w-[1280px] mx-auto p-4"
          style={
            {
              "--x": `${cursor.x}px`,
              "--y": `${cursor.y}px`,
              "--r": "220px",
            } as React.CSSProperties
          }
        >
          {/* Global Overlay - Grayscale/Dimmed Effect */}
          <div
            className="absolute inset-0 pointer-events-none z-20 transition-opacity duration-300"
            style={{
              opacity: mouseOnGrid ? 1 : 0,
              backdropFilter: "grayscale(1) brightness(0.5)",
              WebkitBackdropFilter: "grayscale(1) brightness(0.5)",
              maskImage: `radial-gradient(circle var(--r) at var(--x) var(--y), transparent 0%, transparent 15%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.22) 45%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.5) 75%, rgba(0,0,0,0.68) 88%, black 100%)`,
              WebkitMaskImage: `radial-gradient(circle var(--r) at var(--x) var(--y), transparent 0%, transparent 15%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.22) 45%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.5) 75%, rgba(0,0,0,0.68) 88%, black 100%)`,
            }}
          />

          {consultants.map((consultant, index) => (
            <Card key={index} consultant={consultant} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center relative z-30">
          <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 hover:shadow-green-900/20 transition-all duration-300">
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

interface Consultant {
  name: string;
  role: string;
  specialization: string;
  image: string;
  email: string;
  phone: string;
  linkedin: string;
}

function Card({ consultant }: { consultant: Consultant }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMouse({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col w-full h-[420px] rounded-[20px] overflow-hidden border border-[#333] bg-[#1a1a1a] hover:border-[#555] transition-colors duration-300"
      style={
        {
          "--mouse-x": `${mouse.x}px`,
          "--mouse-y": `${mouse.y}px`,
        } as React.CSSProperties
      }
    >
      {/* Spotlight Effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[2]"
        style={{
          background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.15), transparent 70%)`,
        }}
      />

      {/* Image Wrapper */}
      <div className="relative z-[1] flex-1 p-[10px] bg-transparent transition-colors duration-300">
        <div className="relative w-full h-full overflow-hidden rounded-[10px]">
          <Image
            src={consultant.image}
            alt={consultant.name}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>

      {/* Info Section */}
      <div className="relative z-[1] p-4 bg-[#1a1a1a]">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-bold text-white">{consultant.name}</h3>
            <p className="text-sm text-[#aaa]">{consultant.role}</p>
          </div>
        </div>

        <p className="text-xs text-[#666] mb-4">{consultant.specialization}</p>

        {/* Contact Icons */}
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${consultant.email}`}
            className="w-8 h-8 bg-[#333] hover:bg-green-600 text-[#aaa] hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
          >
            <Mail size={14} />
          </a>
          <a
            href={`tel:${consultant.phone}`}
            className="w-8 h-8 bg-[#333] hover:bg-green-600 text-[#aaa] hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
          >
            <Phone size={14} />
          </a>
          <a
            href={consultant.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-[#333] hover:bg-green-600 text-[#aaa] hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
          >
            <Linkedin size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
