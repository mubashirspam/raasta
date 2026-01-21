import { NextRequest, NextResponse } from "next/server";
import { createContactSubmission } from "@/lib/submissions";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const {
      fullName,
      email,
      countryCode,
      phone,
      purpose,
      budgetRange,
      source,
    } = body;

    if (!fullName || !email || !phone || !purpose || !source) {
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
    const result = await createContactSubmission(
      {
        fullName,
        email,
        countryCode: countryCode || "+971",
        phone,
        purpose,
        budgetRange: budgetRange || "",
        source,
      },
      { ipAddress, userAgent },
    );

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
      submissionId: result.data?._id,
    });
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
