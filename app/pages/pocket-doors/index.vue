<script setup lang="ts">
import { POCKET_DOOR_PRODUCT_TABS } from '~/constants/productTabs'

useSeoData()

const tabs = POCKET_DOOR_PRODUCT_TABS
const { activeIndex } = useProductTabs(tabs)

const pocketDoorTypes = [
  {
    title: 'SL160',
    description: 'Подъемно-раздвижная система для широких светопрозрачных проемов.',
    to: '/pocket-doors/sl160',
    image: '/images/pocket-doors/sl160-system-card.webp'
  },
  {
    title: 'BF73',
    description: 'Система для гибкой организации широкого стеклянного проема.',
    to: '/pocket-doors/bf73',
    image: '/images/pocket-doors/bf73-system-card.webp'
  },
  {
    title: 'SL130',
    description: 'Компактная раздвижная система с современным алюминиевым профилем.',
    to: '/pocket-doors/sl130',
    image: '/images/pocket-doors/sl130-system-card.png'
  }
]
</script>
<template>
  <div class="product-page">
    <ProductTabs :items="tabs" :active-index="activeIndex" />
    <div class="product-page__index-content">
      <h1 class="product-page__index-title">Алюминиевые раздвижные двери</h1>
      <p class="product-page__index-desc">
       Мы предлагаем алюминиевые раздвижные двери  Алютех SL160, SL130, BF73.
      </p>
      <div class="product-page__cards">
        <NuxtLink
          v-for="item in pocketDoorTypes"
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
