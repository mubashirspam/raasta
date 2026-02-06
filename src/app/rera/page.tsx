import { Metadata } from "next";
import RERAInfoContent from "./RERAInfoContent";

export const metadata: Metadata = {
  title: "RERA Compliance & Registration",
  description:
    "Raasta Realty is a fully RERA-registered and compliant real estate brokerage in Dubai. Verify our credentials, learn about RERA consumer protections, and see our commitment to ethical real estate practices.",
  keywords: [
    "RERA registered broker Dubai",
    "RERA compliance real estate",
    "Dubai real estate regulation",
    "RERA certified agent Dubai",
    "Dubai Land Department",
    "raasta realty RERA",
    "verified real estate broker Dubai",
  ],
  alternates: {
    canonical: "https://www.raastarealty.com/rera",
  },
  openGraph: {
    title: "RERA Compliance & Registration | Raasta Realty Dubai",
    description:
      "Raasta Realty is a fully RERA-registered brokerage in Dubai. Verify our credentials and learn about our compliance commitment.",
    url: "https://www.raastarealty.com/rera",
  },
};

export default function RERAInfoPage() {
  return <RERAInfoContent />;
}
