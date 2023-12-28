// https://nuxt.com/docs/api/configuration/nuxt-config
require('dotenv').config();

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    'nuxt-primevue'
  ],
  primevue: {
    components: {
      prefix: 'Prime',
      includes: '*'
    }
  },
  css: ['primevue/resources/themes/lara-light-green/theme.css']
})
