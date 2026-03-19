<script setup lang="ts">
// Компонент хлебных крошек
// В будущем данные будут поступать из composable useBreadcrumbs()
interface BreadcrumbItem {
  label: string
  to?: string
}

const props = defineProps<{
  breadcrumbs: BreadcrumbItem[]
}>()
</script>

<template>
  <nav
    v-if="breadcrumbs.length > 0"
    aria-label="Хлебные крошки"
    class="py-3 px-4 text-sm text-gray-500"
  >
    <ol class="flex items-center gap-1 flex-wrap">
      <li v-for="(item, index) in breadcrumbs" :key="index" class="flex items-center gap-1">
        <span v-if="index > 0" class="mx-1">/</span>
        <NuxtLink v-if="item.to" :to="item.to" class="hover:text-gray-900 transition-colors">
          {{ item.label }}
        </NuxtLink>
        <span v-else class="text-gray-900 font-medium">
          {{ item.label }}
        </span>
      </li>
    </ol>
  </nav>
</template>
