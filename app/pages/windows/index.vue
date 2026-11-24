<script setup lang="ts">
import { WINDOW_PRODUCT_TABS } from '~/constants/productTabs'

useSeoData()

const tabs = WINDOW_PRODUCT_TABS
const { activeIndex } = useProductTabs(tabs)

const windowTypes = [
  {
    title: 'Классические окна Алютех(Alutech)',
    description: 'Алюминиевые окна Alutech для жилых и коммерческих помещений',
    to: '/windows/classic',
    image: '/images/windows/classic-hero-window.png'
  },
  {
    title: 'Панорамные окна Алютех(Alutech)',
    description: 'Окна Алютех с большой площадью остекления: больше света и обзорности',
    to: '/windows/panorama',
    image: '/images/windows/panorama-hero-window.png'
  },
  {
    title: 'Скрытая створка Алютех(Alutech)',
    description: 'Окна алюминиевые со скрытой створкой: на 20% больше площадь остекления',
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
    description="Алюминиевые окна Алютех: Москва и область — подбор, изготовление и монтаж. В каталоге Алютех окна представлены в трёх вариантах: классические, панорамные и со скрытой створкой. Окна Alutech подбираем под размеры проёма, требования к теплоизоляции и внешний вид здания."
    panel-title="Виды окон"
    :items="windowTypes"
  />
</template>
