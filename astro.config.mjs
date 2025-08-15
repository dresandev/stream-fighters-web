// @ts-check
import { defineConfig, envField } from "astro/config"
import vercel from "@astrojs/vercel"
import sitemap from "@astrojs/sitemap"

export default defineConfig({
  site: "https://stream-fighters-web.vercel.app",
  output: "server",
  adapter: vercel(),
  integrations: [sitemap()],
  env: {
    schema: {
      HOST_URL: envField.string({ context: "client", access: "public" }),
    },
  },
})
