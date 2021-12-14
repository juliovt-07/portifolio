export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SOU O JULIO',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Olá, sou Júlio, um Desenvolvedor aventureiro no mundo UI/UX, e entusiasmado por criar o mais agradável aos olhos e consoles.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'author', content: 'Julio Cesar' },
      { name: 'keywords', content: 'front, end, julio, julio cesar, desenvolvedor, ui/ux, ui, ux, site, ladingpage, sites, web, design, web design' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vuex-persist', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // Simple usage
    ['nuxt-scss-to-js']
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
