"use client";

import React from "react";
import { Navbar } from "../home/layout/Navbar";
import { Footer } from "../home/layout/Footer";
import {
  Building2,
  Award,
  Shield,
  FileCheck,
  ExternalLink,
  Mail,
} from "lucide-react";

export default function RERAInfoPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar onContact={() => {}} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold tracking-widest uppercase mb-6">
            <Building2 size={14} />
            <span>RERA Information</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            RERA Compliance & Registration
          </h1>
          <p className="text-lg text-slate-600">
            Real Estate Regulatory Agency - Dubai
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="prose prose-slate max-w-none">
            {/* About RERA */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Building2 className="text-amber-500" size={28} />
                About RERA
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                The Real Estate Regulatory Agency (RERA) is a government entity
                established by the Dubai Land Department to regulate and
                supervise the real estate sector in Dubai. RERA ensures
                transparency, protects the rights of all parties involved in
                real estate transactions, and maintains the highest standards of
                professionalism in the industry.
              </p>
              <p className="text-slate-700 leading-relaxed">
                All real estate brokers and agents operating in Dubai are
                required to be registered with RERA and comply with its
                regulations and code of conduct.
              </p>
            </div>

            {/* Our RERA Registration */}
            <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Award className="text-amber-500" size={28} />
                Raasta Realty RERA Registration
              </h2>
              <div className="space-y-4 text-slate-700">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-amber-100">
                    <p className="text-sm font-semibold text-amber-600 mb-1">
                      Brokerage Name
                    </p>
                    <p className="font-bold text-slate-900">Raasta Realty</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-amber-100">
                    <p className="text-sm font-semibold text-amber-600 mb-1">
                      RERA Registration Number
                    </p>
                    <p className="font-bold text-slate-900">
                      [Registration Number]
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-amber-100">
                    <p className="text-sm font-semibold text-amber-600 mb-1">
                      License Type
                    </p>
                    <p className="font-bold text-slate-900">
                      Real Estate Brokerage
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-amber-100">
                    <p className="text-sm font-semibold text-amber-600 mb-1">
                      Status
                    </p>
                    <p className="font-bold text-emerald-600">
                      Active & Compliant
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RERA Compliance */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Shield className="text-amber-500" size={28} />
                Our Commitment to RERA Compliance
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                At Raasta Realty, we are fully committed to maintaining the
                highest standards of compliance with RERA regulations. This
                includes:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-slate-700">
                <li>All our agents are RERA-certified and licensed</li>
                <li>
                  We adhere to RERA's code of conduct and ethical standards
                </li>
                <li>
                  All property listings comply with RERA advertising guidelines
                </li>
                <li>We maintain transparent and fair business practices</li>
                <li>
                  Regular training and updates on RERA regulations for our team
                </li>
                <li>
                  Proper documentation and record-keeping as per RERA
                  requirements
                </li>
              </ul>
            </div>

            {/* Agent Certification */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <FileCheck className="text-amber-500" size={28} />
                Agent Certification
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                All real estate agents at Raasta Realty hold valid RERA
                certifications. Our agents have:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-slate-700">
                <li>Completed RERA-approved training programs</li>
                <li>Passed the RERA qualification examination</li>
                <li>Obtained individual RERA registration cards</li>
                <li>Committed to ongoing professional development</li>
                <li>Agreed to uphold RERA's code of ethics</li>
              </ul>
            </div>

            {/* Consumer Protection */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Consumer Protection
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                RERA provides several protections for consumers engaging in real
                estate transactions:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-slate-700">
                <li>Standardized contracts and agreements</li>
                <li>Escrow account protection for off-plan properties</li>
                <li>Clear disclosure of all fees and commissions</li>
                <li>Dispute resolution mechanisms</li>
                <li>Protection against fraudulent practices</li>
                <li>Right to file complaints against brokers or agents</li>
              </ul>
            </div>

            {/* Verify Our Registration */}
            <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Verify Our RERA Registration
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                You can verify our RERA registration and the credentials of our
                agents through the official RERA website:
              </p>
              <a
                href="https://www.rera.gov.ae"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
              >
                Visit RERA Website
                <ExternalLink size={18} />
              </a>
            </div>

            {/* File a Complaint */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                File a Complaint
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                If you have any concerns about our services or wish to file a
                complaint, you can:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-slate-700">
                <li>
                  Contact us directly through our customer service channels
                </li>
                <li>
                  File a complaint with RERA through their official website
                </li>
                <li>Call the RERA hotline: 800-RERA (800-7372)</li>
                <li>Visit a RERA customer service center in person</li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Mail className="text-amber-500" size={28} />
                Contact Us
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                For questions about our RERA registration or compliance, please
                contact us:
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
