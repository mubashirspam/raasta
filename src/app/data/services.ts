import { Building2, Key, TrendingUp, Landmark, Stamp, Gem } from "lucide-react";
import { Service } from "../types";

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Off-Plan Investment",
    description:
      "Early access to high-growth under construction projects with attractive pricing, flexible plans, and strong ROI potential from Dubai's top developers.",
    icon: Building2,
    gradient: "from-violet-500 to-purple-500",
  },
  {
    id: 2,
    title: "Buy Properties",
    description:
      "A handpicked selection of affordable, premium and luxury apartments and villas in Dubai's most desirable locations, guided by trusted experts.",
    icon: Landmark,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 3,
    title: "Rent Properties",
    description:
      "Luxury rental homes tailored to your lifestyle, offering comfort, convenience, and prime locations across Dubai.",
    icon: Key,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 4,
    title: "Golden Visa",
    description:
      "End-to-end support to secure your UAE Golden Residency through strategic real estate investment.",
    icon: Stamp,
    gradient: "from-amber-400 to-orange-500",
  },
  {
    id: 5,
    title: "Financial Planning",
    description:
      "Smart financial strategies to maximize returns and build a profitable Dubai property portfolio.",
    icon: TrendingUp,
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    id: 6,
    title: "VIP Concierge",
    description:
      "Exclusive, personalized services delivering a seamless and elevated real estate experience.",
    icon: Gem,
    gradient: "from-fuchsia-500 to-pink-500",
  },
];
