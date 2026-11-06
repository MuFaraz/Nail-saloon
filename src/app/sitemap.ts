import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { posts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/gallery", "/promotions", "/blog", "/contact", "/policy"];
  const now = new Date();
  return [
    ...pages.map((p) => ({
      url: `${site.url}${p}`,
      lastModified: now,
      changeFrequency: (p === "" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: p === "" ? 1 : 0.7,
    })),
    ...posts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
