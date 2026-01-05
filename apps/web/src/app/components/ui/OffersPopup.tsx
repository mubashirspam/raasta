"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Sparkles,
  Phone,
  MessageCircle,
  Building2,
  TrendingUp,
  Shield,
  Gift,
  ChevronDown,
  Star,
} from "lucide-react";

const POPUP_DELAY = 10000; // 10 seconds

interface OffersPopupProps {
  forceShow?: boolean;
}

export const OffersPopup: React.FC<OffersPopupProps> = ({
  forceShow = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    budget: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (forceShow) {
      setIsOpen(true);
      return;
    }

    // Always show popup after 10 seconds on every page load/reload
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, POPUP_DELAY);

    return () => clearTimeout(timer);
  }, [forceShow]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);

    // Close popup after success message
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
      setFormData({ name: "", phone: "", email: "", budget: "" });
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const offers = [
    {
      icon: Gift,
      title: "Exclusive Offers",
      description: "Get access to off-market properties",
    },
    {
      icon: TrendingUp,
      title: "Best ROI",
      description: "Premium locations with high returns",
    },
    {
      icon: Shield,
      title: "Golden Visa",
      description: "Free assistance with Golden Visa",
    },
  ];

  const budgetOptions = [
    "Select Budget Range",
    "Under AED 1 Million",
    "AED 1M - 3M",
    "AED 3M - 5M",
    "AED 5M - 10M",
    "AED 10M+",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Popup Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-slate-900 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Close popup"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Left Side - Offers */}
              <div className="flex-1 p-8 md:p-10 bg-gradient-to-r from-[#2EA8FF] to-cyan-500">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-lg shadow-blue-900/10">
                  <Sparkles className="w-4 h-4 text-[#2EA8FF] fill-[#2EA8FF]" />
                  <span className="text-[#2EA8FF] text-sm font-bold tracking-wide uppercase">
                    Limited Time Offer
                  </span>
                </div>

                {/* Headline */}
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight drop-shadow-md">
                  Discover{" "}
                  <span className="text-yellow-300 relative inline-block">
                    Premium
                    <svg
                      className="absolute w-full h-2 -bottom-1 left-0 text-yellow-300/30"
                      viewBox="0 0 100 10"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 5 Q 50 10 100 5"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                    </svg>
                  </span>{" "}
                  Properties in Dubai
                </h2>

                <p className="text-blue-50 mb-8 text-lg font-medium">
                  Get exclusive access to Dubai&apos;s finest real estate
                  opportunities
                </p>

                {/* Investment Badge */}
                <div className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl mb-8 shadow-sm">
                  <div className="p-1.5 bg-yellow-400 rounded-full">
                    <Star className="w-3.5 h-3.5 text-yellow-950 fill-yellow-950" />
                  </div>
                  <span className="text-white font-bold tracking-wide">
                    Investment starts at AED 500K
                  </span>
                </div>

                {/* Offers Grid */}
                <div className="space-y-4">
                  {offers.map((offer, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-4 bg-black/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-900/5 group-hover:scale-110 transition-transform">
                        <offer.icon className="w-6 h-6 text-[#2EA8FF]" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-0.5 text-lg">
                          {offer.title}
                        </h4>
                        <p className="text-blue-100 text-sm font-medium">
                          {offer.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="flex-1 p-8 md:p-10 bg-white">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src="/logo_black.svg"
                    alt="Raasta Realty Logo"
                    className="h-12 md:h-12 rounded-xl"
                  />
                </div>

                <p className="text-slate-600 mb-6">
                  Enter your details to receive our exclusive property portfolio
                  and investment guide.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      Thank You!
                    </h4>
                    <p className="text-slate-600">
                      Our team will contact you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2EA8FF]/20 focus:border-[#2EA8FF] transition-all"
                      />
                    </div>

                    {/* Phone with WhatsApp */}
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-slate-500">
                        <span className="text-sm font-medium">+971</span>
                        <div className="w-px h-5 bg-slate-300" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="WhatsApp Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-20 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2EA8FF]/20 focus:border-[#2EA8FF] transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2EA8FF]/20 focus:border-[#2EA8FF] transition-all"
                      />
                    </div>

                    {/* Budget */}
                    <div className="relative">
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 appearance-none focus:outline-none focus:ring-2 focus:ring-[#2EA8FF]/20 focus:border-[#2EA8FF] transition-all cursor-pointer"
                      >
                        {budgetOptions.map((opt, idx) => (
                          <option
                            key={idx}
                            value={idx === 0 ? "" : opt}
                            disabled={idx === 0}
                          >
                            {opt}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                        size={18}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-[#2EA8FF] to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Sparkles size={18} />
                          Get Exclusive Access
                        </>
                      )}
                    </button>

                    {/* Terms */}
                    <p className="text-center text-xs text-slate-500">
                      By signing up, you agree to our{" "}
                      <a href="#" className="text-[#2EA8FF] hover:underline">
                        Terms & Conditions
                      </a>{" "}
                      and consent to receive updates.
                    </p>
                  </form>
                )}

                {/* Contact Buttons */}
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <p className="text-center text-sm text-slate-500 mb-4">
                    Or connect with us directly
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="tel:+971501234567"
                      className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      <Phone size={18} />
                      Call Now
                    </a>
                    <a
                      href="https://wa.me/971501234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={18} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OffersPopup;
