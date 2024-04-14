// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    baseURL: '/',
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
  },
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxt/content'
  ],
  css: [
    '~/assets/app.css',
  ],
  content: {
    markdown: {
      anchorLinks: {
        depth: 3,
        exclude: [1]
      },
    },
    highlight: {
      theme: 'material-theme-palenight',
      langs: ['json', 'js', 'ts', 'html', 'css', 'vue', 'shell', 'mdc', 'md', 'yaml', 'php', 'docker'],
    },
  },
})