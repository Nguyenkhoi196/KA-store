export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Khởi Anh - Trang Chủ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Xưởng cán tôn Khởi Anh - cung cấp tôn sắt giá rẻ nhất thị trường',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/logo.jpg',
      },
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
      {
        src: './node_modules/flowbite/dist/flowbite.min.js',
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
    { src: '~plugins/flowbite.client.ts' },
    { src: '~plugins/vue-tailwind.client.ts' },
    { src: '~plugins/axios.ts' },
    { src: '~plugins/vue-chart.client.ts' },
    { src: '~plugins/vue-autosuggest.client.js' },
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
    '@nuxtjs/router',
    '@nuxtjs/strapi',
    '@nuxt/image',
    'cookie-universal-nuxt',
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
}
