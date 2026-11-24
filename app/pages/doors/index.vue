<script setup lang="ts">
import { DOOR_PRODUCT_TABS } from '~/constants/productTabs'

useSeoData()

const tabs = DOOR_PRODUCT_TABS
const { activeIndex } = useProductTabs(tabs)

const doorTypes = [
  {
    title: 'HD-двери крупноформатные Алютех(Alutech)',
    description: 'Алюминиевые двери высотой до 3 м для особых проектов',
    to: '/doors/hd',
    image: '/images/windows/classic-hero-window.png'
  },
  {
    title: 'Балконные (террасные) Алютех(Alutech)',
    description: 'Решение для обустройства террасы или балкона',
    to: '/doors/balcony',
    image: '/images/doors/balcony/photo1.jpg'
  },
  {
    title: 'Классические двери Алютех(Alutech)',
    description: 'Двери для комфорта и безопасности, вписываются в любой стиль',
    to: '/doors/classic',
    image: '/images/doors/classic/photo1.jpg'
  }
]
</script>

<template>
  <ProductCategoryIndex
    :tabs="tabs"
    :active-index="activeIndex"
    label="Каталог систем"
    title="Алюминиевые двери"
    description="Мы предлагаем HD-двери, балконные, террасные и классические двери на базе профильных систем."
    panel-title="Виды дверей"
    :items="doorTypes"
  >
    <section class="product-page__fullwidth" aria-label="Видео об алюминиевых дверях">
      <RutubeVideo
        src="https://rutube.ru/play/embed/36538d1c10d514a10e1be50cfe632792/"
        title="Алюминиевые двери ALUTECH"
      />
    </section>
  </ProductCategoryIndex>
</template>
