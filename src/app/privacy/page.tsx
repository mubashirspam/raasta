import { Metadata } from "next";
import PrivacyPolicyContent from "./PrivacyPolicyContent";


export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read Raasta Realty's privacy policy. Learn how we collect, use, and protect your personal data when using our Dubai real estate services and website.",
  keywords: [
    "raasta realty privacy policy",
    "real estate data privacy Dubai",
    "property website privacy",
  ],
  alternates: {
    canonical: "https://www.raastarealty.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Raasta Realty Dubai",
    description:
      "Learn how Raasta Realty collects, uses, and protects your personal data.",
    url: "https://www.raastarealty.com/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
