import type { MetadataRoute } from "next";

const SITE_URL = "https://matangi-production.up.railway.app";

const routes = [
  "",
  "/about",
  "/philosophy",
  "/hymns",
  "/kavacham",
  "/mantras",
  "/names",
  "/gallery",
  "/meditations",
  "/journal",
  "/library",
  "/sanctuary",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
