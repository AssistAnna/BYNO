// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      gtagId: "G-F2VTF79CTN",
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      title: 'Studio Byno',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Agence de sound desin et communication audiovisuelle.' },
        { name: 'description', content: "Vidéo d'enteprise, sound design, communication digitale" },
        { name: 'image', content: 'https://www.studio-byno.fr/img/logo-fond-noir.png'}
      ],
    }
  },
  modules: [
    'nuxt-aos', '@nuxt/image'
  ],
  pages: true,

  aos : {
    duration: 900,
    offset: 60,
  }
})
