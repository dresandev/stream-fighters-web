// @ts-check
import vercel from "@astrojs/vercel"
import { defineConfig, envField } from "astro/config"

export default defineConfig({
  output: "server",
  adapter: vercel(),
  env: {
    schema: {
      HOST_URL: envField.string({ context: "client", access: "public" }),
    },
  },
})
