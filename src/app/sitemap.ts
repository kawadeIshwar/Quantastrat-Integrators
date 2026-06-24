import type { MetadataRoute } from "next";
import { JOBS } from "@/lib/jobs";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://quantastrat.com";
  const now = new Date();
  const staticPages = ["", "/about", "/services", "/careers", "/contact"].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.7
  }));
  const jobs = JOBS.map((j) => ({
    url: `${base}/careers/${j.slug}`,
    lastModified: new Date(j.postedAt),
    changeFrequency: "weekly" as const,
    priority: 0.6
  }));
  return [...staticPages, ...jobs];
}
