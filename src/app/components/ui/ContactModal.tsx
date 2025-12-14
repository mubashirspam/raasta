"use client";

import React from "react";
import { X } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/30 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white/90 backdrop-blur-xl border border-white rounded-3xl shadow-2xl p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          Request a Viewing
        </h2>
        <p className="text-slate-500 text-sm mb-6">
          Leave your details and an agent will contact you shortly.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-[#2EA8FF] focus:ring-2 focus:ring-[#2EA8FF]/20 outline-none transition-all"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-[#2EA8FF] focus:ring-2 focus:ring-[#2EA8FF]/20 outline-none transition-all"
              placeholder="+971 50..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-[#2EA8FF] focus:ring-2 focus:ring-[#2EA8FF]/20 outline-none transition-all"
              placeholder="john@example.com"
            />
          </div>

          <button
            type="button"
            className="w-full py-4 bg-[#2EA8FF] text-white rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:scale-[1.02] transition-all"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};
