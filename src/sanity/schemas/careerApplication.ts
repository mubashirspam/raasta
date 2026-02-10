import { defineField, defineType } from "sanity";

export const careerApplication = defineType({
  name: "careerApplication",
  title: "Career Applications",
  type: "document",
  fields: [
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "countryCode",
      title: "Country Code",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "position",
      title: "Applied Position",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coverNote",
      title: "Cover Note / Message",
      type: "text",
      rows: 4,
      description: "Optional message from the applicant",
    }),
    defineField({
      name: "cv",
      title: "CV / Resume",
      type: "file",
      options: {
        accept: ".pdf,.docx,.doc",
      },
      description: "PDF or DOCX, max 2MB",
    }),
    defineField({
      name: "cvFileName",
      title: "CV File Name",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "Reviewed", value: "reviewed" },
          { title: "Shortlisted", value: "shortlisted" },
          { title: "Interview", value: "interview" },
          { title: "Hired", value: "hired" },
          { title: "Rejected", value: "rejected" },
        ],
      },
      initialValue: "new",
    }),
    defineField({
      name: "notes",
      title: "Internal Notes",
      type: "text",
      description: "HR/Admin notes about this application",
    }),
    defineField({
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
      validation: (Rule) => Rule.required(),
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "ipAddress",
      title: "IP Address",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "userAgent",
      title: "User Agent",
      type: "string",
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: "fullName",
      subtitle: "position",
      status: "status",
      date: "submittedAt",
    },
    prepare({ title, subtitle, status, date }) {
      const statusLabels: Record<string, string> = {
        new: "🟡 New",
        reviewed: "🔵 Reviewed",
        shortlisted: "🟢 Shortlisted",
        interview: "🟣 Interview",
        hired: "✅ Hired",
        rejected: "🔴 Rejected",
      };
      const formattedDate = date
        ? new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })
        : "";
      return {
        title: title || "Unnamed Applicant",
        subtitle: `${subtitle || "General"} • ${statusLabels[status] || status || "New"} • ${formattedDate}`,
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
      title: "Position",
      name: "positionAsc",
      by: [{ field: "position", direction: "asc" }],
    },
    {
      title: "Status",
      name: "statusAsc",
      by: [{ field: "status", direction: "asc" }],
    },
  ],
});
