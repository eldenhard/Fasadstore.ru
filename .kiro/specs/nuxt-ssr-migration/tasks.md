# План реализации: Миграция Vue 3 SPA → Nuxt 4 (SSG-first)

## Обзор

Поэтапная миграция коммерческого сайта с Vue 3 SPA (Vite + vue-router + GitHub Pages) на Nuxt 4 с SSG/prerender. Миграция выполняется в 5 фаз: инфраструктура → лейауты/компоненты → страницы/маршрутизация → SEO/оптимизация → вывод legacy. Язык реализации: TypeScript. UI-система: Nuxt UI v4 + Tailwind CSS v4.

## Задачи

- [x] 1. Фаза 1: Инфраструктура и конфигурация Nuxt 4

  - [x] 1.1 Инициализация Nuxt 4 проекта

    - Создать Nuxt 4 проект в директории `app/` (или переинициализировать корень)
    - Настроить `package.json` с зависимостями: `nuxt`, `@nuxt/ui`, `@nuxt/image`, `@nuxtjs/sitemap`, `@nuxtjs/robots`, `@pinia/nuxt`, `pinia`, `swiper`, `vue-yandex-maps`
    - Настроить `tsconfig.json` с `strict: true`
    - _Требования: 1.1, 1.2, 8.8, 9.2_

  - [x] 1.2 Настройка nuxt.config.ts

    - Создать `nuxt.config.ts` с модулями: `@nuxt/ui`, `@nuxt/image`, `@nuxtjs/sitemap`, `@nuxtjs/robots`, `@pinia/nuxt`
    - Настроить `app.head`: `lang="ru"`, charset, viewport, favicon
    - Настроить `routeRules` с `prerender: true` для всех публичных маршрутов: `/`, `/about`, `/contacts`, `/objects`, `/windows`, `/windows/**`, `/doors`, `/doors/**`
    - Настроить `site.url`, `sitemap`, `robots` (директивы для Yandex и Googlebot), `image` (форматы WebP/AVIF)
    - Настроить `typescript: { strict: true }` и `compatibilityDate`
    - _Требования: 1.4, 2.1–2.6, 3.5, 3.6, 3.12, 8.1–8.8_

  - [x] 1.3 Создание app/app.vue с обёрткой UApp

    - Создать `app/app.vue` с `<UApp>`, `<NuxtLayout>`, `<NuxtPage />`
    - Убрать старый loader из `src/App.vue`
    - _Требования: 8.7_

  - [x] 1.4 Создание основной CSS-точки входа для Nuxt UI v4

    - Создать `app/assets/css/main.css` с импортами: `@import "tailwindcss";` и `@import "@nuxt/ui";`
    - Подключить файл в `nuxt.config.ts` через `css: ['~/assets/css/main.css']`
    - _Требования: 8.6, 18.1, 18.2_

  - [x] 1.5 Настройка legacy-слоя Bootstrap (временный)

    - Создать клиентский плагин `app/plugins/bootstrap.client.ts` для загрузки Bootstrap JS только на клиенте
    - Подключить Bootstrap CSS как legacy-слой в `app/assets/css/legacy.scss`
    - _Требования: 10.1, 12.4_

  - [x] 1.6 Настройка клиентских плагинов для SSR-несовместимых библиотек
    - Создать `app/plugins/scroll-reveal.client.ts` для vue-scroll-reveal
    - Документировать причины клиентской изоляции каждой библиотеки
    - _Требования: 10.5, 10.7, 12.1_

- [x] 2. Контрольная точка — Проверка инфраструктуры

  - Убедиться, что `nuxt dev` запускается без ошибок
  - Убедиться, что все модули подключены корректно
  - При обнаружении проблем: задокументировать блокер, сформировать список unresolved issues, остановить переход к следующей фазе до закрытия блокеров

