export default defineNuxtConfig({
  ssr: true,
  css: ['leaflet/dist/leaflet.css', '~/assets/css/main.css'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/leaflet',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxt/test-utils/module',
  ],
  app: {
    head: {
      title: 'Tashkent Parfum',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
    },
  },
  router: {
    trailingSlash: false,
  },
  vite: {
    test: {
      environment: 'happy-dom',
    },
  },
});
