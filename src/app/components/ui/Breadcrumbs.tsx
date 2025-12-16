import React from "react";
import { ChevronRight } from "lucide-react";
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
    <nav className={`flex items-center text-sm text-slate-500 ${className}`}>
      <Link href="/" className="hover:text-[#2EA8FF] transition-colors">
        Home
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight size={14} className="mx-2 text-slate-300" />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-[#2EA8FF] transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-900 font-medium">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
