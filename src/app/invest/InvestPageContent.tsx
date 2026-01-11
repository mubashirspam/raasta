"use client";

import React, { useState } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { ContactModal } from "../components/ui/ContactModal";
import { ContactForm } from "../components/forms/ContactForm";
import {
  TrendingUp,
  Shield,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "High ROI",
    description:
      "Dubai offers some of the highest rental yields globally, averaging 6-10% annually.",
  },
  {
    icon: Shield,
    title: "Secure Investment",
    description:
      "Regulated market with strong legal protections for investors.",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description:
      "Our team provides personalized investment strategies tailored to your goals.",
  },
  {
    icon: Clock,
    title: "Quick Returns",
    description:
      "Start earning rental income immediately with our turnkey solutions.",
  },
];

const steps = [
  {
    step: "01",
    title: "Consultation",
    description: "Discuss your investment goals and budget with our experts.",
  },
  {
    step: "02",
    title: "Property Selection",
    description:
      "We curate the best investment opportunities matching your criteria.",
  },
  {
    step: "03",
    title: "Due Diligence",
    description:
      "Complete market analysis and legal verification of properties.",
  },
  {
    step: "04",
    title: "Acquisition & Management",
    description: "Seamless purchase process and optional property management.",
  },
];

export default function InvestPageContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar onContact={() => setIsModalOpen(true)} />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #fef3c7 0%, #fde68a 50%, #fcd34d 100%)",
            }}
          />
          <div className="absolute inset-0 bg-white/50 backdrop-blur-xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-white/50 text-amber-700 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm backdrop-blur-sm">
                <TrendingUp size={14} />
                <span>Smart Investments</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight mb-6 leading-[1.1]">
                Invest in
                <br />
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500">
                    Dubai Real Estate
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 10"
                    fill="none"
                  >
                    <path
                      d="M2 8C50 2 150 2 198 8"
                      stroke="url(#sell-underline)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="sell-underline"
                        x1="0"
                        y1="0"
                        x2="200"
                        y2="0"
                      >
                        <stop stopColor="#F59E0B" />
                        <stop offset="0.5" stopColor="#F97316" />
                        <stop offset="1" stopColor="#F43F5E" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                Build your wealth with Dubai's booming real estate market.
                Expert guidance, premium properties, and exceptional returns.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors shadow-xl flex items-center gap-2"
                >
                  Start Investing
                  <ArrowRight size={18} />
                </button>
                <a
                  href="tel:+97140000000"
                  className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  Call Us Now
                </a>
              </div>
            </div>

            {/* Right - Form Card */}
            <div className="relative">
              <div className="p-8 md:p-10 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Start Your Investment Journey
                </h3>
                <p className="text-slate-600 mb-6">
                  Our experts will contact you within 24 hours with personalized
                  investment opportunities.
                </p>
                <ContactForm variant="light" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Invest With Us?
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              We've helped hundreds of investors build profitable real estate
              portfolios in Dubai.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={benefit.title}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:border-amber-200 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Investment Process
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              A simple, transparent process designed to get you the best
              results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, idx) => (
              <div
                key={item.step}
                className="relative p-6 rounded-2xl bg-white/60 border border-white shadow-sm"
              >
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-amber-400 to-orange-500 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.description}</p>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-amber-300 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#2EA8FF] via-cyan-500 to-teal-400">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Sparkles className="w-12 h-12 text-white/80 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Invest?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Start building your Dubai real estate portfolio today.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 rounded-full bg-white text-[#2EA8FF] font-bold hover:bg-slate-100 transition-colors shadow-xl"
          >
            Get Started Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
