// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  runtimeConfig: {
    API_URL: process.env.API_URL || 'https://jsonplaceholder.typicode.com', // Will be available on the server side only
  },

  modules: ['@pinia/nuxt'],

  app: {
    head: {
      title: "TODO APP",
    },
  },
})
