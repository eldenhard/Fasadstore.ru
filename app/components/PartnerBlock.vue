<script setup lang="ts">
// Блок партнёров и продукции Алютех — Tailwind CSS v4
// Перенос из src/modules/partner/PartnerElement.vue

interface Partner {
  name: string
  logo: string
}

const partners: Partner[] = [
  { name: 'Fapim', logo: '/images/partners/fapim.png' },
  { name: 'Алютех', logo: '/images/partners/aluteh.png' },
  { name: 'Giesse', logo: '/images/partners/giesse.jpg' },
  { name: 'Siegenia', logo: '/images/partners/siegenia.png' }
]

// YouTube видео продукции
const videos = [
  { id: 'IQgRz7pdrfc', title: 'Продукция Алютех 1' },
  { id: 'RkZb4nDh0wo', title: 'Продукция Алютех 2' },
  { id: 'dnljNeoMNbU', title: 'Продукция Алютех 3' }
]
</script>

<template>
  <section
    class="max-w-6xl mx-auto mt-16 rounded-2xl overflow-hidden bg-[#082c43] shadow-xl relative"
  >
    <!-- Декоративный треугольник -->
    <div class="absolute top-0 left-0 w-full h-full clip-triangle bg-gray-400/20 z-0" />

    <div class="relative z-10 p-6 lg:p-10">
      <!-- Заголовок -->
      <h3 class="text-center text-blue-400 text-2xl lg:text-3xl font-bold pt-4">
        ПРОДУКЦИЯ АЛЮТЕХ
      </h3>
      <p class="text-center text-gray-400 font-bold text-sm mt-1">Виды открывания и фурнитуры</p>

      <!-- Видео -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
        <ClientOnly>
          <div
            v-for="video in videos"
            :key="video.id"
            class="rounded-lg overflow-hidden hover:-translate-y-2 transition-transform"
          >
            <iframe
              :src="`https://www.youtube.com/embed/${video.id}`"
              :title="video.title"
              class="w-full aspect-video"
              frameborder="0"
              allow="
                accelerometer;
                autoplay;
                clipboard-write;
                encrypted-media;
                gyroscope;
                picture-in-picture;
              "
              allowfullscreen
              loading="lazy"
            />
          </div>
          <template #fallback>
            <div
              v-for="video in videos"
              :key="video.id"
              class="w-full aspect-video bg-gray-700 rounded-lg animate-pulse"
            />
          </template>
        </ClientOnly>
      </div>

      <!-- Партнёры -->
      <div class="mt-12">
        <p class="text-white font-bold text-xl lg:text-2xl px-3">НАШИ ПАРТНЕРЫ</p>
        <div class="h-1 w-24 bg-gray-100 mt-2 ml-3" />

        <div class="flex flex-wrap items-center justify-center gap-6 mt-8 pb-6">
          <div
            v-for="partner in partners"
            :key="partner.name"
            class="w-24 h-16 flex items-center justify-center"
          >
            <NuxtImg
              :src="partner.logo"
              :alt="partner.name"
              class="max-w-full max-h-full object-contain"
              width="96"
              height="64"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.clip-triangle {
  clip-path: polygon(0 0, 100% 0, 0 40%);
}
</style>
