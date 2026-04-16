<script setup lang="ts">
import type { ProductTab } from '~/constants/productTabs'

defineProps<{
  items: ProductTab[]
  activeIndex: number
}>()
</script>

<template>
  <nav class="product-page__nav" aria-label="Навигация по разделу">
    <ul class="product-page__nav-list">
      <li v-for="(item, index) in items" :key="item.to" class="product-page__nav-entry">
        <NuxtLink
          :to="item.to"
          class="product-page__nav-item"
          :class="{ 'product-page__nav-item--active': activeIndex === index }"
        >
          {{ item.label }}
          <span v-if="activeIndex === index" class="product-page__nav-underline" />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
