"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Upload,
  FileText,
  X,
  Briefcase,
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
  { code: "+92", flag: "🇵🇰", country: "Pakistan" },
  { code: "+63", flag: "🇵🇭", country: "Philippines" },
];

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB

interface CareerApplicationFormProps {
  position: string;
  onSuccess?: () => void;
}

export default function CareerApplicationForm({
  position,
  onSuccess,
}: CareerApplicationFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+971",
    phone: "",
    coverNote: "",
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvError, setCvError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setCvError("");

    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowedTypes.includes(file.type)) {
      setCvError("Only PDF and DOCX files are accepted");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setCvError("File size must be under 2MB");
      return;
    }

    setCvFile(file);
  };

  const removeFile = () => {
    setCvFile(null);
    setCvError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const body = new FormData();
      body.append("fullName", formData.fullName);
      body.append("email", formData.email);
      body.append("countryCode", formData.countryCode);
      body.append("phone", formData.phone);
      body.append("position", position);
      body.append("coverNote", formData.coverNote);
      if (cvFile) {
        body.append("cv", cvFile);
      }

      const response = await fetch("/api/submit-career-application", {
        method: "POST",
        body,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit application");
      }

      setSubmitStatus("success");

      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          countryCode: "+971",
          phone: "",
          coverNote: "",
        });
        setCvFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
        setSubmitStatus("idle");
        onSuccess?.();
      }, 2500);
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

  const inputClasses =
    "w-full px-4 py-3.5 rounded-xl border bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 outline-none";
  const labelClasses = "block text-sm font-semibold mb-2 text-slate-700";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Position Badge (auto-set, not editable) */}
      <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-indigo-50 border border-indigo-100">
        <Briefcase size={16} className="text-indigo-500 flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="text-[10px] text-indigo-400 uppercase tracking-wider font-semibold">
            Applying for
          </p>
          <p className="text-sm font-bold text-indigo-700 truncate">
            {position}
          </p>
        </div>
      </div>

      {/* Full Name */}
      <div>
        <label className={labelClasses}>
          Full Name <span className="text-rose-500">*</span>
        </label>
        <input
          type="text"
          required
          placeholder="Enter your full name"
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
          placeholder="Enter your email address"
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
              className="flex items-center gap-2 px-3 py-3.5 rounded-xl border bg-white border-slate-200 text-slate-900 hover:border-slate-300 transition-all duration-300"
            >
              <span className="text-lg">{selectedCountry?.flag}</span>
              <ChevronDown size={14} className="text-slate-400" />
            </button>
            {showCountryDropdown && (
              <div className="absolute top-full left-0 mt-1 w-48 rounded-xl border bg-white border-slate-200 shadow-xl z-50 max-h-60 overflow-y-auto">
                {COUNTRY_CODES.map((country) => (
                  <button
                    key={country.code}
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, countryCode: country.code });
                      setShowCountryDropdown(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-slate-50 text-slate-900 transition-colors"
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

      {/* Cover Note */}
      <div>
        <label className={labelClasses}>Cover Note</label>
        <textarea
          placeholder="Tell us about yourself..."
          value={formData.coverNote}
          onChange={(e) =>
            setFormData({ ...formData, coverNote: e.target.value })
          }
          rows={4}
          className={inputClasses}
          style={{ resize: "none" }}
        />
      </div>

      {/* CV Upload */}
      <div>
        <label className={labelClasses}>
          Upload CV{" "}
          <span className="text-slate-400 font-normal">(Optional)</span>
        </label>

        {/* {cvFile ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 p-3 rounded-xl bg-indigo-50 border border-indigo-200"
          >
            <div className="w-9 h-9 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0">
              <FileText size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 truncate">
                {cvFile.name}
              </p>
              <p className="text-xs text-slate-500">
                {formatFileSize(cvFile.size)}
              </p>
            </div>
            <button
              type="button"
              onClick={removeFile}
              className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-rose-500 hover:border-rose-200 transition-colors flex-shrink-0"
            >
              <X size={14} />
            </button>
          </motion.div>
        ) : (
          <div
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-3 p-4 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/50 hover:border-indigo-300 hover:bg-indigo-50/30 transition-all cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-lg bg-slate-100 group-hover:bg-indigo-100 flex items-center justify-center text-slate-400 group-hover:text-indigo-500 transition-colors flex-shrink-0">
              <Upload size={18} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-600">
                Click to upload CV
              </p>
              <p className="text-xs text-slate-400">PDF or DOCX • Max 2MB</p>
            </div>
          </div>
        )} */}

        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.docx,.doc"
          onChange={handleFileChange}
          className="hidden"
        />

        {cvError && (
          <p className="text-rose-500 text-xs mt-2 flex items-center gap-1">
            <AlertCircle size={12} />
            {cvError}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-4 rounded-xl text-base font-medium transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${
          submitStatus === "success"
            ? "bg-green-500 text-white"
            : submitStatus === "error"
              ? "bg-red-500 text-white"
              : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30"
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
            Application Submitted!
          </>
        ) : submitStatus === "error" ? (
          <>
            <AlertCircle size={20} />
            Submission Failed
          </>
        ) : (
          <>
            Submit Application
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
}
