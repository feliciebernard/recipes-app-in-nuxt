// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  experimental: {},

  image: {
    domains: ['https://dummyjson.com'],
  },

  unhead: {},

  devtools: { enabled: true },
  compatibilityDate: '2025-02-11',

  typescript: {
    typeCheck: true,
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/icon',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Montserrat: true,
          Roboto: true,
          Inter: [400, 700],
          'Josefin+Sans': true,
          Lato: [100, 300],
          Raleway: {
            wght: [100, 400],
            ital: [100],
          },
        },
      },
    ],
  ],

  runtimeConfig: {
    notionApiKey: process.env.NOTION_KEY,
    notionDatabaseId: process.env.NOTION_PAGE_ID,
  },
})
