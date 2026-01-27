import { StructureBuilder } from "sanity/desk";
import {
  FileText,
  Gift,
  MessageSquare,
  Users,
  Building2,
  Image,
  Star,
  BriefcaseBusiness,
  Briefcase,
  Camera,
} from "lucide-react";

export const structure = (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      // Form Submissions Section
      S.listItem()
        .title("Form Submissions")
        .icon(MessageSquare)
        .child(
          S.list()
            .title("Form Submissions")
            .items([
              S.listItem()
                .title("Contact Submissions")
                .icon(FileText)
                .child(
                  S.documentTypeList("contactSubmission")
                    .title("Contact Submissions")
                    .filter('_type == "contactSubmission"')
                    .defaultOrdering([
                      { field: "submittedAt", direction: "desc" },
                    ])
                    .child((documentId) =>
                      S.document()
                        .documentId(documentId)
                        .schemaType("contactSubmission"),
                    ),
                ),
              S.listItem()
                .title("Consultation Bookings")
                .icon(Gift)
                .child(
                  S.documentTypeList("consultationSubmission")
                    .title("Consultation Bookings")
                    .filter('_type == "consultationSubmission"')
                    .defaultOrdering([
                      { field: "submittedAt", direction: "desc" },
                    ])
                    .child((documentId) =>
                      S.document()
                        .documentId(documentId)
                        .schemaType("consultationSubmission"),
                    ),
                ),
            ]),
        ),

      S.divider(),

      // Job Positions
      S.listItem()
        .title("Job Positions")
        .icon(Briefcase)
        .child(
          S.documentTypeList("jobPosition")
            .title("All Job Positions")
            .filter('_type == "jobPosition"')
            .defaultOrdering([{ field: "order", direction: "asc" }]),
        ),

      // Career Gallery (Life at Raasta)
      S.listItem()
        .title("Career Gallery")
        .icon(Camera)
        .child(
          S.documentTypeList("careerGallery")
            .title("Life at Raasta Images")
            .filter('_type == "careerGallery"')
            .defaultOrdering([{ field: "order", direction: "asc" }]),
        ),

      S.divider(),

      // Properties
      S.listItem()
        .title("Properties")
        .icon(Building2)
        .child(
          S.documentTypeList("property")
            .title("All Properties")
            .filter('_type == "property"'),
        ),

      // Agents
      S.listItem()
        .title("Agents")
        .icon(Users)
        .child(
          S.documentTypeList("agent")
            .title("All Agents")
            .filter('_type == "agent"'),
        ),

      // Team Members
      S.listItem()
        .title("Team Members")
        .icon(BriefcaseBusiness)
        .child(
          S.documentTypeList("teamMember")
            .title("All Team Members")
            .filter('_type == "teamMember"'),
        ),

      // Gallery
      S.listItem()
        .title("Gallery")
        .icon(Image)
        .child(
          S.documentTypeList("galleryItem")
            .title("Gallery Items")
            .filter('_type == "galleryItem"'),
        ),

      // Testimonials
      S.listItem()
        .title("Testimonials")
        .icon(Star)
        .child(
          S.documentTypeList("testimonial")
            .title("All Testimonials")
            .filter('_type == "testimonial"'),
        ),

      // Developers
      S.listItem()
        .title("Developers")
        .icon(Building2)
        .child(
          S.documentTypeList("developer")
            .title("All Developers")
            .filter('_type == "developer"'),
        ),
    ]);
