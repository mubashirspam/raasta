import { NextRequest, NextResponse } from "next/server";
import { createConsultationSubmission } from "@/lib/submissions";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { name, phone, email, preferredTime } = body;

    if (!name || !phone || !email || !preferredTime) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Get metadata
    const ipAddress =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";

    // Create submission
    const result = await createConsultationSubmission(
      { name, phone, email, preferredTime },
      { ipAddress, userAgent },
    );

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: "Consultation booked successfully",
      submissionId: result.data?._id,
    });
  } catch (error) {
    console.error("Consultation booking error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
