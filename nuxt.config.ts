export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2025-01-01',

  experimental: {
    defaults: {
      nuxtLink: { trailingSlash: 'append' }
    }
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@pinia/nuxt'
  ],

  ui: {
    colorMode: false
  },

  app: {
    baseURL: '/',
    head: {
      title: 'Алюминиевые системы Алютех',
      htmlAttrs: { lang: 'ru' },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        }
      ]
    }
  },

  routeRules: {
    '/': { prerender: true },
    '/about': { prerender: true },
    '/contacts': { prerender: true },
    '/objects': { prerender: true },
    '/windows': { prerender: true },
    '/windows/**': { prerender: true },
    '/doors': { prerender: true },
    '/doors/**': { prerender: true },
    '/terraces': { prerender: true }
  },

  site: {
    url: 'https://fasadstore.ru',
    trailingSlash: true
  },

  sitemap: {},

  robots: {
    robotsTxt: false,
    groups: [
      {
        userAgent: ['Googlebot', 'Yandex'],
        allow: ['/']
      }
    ],
    sitemap: 'https://fasadstore.ru/sitemap.xml'
  },

  image: {
    format: ['webp', 'avif'],
    quality: 80
  },

  fonts: {
    defaults: {
      weights: [400, 500, 600, 700]
    }
  },

  typescript: {
    strict: true
  },

  css: ['~/assets/css/main.css'],

  vite: {
    optimizeDeps: {
      include: ['swiper/modules', 'swiper/vue']
    }
  }
})
