<script setup lang="ts">
// Табы каталога продукции — UTabs (Nuxt UI v4)
// Используется на хаб-страницах /windows и /doors

interface TabItem {
  label: string
  to: string
  description?: string
}

const props = defineProps<{
  items: TabItem[]
}>()

const router = useRouter()
const route = useRoute()

// Определяем активный таб по текущему маршруту
const activeIndex = computed(() => {
  const idx = props.items.findIndex((item) => route.path === item.to)
  return idx >= 0 ? idx : 0
})

function onTabChange(payload: string | number) {
  const index = typeof payload === 'string' ? parseInt(payload, 10) : payload
  const item = props.items[index]
  if (item?.to) {
    router.push(item.to)
  }
}
</script>

<template>
  <UTabs
    :items="items.map((item) => ({ label: item.label }))"
    :model-value="activeIndex"
    @update:model-value="onTabChange"
    class="w-full"
  />
</template>
