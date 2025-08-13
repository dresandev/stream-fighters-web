// @ts-check
import vercel from "@astrojs/vercel"
import { defineConfig } from "astro/config"
import path from "node:path"

export default defineConfig({
  output: "server",
  adapter: vercel(),
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
})
