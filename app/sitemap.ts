import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// Bump this only when app/page.tsx's content actually changes - using
// new Date() here would falsely signal "changed" to crawlers on every
// deploy, even ones with zero content changes.
const CONTENT_LAST_MODIFIED = new Date("2026-09-26");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kirchliche-pilgerplätze.de";
  return [
    { url: base, lastModified: CONTENT_LAST_MODIFIED, changeFrequency: "weekly", priority: 1 },
  ];
}
