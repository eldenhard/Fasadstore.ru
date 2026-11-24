<script setup lang="ts">
import { POCKET_DOOR_PRODUCT_TABS } from '~/constants/productTabs'

useSeoData()

const tabs = POCKET_DOOR_PRODUCT_TABS
const { activeIndex } = useProductTabs(tabs)

const pocketDoorTypes = [
  {
    title: 'SL160 Алютех(Alutech)',
    description: 'Раздвижные двери Алютех SL160 для широких проёмов и выхода на террасу.',
    to: '/sliding-doors/sl160',
    image: '/images/sliding-doors/sl160-system-card.webp'
  },
  {
    title: 'BF73 Алютех(Alutech)',
    description: 'Складные двери-гармошка Алютех BF73: створки складываются, освобождая проём.',
    to: '/sliding-doors/bf73',
    image: '/images/sliding-doors/bf73-system-card.webp'
  },
  {
    title: 'SL130 Алютех(Alutech)',
    description: 'Раздвижные двери Алютех SL130 с алюминиевым профилем для панорамного остекления.',
    to: '/sliding-doors/sl130',
    image: '/images/sliding-doors/sl130-system-card.png'
  }
]
</script>

<template>
  <ProductCategoryIndex
    :tabs="tabs"
    :active-index="activeIndex"
    label="Каталог систем"
    title="Алюминиевые раздвижные двери"
    description="Раздвижные двери Алютех для террас, коттеджей и широких панорамных проёмов. Сравните подъёмно-раздвижные системы SL160 и SL130 со складными дверями BF73. Поможем выбрать способ открывания, размеры и вариант тёплого остекления."
    panel-title="Системы"
    :items="pocketDoorTypes"
  />
</template>
