import { defineType } from "sanity";

export const consultationSubmission = defineType({
  name: "consultationSubmission",
  title: "Consultation Bookings",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: "preferredTime",
      title: "Preferred Time to Talk",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "Contacted", value: "contacted" },
          { title: "Scheduled", value: "scheduled" },
          { title: "Completed", value: "completed" },
          { title: "Cancelled", value: "cancelled" },
        ],
      },
      initialValue: "new",
    },
    {
      name: "notes",
      title: "Internal Notes",
      type: "text",
      description: "Add any notes or consultation details",
    },
    {
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
      validation: (Rule) => Rule.required(),
      initialValue: () => new Date().toISOString(),
    },
    {
      name: "ipAddress",
      title: "IP Address",
      type: "string",
      readOnly: true,
    },
    {
      name: "userAgent",
      title: "User Agent",
      type: "string",
      readOnly: true,
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "email",
      preferredTime: "preferredTime",
      date: "submittedAt",
    },
    prepare({ title, subtitle, preferredTime, date }) {
      const formattedDate = date
        ? new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })
        : "";
      return {
        title: title || "Unnamed Submission",
        subtitle: `${subtitle || ""} • ${preferredTime || ""} • ${formattedDate}`,
      };
    },
  },
  orderings: [
    {
      title: "Submission Date (Newest)",
      name: "submittedAtDesc",
      by: [{ field: "submittedAt", direction: "desc" }],
    },
    {
      title: "Submission Date (Oldest)",
      name: "submittedAtAsc",
      by: [{ field: "submittedAt", direction: "asc" }],
    },
  ],
});

// Keep old export for backward compatibility
export const offerSubmission = consultationSubmission;
