<script setup lang="ts">
useSeoData()
const activeIndex = ref(-1)
const tabs = ['HD-двери', 'Балконные', 'Классические']
const paths = ['/doors/hd', '/doors/balcony', '/doors/classic']
const doorTypes = [
  {
    title: 'HD-двери крупноформатные',
    description: 'Алюминиевые двери высотой до 3 м для особых проектов',
    to: '/doors/hd',
    image: '/images/windows/alum_window.png',
    blur: false
  },
  {
    title: 'Балконные (Террасные)',
    description: 'Решение для обустройства террасы или балкона',
    to: '/doors/balcony',
    image: '/images/doors/balcony/photo1.jpg',
    blur: true
  },
  {
    title: 'Классические',
    description: 'Двери для комфорта и безопасности, вписываются в любой стиль',
    to: '/doors/classic',
    image: '/images/doors/classic/photo1.jpg',
    blur: false
  }
]
</script>
<template>
  <div class="product-page">
    <nav class="product-page__nav">
      <ul class="product-page__nav-list">
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          :class="[
            'product-page__nav-item',
            { 'product-page__nav-item--active': activeIndex === index }
          ]"
          @click="navigateTo(paths[index])"
        >
          {{ tab }}
          <div v-if="activeIndex === index" class="product-page__nav-underline" />
        </li>
      </ul>
    </nav>
    <div class="product-page__index-content">
      <h1 class="product-page__index-title">Алюминиевые двери</h1>
      <p class="product-page__index-desc">
        Мы предлагаем HD-двери, балконные (террасные) и
        классические двери на базе профильных систем ALUTECH.
      </p>
      <div class="product-page__cards">
        <NuxtLink v-for="item in doorTypes" :key="item.to" :to="item.to" class="product-page__card">
          <div v-if="item.blur" class="product-page__card-blur-wrap">
            <img
              :src="item.image"
              :alt="''"
              class="product-page__card-blur-bg"
              aria-hidden="true"
            />
            <NuxtImg
              :src="item.image"
              :alt="item.title"
              width="400"
              height="250"
              loading="lazy"
              class="product-page__card-img product-page__card-img--contain"
            />
          </div>
          <NuxtImg
            v-else
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
