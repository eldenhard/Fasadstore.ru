<script setup lang="ts">
// Хаб-страница каталога дверей — /doors
// Полноценная индексируемая страница (НЕ редирект)

useSeoData()

const config = useProjectConfig()
const breadcrumbs = useBreadcrumbs()

useSchemaOrg({
  type: 'BreadcrumbList',
  data: {
    itemListElement: breadcrumbs.value.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.to ? { item: `${config.siteUrl}${item.to}` } : {})
    }))
  }
})

// Данные для табов навигации
const tabItems = [
  { label: 'HD-двери', to: '/doors/hd' },
  { label: 'Классические', to: '/doors/classic' },
  { label: 'Балконные', to: '/doors/balcony' }
]

// Данные для карточек подтипов дверей
const doorTypes = [
  {
    title: 'HD-двери крупноформатные',
    description: 'Крупноформатные двери высотой до 3 м для особых проектов',
    to: '/doors/hd',
    image: '/src/components/TypeDoors/assets/фото 1.jpg'
  },
  {
    title: 'Двери классические',
    description: 'Классические алюминиевые двери для комфорта и безопасности',
    to: '/doors/classic',
    image: '/src/components/TypeDoors/assets/assets_classic/фото 1.JPG'
  },
  {
    title: 'Двери балконные (террасные)',
    description: 'Решение для обустройства террасы или балкона',
    to: '/doors/balcony',
    image: '/src/components/TypeDoors/assets/assets_balcony/фото 1.jpg'
  }
]
</script>

<template>
  <div>
    <AppBreadcrumbs :breadcrumbs="breadcrumbs" />

    <div class="max-w-7xl mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Алюминиевые двери</h1>

      <p class="text-gray-600 mb-8 max-w-3xl">
        Каталог алюминиевых дверей АлюПроект. Мы предлагаем HD крупноформатные, классические и
        балконные (террасные) двери на базе профильных систем ALUTECH. Выберите подходящий тип
        дверей для вашего проекта.
      </p>

      <ProductTabs :items="tabItems" class="mb-10" />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProductCard
          v-for="item in doorTypes"
          :key="item.to"
          :title="item.title"
          :description="item.description"
          :to="item.to"
          :image="item.image"
        />
      </div>
    </div>
  </div>
</template>
