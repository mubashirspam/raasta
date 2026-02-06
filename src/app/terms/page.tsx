import { Metadata } from "next";
import TermsOfServiceContent from "./TermsOfServiceContent";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read Raasta Realty's terms of service. Understand your rights and responsibilities when using our Dubai real estate services, property listings, and website.",
  keywords: [
    "raasta realty terms of service",
    "real estate terms Dubai",
    "property service agreement",
  ],
  alternates: {
    canonical: "https://www.raastarealty.com/terms",
  },
  openGraph: {
    title: "Terms of Service | Raasta Realty Dubai",
    description:
      "Understand your rights and responsibilities when using Raasta Realty's services.",
    url: "https://www.raastarealty.com/terms",
  },
};

export default function TermsOfServicePage() {
  return <TermsOfServiceContent />;
}
