import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kirchliche-pilgerplätze.de";
  return [{ url: base, changeFrequency: "weekly", priority: 1 }];
}
