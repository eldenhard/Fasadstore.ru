<script setup lang="ts">
import type { PocketDoorModel } from '~/constants/pocketDoorModels'
import { POCKET_DOOR_PRODUCT_TABS } from '~/constants/productTabs'

const props = defineProps<{ model: PocketDoorModel }>()
const tabs = POCKET_DOOR_PRODUCT_TABS
const { activeIndex } = useProductTabs(tabs)
const config = useProjectConfig()
useSeoMeta({
  title: props.model.seoTitle,
  description: props.model.seoDescription,
  ogTitle: props.model.seoTitle,
  ogDescription: props.model.seoDescription,
  ogType: 'website',
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
useScrollReveal()
</script>

<template>
  <div class="product-page">
    <ProductTabs :items="tabs" :active-index="activeIndex" />
    <main class="product-page__content">
      <AppBreadcrumbs />
      <section class="product-page__hero reveal">
        <div class="product-page__hero-text">
          <p class="product-page__title">{{ model.title }}</p>
          <p class="product-page__subtitle product-page__subtitle--compact">{{ model.subtitle }}</p>
          <p class="product-page__description">{{ model.heroDescription }}</p>
        </div>
        <figure class="product-page__hero-image">
          <img :src="model.heroImage" :alt="model.heroAlt" />
        </figure>
      </section>
      <section
        class="product-page__single product-page__single--spacious product-page__single--reverse reveal"
      >
        <figure class="product-page__single-image">
          <img :src="model.systemImage" :alt="model.systemAlt" />
        </figure>
        <div class="product-page__spec-card product-page__spec-card--full-height">
          <template v-for="group in model.specs" :key="group.title">
            <div class="product-page__category">{{ group.title }}</div>
            <ul>
              <li v-for="item in group.items" :key="item.label || item.value">
                <template v-if="item.label"
                  >{{ item.label }}: <strong>{{ item.value }}</strong></template
                >
                <template v-else>{{ item.value }}</template>
              </li>
            </ul>
            <br />
          </template>
        </div>
      </section>
      <div ref="line1" class="product-page__line" />
      <!-- BF73 folding -->
      <template v-if="model.isFolding">
        <section class="product-page__triple reveal">
          <div class="product-page__triple-text">
            <p class="product-page__subtitle">Складные двери <strong>Гармошка</strong></p>
            <p class="product-page__description">{{ model.foldingIntro }}</p>
          </div>
          <div v-if="model.foldingFeatures" class="product-page__triple-items">
            <div
              v-for="feat in model.foldingFeatures"
              :key="feat.alt"
              class="product-page__triple-item product-page__triple-item--cover"
            >
              <img :src="feat.image" :alt="feat.alt" />
              <p>{{ feat.text }}</p>
            </div>
          </div>
        </section>
        <section class="product-page__single product-page__single--offset reveal">
          <figure class="product-page__single-image product-page__single-image--half">
            <img :src="model.foldingDoorImage" :alt="model.foldingDoorAlt" />
          </figure>
          <div class="product-page__spec-card">
            <p class="product-page__description">{{ model.foldingDoorNote }}</p>
            <br />
            <ul>
              <li>
                Максимальная ширина: <strong>{{ model.maxWidth }}</strong>
              </li>
              <li>
                Максимальная высота: <strong>{{ model.maxHeight }}</strong>
              </li>
              <li>
                Количество створок в одной конструкции: <strong>{{ model.maxPanels }}</strong>
              </li>
            </ul>
          </div>
        </section>
        <section v-if="model.protectionFeatures" class="product-page__double reveal">
          <div class="product-page__triple-text">
            <p class="product-page__subtitle">Защита</p>
          </div>
          <div class="product-page__double-images" style="margin-top: 2%">
            <figure
              v-for="pf in model.protectionFeatures"
              :key="pf.alt"
              class="product-page__double-fig"
            >
              <img :src="pf.image" :alt="pf.alt" />
              <p style="margin-top: 1vh">{{ pf.text }}</p>
            </figure>
          </div>
          <p
            v-if="model.protectionClass"
            class="product-page__description"
            style="margin-top: 2vh; text-align: center"ч
          >
            <strong>{{ model.protectionClass }}</strong>
          </p>
        </section>
      </template>
      <!-- Coatings -->
      <section class="product-page__triple reveal">
        <div class="product-page__triple-text">
          <p class="product-page__subtitle">Три вида покрытий</p>
        </div>
        <div class="product-page__triple-items">
          <div
            v-for="coat in model.coatings"
            :key="coat.title"
            class="product-page__triple-item product-page__triple-item--cover"
          >
            <img :src="coat.image" :alt="coat.alt" />
            <p>
              <strong>{{ coat.title }}</strong> — {{ coat.description }}
            </p>
          </div>
        </div>
      </section>
      <hr />
      <br /><br /><br />
      <!-- Furniture -->
      <section class="product-page__single product-page__single--offset reveal">
        <figure class="product-page__single-image">
          <img :src="model.handleImage" :alt="model.handleAlt" />
        </figure>

        <div class="product-page__spec-card">
          <p class="product-page__subtitle product-page__subtitle--compact">Фурнитура</p>
          <p class="product-page__description product-page__description--compact">
            «АЛЮТЕХ» предлагает современные ручки, которые гармонично сочетаются с любым интерьером
            и экстерьером.
          </p>
          <br />
          <p class="product-page__description product-page__description--compact">
            {{ model.handleDescription }}
          </p>
        </div>
      </section>
      <!-- Handle colors -->
      <section class="product-page__triple reveal">
        <div class="product-page__triple-text">
          <p class="product-page__subtitle product-page__subtitle--compact">Цветовые решения</p>
          <p class="product-page__description product-page__description--compact">
            {{ model.handleColorsNote }}
          </p>
        </div>
        <div class="product-page__triple-items" style="justify-content: center; gap: 4vw">
          <div
            v-for="color in model.handleColors"
            :key="color.name"
            class="product-page__triple-item"
            style="flex: 0; align-items: center"
          >
            <div
              :style="{
                width: '60px',
                height: '60px',
                borderRadius: '4px',
                background: color.colorHex,
                border: '1px solid #ccc',
                boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
              }"
            />
            <p>{{ color.name }}</p>
          </div>
        </div>
      </section>
      <!-- Usage / terrace -->
      <template v-if="model.usageImage">
        <section class="product-page__hero product-page__hero--spaced reveal">
          <div class="product-page__hero-text product-page__hero-text--wide">
            <p class="product-page__subtitle">{{ model.usageTitle }}</p>
            <p class="product-page__description">{{ model.usageDescription }}</p>
            <p
              v-if="model.warmNote"
              class="product-page__description product-page__description--compact"
              style="margin-top: 1rem"
            >
              {{ model.warmNote }}
            </p>
          </div>
          <figure class="product-page__hero-image">
            <img :src="model.usageImage" :alt="model.usageAlt" />
          </figure>
        </section>
      </template>
      <!-- Video -->
      <section v-if="model.videoUrl" class="product-page__fullwidth reveal">
        <ClientOnly>
          <iframe
            width="80%"
            height="350"
            :src="model.videoUrl"
            frameborder="0"
            allow="clipboard-write; autoplay"
            allowfullscreen
          />
        </ClientOnly>
      </section>
      <hr />
      <!-- Contact -->
      <section class="product-page__triple reveal">
        <div class="product-page__triple-text">
          <p class="product-page__description product-page__description--centered">
            {{ model.contactText }}
          </p>
          <p
            class="product-page__description product-page__description--centered"
            style="margin-top: 1rem"
          >
            Телефон: <a href="tel:+74957655026">+7(495)765-50-26</a>
          </p>
        </div>
      </section>
    </main>
  </div>
</template>
