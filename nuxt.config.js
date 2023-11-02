export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'KhoiAnh',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css',
      },
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/main.scss'],
  loading: {
    color: '#9ae29b',
    height: '2px',
  },
  styleResources: {
    scss: ['@/assets/scss/components/main.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/flowbite.client.ts', ssr: 'false' },
    { src: '~plugins/vue-tailwind.client.ts', ssr: 'false' },
    { src: '~plugins/axios.ts' },
    { src: '~plugins/repository.ts' },
    { src: '~plugins/vue-chart.client.ts', ssr: 'false' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components',
    { path: '~/components/layout/', prefix: '' },
    { path: '~/components/global/', prefix: '' },
    { path: '~/components/global/Alerts/', prefix: 'Alert' },
    { path: '~/components/global/Modals/', prefix: 'Modal' },
    { path: '~/components/global/Paginations/', prefix: 'Pagination' },
    { path: '~/components/global/SideBars/', prefix: 'Sidebar' },
    { path: '~/components/global/Tables/', prefix: 'Table' },
    { path: '~/components/global/Charts/', prefix: 'Chart' },
  ],

  pageTransition: 'page',

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/composition-api/module',
    '@nuxtjs/axios',
    '@nuxtjs/firebase',
    '@nuxtjs/router',
    '@nuxtjs/strapi',
    '@nuxt/content',
  ],
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    entities: ['products'],
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt',
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BASE_URL || 'http://localhost:1337/api/',
    browserBaseURL: 'http://localhost:1337/api/',
  },
  proxy: {
    '/api': {
      target: process.env.BASEURL,
      pathRewrite: { '^/api': '/api' },
      changeOrigin: true,
    },
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL,
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL,
    },
  },

  router: {
    // middleware: ['auth']
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  dirs: ['composables'],

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
    cache: false,
  },
  env: {
    baseUrl: process.env.BASE_URL || 'localhost',
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
      apiKey: 'AIzaSyD_PnQ0ONY4hiKHtp7iGSwnxJfxFY4G3iI',
      authDomain: 'pk21032023.firebaseapp.com',
      databaseURL:
        'https://pk21032023-default-rtdb.asia-southeast1.firebasedatabase.app',
      projectId: 'pk21032023',
      storageBucket: 'pk21032023.appspot.com',
      messagingSenderId: '41324712247',
      appId: '1:41324712247:web:1731838d313bed498b0ab2',
      measurementId: 'G-FL6DDYPRW9',
    },
    services: {
      auth: true,
      firestore: true,
    },
  },
}
