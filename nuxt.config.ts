import type { ViteConfig } from "nuxt/schema";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@pinia/nuxt",
    "@primevue/nuxt-module",
    "@nuxt/eslint",
    "@nuxtjs/google-fonts",
  ],
  ssr: false,
  devtools: { enabled: true },
  css: ["/assets/css/main.css"],
  compatibilityDate: "2024-11-01",
  vite: {
    server: {
      host: process.env.APP_HOST,
      port: process.env.APP_PORT,
      watch: {
        usePolling: true,
      },
    } as ViteConfig["server"],
  },
  eslint: {
    config: {
      stylistic: {
        quotes: "double",
        indent: 2,
        semi: true,
      },
    },
  },
  googleFonts: {
    families: {
      Prompt: true,
    },
  },
  primevue: {
    autoImport: false,
    components: {
      prefix: "prime",
      include: ["Card"],
    },
  },
});