- [x] 3. Фаза 2: Лейауты и общие компоненты на Nuxt UI

  - [x] 3.1 Создание default layout

    - Создать `app/layouts/default.vue` со структурой: `AppNavbar` + `<main>` + `<slot />` + `AppFooter`
    - Использовать Tailwind CSS v4 для flex-layout (`min-h-screen flex flex-col`)
    - _Требования: 6.3, 9.3_

  - [x] 3.2 Миграция навигации — AppNavbar.vue

    - Создать `app/components/AppNavbar.vue` на Nuxt UI: `UNavigationMenu`, `UDropdownMenu` (меню «Продукция»), `UButton` (кнопка звонка), `UDrawer` (мобильное меню)
    - Реализовать responsive: полное меню на `lg:`, гамбургер + UDrawer на мобильных (<1024px)
    - Интегрировать sticky CTA (мобильный телефон) вместо отдельного `mobilePhone.vue`
    - Минимальный размер интерактивных элементов 44×44px на мобильных
    - _Требования: 4.2, 4.4, 18.6_

  - [x] 3.3 Миграция футера — AppFooter.vue

    - Создать `app/components/AppFooter.vue` на Tailwind CSS v4
    - Перенести контент и ссылки из `src/components/Footer/Footer.vue`
    - _Требования: 9.3, 18.5_

  - [x] 3.4 Создание компонента хлебных крошек — AppBreadcrumbs.vue

    - Создать `app/components/AppBreadcrumbs.vue` с использованием данных из `useBreadcrumbs()`
    - Отображать на всех страницах кроме главной
    - _Требования: 3.9, 3.10_

  - [x] 3.5 Миграция ContactBlock и ContactForm

    - Создать `app/components/ContactBlock.vue` на Tailwind CSS v4
    - Создать `app/components/ContactForm.vue` с `UInput`, `UTextarea`, `UButton`
    - Адаптировать поля ввода до полной ширины на мобильных (<768px)
    - _Требования: 4.7, 18.6_

  - [x] 3.6 Миграция DirectionWork компонентов

    - Создать `app/components/DirectionWork.vue` с Nuxt UI карточками (desktop)
    - Сохранить `app/components/DirectionWorkMobile.vue` как временный mobile-компонент
    - Использовать Tailwind responsive breakpoints для переключения
    - _Требования: 9.3, 15.1_

  - [x] 3.7 Миграция MiniAbout и PartnerBlock

    - Создать `app/components/MiniAbout.vue` на Tailwind CSS v4
    - Создать `app/components/PartnerBlock.vue` на Tailwind CSS v4
    - _Требования: 15.1, 18.5_

  - [x] 3.8 Миграция SliderHero с ClientOnly

    - Создать `app/components/SliderHero.vue` с Swiper 11
    - Обернуть в `<ClientOnly>` с fallback-заглушкой (`animate-pulse`)
    - Указать явные размеры для предотвращения CLS
    - _Требования: 4.3, 5.2, 10.3, 12.1_

  - [x] 3.9 Миграция ObjectsGallery

    - Создать `app/components/ObjectsGallery.vue` с `<NuxtImg>` для оптимизации изображений
    - Добавить `width`, `height`, `loading="lazy"` для изображений за пределами первого экрана
    - _Требования: 5.4, 5.5, 12.6_

  - [x] 3.10 Создание ProductCard и ProductTabs

    - Создать `app/components/ProductCard.vue` — карточка продукции
    - Создать `app/components/ProductTabs.vue` на `UTabs` для навигации между подтипами
    - Карточки в одну колонку на мобильных
    - _Требования: 4.9, 18.6_

  - [x] 3.11 Миграция Pinia store
    - Перенести `useModalStore` в `app/stores/modal.ts` без изменений
    - Использовать встроенную интеграцию Pinia в Nuxt 4
    - _Требования: 1.2, 10.6_

- [x] 4. Контрольная точка — Проверка компонентов

  - Убедиться, что все компоненты рендерятся без ошибок
  - Проверить отсутствие `window is not defined` ошибок
  - При обнаружении проблем: задокументировать блокер, сформировать список unresolved issues, остановить переход к следующей фазе до закрытия блокеров

