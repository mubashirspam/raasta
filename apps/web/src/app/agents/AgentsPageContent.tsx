"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { AgentCard } from "../components/cards";
import { ContactModal } from "../components/ui/ContactModal";
import { AGENTS } from "../data";
import { Agent } from "../types";
import {
  Star,
  Users,
  Award,
  MessageCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const stats = [
  { value: "50+", label: "Expert Agents" },
  { value: "500+", label: "Happy Clients" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Years Experience" },
];

export default function AgentsPageContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch("/api/agents");
        if (response.ok) {
          const data = await response.json();
          setAgents(data);
        } else {
          setAgents(AGENTS);
        }
      } catch (error) {
        console.error("Failed to fetch agents:", error);
        setAgents(AGENTS);
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

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
                "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%)",
            }}
          />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-white/50 text-pink-600 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm backdrop-blur-sm">
              <Users size={14} />
              <span>Our Expert Team</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight mb-4 leading-[1.1]">
              Meet Our
              <br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-red-500">
                  Elite Agents
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 10"
                  fill="none"
                >
                  <path
                    d="M2 8C50 2 150 2 198 8"
                    stroke="url(#agents-underline)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="agents-underline"
                      x1="0"
                      y1="0"
                      x2="200"
                      y2="0"
                    >
                      <stop stopColor="#EC4899" />
                      <stop offset="0.5" stopColor="#F43F5E" />
                      <stop offset="1" stopColor="#EF4444" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed mt-6">
              Industry leaders with specialized knowledge in Dubai's most
              prestigious districts. Your success is our mission.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/50 text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-600 uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Team of Experts
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Each of our agents brings unique expertise and a commitment to
              excellence.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {agents.map((agent) => (
                <AgentCard key={agent._id || agent.id} agent={agent} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Our Agents */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-pink-600 text-xs font-bold tracking-widest uppercase mb-6">
                <Award size={14} />
                <span>Why Choose Us</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                What Makes Our Agents Different?
              </h2>

              <div className="space-y-4">
                {[
                  "Deep market knowledge and local expertise",
                  "Personalized service tailored to your needs",
                  "Extensive network of buyers and sellers",
                  "Transparent and ethical practices",
                  "24/7 availability and support",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white flex-shrink-0">
                      <Star size={12} className="fill-current" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-8 px-8 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors flex items-center gap-2"
              >
                Connect With an Agent
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop"
                  alt="Real Estate Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-white shadow-xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {agents.slice(0, 4).map((agent) => {
                      const imageUrl =
                        typeof agent.image === "string"
                          ? agent.image
                          : agent.image?.asset?.url;
                      return (
                        <img
                          key={agent._id || agent.id}
                          src={
                            imageUrl ||
                            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                          }
                          alt={agent.name}
                          className="w-10 h-10 rounded-full border-2 border-white object-cover"
                        />
                      );
                    })}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">
                      {agents.length}+ Agents
                    </p>
                    <p className="text-sm text-slate-600">Ready to help you</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#2EA8FF] via-cyan-500 to-teal-400">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Sparkles className="w-12 h-12 text-white/80 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work With the Best?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Connect with one of our expert agents and start your real estate
            journey today.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 rounded-full bg-white text-[#2EA8FF] font-bold hover:bg-slate-100 transition-colors shadow-xl"
          >
            Schedule a Consultation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
