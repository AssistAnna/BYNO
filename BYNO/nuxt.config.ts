// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-aos'
  ],
  pages: true,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  aos : {
    duration: 900,
    offset: 60,
  }
})
