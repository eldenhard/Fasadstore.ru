import { onBeforeUnmount, onMounted, type Ref } from 'vue'

/**
 * Использует IntersectionObserver для отслеживания элементов.
 * Когда элемент становится видимым — вызывает callback.
 */
export function useIntersectionObserver(
  refs: Ref<HTMLElement | null>[],
  callback: (element: HTMLElement) => void
): void {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            callback(entry.target)
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    refs.forEach((ref) => {
      if (ref.value) observer?.observe(ref.value)
    })
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })
}