- [x] 5. Фаза 3: Страницы и маршрутизация

  - [x] 5.1 Создание главной страницы — index.vue

    - Создать `app/pages/index.vue` с секциями: SliderHero, MiniAbout, DirectionWork/DirectionWorkMobile, PartnerBlock, ContactBlock
    - Подключить `useSeoMeta()` с уникальными title/description/OG для главной
    - Подключить `useCanonical()`, `useRobots()`
    - Подключить `useSchemaOrg()` с типом `Organization`
    - Обеспечить один `<h1>` на странице
    - _Требования: 2.1, 3.1, 3.2, 3.3, 3.4, 3.7, 3.11, 7.1, 7.2, 7.5_

  - [x] 5.2 Создание страницы «О компании» — about.vue

    - Создать `app/pages/about.vue` с контентом из текущих компонентов FullDescriptionCompany
    - Подключить SEO composables: `useSeoMeta()`, `useCanonical()`, `useRobots()`, `useBreadcrumbs()`
    - _Требования: 2.2, 3.1, 3.2, 3.9, 15.1_

  - [x] 5.3 Создание страницы «Контакты» — contacts.vue

    - Создать `app/pages/contacts.vue` с ContactForm и ContactBlock
    - Обернуть Яндекс.Карты в `<ClientOnly>` с fallback
    - Подключить SEO composables
    - _Требования: 2.3, 10.4, 12.5_

  - [x] 5.4 Создание страницы «Объекты» — objects.vue

    - Создать `app/pages/objects.vue` с ObjectsGallery
    - Подключить SEO composables
    - _Требования: 2.4, 15.1_

  - [x] 5.5 Создание хаб-страницы «Окна» — windows/index.vue

    - Создать `app/pages/windows/index.vue` как полноценную индексируемую хаб-страницу каталога окон
    - Включить ProductTabs с навигацией к подтипам: classic, panorama, hidden
    - Подключить SEO composables, `useSchemaOrg()` с BreadcrumbList
    - НЕ редирект — реальная страница с контентом
    - _Требования: 2.5, 3.8, 3.9, 14.1_

  - [x] 5.6 Создание страниц подтипов окон

    - Создать `app/pages/windows/classic.vue`, `panorama.vue`, `hidden.vue`
    - Перенести контент из текущих TypeWindow компонентов
    - Подключить SEO composables с уникальными мета-данными для каждой страницы
    - Подключить `useSchemaOrg()` с типом `Product`
    - _Требования: 2.5, 3.1, 3.8, 6.2, 15.1_

  - [x] 5.7 Создание хаб-страницы «Двери» — doors/index.vue

    - Создать `app/pages/doors/index.vue` как полноценную индексируемую хаб-страницу каталога дверей
    - Включить ProductTabs с навигацией к подтипам: hd, classic, balcony
    - Подключить SEO composables, `useSchemaOrg()` с BreadcrumbList
    - НЕ редирект — реальная страница с контентом
    - _Требования: 2.6, 3.8, 3.9, 14.1_

  - [x] 5.8 Создание страниц подтипов дверей

    - Создать `app/pages/doors/hd.vue`, `classic.vue`, `balcony.vue`
    - Перенести контент из текущих TypeDoors компонентов
    - Подключить SEO composables с уникальными мета-данными для каждой страницы
    - Подключить `useSchemaOrg()` с типом `Product`
    - _Требования: 2.6, 3.1, 3.8, 6.2, 15.1_

  - [x] 5.9 Создание страницы ошибки 404

    - Создать `app/error.vue` для кастомного отображения ошибок
    - Создать `app/pages/[...slug].vue` как catch-all: выбрасывать `createError({ statusCode: 404, statusMessage: 'Страница не найдена' })` для гарантии корректного HTTP 404 статуса (альтернатива: `setResponseStatus(useRequestEvent(), 404)`)
    - Добавить `useRobots({ index: false, follow: false })` в `error.vue`
    - _Требования: 14.5_

- [x] 6. Контрольная точка — Проверка маршрутизации

  - Убедиться, что все 12 маршрутов доступны и возвращают HTTP 200
  - Проверить, что URL-структура полностью совпадает с текущей
  - При обнаружении проблем: задокументировать блокер, сформировать список unresolved issues, остановить переход к следующей фазе до закрытия блокеров

