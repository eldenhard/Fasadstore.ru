<script setup lang="ts">
import { POCKET_DOOR_PRODUCT_TABS } from '~/constants/productTabs'

useSeoData()

const tabs = POCKET_DOOR_PRODUCT_TABS
const { activeIndex } = useProductTabs(tabs)

const pocketDoorTypes = [
  {
    title: 'SL160',
    description: 'Подъемно-раздвижная система для широких светопрозрачных проемов.',
    to: '/sliding-doors/sl160',
    image: '/images/sliding-doors/sl160-system-card.webp'
  },
  {
    title: 'BF73',
    description: 'Система для гибкой организации широкого стеклянного проема.',
    to: '/sliding-doors/bf73',
    image: '/images/sliding-doors/bf73-system-card.webp'
  },
  {
    title: 'SL130',
    description: 'Компактная раздвижная система с современным алюминиевым профилем.',
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
    description="Подбираем раздвижные системы для террас, коттеджей, панорамных проемов и теплого остекления. В разделе собраны основные решения с разной логикой открывания."
    panel-title="Системы"
    :items="pocketDoorTypes"
  />
</template>
