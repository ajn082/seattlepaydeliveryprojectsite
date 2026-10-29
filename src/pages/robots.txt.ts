import type { APIRoute } from "astro";
import { indexingReady, publicUrl } from "../config/site";
export const GET: APIRoute = () => {
  return new Response(
    indexingReady
      ? `User-agent: *\nAllow: /\nSitemap: ${publicUrl("/sitemap.xml")}\n`
      : "User-agent: *\nDisallow: /\n",
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
};
