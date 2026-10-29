import { defineConfig } from "astro/config";
import { site } from "./src/config/site.ts";

export default defineConfig({
  site: site.canonicalUrl ? new URL(site.canonicalUrl).origin : undefined,
  base: process.env.SITE_BASE_PATH || "/",
  output: "static",
  trailingSlash: "never",
  devToolbar: { enabled: false },
  build: { format: "directory" },
});
