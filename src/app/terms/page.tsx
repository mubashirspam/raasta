"use client";

import React from "react";
import { Navbar } from "../home/layout/Navbar";
import { Footer } from "../home/layout/Footer";
import { FileText, Scale, AlertCircle, CheckCircle, Mail } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar onContact={() => {}} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 text-white text-xs font-bold tracking-widest uppercase mb-6">
            <Scale size={14} />
            <span>Terms of Service</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Terms of Service
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
                <FileText className="text-violet-500" size={28} />
                Agreement to Terms
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Welcome to Raasta Realty. By accessing or using our website and
                services, you agree to be bound by these Terms of Service.
                Please read these terms carefully before using our services. If
                you do not agree to these terms, please do not use our website
                or services.
              </p>
            </div>

            {/* Services */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Our Services
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Raasta Realty provides real estate services including:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-slate-700">
                <li>Property buying and selling assistance</li>
                <li>Real estate investment consultation</li>
                <li>Property management services</li>
                <li>Market analysis and insights</li>
                <li>Agent representation and support</li>
              </ul>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <CheckCircle className="text-violet-500" size={28} />
                User Responsibilities
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                When using our services, you agree to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-slate-700">
                <li>Provide accurate and complete information</li>
                <li>
                  Maintain the confidentiality of your account credentials
                </li>
                <li>Use our services only for lawful purposes</li>
                <li>Not engage in any fraudulent or deceptive practices</li>
                <li>Respect intellectual property rights</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </div>

            {/* Property Listings */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Property Listings and Information
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                While we strive to provide accurate and up-to-date property
                information:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-slate-700">
                <li>Property details are subject to change without notice</li>
                <li>
                  We do not guarantee the accuracy of third-party information
                </li>
                <li>Property availability is not guaranteed until confirmed</li>
                <li>Prices and terms are subject to verification</li>
                <li>Images and descriptions are for illustrative purposes</li>
              </ul>
            </div>

            {/* Financial Transactions */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Financial Transactions
              </h2>
              <p className="text-slate-700 leading-relaxed">
                All financial transactions conducted through Raasta Realty are
                subject to our payment terms and conditions. We reserve the
                right to verify financial information and may refuse service if
                we suspect fraudulent activity. Commission rates and fees will
                be clearly communicated before any transaction.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <AlertCircle className="text-violet-500" size={28} />
                Limitation of Liability
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Raasta Realty shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages resulting from your
                use of our services. Our total liability shall not exceed the
                amount of fees paid by you for our services in the twelve months
                preceding the claim.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Intellectual Property
              </h2>
              <p className="text-slate-700 leading-relaxed">
                All content on our website, including text, graphics, logos,
                images, and software, is the property of Raasta Realty or its
                content suppliers and is protected by international copyright
                laws. You may not reproduce, distribute, or create derivative
                works without our express written permission.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Termination
              </h2>
              <p className="text-slate-700 leading-relaxed">
                We reserve the right to terminate or suspend your access to our
                services at any time, without prior notice, for conduct that we
                believe violates these Terms of Service or is harmful to other
                users, us, or third parties, or for any other reason at our sole
                discretion.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Changes to Terms
              </h2>
              <p className="text-slate-700 leading-relaxed">
                We reserve the right to modify these Terms of Service at any
                time. We will notify users of any material changes by posting
                the new terms on our website. Your continued use of our services
                after such modifications constitutes your acceptance of the
                updated terms.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Governing Law
              </h2>
              <p className="text-slate-700 leading-relaxed">
                These Terms of Service shall be governed by and construed in
                accordance with the laws of the United Arab Emirates. Any
                disputes arising from these terms shall be subject to the
                exclusive jurisdiction of the courts of Dubai.
              </p>
            </div>

            {/* Contact Us */}
            <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Mail className="text-violet-500" size={28} />
                Contact Us
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please
                contact us at:
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
