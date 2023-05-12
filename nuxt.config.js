export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'KhoiAnh',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/composition-api/module',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // '@nuxtjs/meta',
    // firebase
    '@nuxtjs/firebase',
    '@nuxtjs/router',
    // 'cookie-universal-nuxt',
    // '@nuxtjs/auth-next',
    // '@nuxtjs/moment',
    // '@nuxtjs/toast',
    // '@nuxtjs/proxy',
    // '@nuxtjs/style-resources',
    // '@nuxtjs/dotenv',
    '@nuxtjs/universal-storage'

  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  dirs: [
    'composables'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  // fontawesome
  fontawesome: {
    component: 'fa',
    suffix: false,
    icons: {
      solid: true,
      brands: true,
    },
  },
  // firebase
  firebase: {
    config: {
      apiKey: "AIzaSyD_PnQ0ONY4hiKHtp7iGSwnxJfxFY4G3iI",
      authDomain: "pk21032023.firebaseapp.com",
      databaseURL: "https://pk21032023-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "pk21032023",
      storageBucket: "pk21032023.appspot.com",
      messagingSenderId: "41324712247",
      appId: "1:41324712247:web:1731838d313bed498b0ab2",
      measurementId: "G-FL6DDYPRW9",
    },
    services: {
      auth: true,
      firestore: true,
    }
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'product-detail',
        path: '/market/:id',
        component: resolve(__dirname, 'pages/market/_id.vue'), // Đường dẫn tới component chi tiết sản phẩm
      });
    },
  },
}
