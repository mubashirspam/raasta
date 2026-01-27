import { defineField, defineType } from "sanity";

export const teamMember = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "role",
      title: "Role/Position",
      type: "string",
    }),
    defineField({
      name: "section",
      title: "Team Section",
      type: "string",
      options: {
        list: [
          { title: "Founders", value: "founders" },
          { title: "Management Team", value: "management" },
          { title: "Media Team", value: "media" },
          { title: "Elite Agents", value: "elite_agents" },
          { title: "Sales Team", value: "sales" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp",
      type: "string",
    }),
    defineField({
      name: "linkedinUrl",
      title: "LinkedIn URL",
      type: "url",
      description:
        "Full LinkedIn profile URL (e.g., https://linkedin.com/in/username)",
    }),
    defineField({
      name: "socialLink",
      title: "Connect Link (Primary)",
      type: "url",
      description:
        "Primary contact link (LinkedIn, WhatsApp, or any social media)",
    }),
    defineField({
      name: "languages",
      title: "Languages",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "specializations",
      title: "Specializations",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
      initialValue: 0,
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "section",
      media: "image",
    },
    prepare({ title, subtitle, media }) {
      const sectionLabels: Record<string, string> = {
        founders: "Founders",
        management: "Management Team",
        media: "Media Team",
        elite_agents: "Elite Agents",
        sales: "Sales Team",
      };
      return {
        title,
        subtitle: sectionLabels[subtitle] || subtitle,
        media,
      };
    },
  },
});
