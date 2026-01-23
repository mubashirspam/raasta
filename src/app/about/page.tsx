import { Metadata } from "next";
import { getTeamMembersBySection } from "@/sanity/lib";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About Us | Raasta Realty Dubai",
  description:
    "Raasta Realty is more than a real estate company. It is a purpose-driven platform built to create long-term value, meaningful growth, and lasting impact.",
  keywords: [
    "about raasta realty",
    "dubai real estate company",
    "raasta realty mission",
    "raasta realty vision",
    "dubai property company",
  ],
};

// Disable automatic time-based revalidation
// We use on-demand revalidation via Sanity webhooks instead
export const revalidate = false;

export default async function AboutPage() {
  const teamMembers = await getTeamMembersBySection();

  return <AboutPageContent teamMembers={teamMembers} />;
}
