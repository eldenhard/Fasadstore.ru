import { computed } from 'vue'

import type { ProductTab } from '~/constants/productTabs'

const normalizePath = (path: string) => {
  const normalizedPath = path.replace(/\/+$/, '').toLowerCase()

  return normalizedPath || '/'
}

export function useProductTabs(items: ProductTab[]) {
  const route = useRoute()

  const activeIndex = computed(() =>
    items.findIndex((item) => normalizePath(item.to) === normalizePath(route.path))
  )

  return {
    activeIndex
  }
}
