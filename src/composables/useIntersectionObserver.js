import { onMounted } from 'vue'

/**
 * useIntersectionObserver - хук для отслеживания видимости элементов на странице.
 *
 * @param {Array<Ref<HTMLElement>>} refs - Массив ссылок на DOM-элементы, которые
 *     должны быть отслежены.
 * @param {function(HTMLElement): void} callback - Функция, которая будет вызвана
 *     каждый раз, когда любой из отслеживаемых элементов станет видимым.
 */
export function useIntersectionObserver(refs, callback) {
  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback(entry.target) // Здесь добавляется callback с элементом, который стал видимым
            observer.unobserve(entry.target) // Отключаем отслеживание этого элемента
          }
        })
      },
      {
        threshold: 0.1 // Анимация запускается, когда 10% элемента попадают в зону видимости
      }
    )

    refs.forEach((ref) => {
      if (ref.value) {
        observer.observe(ref.value) // Начинаем отслеживать элементы, переданные через refs
      }
    })
  })
}
