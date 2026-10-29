import type { APIRoute } from "astro";
import { site, publicUrl } from "../config/site";
export const GET: APIRoute = () => {
  const routes = [
    "/",
    "/research",
    "/workers",
    "/get-involved",
    "/updates",
    "/privacy",
  ];
  const urls = site.canonicalUrl
    ? routes
        .map(
          (route) =>
            `<url><loc>${publicUrl(route)!.replaceAll("&", "&amp;")}</loc></url>`,
        )
        .join("")
    : "";
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
