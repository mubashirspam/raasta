import { getAgents } from "@/sanity/lib";
import { NextResponse } from "next/server";

// Force dynamic rendering - no caching
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const agents = await getAgents();

    const formattedAgents = agents.map((agent: any) => ({
      _id: agent._id,
      name: agent.name,
      role: agent.role,
      specializations: agent.specializations || [],
      image: agent.image?.asset?.url || null,
      phone: agent.phone,
      email: agent.email,
      whatsapp: agent.whatsapp,
      languages: agent.languages || [],
      bio: agent.bio,
      featured: agent.featured,
      slug: agent.slug,
    }));

    return NextResponse.json(formattedAgents);
  } catch (error) {
    console.error("Error fetching agents:", error);
    return NextResponse.json(
      { error: "Failed to fetch agents" },
      { status: 500 },
    );
  }
}
