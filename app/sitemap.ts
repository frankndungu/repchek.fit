import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";

// The landing page and the two legal pages. The workout app lives on its
// own host (app.repchek.fit) and is not listed here. lastModified is the
// build time, as on lobocon.co, so each deploy tells Google to look again.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: SITE_URL, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
