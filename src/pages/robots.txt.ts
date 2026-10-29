import type { APIRoute } from "astro";
import { site, indexingReady } from "../config/site";
export const GET: APIRoute = () => {
  return new Response(
    indexingReady
      ? `User-agent: *\nAllow: /\nSitemap: ${new URL("/sitemap.xml", site.canonicalUrl!).href}\n`
      : "User-agent: *\nDisallow: /\n",
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
};
