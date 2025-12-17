import { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";


export const metadata: Metadata = {
  title: "Contact Us | Raasta Realty Dubai",
  description:
    "Get in touch with Raasta Realty. Contact our expert team for property inquiries, investment advice, or to schedule a consultation. We're here to help.",
  keywords: [
    "contact raasta realty",
    "dubai real estate contact",
    "property inquiry dubai",
    "real estate consultation",
    "raasta realty phone",
  ],
};

export default function ContactPage() {
  return <ContactPageContent />;
}
