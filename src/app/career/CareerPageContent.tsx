"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "../home/layout/Navbar";
import { Footer } from "../home/layout/Footer";
import { ContactModal } from "../home/ui/ContactModal";
import { ContactForm } from "../home/forms/ContactForm";
import {
  Briefcase,
  Users,
  TrendingUp,
  Heart,
  Award,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description:
      "Clear career progression paths with mentorship and training programs.",
  },
  {
    icon: Heart,
    title: "Purpose-Driven",
    description:
      "6% of every transaction goes to charity. Make an impact with every deal.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Work with passionate professionals in a supportive team environment.",
  },
  {
    icon: Award,
    title: "Competitive Rewards",
    description:
      "Industry-leading commissions, bonuses, and comprehensive benefits.",
  },
];

const openPositions = [
  {
    title: "Senior Real Estate Agent",
    department: "Sales",
    location: "Dubai, UAE",
    type: "Full-time",
    description:
      "Looking for experienced agents with a proven track record in luxury real estate.",
  },
  {
    title: "Property Consultant",
    department: "Sales",
    location: "Dubai, UAE",
    type: "Full-time",
    description:
      "Help clients find their perfect property in Dubai's most sought-after locations.",
  },
  {
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Dubai, UAE",
    type: "Full-time",
    description:
      "Drive our brand presence and lead generation through innovative campaigns.",
  },
  {
    title: "Client Relations Manager",
    department: "Operations",
    location: "Dubai, UAE",
    type: "Full-time",
    description:
      "Build lasting relationships with our valued clients and ensure exceptional service.",
  },
];

const values = [
  "Integrity in every transaction",
  "Client success is our success",
  "Continuous learning and growth",
  "Giving back to the community",
  "Innovation and excellence",
];

export default function CareerPageContent() {
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
                "linear-gradient(135deg, #dbeafe 0%, #e0e7ff 50%, #ede9fe 100%)",
            }}
          />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-white/50 text-indigo-600 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm backdrop-blur-sm"
              >
                <Briefcase size={14} />
                <span>Join Our Team</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight mb-6 leading-[1.1]"
              >
                Build Your
                <br />
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    Career With Us
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 250 10"
                    fill="none"
                  >
                    <path
                      d="M2 8C70 2 180 2 248 8"
                      stroke="url(#career-underline)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="career-underline"
                        x1="0"
                        y1="0"
                        x2="250"
                        y2="0"
                      >
                        <stop stopColor="#6366F1" />
                        <stop offset="0.5" stopColor="#A855F7" />
                        <stop offset="1" stopColor="#EC4899" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8"
              >
                Join Dubai's most purpose-driven real estate company. We're not
                just selling properties – we're transforming lives and making an
                impact.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#positions"
                  className="px-8 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors shadow-xl flex items-center gap-2"
                >
                  View Open Positions
                  <ArrowRight size={18} />
                </a>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  Submit Your CV
                </button>
              </motion.div>
            </div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-5 rounded-2xl bg-white shadow-xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white">
                    <Users size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">50+ Team Members</p>
                    <p className="text-sm text-slate-600">Growing fast</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              We offer more than just a job – we offer a career with purpose and
              growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:border-indigo-200 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Our Values
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                At Raasta Realty, our values guide everything we do. They define
                who we are and how we work together to achieve excellence.
              </p>
              <div className="space-y-4">
                {values.map((value, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                      <CheckCircle size={14} className="text-white" />
                    </div>
                    <span className="text-slate-800 font-medium">{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=500&auto=format&fit=crop"
                    alt="Team work"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=500&auto=format&fit=crop"
                    alt="Meeting"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=500&auto=format&fit=crop"
                    alt="Office"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=500&auto=format&fit=crop"
                    alt="Success"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Open Positions
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Find your perfect role and start making an impact today.
            </p>
          </div>

          <div className="space-y-4">
            {openPositions.map((position, idx) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg hover:border-indigo-200 transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {position.title}
                    </h3>
                    <p className="text-slate-600 mb-3">
                      {position.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm">
                        <Briefcase size={14} />
                        {position.department}
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm">
                        <MapPin size={14} />
                        {position.location}
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm">
                        <Clock size={14} />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-6 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors whitespace-nowrap"
                  >
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Don't See Your Role?
            </h2>
            <p className="text-slate-600 text-lg">
              We're always looking for talented individuals. Submit your
              application and we'll keep you in mind.
            </p>
          </div>

          <div className="p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-200">
            <ContactForm variant="light" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#2EA8FF] via-cyan-500 to-teal-400">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Sparkles className="w-12 h-12 text-white/80 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Join our team and be part of something bigger. Your career starts
            here.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 rounded-full bg-white text-[#2EA8FF] font-bold hover:bg-slate-100 transition-colors shadow-xl"
          >
            Apply Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
