<script setup lang="ts">
import { WINDOW_PRODUCT_TABS } from '~/constants/productTabs'

useSeoData()

const tabs = WINDOW_PRODUCT_TABS
const { activeIndex } = useProductTabs(tabs)

const windowTypes = [
  {
    title: 'Классические окна',
    description: 'Универсальные алюминиевые окна для любых помещений',
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
  <ProductCategoryIndex
    :tabs="tabs"
    :active-index="activeIndex"
    label="Каталог систем"
    title="Алюминиевые окна"
    description="Каталог алюминиевых окон Алюминиевые Системы. Мы предлагаем классические, панорамные окна и окна со скрытой створкой на базе профильных систем."
    panel-title="Виды окон"
    :items="windowTypes"
  />
</template>
