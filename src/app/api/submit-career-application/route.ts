import { NextRequest, NextResponse } from "next/server";
import { writeClient } from "@/sanity/lib/client";

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const countryCode = formData.get("countryCode") as string;
    const phone = formData.get("phone") as string;
    const position = formData.get("position") as string;
    const coverNote = formData.get("coverNote") as string;
    const cvFile = formData.get("cv") as File | null;

    // Validate required fields
    if (!fullName || !email || !phone || !position) {
      return NextResponse.json(
        { error: "Missing required fields: fullName, email, phone, position" },
        { status: 400 },
      );
    }

    // Get metadata
    const ipAddress =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";

    // Build the document
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const doc: any = {
      _type: "careerApplication",
      fullName,
      email,
      countryCode: countryCode || "+971",
      phone,
      position,
      coverNote: coverNote || "",
      status: "new",
      submittedAt: new Date().toISOString(),
      ipAddress,
      userAgent,
    };

    // Handle CV upload if provided
    if (cvFile && cvFile.size > 0) {
      // Validate file size
      if (cvFile.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: "CV file size must be under 2MB" },
          { status: 400 },
        );
      }

      // Validate file type
      if (!ALLOWED_TYPES.includes(cvFile.type)) {
        return NextResponse.json(
          { error: "CV must be a PDF or DOCX file" },
          { status: 400 },
        );
      }

      // Upload file to Sanity
      const buffer = Buffer.from(await cvFile.arrayBuffer());
      const asset = await writeClient.assets.upload("file", buffer, {
        filename: cvFile.name,
        contentType: cvFile.type,
      });

      doc.cv = {
        _type: "file",
        asset: {
          _type: "reference",
          _ref: asset._id,
        },
      };
      doc.cvFileName = cvFile.name;
    }

    // Create the document in Sanity
    const result = await writeClient.create(doc);

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully",
      submissionId: result._id,
    });
  } catch (error) {
    console.error("Career application submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
