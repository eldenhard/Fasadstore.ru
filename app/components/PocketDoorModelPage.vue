<script setup lang="ts">
import type { PocketDoorModel } from '~/constants/pocketDoorModels'
import { POCKET_DOOR_PRODUCT_TABS } from '~/constants/productTabs'

const props = defineProps<{
  model: PocketDoorModel
}>()

const tabs = POCKET_DOOR_PRODUCT_TABS
const { activeIndex } = useProductTabs(tabs)
const config = useProjectConfig()

useSeoMeta({
  title: props.model.seoTitle,
  description: props.model.seoDescription,
  ogTitle: props.model.seoTitle,
  ogDescription: props.model.seoDescription,
  ogType: 'product',
  ogUrl: `${config.siteUrl}${useRoute().path}`,
  ogLocale: config.locale,
  ogImage: props.model.heroImage
})

useCanonical()
useRobots()
useSchemaOrg({
  type: 'Product',
  data: {
    name: props.model.schemaName,
    description: props.model.seoDescription,
    brand: { '@type': 'Brand', name: 'ALUTECH' },
    manufacturer: { '@type': 'Organization', name: 'АлюПроект' }
  }
})

const line1 = ref<HTMLElement | null>(null)
useIntersectionObserver([line1], (el: HTMLElement) => {
  el.classList.add('product-page__line--visible')
})
</script>

<template>
  <div class="product-page">
    <ProductTabs :items="tabs" :active-index="activeIndex" />
    <main class="product-page__content">
      <section class="product-page__hero">
        <div class="product-page__hero-text">
          <p class="product-page__title">{{ model.title }}</p>
          <p class="product-page__subtitle product-page__subtitle--compact">{{ model.subtitle }}</p>
          <p class="product-page__description">
            {{ model.heroDescription }}
          </p>
        </div>
        <figure class="product-page__hero-image">
          <img :src="model.heroImage" :alt="model.heroAlt" />
        </figure>
      </section>

      <section class="product-page__single product-page__single--spacious">
        <figure class="product-page__single-image">
          <img :src="model.overviewImage" :alt="model.overviewAlt" />
        </figure>
        <div class="product-page__spec-card">
          <p class="product-page__subtitle--small">{{ model.overviewTitle }}</p>
          <p class="product-page__description product-page__description--compact">
            {{ model.overviewDescription }}
          </p>
          <ul>
            <li v-for="benefit in model.benefits" :key="benefit">{{ benefit }}</li>
          </ul>
        </div>
      </section>

      <div ref="line1" class="product-page__line" />

      <section class="product-page__triple">
        <div class="product-page__triple-text">
          <p class="product-page__subtitle">Ключевые элементы системы</p>
        </div>
        <div class="product-page__triple-items">
          <div v-for="detail in model.details" :key="detail.alt" class="product-page__triple-item">
            <img :src="detail.image" :alt="detail.alt" />
            <p>{{ detail.text }}</p>
          </div>
        </div>
      </section>

      <section class="product-page__fullwidth">
        <p>
          Подберем конфигурацию, открывание и визуальное решение под ваш проем, фасад и сценарий
          использования.
        </p>
        <p>
          Консультацию можно получить по телефону <a href="tel:+74957655026">8(495)765-50-26</a>
          или в нашем офисе в Москве.
        </p>
      </section>

      <section class="product-page__triple">
        <div class="product-page__triple-text">
          <p class="product-page__subtitle">
            Примеры решений: <NuxtLink to="/objects">Все проекты</NuxtLink>
          </p>
        </div>
        <div class="product-page__triple-items">
          <div
            v-for="image in model.gallery"
            :key="image.alt"
            class="product-page__triple-item product-page__triple-item--portfolio"
          >
            <img :src="image.image" :alt="image.alt" />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
