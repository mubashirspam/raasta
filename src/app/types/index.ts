// Type definitions for RaastaRealty

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
  id: number;
  name: string;
  role: string;
  specialty: string;
  image: string;
  contact: string;
}

export interface Service {
  id: number;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  title: string;
  description: string;
  gradient: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix: string;
}
