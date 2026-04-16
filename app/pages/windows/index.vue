<script setup lang="ts">
import { WINDOW_PRODUCT_TABS } from '~/constants/productTabs'

useSeoData()

const tabs = WINDOW_PRODUCT_TABS
const { activeIndex } = useProductTabs(tabs)

const windowTypes = [
  {
    title: 'Классические окна',
    description: 'Универсальные алюминиевые окна ALUTECH для любых помещений',
    to: '/windows/classic',
    image: '/images/windows/classic-hero-window.png'
  },
  {
    title: 'Панорамные окна',
    description: 'Максимум света и обзорности, визуально увеличивают пространство',
    to: '/windows/panorama',
    image: '/images/windows/panorama-hero-window.png'
  },
  {
    title: 'Скрытая створка',
    description: 'На 20% больше площадь остекления, современный стильный вид',
    to: '/windows/hidden',
    image: '/images/windows/hidden-sash-hero-window.jpg'
  }
]
</script>
<template>
  <div class="product-page">
    <ProductTabs :items="tabs" :active-index="activeIndex" />
    <div class="product-page__index-content">
      <h1 class="product-page__index-title">Алюминиевые окна</h1>
      <p class="product-page__index-desc">
        Каталог алюминиевых окон АлюПроект. Мы предлагаем классические, панорамные окна и окна со
        скрытой створкой на базе профильных систем ALUTECH.
      </p>
      <div class="product-page__cards">
        <NuxtLink
          v-for="item in windowTypes"
          :key="item.to"
          :to="item.to"
          class="product-page__card"
        >
          <NuxtImg
            :src="item.image"
            :alt="item.title"
            width="400"
            height="250"
            loading="lazy"
            class="product-page__card-img"
          />
          <h3 class="product-page__card-title">{{ item.title }}</h3>
          <p class="product-page__card-desc">{{ item.description }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
