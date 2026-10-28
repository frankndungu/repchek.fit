import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";

// The landing page is the only public page on this site. The workout app
// lives on its own host (app.repchek.fit) and is not listed here.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE_URL, changeFrequency: "monthly", priority: 1 }];
}
