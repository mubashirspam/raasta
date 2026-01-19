import { getTeamMembersBySection } from "@/sanity/lib";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const teamMembers = await getTeamMembersBySection();

    return NextResponse.json(teamMembers);
  } catch (error) {
    console.error("Error fetching team members:", error);
    return NextResponse.json(
      { error: "Failed to fetch team members" },
      { status: 500 }
    );
  }
}
