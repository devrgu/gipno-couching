import colors from 'vuetify/es5/util/colors'

export default {
    server: {
       port: 3000,
      host: '0.0.0.0',
   },
    axios: {
    baseURL: 'https://185.22.67.15:443',
  },
  head: {
    titleTemplate: '%s - serik.aubakirov',
    title: 'Терапия',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
      
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
      
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
      '@nuxtjs/axios',
    ['nuxt-mail', {
      message: {
        to: 'askeraubakirov15@gmail.com',
      },
      smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
          user: 'askeraubakirov15@gmail.com',
          pass: 'nigr vjas yhjz tksw'
        },
      },
    }],
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    },
      treeShake: true,
    defaultAssets: undefined
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
      extractCSS: true,
  }
}
