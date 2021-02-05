export default {
  ssr: false,

  target: 'static',

  head: {
    title: 'Jeroen Claessens',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  css: [
  ],

  plugins: [
    { src: '~/plugins/VueFlagIcon.js', ssr: false },
    { src: '~/plugins/VueSmoothScroll.js' },
  ],

  components: true,

  buildModules: [
    '@nuxtjs/fontawesome',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    'nuxt-i18n',
    [
      '@netsells/nuxt-hotjar', {
        id: '2233325',
        sv: '6',
      },
    ],
  ],

  i18n: {
    lazy: true,
    langDir: './locales/',
    locales: [
      { code: 'en', iso: 'en', file: 'en.json' },
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,
    },
    // SEO is setup on index.vue to improve performance (see nuxt-i18n docs)
    seo: false,
  },

  fontawesome: {
    icons: {
      solid: [
        'faExternalLinkAlt',
      ],
      regular: [
        'faEnvelope',
      ],
      brands: [
        'faLinkedinIn',
        'faGithub',
        'faDiscord',
      ],
    },
  },

  loadingIndicator: {
    name: 'cube-grid',
    color: '#81e6d9',
    background: '#1a202c',
  },

  build: {
  },
};
