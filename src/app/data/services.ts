import { Building2, Key, TrendingUp, Landmark, Stamp, Gem } from "lucide-react";
import { Service } from "../types";

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Off-Plan Investment",
    description:
      "Secure high-ROI pre-construction opportunities with top developers like Emaar, Damac, and Nakheel before they hit the market.",
    icon: Building2,
    gradient: "from-violet-500 to-purple-500",
  },
  {
    id: 2,
    title: "Buy Properties",
    description:
      "Access an exclusive portfolio of penthouses, villas, and waterfront mansions in Palm Jumeirah and Downtown Dubai.",
    icon: Landmark,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 3,
    title: "Rent Properties",
    description:
      "Find your perfect rental home with our curated selection of luxury apartments, villas, and townhouses across Dubai's prime locations.",
    icon: Key,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 4,
    title: "Golden Visa ",
    description:
      "Comprehensive legal guidance on obtaining your 10-year UAE Golden Residency through real estate investment.",
    icon: Stamp,
    gradient: "from-amber-400 to-orange-500",
  },
  {
    id: 5,
    title: "Financial Planning",
    description:
      "Expert financial advisory services to optimize your real estate portfolio and maximize returns on your Dubai property investments.",
    icon: TrendingUp,
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    id: 6,
    title: "VIP Concierge",
    description:
      "Beyond real estate. We arrange private viewings, luxury transport, and settling-in services for our elite clientele.",
    icon: Gem,
    gradient: "from-fuchsia-500 to-pink-500",
  },
];
