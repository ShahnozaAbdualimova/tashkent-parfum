
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
<<<<<<< HEAD
  modules: ['@nuxtjs/tailwindcss'],
});
=======
  modules: ['@nuxtjs/tailwindcss']
})

  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Tashkent Parfum',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '_nuxt/public/favicon.svg' },
      ],
    },
  },
});
>>>>>>> 59ca00bb4a6b5c62613996cc975851540c4511a7
