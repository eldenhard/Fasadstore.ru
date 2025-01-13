import { onMounted, Ref } from 'vue'

/**
 * Использует IntersectionObserver для отслеживания элементов.
 *
 * @param refs - Массив реактивных ссылок на элементы, которые нужно отслеживать.
 * @param callback - Функция, вызываемая, когда элемент становится видимым.
 */
export function useIntersectionObserver(
  refs: Ref<HTMLElement | null>[], // массив ссылок на HTML-элементы или null
  callback: (element: HTMLElement) => void // коллбэк с видимым элементом
): void {
  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            callback(entry.target) // Вызываем коллбэк с HTML-элементом
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1
      }
    )

    refs.forEach((ref) => {
      if (ref.value) {
        observer.observe(ref.value) // Начинаем отслеживание элемента
      }
    })
  })
}
