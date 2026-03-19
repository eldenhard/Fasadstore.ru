<script setup lang="ts">
// Хаб-страница каталога окон — /windows
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
  { label: 'Окна классические', to: '/windows/classic' },
  { label: 'Окна панорамные', to: '/windows/panorama' },
  { label: 'Скрытая створка', to: '/windows/hidden' }
]

// Данные для карточек подтипов окон
const windowTypes = [
  {
    title: 'Классические окна',
    description: 'Универсальные алюминиевые окна ALUTECH для любых помещений',
    to: '/windows/classic',
    image: '/src/components/DirectionJob/assets/alum_window.png'
  },
  {
    title: 'Панорамные окна',
    description: 'Максимум света и обзорности, визуально увеличивают пространство',
    to: '/windows/panorama',
    image: '/src/components/TypeWindow/assets/image.png'
  },
  {
    title: 'Скрытая створка',
    description: 'На 20% больше площадь остекления, современный стильный вид',
    to: '/windows/hidden',
    image: '/src/components/TypeWindow/assets/hidden_ph1.jpg'
  }
]
</script>

<template>
  <div>
    <AppBreadcrumbs :breadcrumbs="breadcrumbs" />

    <div class="max-w-7xl mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Алюминиевые окна</h1>

      <p class="text-gray-600 mb-8 max-w-3xl">
        Каталог алюминиевых окон АлюПроект. Мы предлагаем классические, панорамные окна и окна со
        скрытой створкой на базе профильных систем ALUTECH. Выберите подходящий тип окон для вашего
        проекта.
      </p>

      <ProductTabs :items="tabItems" class="mb-10" />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProductCard
          v-for="item in windowTypes"
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
