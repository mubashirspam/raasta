import { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us — Get Expert Property Advice",
  description:
    "Contact Raasta Realty for property inquiries, investment advice, or a free consultation. Call +971 52 936 8338 or visit us at The Prism Tower, Business Bay, Dubai.",
  keywords: [
    "contact raasta realty",
    "dubai real estate contact",
    "property inquiry dubai",
    "real estate consultation",
    "raasta realty phone",
    "free property consultation Dubai",
    "real estate advisor Dubai",
    "Business Bay real estate office",
  ],
  alternates: {
    canonical: "https://www.raastarealty.com/contact",
  },
  openGraph: {
    title: "Contact Raasta Realty — Get Expert Property Advice",
    description:
      "Contact us for property inquiries, investment advice, or a free consultation. Call +971 52 936 8338.",
    url: "https://www.raastarealty.com/contact",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
