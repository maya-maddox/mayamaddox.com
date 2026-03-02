// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://mayamaddox.com",
  integrations: [sitemap(), icon()],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});