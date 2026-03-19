<script setup lang="ts">
// Направления деятельности (десктоп) — Tailwind CSS v4
// Перенос из src/components/DirectionJob/DirectionWork.vue

interface DirectionCard {
  title: string
  brand: string
  description: string
  image: string
  to?: string
}

const directions: DirectionCard[] = [
  {
    title: 'Алюминиевые окна',
    brand: 'Алютех (ALUTECH)',
    description:
      'Окна премиум-класса теплые, созданные по индивидуальным заказам и сочетающие в себе стиль и надежность.',
    image: '/src/components/DirectionJob/assets/alum_window.png',
    to: '/windows'
  },
  {
    title: 'Алюминиевые раздвижные двери',
    brand: 'Алютех (ALUTECH)',
    description:
      'Раздвижные двери для частных домов и коттеджей. Комфортное открывание. Максимальная площадь остекления.',
    image: '/src/components/DirectionJob/assets/alum_razd_door.png',
    to: '/doors'
  },
  {
    title: 'Остекление террас и беседок',
    brand: 'Алютех (ALUTECH)',
    description:
      'Портальные теплые конструкции для террас и веранд. Панорамное остекление в сдвижных и складывающихся системах.',
    image: '/src/components/DirectionJob/assets/terrace.jpg'
  },
  {
    title: 'Остекление коттеджей',
    brand: 'Алютех (ALUTECH)',
    description: 'Предлагаем все виды остекления для коттеджей и загородных домов под ключ.',
    image: '/src/components/DirectionJob/assets/villa.png'
  },
  {
    title: 'Алюминиевые двери',
    brand: 'Алютех (ALUTECH)',
    description:
      'Двери АЛЮТЕХ придадут индивидуальность Вашему дому. Обладают повышенной тепло- и звукоизоляцией.',
    image: '/src/components/DirectionJob/assets/alum_doors.jpg'
  },
  {
    title: 'Зимние сады',
    brand: 'Алютех (ALUTECH)',
    description: 'Остекление зимних садов под ключ.',
    image: '/src/components/DirectionJob/assets/winter_garden.jpg'
  },
  {
    title: 'Остекление фасадов, витражи',
    brand: 'Алютех (ALUTECH)',
    description: 'Витражное (панорамное) остекление для сплошного многоэтажного остекления.',
    image: '/src/components/DirectionJob/assets/fasad.png'
  },
  {
    title: 'Деревянные окна',
    brand: 'Россия',
    description: 'Окна из массива дуба, лиственницы, сосны. Дерево-алюминий и алюмо-дерево.',
    image: '/src/components/DirectionJob/assets/wood.jpg'
  },
  {
    title: 'Гаражные ворота',
    brand: 'Алютех (ALUTECH)',
    description:
      'Гаражные секционные ворота — одно из самых популярных и современных решений, максимально удобны в эксплуатации.',
    image: '/src/components/DirectionJob/assets/garage_doors.png'
  }
]
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 py-8">
    <p class="text-blue-400 font-bold text-2xl lg:text-3xl mb-8">НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ</p>

    <!-- Десктопная сетка карточек (скрыта на мобильных < 1024px) -->
    <ul class="hidden lg:grid grid-cols-3 gap-6 list-none p-0">
      <li v-for="card in directions" :key="card.title">
        <NuxtLink
          v-if="card.to"
          :to="card.to"
          class="group relative block h-[45vh] rounded-lg overflow-hidden shadow-lg cursor-pointer"
        >
          <NuxtImg
            :src="card.image"
            :alt="card.title"
            class="w-full h-4/5 object-cover brightness-90"
            width="400"
            height="300"
            loading="lazy"
          />
          <div
            class="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl translate-y-full group-hover:translate-y-0 transition-transform duration-200"
          >
            <div class="p-4">
              <h3 class="text-lg font-semibold text-gray-900">{{ card.title }}</h3>
              <span class="text-sm text-gray-500">{{ card.brand }}</span>
            </div>
            <p class="px-4 pb-4 text-sm text-gray-700 line-clamp-3">
              {{ card.description }}
            </p>
          </div>
        </NuxtLink>
        <div
          v-else
          class="group relative block h-[45vh] rounded-lg overflow-hidden shadow-lg cursor-pointer"
        >
          <NuxtImg
            :src="card.image"
            :alt="card.title"
            class="w-full h-4/5 object-cover brightness-90"
            width="400"
            height="300"
            loading="lazy"
          />
          <!-- Оверлей при наведении -->
          <div
            class="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl translate-y-full group-hover:translate-y-0 transition-transform duration-200"
          >
            <div class="p-4">
              <h3 class="text-lg font-semibold text-gray-900">{{ card.title }}</h3>
              <span class="text-sm text-gray-500">{{ card.brand }}</span>
            </div>
            <p class="px-4 pb-4 text-sm text-gray-700 line-clamp-3">
              {{ card.description }}
            </p>
          </div>
          <NuxtImg
            :src="card.image"
            :alt="card.title"
            class="w-full h-4/5 object-cover brightness-90"
            width="400"
            height="300"
            loading="lazy"
          />
          <div
            class="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl translate-y-full group-hover:translate-y-0 transition-transform duration-200"
          >
            <div class="p-4">
              <h3 class="text-lg font-semibold text-gray-900">{{ card.title }}</h3>
              <span class="text-sm text-gray-500">{{ card.brand }}</span>
            </div>
            <p class="px-4 pb-4 text-sm text-gray-700 line-clamp-3">
              {{ card.description }}
            </p>
          </div>
        </div>
      </li>
    </ul>

    <!-- Мобильная версия (< 1024px) -->
    <div class="lg:hidden">
      <DirectionWorkMobile />
    </div>
  </section>
</template>
