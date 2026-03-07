"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, Sparkles, Phone, MessageCircle, Calendar, UserCheck,
  Gift, Star, ArrowLeft, CheckCircle2,
} from "lucide-react";

const POPUP_DELAY = 30000;
const SESSION_KEY = "consultation_popup_shown";
const CALENDLY_BASE_URL = "https://calendly.com/the-real-mallu-realtor/lifechanging";

interface OffersPopupProps { forceShow?: boolean; }
type Step = "form" | "calendar";

export const OffersPopup: React.FC<OffersPopupProps> = ({ forceShow = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>("form");
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [calendlyUrl, setCalendlyUrl] = useState("");

  useEffect(() => {
    if (forceShow) { setIsOpen(true); return; }
    const wasShown = sessionStorage.getItem(SESSION_KEY);
    if (!wasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem(SESSION_KEY, "true");
      }, POPUP_DELAY);
      return () => clearTimeout(timer);
    }
  }, [forceShow]);

  // Listen for Calendly booking confirmed event → close popup
  useEffect(() => {
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data?.event === "calendly.event_scheduled") {
        setIsOpen(false);
        sessionStorage.setItem(SESSION_KEY, "true");
      }
    };
    window.addEventListener("message", handleCalendlyEvent);
    return () => window.removeEventListener("message", handleCalendlyEvent);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem(SESSION_KEY, "true");
  };

  const buildCalendlyUrl = (data: typeof formData) => {
    const params = new URLSearchParams({
      name: data.name,
      email: data.email,
      month: new Date().toISOString().slice(0, 7),
    });
    return `${CALENDLY_BASE_URL}?embed_type=Inline&hide_event_type_details=1&hide_gdpr_banner=1&${params.toString()}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setCalendlyUrl(buildCalendlyUrl(formData));
    setIsSubmitting(false);
    setStep("calendar");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const consultationBenefits = [
    { icon: Calendar, title: "Free Consultation", description: "One-on-one session with our experts" },
    { icon: UserCheck, title: "Personalized Advice", description: "Tailored recommendations for your needs" },
    { icon: Gift, title: "Exclusive Insights", description: "Market trends and investment opportunities" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full bg-slate-900 rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 ${
              step === "calendar" ? "max-w-5xl max-h-[92vh]" : "max-w-4xl max-h-[90vh]"
            } overflow-y-auto md:overflow-visible`}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-slate-100/80 hover:bg-slate-200 text-slate-800 rounded-full flex items-center justify-center shadow-sm transition-colors"
              aria-label="Close popup"
            >
              <X size={20} />
            </button>

            {/* ── STEP 1: FORM ── */}
            {step === "form" && (
              <div className="flex flex-col md:flex-row h-full rounded-3xl overflow-hidden">
                {/* Left */}
                <div className="hidden md:flex flex-1 p-8 md:p-10 bg-gradient-to-r from-[#2EA8FF] to-cyan-500 flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-lg shadow-blue-900/10 self-start">
                    <Sparkles className="w-4 h-4 text-[#2EA8FF] fill-[#2EA8FF]" />
                    <span className="text-[#2EA8FF] text-sm font-bold tracking-wide uppercase">Limited Time Offer</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight drop-shadow-md">
                    Get a Free{" "}
                    <span className="text-yellow-300 relative inline-block">
                      One-to-One
                      <svg className="absolute w-full h-2 -bottom-1 left-0 text-yellow-300/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                      </svg>
                    </span>{" "}Consultation
                  </h2>
                  <p className="text-blue-50 mb-8 text-lg font-medium">
                    Book a personalized consultation with our Dubai real estate experts
                  </p>
                  <div className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl mb-8 shadow-sm self-start">
                    <div className="p-1.5 bg-yellow-400 rounded-full">
                      <Star className="w-3.5 h-3.5 text-yellow-950 fill-yellow-950" />
                    </div>
                    <span className="text-white font-bold tracking-wide">Investment starts at AED 500K</span>
                  </div>
                  <div className="space-y-4">
                    {consultationBenefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-4 bg-black/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                          <benefit.icon className="w-6 h-6 text-teal-600" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold mb-0.5 text-lg">{benefit.title}</h4>
                          <p className="text-blue-100 text-sm font-medium">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right – Form (name + email only) */}
                <div className="flex-1 p-6 sm:p-8 md:p-10 bg-white">
                  <div className="flex items-center gap-4 mb-4 sm:mb-6">
                    <img src="/logo_black.svg" alt="Raasta Realty Logo" className="h-10 sm:h-12 rounded-xl" />
                  </div>
                  <h2 className="md:hidden text-xl font-bold text-black mb-3 leading-tight">
                    Get a Free <span className="text-emerald-500">One-to-One</span> Consultation
                  </h2>
                  <p className="text-slate-600 mb-6 hidden md:block">
                    Enter your name and email — we'll pre-fill them in the calendar so you book in one click.
                  </p>

                  <form onSubmit={handleFormSubmit} className="space-y-3 sm:space-y-4">
                    <input
                      type="text" name="name" placeholder="Full Name"
                      value={formData.name} onChange={handleChange} required
                      className="w-full px-4 py-3 sm:py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-sm sm:text-base"
                    />
                    <input
                      type="email" name="email" placeholder="Email Address"
                      value={formData.email} onChange={handleChange} required
                      className="w-full px-4 py-3 sm:py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-sm sm:text-base"
                    />

                    <button
                      type="submit" disabled={isSubmitting}
                      className="w-full py-3.5 sm:py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-teal-500/25 flex items-center justify-center gap-2 disabled:opacity-70 text-sm sm:text-base"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <><Calendar size={18} />Pick a Time Slot<Star size={16} color="#FFD700" /></>
                      )}
                    </button>

                    <p className="text-center text-[10px] sm:text-xs text-slate-500">
                      By signing up, you agree to our{" "}
                      <a href="#" className="text-teal-600 hover:underline">Terms &amp; Conditions</a>{" "}
                      and consent to receive updates.
                    </p>
                  </form>

                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <p className="text-center text-xs sm:text-sm text-slate-500 mb-4">Or connect with us directly</p>
                    <div className="flex gap-2 sm:gap-3">
                      <a href="tel:+971529368338"
                        className="flex-1 py-2.5 sm:py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                        <Phone size={18} />Call Now
                      </a>
                      <a href="https://wa.me/971529368338" target="_blank" rel="noopener noreferrer"
                        className="flex-1 py-2.5 sm:py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                        <MessageCircle size={18} />WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── STEP 2: EMBEDDED CALENDLY ── */}
            {step === "calendar" && (
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", damping: 28, stiffness: 280 }}
                className="flex flex-col bg-white rounded-3xl overflow-hidden"
                style={{ minHeight: "700px" }}
              >
                <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-100 bg-white flex-shrink-0">
                  <button onClick={() => setStep("form")}
                    className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 transition-colors font-medium">
                    <ArrowLeft size={16} />Back
                  </button>
                  <div className="h-5 w-px bg-slate-200" />
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span className="text-sm text-slate-700 font-semibold">
                      Hey {formData.name}! Pick a time that works for you 👇
                    </span>
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <iframe
                    src={calendlyUrl}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Schedule a Consultation"
                    style={{ minHeight: "640px", border: "none", display: "block" }}
                    allow="payment"
                  />
                </div>

                <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 text-center flex-shrink-0">
                  <p className="text-xs text-slate-500">
                    ✅ Your name &amp; email are pre-filled — just pick a slot and confirm.
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OffersPopup;