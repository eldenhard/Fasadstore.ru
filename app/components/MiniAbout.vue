<script setup lang="ts">
// Краткое описание компании — Tailwind CSS v4
// Перенос из src/components/MiniAbout/MiniAbout.vue
</script>

<template>
  <section class="w-full py-8 bg-gradient-to-b from-[#041521] to-[#082c43]">
    <div
      class="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-center"
    >
      <!-- Левая часть: изображения -->
      <div class="hidden lg:grid grid-cols-2 gap-4">
        <div class="rounded-lg overflow-hidden shadow-lg">
          <NuxtImg
            src="/src/components/MiniAbout/assets/stanok.webp"
            alt="Алюминиевые системы — изготовление"
            class="w-full h-full object-cover"
            width="400"
            height="300"
          />
        </div>
        <div class="rounded-lg overflow-hidden shadow-lg">
          <NuxtImg
            src="/src/components/MiniAbout/assets/propizvodstvo.webp"
            alt="Производство"
            class="w-full h-full object-cover"
            width="400"
            height="300"
          />
        </div>
        <div class="col-span-2 bg-white p-4 rounded shadow-lg">
          <div class="border-l-2 border-red-500 pl-3">
            <p class="text-sm font-semibold italic text-gray-800">
              ООО "Алюминиевые системы" изготовят и установят алюминиевые конструкции. Выполняем
              монтаж в Москве и регионах, даем официальную гарантию на изделия и установку. Дверные
              и оконные, панорамные системы для дома, коммерческих и общественных объектов.
            </p>
          </div>
        </div>
      </div>

      <!-- Правая часть: текст -->
      <div class="text-center lg:text-left">
        <h1 class="text-white text-3xl lg:text-4xl font-black">Алюминиевые системы</h1>
        <h2 class="text-blue-400 text-sm lg:text-base mt-3">
          Наша компания готова эффективно реализовать любые виды проектов Алютех, на рынке с 2008
          года. Являемся официальным дилером компании Алютех
        </h2>
        <p class="text-gray-400 font-semibold mt-6 text-sm leading-relaxed">
          Внешний облик гражданских и промышленных зданий и сооружений в последнее время существенно
          меняется. Применение для стеновых панелей и оконных заполнений алюминия, нержавеющей
          стали, стекла и других новых материалов придает внешнему виду здания индивидуальный
          характер, особую архитектурную выразительность.
        </p>
        <NuxtLink to="/about">
          <UButton color="primary" class="mt-6"> Подробнее о компании ➔ </UButton>
        </NuxtLink>

        <!-- Мобильная карточка с описанием (вместо изображений) -->
        <div class="lg:hidden mt-8 bg-white p-4 rounded shadow-lg text-left">
          <div class="border-l-2 border-red-500 pl-3">
            <p class="text-sm font-semibold italic text-gray-800">
              ООО "Алюминиевые системы" изготовят и установят алюминиевые конструкции. Выполняем
              монтаж в Москве и регионах, даем официальную гарантию на изделия и установку.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
