import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  trailingSlash: "never",
  devToolbar: { enabled: false },
  build: { format: "directory" },
});
