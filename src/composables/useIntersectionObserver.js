import { onMounted } from 'vue'

export function useIntersectionObserver(refs, callback) {
  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target)
          observer.unobserve(entry.target) // Отключаем отслеживание после срабатывания
        }
      })
    }, {
      threshold: 0.1 // Анимация запускается, когда 10% элемента попадают в зону видимости
    })

    refs.forEach((ref) => {
      if (ref.value) {
        observer.observe(ref.value)
      }
    })
  })
}


// В данном контексте  callback (target в вызове) представляет собой элемент DOM, который был отслежен и стал видимым согласно условию в IntersectionObserver. Когда элемент пересекает границу видимости, IntersectionObserver вызывает коллбэк, и каждый элемент, который стал видимым, передается как entry.target в коллбэк.