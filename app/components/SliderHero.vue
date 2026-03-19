<script setup lang="ts">
// Главный слайдер — Swiper 11 + ClientOnly
// Перенос из src/modules/slider/SliderElement.vue
// Обёрнут в ClientOnly для SSR-совместимости

import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

interface Slide {
  title: string
  description: string
  image: string
  alt: string
}

const slides: Slide[] = [
  {
    title: 'Раздвижные двери Алютех',
    description:
      'Стильные светопрозрачные конструкции, которые позволяют освободить максимально широкий проем, соединить помещения между собой или с улицей.',
    image: '/images/slider/first.jpg',
    alt: 'Раздвижные двери АЛЮТЕХ'
  },
  {
    title: 'Окна Алютех',
    description:
      'Классические окна «АЛЮТЕХ» поистине универсальны: их устанавливают в гостиной и на кухне, в детской комнате и на террасе. При этом служат такие окна не менее полувека.',
    image: '/images/slider/second.png',
    alt: 'Окна АЛЮТЕХ'
  }
]
</script>

<template>
  <!-- Явная высота для предотвращения CLS -->
  <ClientOnly>
    <div class="h-[400px] md:h-[60vh]">
      <Swiper
        :modules="[Autoplay, Pagination, Navigation]"
        :autoplay="{ delay: 10000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        navigation
        :loop="true"
        class="h-full"
      >
        <SwiperSlide v-for="slide in slides" :key="slide.title" class="h-full">
          <div class="grid grid-cols-1 md:grid-cols-2 h-full">
            <!-- Текстовая часть -->
            <div
              class="bg-gradient-to-b from-[#010305] to-[#041521] flex items-center order-1 md:order-none"
            >
              <div class="w-4/5 md:w-1/2 mx-auto py-6">
                <h2 class="text-white font-black text-xl md:text-3xl">
                  {{ slide.title }}
                </h2>
                <div class="w-full h-[3px] bg-white mt-3 hidden md:block" />
                <p class="text-gray-400 font-semibold text-xs md:text-sm mt-4">
                  {{ slide.description }}
                </p>
                <UButton color="primary" class="mt-4"> Подробнее о разделе </UButton>
              </div>
            </div>
            <!-- Изображение -->
            <div class="relative order-2 md:order-none max-h-[25vh] md:max-h-full overflow-hidden">
              <NuxtImg
                :src="slide.image"
                :alt="slide.alt"
                class="w-full h-full object-cover"
                width="800"
                height="600"
              />
              <div
                class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent to-black/70"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <!-- Fallback-заглушка для SSR -->
    <template #fallback>
      <div class="h-[400px] md:h-[60vh] bg-gray-200 animate-pulse flex items-center justify-center">
        <span class="text-gray-400 text-lg">Загрузка слайдера...</span>
      </div>
    </template>
  </ClientOnly>
</template>

<style>
@import 'swiper/css';
@import 'swiper/css/pagination';
@import 'swiper/css/navigation';
</style>
