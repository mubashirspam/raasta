"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="py-4 bg-black border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center flex-wrap gap-2 text-sm">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} className="flex items-center gap-3">
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-green-600 transition-colors hover:underline"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className={isLast ? "text-gray-300" : "text-gray-400"}>
                    {item.label}
                  </span>
                )}
                {!isLast && (
                  <ChevronRight size={14} className="text-gray-600" />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
