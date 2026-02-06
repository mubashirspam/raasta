"use client";

import React from "react";
import { Navbar } from "../home/layout/Navbar";
import { Footer } from "../home/layout/Footer";
import { Shield, Lock, Eye, FileText, Mail } from "lucide-react";

export default function PrivacyPolicyContent() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar onContact={() => {}} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold tracking-widest uppercase mb-6">
            <Shield size={14} />
            <span>Privacy Policy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Your Privacy Matters to Us
          </h1>
          <p className="text-lg text-slate-600">
            Last updated: January 20, 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="prose prose-slate max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Lock className="text-emerald-500" size={28} />
                Introduction
              </h2>
              <p className="text-slate-700 leading-relaxed">
                At Raasta Realty, we are committed to protecting your privacy
                and ensuring the security of your personal information. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website or use our
                services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Eye className="text-emerald-500" size={28} />
                Information We Collect
              </h2>
              <div className="space-y-4 text-slate-700">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Personal Information
                  </h3>
                  <p className="leading-relaxed">
                    We may collect personal information that you voluntarily
                    provide to us, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>
                      Name and contact information (email, phone number,
                      address)
                    </li>
                    <li>Property preferences and search criteria</li>
                    <li>Financial information for property transactions</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Automatically Collected Information
                  </h3>
                  <p className="leading-relaxed">
                    When you visit our website, we may automatically collect
                    certain information about your device and browsing behavior,
                    including:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>IP address and browser type</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referring website addresses</li>
                    <li>Device information and operating system</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <FileText className="text-emerald-500" size={28} />
                How We Use Your Information
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-slate-700">
                <li>To provide and maintain our real estate services</li>
                <li>To communicate with you about properties and services</li>
                <li>To process transactions and send related information</li>
                <li>To improve our website and customer experience</li>
                <li>To send marketing communications (with your consent)</li>
                <li>To comply with legal obligations</li>
                <li>To protect against fraudulent or illegal activity</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Shield className="text-emerald-500" size={28} />
                Data Security
              </h2>
              <p className="text-slate-700 leading-relaxed">
                We implement appropriate technical and organizational security
                measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction.
                However, no method of transmission over the Internet or
                electronic storage is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Your Rights
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-slate-700">
                <li>Access and receive a copy of your personal information</li>
                <li>Request correction of inaccurate or incomplete data</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict certain processing of your data</li>
                <li>Withdraw consent for marketing communications</li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Mail className="text-emerald-500" size={28} />
                Contact Us
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                If you have any questions or concerns about this Privacy Policy
                or our data practices, please contact us at:
              </p>
              <div className="space-y-2 text-slate-700">
                <p>
                  <strong>Email:</strong> connect@raastarealty.com
                </p>
                <p>
                  <strong>Phone:</strong> +971 52 936 8338
                </p>
                <p>
                  <strong>Address:</strong> 1610, 16th Floor, The Prism Tower, Business Bay, Dubai, UAE
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
