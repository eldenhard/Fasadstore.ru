<script setup lang="ts">
// Карточка продукции — Tailwind CSS v4
// Используется на страницах каталога окон и дверей

interface Props {
  title: string
  description: string
  image: string
  to: string
}

defineProps<Props>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
  >
    <NuxtImg
      :src="image"
      :alt="title"
      class="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
      width="400"
      height="250"
      loading="lazy"
    />
    <div class="p-4">
      <h3 class="text-lg font-bold text-gray-900">{{ title }}</h3>
      <p class="text-sm text-gray-600 mt-2 line-clamp-3">{{ description }}</p>
      <span class="inline-block mt-3 text-blue-600 text-sm font-medium"> Подробнее → </span>
    </div>
  </NuxtLink>
</template>
