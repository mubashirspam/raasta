import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// This API route is called by Sanity webhooks to trigger instant revalidation
// Only revalidates when you actually publish/update content in Sanity
export async function POST(request: NextRequest) {
  try {
    // Verify the request is from Sanity using a secret token
    const secret = request.nextUrl.searchParams.get("secret");

    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json(
        { message: "Invalid secret token" },
        { status: 401 },
      );
    }

    // Get the webhook payload from Sanity
    const body = await request.json();
    const documentType = body._type;

    console.log("🔄 Revalidation triggered for:", documentType);

    // Revalidate specific paths based on what was updated
    const pathsToRevalidate = new Set<string>();

    // Always revalidate home page
    pathsToRevalidate.add("/");

    // Revalidate specific pages based on content type
    switch (documentType) {
      case "testimonial":
        pathsToRevalidate.add("/");
        break;

      case "property":
        pathsToRevalidate.add("/");
        pathsToRevalidate.add("/properties");
        break;

      case "agent":
        pathsToRevalidate.add("/");
        break;

      case "teamMember":
        pathsToRevalidate.add("/about");
        break;

      case "developer":
        pathsToRevalidate.add("/");
        break;

      case "galleryItem":
        pathsToRevalidate.add("/");
        break;

      default:
        // Revalidate all main pages if unknown type
        pathsToRevalidate.add("/");
        pathsToRevalidate.add("/about");
        pathsToRevalidate.add("/properties");
    }

    // Execute revalidation for all paths
    const revalidationPromises = Array.from(pathsToRevalidate).map((path) =>
      revalidatePath(path),
    );

    await Promise.all(revalidationPromises);

    console.log("✅ Revalidated paths:", Array.from(pathsToRevalidate));

    return NextResponse.json({
      revalidated: true,
      paths: Array.from(pathsToRevalidate),
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("❌ Revalidation error:", error);
    return NextResponse.json(
      {
        message: "Error revalidating",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}

// Allow GET requests for testing
export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json(
      { message: "Invalid secret token" },
      { status: 401 },
    );
  }

  return NextResponse.json({
    message: "Revalidation endpoint is working",
    usage: "Send POST request with Sanity webhook payload",
  });
}
