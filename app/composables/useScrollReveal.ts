import { onBeforeUnmount, onMounted } from 'vue'

/**
 * Добавляет класс `.reveal--visible` к элементам с классом `.reveal`
 * когда они появляются в viewport при скролле.
 */
export function useScrollReveal(): void {
    let observer: IntersectionObserver | null = null

    onMounted(() => {
        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.target instanceof HTMLElement) {
                        entry.target.classList.add('reveal--visible')
                        observer?.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.12 }
        )

        document.querySelectorAll('.reveal').forEach((el) => {
            observer?.observe(el)
        })
    })

    onBeforeUnmount(() => {
        observer?.disconnect()
    })
}
