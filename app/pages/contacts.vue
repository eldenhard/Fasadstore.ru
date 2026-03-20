<script setup lang="ts">
useSeoData()
</script>

<template>
  <div class="contacts-page">
    <ContactBlock />
    <section class="contacts-page__map">
      <ClientOnly>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Afalse&amp;source=constructor&amp;ll=37.541249%2C55.900572&amp;z=15&amp;pt=37.541249%2C55.900572%2Cpm2rdm"
          width="100%"
          height="400"
          frameborder="0"
          allowfullscreen
          title="Карта — офис АлюПроект, Москва, Дмитровское шоссе 157, стр. 7"
          loading="lazy"
        />
        <template #fallback>
          <div class="contacts-page__map-fallback">
            <a href="https://yandex.ru/maps/-/CDBimGN~" target="_blank" rel="noopener noreferrer">
              Открыть карту на Яндекс.Картах
            </a>
          </div>
        </template>
      </ClientOnly>
    </section>
  </div>
</template>

<style scoped>
.contacts-page {
  background: white;
}

.contacts-page__title {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  padding: 1.5rem 0;
}

.contacts-page__map {
  width: 100%;
}

.contacts-page__map iframe {
  display: block;
}

.contacts-page__map-fallback {
  width: 100%;
  height: 400px;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contacts-page__map-fallback a {
  color: #05759f;
}

.contacts-page__map-fallback a:hover {
  text-decoration: underline;
}

@media screen and (max-width: 900px) {
  .contacts-page__title {
    font-size: 1.8rem;
  }
}
</style>
