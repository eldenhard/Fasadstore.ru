<script setup lang="ts">
// Направления деятельности (мобильная версия) — Tailwind CSS v4
// Временный компонент, будет консолидирован в единый responsive-компонент

interface DirectionItem {
  title: string
  description: string
  image: string
  to?: string
}

const items: DirectionItem[] = [
  {
    title: 'Алюминиевые окна',
    description:
      'Окна премиум-класса теплые, созданные по индивидуальным заказам и сочетающие в себе стиль и надежность.',
    image: '/src/components/DirectionJob/assets/alum_window.png',
    to: '/windows'
  },
  {
    title: 'Алюминиевые раздвижные двери',
    description:
      'Раздвижные двери для частных домов и коттеджей. Комфортное открывание. Максимальная площадь остекления.',
    image: '/src/components/DirectionJob/assets/alum_razd_door.png'
  },
  {
    title: 'Остекление террас и беседок',
    description:
      'Портальные теплые конструкции для террас и веранд. Панорамное остекление в сдвижных и складывающихся системах.',
    image: '/src/components/DirectionJob/assets/terrace.jpg'
  },
  {
    title: 'Остекление коттеджей',
    description: 'Предлагаем все виды остекления для коттеджей и загородных домов под ключ.',
    image: '/src/components/DirectionJob/assets/villa.png'
  },
  {
    title: 'Алюминиевые двери',
    description:
      'Двери АЛЮТЕХ придадут индивидуальность Вашему дому. Обладают повышенной тепло- и звукоизоляцией.',
    image: '/src/components/DirectionJob/assets/alum_doors.jpg',
    to: '/doors'
  },
  {
    title: 'Остекление фасадов, витражи',
    description: 'Витражное (панорамное) остекление для сплошного многоэтажного остекления.',
    image: '/src/components/DirectionJob/assets/fasad.png'
  }
]

const openIndex = ref<number | null>(0)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <div class="space-y-3">
    <div v-for="(item, index) in items" :key="item.title" class="border rounded-lg overflow-hidden">
      <!-- Заголовок аккордеона -->
      <button
        class="w-full flex items-center justify-between p-4 text-left font-medium min-h-[44px]"
        @click="toggle(index)"
      >
        {{ item.title }}
        <span
          class="i-lucide-chevron-down w-5 h-5 transition-transform"
          :class="{ 'rotate-180': openIndex === index }"
        />
      </button>

      <!-- Содержимое -->
      <div v-show="openIndex === index" class="px-4 pb-4">
        <NuxtImg
          :src="item.image"
          :alt="item.title"
          class="w-full rounded shadow"
          width="400"
          height="250"
          loading="lazy"
        />
        <p class="mt-4 font-semibold text-sm">{{ item.description }}</p>
        <NuxtLink v-if="item.to" :to="item.to">
          <UButton class="mt-3 w-full" color="primary"> Подробнее ➔ </UButton>
        </NuxtLink>
        <UButton v-else class="mt-3 w-full" color="primary" disabled> Подробнее ➔ </UButton>
      </div>
    </div>
  </div>
</template>
