"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const COUNTRY_CODES = [
  { code: "+971", flag: "🇦🇪", country: "UAE" },
  { code: "+1", flag: "🇺🇸", country: "USA" },
  { code: "+44", flag: "🇬🇧", country: "UK" },
  { code: "+91", flag: "🇮🇳", country: "India" },
  { code: "+966", flag: "🇸🇦", country: "Saudi Arabia" },
  { code: "+974", flag: "🇶🇦", country: "Qatar" },
  { code: "+965", flag: "🇰🇼", country: "Kuwait" },
  { code: "+973", flag: "🇧🇭", country: "Bahrain" },
];

const BUDGET_RANGES = [
  "Under 500K",
  "500K - 700K",
  "700K - 1M",
  "1M - 2M",
  "2M - 5M",
  "5M - 10M",
  "10M+",
];

interface ContactFormProps {
  onSuccess?: () => void;
  variant?: "light" | "dark";
  source?: "contact_form" | "contact_modal";
}

interface FormData {
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
  purpose: "investment" | "career";
  budgetRange: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  onSuccess,
  variant = "light",
  source = "contact_form",
}) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    countryCode: "+971",
    phone: "",
    purpose: "investment",
    budgetRange: "700K - 1M",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showBudgetDropdown, setShowBudgetDropdown] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/submit-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      setSubmitStatus("success");

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          countryCode: "+971",
          phone: "",
          purpose: "investment",
          budgetRange: "700K - 1M",
        });
        setSubmitStatus("idle");
        onSuccess?.();
      }, 2000);
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An error occurred",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedCountry = COUNTRY_CODES.find(
    (c) => c.code === formData.countryCode,
  );

  const isDark = variant === "dark";
  const inputClasses = `w-full px-4 py-3.5 rounded-xl border transition-all duration-300 outline-none ${
    isDark
      ? "bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400 focus:border-[#2EA8FF] focus:ring-2 focus:ring-[#2EA8FF]/20"
      : "bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-[#C9A050] focus:ring-2 focus:ring-[#C9A050]/20"
  }`;
  const labelClasses = `block text-sm font-semibold mb-2 ${
    isDark ? "text-slate-300" : "text-slate-700"
  }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Full Name */}
      <div>
        <label className={labelClasses}>
          Full Name <span className="text-rose-500">*</span>
        </label>
        <input
          type="text"
          required
          placeholder="Enter full name"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
          className={inputClasses}
        />
      </div>

      {/* Email */}
      <div>
        <label className={labelClasses}>
          Email <span className="text-rose-500">*</span>
        </label>
        <input
          type="email"
          required
          placeholder="Enter email address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={inputClasses}
        />
      </div>

      {/* Phone Number */}
      <div>
        <label className={labelClasses}>
          Phone Number <span className="text-rose-500">*</span>
        </label>
        <div className="flex gap-2">
          {/* Country Code Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowCountryDropdown(!showCountryDropdown)}
              className={`flex items-center gap-2 px-3 py-3.5 rounded-xl border transition-all duration-300 ${
                isDark
                  ? "bg-slate-800/50 border-slate-700 text-white hover:border-slate-600"
                  : "bg-white border-slate-200 text-slate-900 hover:border-slate-300"
              }`}
            >
              <span className="text-lg">{selectedCountry?.flag}</span>
              <ChevronDown size={14} className="text-slate-400" />
            </button>
            {showCountryDropdown && (
              <div
                className={`absolute top-full left-0 mt-1 w-48 rounded-xl border shadow-xl z-50 max-h-60 overflow-y-auto ${
                  isDark
                    ? "bg-slate-800 border-slate-700"
                    : "bg-white border-slate-200"
                }`}
              >
                {COUNTRY_CODES.map((country) => (
                  <button
                    key={country.code}
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, countryCode: country.code });
                      setShowCountryDropdown(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                      isDark
                        ? "hover:bg-slate-700 text-white"
                        : "hover:bg-slate-50 text-slate-900"
                    }`}
                  >
                    <span className="text-lg">{country.flag}</span>
                    <span className="text-sm">{country.country}</span>
                    <span className="text-xs text-slate-400 ml-auto">
                      {country.code}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Phone Input */}
          <input
            type="tel"
            required
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className={`flex-1 ${inputClasses}`}
          />
        </div>
      </div>

      {/* Purpose */}
      <div>
        <label className={labelClasses}>
          Purpose <span className="text-rose-500">*</span>
        </label>
        <div className="flex gap-6">
          <label
            className={`flex items-center gap-2 cursor-pointer ${
              isDark ? "text-slate-300" : "text-slate-700"
            }`}
          >
            <input
              type="radio"
              name="purpose"
              value="investment"
              checked={formData.purpose === "investment"}
              onChange={() =>
                setFormData({ ...formData, purpose: "investment" })
              }
              className="w-4 h-4 text-[#2EA8FF] border-slate-300 focus:ring-[#2EA8FF]"
            />
            <span className="text-sm font-medium">Investment</span>
          </label>
          <label
            className={`flex items-center gap-2 cursor-pointer ${
              isDark ? "text-slate-300" : "text-slate-700"
            }`}
          >
            <input
              type="radio"
              name="purpose"
              value="career"
              checked={formData.purpose === "career"}
              onChange={() => setFormData({ ...formData, purpose: "career" })}
              className="w-4 h-4 text-[#2EA8FF] border-slate-300 focus:ring-[#2EA8FF]"
            />
            <span className="text-sm font-medium">Career</span>
          </label>
        </div>
      </div>

      {/* Budget Range */}
      <div>
        <label className={labelClasses}>Budget Range (AED)</label>
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowBudgetDropdown(!showBudgetDropdown)}
            className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl border transition-all duration-300 ${
              isDark
                ? "bg-slate-800/50 border-slate-700 text-white hover:border-slate-600"
                : "bg-white border-slate-200 text-slate-900 hover:border-slate-300"
            }`}
          >
            <span>{formData.budgetRange}</span>
            <ChevronDown size={18} className="text-slate-400" />
          </button>
          {showBudgetDropdown && (
            <div
              className={`absolute top-full left-0 right-0 mt-1 rounded-xl border shadow-xl z-50 ${
                isDark
                  ? "bg-slate-800 border-slate-700"
                  : "bg-white border-slate-200"
              }`}
            >
              {BUDGET_RANGES.map((range) => (
                <button
                  key={range}
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, budgetRange: range });
                    setShowBudgetDropdown(false);
                  }}
                  className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${
                    isDark
                      ? "hover:bg-slate-700 text-white"
                      : "hover:bg-slate-50 text-slate-900"
                  } ${
                    formData.budgetRange === range
                      ? isDark
                        ? "bg-slate-700"
                        : "bg-slate-50"
                      : ""
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-4 rounded-xl text-lg font-medium transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${
          submitStatus === "success"
            ? "bg-green-500 text-white"
            : submitStatus === "error"
              ? "bg-red-500 text-white"
              : "bg-gradient-to-r from-[#2EA8FF] to-cyan-500 text-white shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30"
        }`}
      >
        {isSubmitting ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Submitting...
          </>
        ) : submitStatus === "success" ? (
          <>
            <CheckCircle2 size={20} />
            Submitted Successfully!
          </>
        ) : submitStatus === "error" ? (
          <>
            <AlertCircle size={20} />
            Submission Failed
          </>
        ) : (
          <>
            SUBMIT
            <Send size={18} />
          </>
        )}
      </button>

      {/* Error Message */}
      {submitStatus === "error" && errorMessage && (
        <div className="text-red-500 text-sm text-center">{errorMessage}</div>
      )}
    </form>
  );
};

export default ContactForm;
