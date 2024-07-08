// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  router: {
    options: {
      hashMode: true,
      scrollBehaviorType: 'smooth',
    }
  },
  css: [
    '~/assets/style/main.scss'
  ],
  build: {
    loaders: {
      scss: {
        implementation: require('sass')
      }
    }
  },
  plugins: [
    '~/plugins/smooth-scroll.js'
  ]
})
