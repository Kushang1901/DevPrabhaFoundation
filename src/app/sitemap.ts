import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dpf.org.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "", changeFrequency: "weekly", priority: 1.0 },
    { path: "/donate", changeFrequency: "weekly", priority: 0.95 },
    { path: "/projects", changeFrequency: "monthly", priority: 0.9 },
    { path: "/about", changeFrequency: "monthly", priority: 0.85 },
    { path: "/activities", changeFrequency: "weekly", priority: 0.85 },
    { path: "/join", changeFrequency: "monthly", priority: 0.8 },
    { path: "/gallery", changeFrequency: "weekly", priority: 0.75 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.75 },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
