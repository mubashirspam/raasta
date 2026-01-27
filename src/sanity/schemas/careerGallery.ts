import { defineField, defineType } from "sanity";

export const careerGallery = defineType({
  name: "careerGallery",
  title: "Career Gallery",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Image Title",
      type: "string",
      description: "e.g., Team Outing, Training Session, Office Photos",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Office Photos", value: "office" },
          { title: "Team Events", value: "team_events" },
          { title: "Training Sessions", value: "training" },
          { title: "Festive Celebrations", value: "celebrations" },
        ],
      },
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
      initialValue: 0,
    }),
    defineField({
      name: "active",
      title: "Active",
      type: "boolean",
      description: "Only active images will be displayed",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      media: "image",
      active: "active",
    },
    prepare({ title, category, media, active }) {
      const categoryLabels: Record<string, string> = {
        office: "Office Photos",
        team_events: "Team Events",
        training: "Training Sessions",
        celebrations: "Festive Celebrations",
      };
      return {
        title: `${title} ${!active ? "(Inactive)" : ""}`,
        subtitle: categoryLabels[category] || category,
        media,
      };
    },
  },
});
