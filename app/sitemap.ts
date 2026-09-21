import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: SITE.domain, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.domain}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.domain}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
