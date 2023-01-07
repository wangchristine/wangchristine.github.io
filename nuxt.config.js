export default {
  target: 'static',
  router: {
    base: '/',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Blog - Chris',
    htmlAttrs: {
      lang: 'zh-Hant',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Chris Wang 學習前端、後端、伺服器...等的技術筆記，也包含了一些生活的點滴。少壯不努力，老大徒傷悲。' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:title'  , property: 'og:title'  , content: 'Blog - Chris'},
      { hid: 'og:description' , property: 'og:description' , content: 'Chris Wang 學習前端、後端、伺服器...等的技術筆記，也包含了一些生活的點滴。少壯不努力，老大徒傷悲。'},
      { hid: 'og:image' , property: 'og:image' , content: "/og-image.jpg"},
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1560209977522592',
        async: true,
        crossorigin: 'anonymous',
      },
      {
        src: 'https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v15.0&appId=854289189355040&autoLogAppEvents=1',
        async: true,
        crossorigin: 'anonymous',
        defer: true,
        nonce: "b4KNDGyF",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['element-ui/lib/theme-chalk/index.css', '@/assets/app.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/element-ui', '@/plugins/ga'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    liveEdit: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },

  generate: {
    fallback: true,
    async routes() {
      const { $content } = require('@nuxt/content');
      const allArticles = await $content({ deep: true })
        .only(['category', 'slug'])
        .fetch();

      return allArticles.map(
        (article) => '/article/' + article.category + '/' + article.slug
      );
    },
  },
};
