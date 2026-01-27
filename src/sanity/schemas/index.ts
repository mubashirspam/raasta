export { property } from "./property";
export { agent } from "./agent";
export { galleryItem } from "./gallery";
export { testimonial } from "./testimonial";
export { default as developer } from "./developer";
export { teamMember } from "./teamMember";
export { contactSubmission } from "./contactSubmission";
export { consultationSubmission, offerSubmission } from "./offerSubmission";
export { jobPosition } from "./jobPosition";
export { careerGallery } from "./careerGallery";

import { property } from "./property";
import { agent } from "./agent";
import { galleryItem } from "./gallery";
import { testimonial } from "./testimonial";
import developer from "./developer";
import { teamMember } from "./teamMember";
import { contactSubmission } from "./contactSubmission";
import { consultationSubmission, offerSubmission } from "./offerSubmission";
import { jobPosition } from "./jobPosition";
import { careerGallery } from "./careerGallery";

export const schemaTypes = [
  property,
  agent,
  galleryItem,
  testimonial,
  developer,
  teamMember,
  contactSubmission,
  consultationSubmission,
  jobPosition,
  careerGallery,
];
