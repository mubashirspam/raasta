import { defineType } from "sanity";

export const contactSubmission = defineType({
  name: "contactSubmission",
  title: "Contact Submissions",
  type: "document",
  fields: [
    {
      name: "fullName",
      title: "Full Name",
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
      name: "countryCode",
      title: "Country Code",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "purpose",
      title: "Purpose",
      type: "string",
      options: {
        list: [
          { title: "Investment", value: "investment" },
          { title: "Career", value: "career" },
        ],
      },
    },
    {
      name: "budgetRange",
      title: "Budget Range",
      type: "string",
    },
    {
      name: "source",
      title: "Form Source",
      type: "string",
      options: {
        list: [
          { title: "Contact Form", value: "contact_form" },
          { title: "Contact Modal", value: "contact_modal" },
        ],
      },
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
          { title: "Qualified", value: "qualified" },
          { title: "Converted", value: "converted" },
          { title: "Closed", value: "closed" },
        ],
      },
      initialValue: "new",
    },
    {
      name: "notes",
      title: "Internal Notes",
      type: "text",
      description: "Add any notes or follow-up details",
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
      title: "fullName",
      subtitle: "email",
      purpose: "purpose",
      date: "submittedAt",
    },
    prepare({ title, subtitle, purpose, date }) {
      const formattedDate = date
        ? new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })
        : "";
      return {
        title: title || "Unnamed Submission",
        subtitle: `${subtitle || ""} • ${purpose || ""} • ${formattedDate}`,
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
