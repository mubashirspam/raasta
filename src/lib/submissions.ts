import { writeClient } from "@/sanity/lib/client";

interface ContactFormData {
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
  purpose: "investment" | "career";
  budgetRange: string;
  source: "contact_form" | "contact_modal";
}

interface ConsultationFormData {
  name: string;
  phone: string;
  email: string;
  preferredTime: string;
}

interface SubmissionMetadata {
  ipAddress?: string;
  userAgent?: string;
}

export async function createContactSubmission(
  data: ContactFormData,
  metadata?: SubmissionMetadata,
) {
  try {
    const submission = {
      _type: "contactSubmission",
      fullName: data.fullName,
      email: data.email,
      countryCode: data.countryCode,
      phone: data.phone,
      purpose: data.purpose,
      budgetRange: data.budgetRange,
      source: data.source,
      status: "new",
      submittedAt: new Date().toISOString(),
      ...(metadata?.ipAddress && { ipAddress: metadata.ipAddress }),
      ...(metadata?.userAgent && { userAgent: metadata.userAgent }),
    };

    const result = await writeClient.create(submission);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error creating contact submission:", error);
    return { success: false, error: "Failed to submit form" };
  }
}

export async function createConsultationSubmission(
  data: ConsultationFormData,
  metadata?: SubmissionMetadata,
) {
  try {
    const submission = {
      _type: "consultationSubmission",
      name: data.name,
      phone: data.phone,
      email: data.email,
      preferredTime: data.preferredTime,
      status: "new",
      submittedAt: new Date().toISOString(),
      ...(metadata?.ipAddress && { ipAddress: metadata.ipAddress }),
      ...(metadata?.userAgent && { userAgent: metadata.userAgent }),
    };

    const result = await writeClient.create(submission);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error creating consultation submission:", error);
    return { success: false, error: "Failed to submit form" };
  }
}

// Keep old function for backward compatibility
export const createOfferSubmission = createConsultationSubmission;

// Export types
export type { ContactFormData, ConsultationFormData, SubmissionMetadata };
