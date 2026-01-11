import { defineField, defineType } from "sanity";

export default defineType({
  name: "developer",
  title: "Developer",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Developer Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "active",
      title: "Active",
      type: "boolean",
      description: "Show this developer in the marquee",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "logo",
      order: "order",
    },
    prepare(selection) {
      const { title, media, order } = selection;
      return {
        title: title,
        subtitle: `Order: ${order}`,
        media: media,
      };
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
