import { Metadata } from "next";
import InvestPageContent from "./InvestPageContent";

export const metadata: Metadata = {
  title: "Invest in Dubai Real Estate | Raasta Realty",
  description:
    "Invest in Dubai's thriving real estate market. Expert guidance on property investments, ROI analysis, and portfolio building with Raasta Realty.",
  keywords: [
    "invest dubai real estate",
    "dubai property investment",
    "dubai ROI properties",
    "real estate investment dubai",
    "dubai investment opportunities",
  ],
};

export default function InvestPage() {
  return <InvestPageContent />;
}
