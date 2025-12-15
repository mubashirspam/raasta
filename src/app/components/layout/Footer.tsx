"use client";

import React from "react";
import {
  TrendingUp,
  Instagram,
  Facebook,
  Linkedin,
  ChevronRight,
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-[#2EA8FF] rounded-md flex items-center justify-center text-white">
                <TrendingUp size={14} strokeWidth={3} />
              </div>
              <span className="text-xl font-bold text-slate-900">
                Raasta<span className="text-[#2EA8FF]">Realty</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Premium real estate brokerage based in Dubai, specializing in
              luxury residential and high-yield investment properties.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#2EA8FF] hover:text-white transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#2EA8FF] hover:text-white transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#2EA8FF] hover:text-white transition-colors"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Properties</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-[#2EA8FF] transition-colors">
                  Dubai Marina
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2EA8FF] transition-colors">
                  Palm Jumeirah
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2EA8FF] transition-colors">
                  Downtown Dubai
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2EA8FF] transition-colors">
                  Dubai Hills
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2EA8FF] transition-colors">
                  New Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-[#2EA8FF] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2EA8FF] transition-colors">
                  Meet the Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2EA8FF] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2EA8FF] transition-colors">
                  Market Reports
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2EA8FF] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Newsletter</h4>
            <p className="text-sm text-slate-500 mb-4">
              Subscribe for the latest off-plan deals and market updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm w-full outline-none focus:border-[#2EA8FF]"
              />
              <button className="bg-[#2EA8FF] text-white rounded-lg px-3 py-2 hover:bg-[#2590db] transition-colors">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
          <p>&copy; 2024 RaastaRealty Dubai. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-600">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-600">
              Terms of Service
            </a>
            <a href="#" className="hover:text-slate-600">
              RERA Info
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
