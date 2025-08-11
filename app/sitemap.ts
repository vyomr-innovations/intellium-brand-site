import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://intelliumtech.ai";
  const lastModified = new Date();
  return [
    {
      url: `${baseUrl}`,
      lastModified,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
    },
    {
      url: `${baseUrl}/#services`,
      lastModified,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified,
    },
  ];
}