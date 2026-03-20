// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // ──────────────────────────────────────────────
    // Совместимость с Nuxt 4
    // ──────────────────────────────────────────────
    future: {
        compatibilityVersion: 4,
    },

    // Дата совместимости — фиксирует поведение breaking changes
    compatibilityDate: '2025-01-01',

    // ──────────────────────────────────────────────
    // Статическая генерация для GitHub Pages
    // ──────────────────────────────────────────────
    nitro: {
        preset: 'github-pages',
    },

    // ──────────────────────────────────────────────
    // Модули Nuxt
    // ──────────────────────────────────────────────
    // - @nuxt/ui: UI-система v4 (Reka UI + Tailwind CSS v4)
    // - @nuxt/image: оптимизация изображений (WebP, AVIF, srcset)
    // - @nuxtjs/sitemap: автогенерация sitemap.xml
    // - @nuxtjs/robots: управление robots.txt
    // - @pinia/nuxt: интеграция Pinia для state management
    modules: [
        '@nuxt/ui',
        '@nuxt/image',
        '@nuxt/fonts',
        '@nuxtjs/sitemap',
        '@nuxtjs/robots',
        '@pinia/nuxt',
    ],

    // ──────────────────────────────────────────────
    // Глобальные настройки <head>
    // ──────────────────────────────────────────────
    app: {
        baseURL: '/Fasadstore.ru/',
        head: {
            htmlAttrs: { lang: 'ru' },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            ],
        },
    },

    // ──────────────────────────────────────────────
    // Правила рендеринга маршрутов
    // ──────────────────────────────────────────────
    // Все публичные маршруты используют SSG (prerender) —
    // HTML генерируется на этапе сборки для максимальной скорости и SEO
    routeRules: {
        '/': { prerender: true },
        '/about': { prerender: true },
        '/contacts': { prerender: true },
        '/objects': { prerender: true },
        '/windows': { prerender: true },
        '/windows/**': { prerender: true },
        '/doors': { prerender: true },
        '/doors/**': { prerender: true },
    },

    // ──────────────────────────────────────────────
    // Настройки сайта (используется модулями sitemap и robots)
    // ──────────────────────────────────────────────
    site: {
        url: 'https://aluproject.ru',
    },

    // ──────────────────────────────────────────────
    // Sitemap — автоматическая генерация из файловой маршрутизации
    // ──────────────────────────────────────────────
    sitemap: {},

    // ──────────────────────────────────────────────
    // Robots.txt — директивы для поисковых роботов
    // ──────────────────────────────────────────────
    robots: {
        robotsTxt: false,
        groups: [
            {
                userAgent: ['Googlebot', 'Yandex'],
                allow: ['/'],
            },
        ],
        sitemap: 'https://aluproject.ru/sitemap.xml',
    },

    // ──────────────────────────────────────────────
    // Оптимизация изображений (@nuxt/image)
    // ──────────────────────────────────────────────
    // Форматы WebP и AVIF для современных браузеров, качество 80%
    image: {
        format: ['webp', 'avif'],
        quality: 80,
    },

    // ──────────────────────────────────────────────
    // Оптимизация шрифтов (@nuxt/fonts)
    // ──────────────────────────────────────────────
    // Автоматический font-display: swap, предзагрузка критических шрифтов,
    // устранение render-blocking CSS для шрифтов
    fonts: {
        defaults: {
            weights: [400, 500, 600, 700],
        },
    },

    // ──────────────────────────────────────────────
    // TypeScript — строгий режим
    // ──────────────────────────────────────────────
    typescript: {
        strict: true,
    },

    // ──────────────────────────────────────────────
    // Глобальные CSS-файлы
    // ──────────────────────────────────────────────
    // Основная точка входа для Tailwind CSS v4 и Nuxt UI
    css: [
        '~/assets/css/main.css',
    ],

    // ──────────────────────────────────────────────
    // Vite — оптимизация зависимостей
    // ──────────────────────────────────────────────
    vite: {
        optimizeDeps: {
            include: [
                'swiper/modules',
                'swiper/vue',
            ],
        },
    },
})
