import React from "react";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  className = "",
}) => {
  return (
    <nav className={`flex items-center text-sm ${className}`}>
      <Link
        href="/"
        className="flex items-center gap-1 text-slate-400 hover:text-[#2EA8FF] transition-colors"
      >
        <Home size={14} />
        <span>Home</span>
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight size={14} className="mx-2 text-slate-400" />
          {item.href ? (
            <Link
              href={item.href}
              className="text-slate-400 hover:text-[#2EA8FF] transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-200 font-medium">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
