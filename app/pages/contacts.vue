<script setup lang="ts">
// Страница «Контакты» — АлюПроект

useSeoData()

const breadcrumbs = useBreadcrumbs()
</script>

<template>
  <div>
    <!-- Breadcrumbs -->
    <AppBreadcrumbs :breadcrumbs="breadcrumbs" />

    <!-- h1 — единственный на странице -->
    <h1 class="text-3xl md:text-4xl font-bold text-center py-6">Контакты</h1>

    <!-- ContactBlock (включает ContactForm внутри) -->
    <ContactBlock />

    <!-- Яндекс.Карты — ClientOnly с fallback -->
    <section class="w-full">
      <ClientOnly>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Afalse&amp;source=constructor&amp;ll=37.541249%2C55.900572&amp;z=15&amp;pt=37.541249%2C55.900572%2Cpm2rdm"
          width="100%"
          height="400"
          frameborder="0"
          allowfullscreen
          title="Карта — офис АлюПроект, Москва, Дмитровское шоссе 157, стр. 7"
          loading="lazy"
          class="block"
        />
        <template #fallback>
          <div class="w-full h-[400px] bg-gray-100 flex items-center justify-center">
            <a
              href="https://yandex.ru/maps/-/CDBimGN~"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-600 hover:underline"
            >
              Открыть карту на Яндекс.Картах
            </a>
          </div>
        </template>
      </ClientOnly>
    </section>
  </div>
</template>
