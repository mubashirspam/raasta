import { Metadata } from "next";
import AgentsPageContent from "./AgentsPageContent";

export const metadata: Metadata = {
  title: "Our Expert Agents | Raasta Realty Dubai",
  description:
    "Meet our team of expert real estate agents in Dubai. Specialized knowledge in luxury properties, investment opportunities, and Dubai's most prestigious districts.",
  keywords: [
    "dubai real estate agents",
    "luxury property agents",
    "raasta realty team",
    "dubai property experts",
    "real estate consultants dubai",
  ],
};

export default function AgentsPage() {
  return <AgentsPageContent />;
}
