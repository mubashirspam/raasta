import { Metadata } from "next";
import { getTeamMembersBySection } from "@/sanity/lib";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About Us — Our Story, Mission & Team",
  description:
    "Raasta Realty is Dubai's purpose-driven real estate consultancy. Meet our RERA-certified team, learn our mission, and discover why 6% of every deal goes to charity. Built on trust, transparency & impact.",
  keywords: [
    "about raasta realty",
    "dubai real estate company",
    "raasta realty mission",
    "raasta realty vision",
    "dubai property company",
    "raasta realty team",
    "purpose driven real estate",
    "charity real estate Dubai",
    "RERA certified company Dubai",
  ],
  alternates: {
    canonical: "https://www.raastarealty.com/about",
  },
  openGraph: {
    title: "About Raasta Realty — Our Story, Mission & Team",
    description:
      "Dubai's purpose-driven real estate consultancy. Meet our team and discover why 6% of every deal goes to charity.",
    url: "https://www.raastarealty.com/about",
  },
};

// Use a short revalidation time as fallback (5 minutes)
// Primary updates come from Sanity webhooks for instant changes
export const revalidate = 300;

export default async function AboutPage() {
  const teamMembers = await getTeamMembersBySection();

  return <AboutPageContent teamMembers={teamMembers} />;
}