- [x] 7. Фаза 4: SEO-composables и оптимизация

  - [x] 7.1 Реализация composable useSiteConfig

    - Создать `app/composables/useSiteConfig.ts` с конфигурацией сайта: siteName, siteUrl, defaultTitle, defaultDescription, defaultOgImage, locale, данные компании
    - _Требования: 7.6_

  - [x] 7.2 Реализация composable useCanonical

    - Создать `app/composables/useCanonical.ts`
    - Генерировать `<link rel="canonical">` с абсолютным URL на основе `useRequestURL()`
    - URL без query-параметров и hash-фрагментов
    - _Требования: 3.2, 7.2, 14.4_

  - [x] 7.3 Реализация composable useSchemaOrg

    - Создать `app/composables/useSchemaOrg.ts`
    - Поддержка типов: `Organization`, `Product`, `BreadcrumbList`
    - Генерация JSON-LD `<script type="application/ld+json">` через `useHead()`
    - _Требования: 3.7, 3.8, 3.9, 7.3_

  - [x] 7.4 Реализация composable useBreadcrumbs

    - Создать `app/composables/useBreadcrumbs.ts`
    - Автоматическая генерация хлебных крошек на основе `route.path`
    - Карта человекочитаемых названий для всех маршрутов
    - Первый элемент: «Главная» с `to: "/"`; последний — без `to`
    - Пустой массив для главной страницы `/`
    - _Требования: 3.9, 3.10, 7.4_

  - [x] 7.5 Реализация composable useRobots

    - Создать `app/composables/useRobots.ts`
    - Генерация `<meta name="robots">` через `useSeoMeta()`
    - Значение по умолчанию: `"index, follow"`
    - _Требования: 3.3, 7.5_

  - [x] 7.6 Настройка SEO-данных для всех маршрутов

    - Создать карту SEO-данных (`seoDataMap`) с уникальными title, description, OG-тегами для каждого из 12 маршрутов
    - Подключить SEO composables на каждой странице
    - Убедиться в уникальности title и description для каждого маршрута
    - _Требования: 3.1, 3.4, 17.1, 17.3_

  - [x] 7.7 Оптимизация изображений

    - Заменить `<img>` на `<NuxtImg>` во всех компонентах
    - Настроить `@nuxt/image` для генерации WebP/AVIF
    - Добавить `width`, `height` для всех изображений
    - Добавить `loading="lazy"` для изображений за пределами первого экрана
    - Настроить `placeholder` для отображения заглушки при загрузке
    - _Требования: 4.3, 5.1, 5.2, 5.4, 5.5, 12.6_

  - [x] 7.8 Оптимизация шрифтов и критического CSS
    - Настроить `font-display: swap` и предзагрузку критических шрифтов
    - Минимизировать render-blocking CSS
    - _Требования: 5.6, 5.8_

- [x] 8. Контрольная точка — Проверка SEO и оптимизации

  - Убедиться, что все страницы имеют уникальные мета-теги
  - Проверить наличие JSON-LD на соответствующих страницах
  - Проверить sitemap.xml содержит все 12 маршрутов
  - Проверить robots.txt содержит директивы для Yandex и Googlebot
  - При обнаружении проблем: задокументировать блокер, сформировать список unresolved issues, остановить переход к следующей фазе до закрытия блокеров

- [x] 9. Фаза 5: Вывод legacy-зависимостей и финализация

  - [x] 9.1 Удаление Bootstrap 5

    - Удалить Bootstrap CSS/JS из проекта
    - Удалить `app/plugins/bootstrap.client.ts`
    - Удалить `app/assets/css/legacy.scss`
    - Заменить оставшиеся Bootstrap-классы на Tailwind CSS v4
    - _Требования: 9.6, 18.3, 18.8_

  - [x] 9.2 Удаление PrimeVue 3

    - Заменить все оставшиеся PrimeVue компоненты на Nuxt UI эквиваленты
    - Удалить PrimeVue и primeicons из зависимостей
    - _Требования: 10.2, 18.4, 18.8_

  - [x] 9.3 Очистка legacy-зависимостей

    - Удалить `gh-pages`, `vite-plugin-sass`, `vite-plugin-image-optimizer` и другие неиспользуемые зависимости
    - Удалить старую директорию `src/` после полного переноса
    - Удалить `index.html` (Nuxt генерирует свой)
    - Обновить скрипты в `package.json` для Nuxt (`nuxt dev`, `nuxt build`, `nuxt generate`)
    - _Требования: 9.6, 18.8_

  - [x] 9.4 Настройка деплоя на Vercel/Netlify
    - Настроить конфигурацию деплоя для выбранной платформы
    - Настроить `nuxt generate` для SSG-сборки
    - Убедиться, что все prerender-маршруты генерируются корректно
    - _Требования: 1.3, 16.1_

- [x] 10. Финальная контрольная точка
  - Убедиться, что все 12 маршрутов возвращают HTTP 200 с полным HTML-контентом
  - Убедиться, что в production bundle нет Bootstrap и PrimeVue
  - Убедиться, что не используется более одной UI-библиотеки (только Nuxt UI v4)
  - При обнаружении проблем: задокументировать блокер, сформировать список unresolved issues до закрытия релиза

## Примечания

- Все задачи ссылаются на конкретные требования из requirements.md
- Контрольные точки обеспечивают инкрементальную валидацию на каждой фазе
- DirectionWorkMobile.vue временно сохраняется; консолидация в единый responsive-компонент планируется отдельно
- `/windows` и `/doors` — полноценные индексируемые хаб-страницы, НЕ редиректы
- `tailwind.config.ts` опционален при использовании Nuxt UI v4
