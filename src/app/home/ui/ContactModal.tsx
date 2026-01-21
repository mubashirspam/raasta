"use client";

import React from "react";
import { X } from "lucide-react";
import { ContactForm } from "../forms/ContactForm";

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
      <div className="bg-white/90 backdrop-blur-xl border border-white rounded-3xl shadow-2xl p-8 max-w-md w-full relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors z-10"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold text-slate-800 mb-2">Get in Touch</h2>
        <p className="text-slate-500 text-sm mb-6">
          Leave your details and an agent will contact you shortly.
        </p>

        <ContactForm
          variant="light"
          source="contact_modal"
          onSuccess={() => {
            setTimeout(() => {
              onClose();
            }, 2500);
          }}
        />
      </div>
    </div>
  );
};
