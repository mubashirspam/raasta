export { property } from "./property";
export { agent } from "./agent";
export { galleryItem } from "./gallery";
export { testimonial } from "./testimonial";
export { default as developer } from "./developer";

import { property } from "./property";
import { agent } from "./agent";
import { galleryItem } from "./gallery";
import { testimonial } from "./testimonial";
import developer from "./developer";

export const schemaTypes = [
  property,
  agent,
  galleryItem,
  testimonial,
  developer,
];
