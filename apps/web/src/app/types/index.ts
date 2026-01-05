// Type definitions for RaastaRealty
import { LucideIcon } from "lucide-react";

export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  type: string;
  image: string;
  tag: string;
}

export interface Agent {
  _id?: string;
  id?: number;
  name: string;
  role: string;
  specialty?: string;
  specializations?: string[];
  image: string | { asset?: { url: string } };
  reviews?: number;
  sales?: string;
  slug?: { current: string };
  phone?: string;
  email?: string;
  whatsapp?: string;
  languages?: string[];
  bio?: string;
  featured?: boolean;
}

export interface Service {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix: string;
  valueColor?: string;
  labelColor?: string;
}

// --- Types ---
export interface Testimonial {
  id: number;
  name: string;
  role: string; // e.g., "Investor from UK"
  purchase: string; // e.g., "Penthouse in Downtown"
  image: string;
  content: string;
  rating: number;
}

// --- Types ---
export interface OrbitItem {
  id: number;
  url: string;
}

export interface MediaItem {
  id: number;
  type: "video" | "image";
  url: string;
  caption?: string;
  likes?: string;
}
