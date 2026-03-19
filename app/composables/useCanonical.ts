export function useCanonical(): void {
  const config = useProjectConfig()
  const route = useRoute()

  // Абсолютный URL без query-параметров и hash-фрагментов
  const canonicalUrl = computed(() => `${config.siteUrl}${route.path}`)

  useHead({
    link: [{ rel: 'canonical', href: canonicalUrl }]
  })
}
