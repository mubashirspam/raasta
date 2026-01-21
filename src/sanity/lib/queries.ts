import { client } from "./client";

export async function getAgents() {
  const query = `*[_type == "agent"] | order(featured desc, name asc) {
    _id,
    name,
    slug,
    role,
    phone,
    email,
    whatsapp,
    languages,
    specializations,
    bio,
    featured,
    image {
      asset -> {
        url
      }
    }
  }`;

  try {
    const agents = await client.fetch(query);
    return agents;
  } catch (error) {
    console.error("Error fetching agents from Sanity:", error);
    return [];
  }
}

export async function getAgentBySlug(slug: string) {
  const query = `*[_type == "agent" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    role,
    phone,
    email,
    whatsapp,
    languages,
    specializations,
    bio,
    featured,
    image {
      asset -> {
        url
      }
    }
  }`;

  try {
    const agent = await client.fetch(query, { slug });
    return agent;
  } catch (error) {
    console.error("Error fetching agent from Sanity:", error);
    return null;
  }
}

export async function getFeaturedAgents() {
  const query = `*[_type == "agent" && featured == true] | order(name asc) {
    _id,
    name,
    slug,
    role,
    phone,
    email,
    whatsapp,
    languages,
    specializations,
    bio,
    featured,
    image {
      asset -> {
        url
      }
    }
  }`;

  try {
    const agents = await client.fetch(query);
    return agents;
  } catch (error) {
    console.error("Error fetching featured agents from Sanity:", error);
    return [];
  }
}

export async function getProperties() {
  const query = `*[_type == "property"] | order(featured desc, publishedAt desc) {
    _id,
    title,
    slug,
    price,
    pricePerSqft,
    bedrooms,
    bathrooms,
    area,
    propertyType,
    status,
    location,
    address,
    description,
    features,
    amenities,
    featured,
    mainImage {
      asset -> {
        url
      }
    },
    images[] {
      asset -> {
        url
      }
    }
  }`;

  try {
    const properties = await client.fetch(query);
    return properties;
  } catch (error) {
    console.error("Error fetching properties from Sanity:", error);
    return [];
  }
}

export async function getFeaturedProperties() {
  const query = `*[_type == "property" && featured == true] | order(publishedAt desc)[0...6] {
    _id,
    title,
    slug,
    price,
    bedrooms,
    bathrooms,
    area,
    propertyType,
    status,
    location,
    featured,
    mainImage {
      asset -> {
        url
      }
    }
  }`;

  try {
    const properties = await client.fetch(query);
    return properties;
  } catch (error) {
    console.error("Error fetching featured properties from Sanity:", error);
    return [];
  }
}

export async function getPropertyBySlug(slug: string) {
  const query = `*[_type == "property" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    price,
    pricePerSqft,
    bedrooms,
    bathrooms,
    area,
    propertyType,
    status,
    location,
    address,
    coordinates,
    description,
    features,
    amenities,
    featured,
    publishedAt,
    mainImage {
      asset -> {
        url
      }
    },
    images[] {
      asset -> {
        url
      }
    }
  }`;

  try {
    const property = await client.fetch(query, { slug });
    return property;
  } catch (error) {
    console.error("Error fetching property from Sanity:", error);
    return null;
  }
}

export async function getTestimonials() {
  const query = `*[_type == "testimonial"] | order(order asc, publishedAt desc) {
    _id,
    name,
    role,
    purchase,
    content,
    rating,
    featured,
    image {
      asset -> {
        url
      }
    }
  }`;

  try {
    const testimonials = await client.fetch(query);
    return testimonials;
  } catch (error) {
    console.error("Error fetching testimonials from Sanity:", error);
    return [];
  }
}

export async function getFeaturedTestimonials() {
  const query = `*[_type == "testimonial" && featured == true] | order(order asc, publishedAt desc) {
    _id,
    name,
    role,
    purchase,
    content,
    rating,
    featured,
    image {
      asset -> {
        url
      }
    }
  }`;

  try {
    const testimonials = await client.fetch(query);
    return testimonials;
  } catch (error) {
    console.error("Error fetching featured testimonials from Sanity:", error);
    return [];
  }
}

export async function getDevelopers() {
  const query = `*[_type == "developer" && active == true] | order(order asc) {
    _id,
    name,
    logo {
      asset -> {
        url
      }
    },
    order
  }`;

  try {
    const developers = await client.fetch(query);
    return developers;
  } catch (error) {
    console.error("Error fetching developers from Sanity:", error);
    return [];
  }
}

export async function getGalleryMedia() {
  const query = `*[_type == "galleryItem"] | order(order asc) {
    _id,
    title,
    mediaType,
    video {
      asset -> {
        url
      }
    },
    image {
      asset -> {
        url
      }
    },
    likes,
    order
  }`;

  try {
    const media = await client.fetch(query);
    return media;
  } catch (error) {
    console.error("Error fetching gallery media from Sanity:", error);
    return [];
  }
}

// Keep the old function name for backward compatibility
export async function getGalleryVideos() {
  return getGalleryMedia();
}

export async function getTeamMembers(section?: string) {
  const sectionFilter = section ? ` && section == "${section}"` : "";
  const query = `*[_type == "teamMember"${sectionFilter}] | order(order asc) {
    _id,
    name,
    slug,
    role,
    section,
    bio,
    phone,
    email,
    whatsapp,
    languages,
    specializations,
    featured,
    order,
    image {
      asset -> {
        url
      }
    }
  }`;

  try {
    const members = await client.fetch(query);
    return members;
  } catch (error) {
    console.error("Error fetching team members from Sanity:", error);
    return [];
  }
}

export async function getTeamMembersBySection() {
  const query = `{
    "founders": *[_type == "teamMember" && section == "founders"] | order(order asc) {
      _id, name, slug, role, section, bio, phone, email, whatsapp, languages, specializations, featured, order,
      image { asset -> { url } }
    },
    "management": *[_type == "teamMember" && section == "management"] | order(order asc) {
      _id, name, slug, role, section, bio, phone, email, whatsapp, languages, specializations, featured, order,
      image { asset -> { url } }
    },
    "media": *[_type == "teamMember" && section == "media"] | order(order asc) {
      _id, name, slug, role, section, bio, phone, email, whatsapp, languages, specializations, featured, order,
      image { asset -> { url } }
    },
    "elite_agents": *[_type == "teamMember" && section == "elite_agents"] | order(order asc) {
      _id, name, slug, role, section, bio, phone, email, whatsapp, languages, specializations, featured, order,
      image { asset -> { url } }
    },
    "sales": *[_type == "teamMember" && section == "sales"] | order(order asc) {
      _id, name, slug, role, section, bio, phone, email, whatsapp, languages, specializations, featured, order,
      image { asset -> { url } }
    }
  }`;

  try {
    const members = await client.fetch(query);
    return members;
  } catch (error) {
    console.error("Error fetching team members by section from Sanity:", error);
    return {
      founders: [],
      management: [],
      media: [],
      elite_agents: [],
      sales: [],
    };
  }
}
