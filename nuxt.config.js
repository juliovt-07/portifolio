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
      { property: "og:site_name", content: "SOU O JULIO" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://julioeu.vercel.app",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Júlio - Portifólio",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Um Desenvolvedor aventureiro no mundo UI/UX, e entusiasmado por criar o mais agradável aos olhos e consoles.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/logo.png",
      },
      { hid: 'description', name: 'description', content: 'Um Desenvolvedor aventureiro no mundo UI/UX, e entusiasmado por criar o mais agradável aos olhos e consoles.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'author', content: 'Julio Cesar' },
      { name: 'copyright', content: '© 2021 Julio Cesar' },
      { name: 'rating', content: 'general' },
      { name: 'keywords', content: 'front, end, julio, julio cesar, desenvolvedor, ui/ux, ui, ux, site, ladingpage, sites, web, design, web design' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        hid: "canonical",
        rel: "canonical",
        href: "https://julioeu.vercel.app",
      },
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
