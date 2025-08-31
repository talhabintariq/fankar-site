export const allServicesQuery = `*[_type == "service"] | order(title asc){
  _id, title, "slug": slug.current, description, tech, image
}`;

export const serviceBySlugQuery = `*[_type == "service" && slug.current == $slug][0]{
  _id, title, "slug": slug.current, description, tech, image
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{ title, tagline, logo, social }`;
