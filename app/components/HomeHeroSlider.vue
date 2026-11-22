<script setup lang="ts">
// Главный слайдер — чистый Vue + CSS transitions
// Перенос из src/modules/slider/SliderElement.vue
// Автоскролл 10 сек, плавный fade-переход

import { ref, onMounted, onUnmounted } from 'vue'

interface Slide {
  title: string
  description: string
  image: string
  alt: string
  to?: string
}

const slides: Slide[] = [
  {
    title: 'Раздвижные двери Алютех',
    description:
      'Стильные светопрозрачные конструкции, которые позволяют освободить максимально широкий проем, соединить помещения между собой или с улицей.',
    image: '/images/slider/first.webp',
    alt: 'Раздвижные двери АЛЮТЕХ',
    to: '/sliding-doors'
  },
  {
    title: 'Окна Алютех',
    description:
      'Классические окна «АЛЮТЕХ» поистине универсальны: их устанавливают в гостиной и на кухне, в детской комнате и на террасе. При этом служат такие окна не менее полувека, обеспечивая в доме тепло и уют.',
    image: '/images/slider/second.webp',
    alt: 'Окна АЛЮТЕХ',
    to: '/windows'
  }
]

const current = ref(0)
const animating = ref(false)
let timer: ReturnType<typeof setInterval> | null = null
let touchStart: { x: number; y: number } | null = null

function slideTo(index: number) {
  if (animating.value || index === current.value) return
  animating.value = true
  current.value = index
  setTimeout(() => {
    animating.value = false
  }, 600)
}

function next() {
  slideTo((current.value + 1) % slides.length)
}

function prev() {
  slideTo((current.value - 1 + slides.length) % slides.length)
}

function goTo(index: number) {
  slideTo(index)
}

function startAutoplay() {
  stopAutoplay()
  timer = setInterval(next, 10000)
}

function stopAutoplay() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

function onTouchStart(event: TouchEvent) {
  stopAutoplay()
  const touch = event.touches[0]
  touchStart = event.touches.length === 1 ? { x: touch.clientX, y: touch.clientY } : null
}

function onTouchEnd(event: TouchEvent) {
  const start = touchStart
  touchStart = null
  if (event.touches.length) return
  startAutoplay()
  if (!start || event.changedTouches.length !== 1) return

  const touch = event.changedTouches[0]
  const dx = touch.clientX - start.x
  const dy = touch.clientY - start.y
  if (Math.abs(dx) < 50 || Math.abs(dx) <= Math.abs(dy)) return

  if (event.cancelable) event.preventDefault()
  dx < 0 ? next() : prev()
}

function onTouchCancel() {
  touchStart = null
  startAutoplay()
}

onMounted(() => startAutoplay())
onUnmounted(() => stopAutoplay())
</script>

<template>
  <div
    class="slider-hero"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
    @touchstart.passive="onTouchStart"
    @touchend="onTouchEnd"
    @touchcancel.passive="onTouchCancel"
  >
    <!-- Слайды -->
    <div
      v-for="(slide, i) in slides"
      :key="slide.title"
      class="slider-hero__slide"
      :class="{ 'slider-hero__slide--active': i === current }"
    >
      <div class="slider-hero__grid">
        <!-- Текстовая часть -->
        <div class="slider-hero__text">
          <div class="slider-hero__text-inner">
            <h2 class="slider-hero__title">
              {{ slide.title }}
            </h2>
            <div class="slider-hero__divider" />
            <br />
            <p class="slider-hero__desc">
              {{ slide.description }}
            </p>
            <button class="slider-hero__btn" @click="navigateTo(slide.to)">
              <span>Узнать больше</span>
            </button>
          </div>
        </div>
        <!-- Изображение -->
        <div class="slider-hero__image-wrap">
          <NuxtImg
            :src="slide.image"
            :alt="slide.alt"
            class="slider-hero__image"
            width="800"
            height="600"
            :preload="i === 0 ? { fetchPriority: 'high' } : false"
            format="avif"
            quality="40"
            :loading="i === 0 ? 'eager' : 'lazy'"
            :fetchpriority="i === 0 ? 'high' : 'low'"
          />
          <div class="slider-hero__gradient" />
        </div>
      </div>
    </div>

    <!-- Стрелки навигации — на текстовой панели -->
    <button
      class="slider-hero__arrow slider-hero__arrow--prev"
      aria-label="Предыдущий слайд"
      @click="prev"
    >
      <svg width="20" height="36" viewBox="0 0 20 36" fill="none">
        <path
          d="M18 2L2 18L18 34"
          stroke="white"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <button
      class="slider-hero__arrow slider-hero__arrow--next"
      aria-label="Следующий слайд"
      @click="next"
    >
      <svg width="20" height="36" viewBox="0 0 20 36" fill="none">
        <path
          d="M2 2L18 18L2 34"
          stroke="white"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <!-- Выбор слайда -->
    <div class="slider-hero__pagination" role="group" aria-label="Выбор слайда">
      <button
        v-for="(_, i) in slides"
        :key="i"
        class="slider-hero__page"
        :class="{ 'slider-hero__page--active': i === current }"
        :aria-label="'Слайд ' + (i + 1)"
        :aria-pressed="i === current"
        @click="goTo(i)"
      />
    </div>
  </div>
</template>

<style scoped>
.slider-hero {
  touch-action: pan-y pinch-zoom;
  position: relative;
  height: clamp(560px, calc(100svh - 64px), 760px);
  background: #010d14;
  overflow: hidden;
}
@media (min-width: 768px) {
  .slider-hero {
    height: 60vh;
  }
}

/* Слайды перекрывают друг друга, поэтому между ними не появляется пустой фон. */
.slider-hero__slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.6s ease-in-out;
  pointer-events: none;
}
.slider-hero__slide--active {
  opacity: 1;
  pointer-events: auto;
  z-index: 1;
}

/* Текстовая панель — градиент как в оригинале */
.slider-hero__text {
  position: relative;
  background: linear-gradient(177deg, rgba(1, 3, 5, 0.88) 7%, rgba(4, 21, 33, 0.82) 89%);
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
}

.slider-hero__grid {
  display: grid;
  grid-template-columns: 1fr;
  height: 100%;
}

.slider-hero__text-inner {
  width: min(70%, 560px);
  margin: 0 auto;
  padding: 1.5rem 0;
}

.slider-hero__title {
  color: white;
  font-size: max(3vw, 25px);
  font-family: 'Arial Black', sans-serif;
}

.slider-hero__divider {
  width: 100%;
  height: 3px;
  background: white;
  margin-top: 0.75rem;
}

.slider-hero__desc {
  color: var(--colorGrey);
  margin-top: 2%;
  font-weight: 600;
}

.slider-hero__image-wrap {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.slider-hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slider-hero__gradient {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(1, 3, 5, 0.88), rgba(4, 21, 33, 0.56)),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.5));
}

/* Стрелки — по центру всего блока (обе колонки) */
.slider-hero__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  opacity: 0.7;
  transition: opacity 0.2s;
}
.slider-hero__arrow:hover {
  opacity: 1;
}
.slider-hero__arrow--prev {
  left: 2%;
}
.slider-hero__arrow--next {
  right: 2%;
}
@media (max-width: 767px) {
  .slider-hero__arrow {
    display: none;
  }
}

/* Полоски выбора слайда с увеличенной областью нажатия. */
.slider-hero__pagination {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  display: flex;
  gap: 8px;
}
.slider-hero__page {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 8px;
}
.slider-hero__page::before {
  content: '';
  width: 40px;
  height: 3px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.4);
  transition: background 0.3s;
}
.slider-hero__page--active::before {
  background: white;
}
.slider-hero__page:focus-visible {
  outline: 2px solid white;
  outline-offset: 2px;
}

/* Кнопка — оригинальный ButtonPurple */
.slider-hero__btn {
  appearance: none;
  background-color: #7a4e76;
  border: none;
  color: #dfdfdf;
  cursor: pointer;
  display: inline-block;
  font-family: 'Montserrat', Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1em;
  padding: 1.2em 2.2em;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  transition:
    opacity 300ms cubic-bezier(0.694, 0, 0.335, 1),
    background-color 100ms cubic-bezier(0.694, 0, 0.335, 1),
    color 100ms cubic-bezier(0.694, 0, 0.335, 1);
  margin-top: 2%;
}
.slider-hero__btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ebebeb;
  clip-path: polygon(-1% 0, 0 0, -25% 100%, -1% 100%);
  transition: clip-path 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.slider-hero__btn:hover::before {
  clip-path: polygon(0 0, 101% 0, 101% 101%, 0 101%);
}
.slider-hero__btn:hover {
  color: black;
}
.slider-hero__btn span {
  position: relative;
  z-index: 1;
}

@media screen and (max-width: 900px) {
  .slider-hero {
    height: clamp(560px, calc(100svh - 64px), 720px);
    min-height: 560px;
  }

  .slider-hero__slide {
    min-height: 560px;
  }

  .slider-hero__text {
    background: transparent;
    margin-bottom: 0;
  }

  .slider-hero__gradient {
    background: linear-gradient(90deg, rgba(1, 3, 5, 0.58), rgba(4, 21, 33, 0.28));
  }
  .slider-hero__grid {
    grid-template-columns: 1fr;
    min-height: 560px;
  }
  .slider-hero__text-inner {
    width: min(100% - 40px, 560px);
  }
  .slider-hero__image-wrap {
    max-height: none;
  }
  .slider-hero__text {
    order: 1;
  }
  .slider-hero__divider {
    display: none;
  }
  .slider-hero__desc {
    font-size: clamp(0.95rem, 3.8vw, 1.05rem);
    line-height: 1.6;
  }
}

@media screen and (max-width: 560px) {
  .slider-hero,
  .slider-hero__slide,
  .slider-hero__grid {
    min-height: 620px;
  }

  .slider-hero__title {
    font-size: clamp(2rem, 10vw, 3.1rem);
    line-height: 1.05;
  }

  .slider-hero__btn {
    width: 100%;
    padding-inline: 1rem;
    margin-top: 1.5rem;
  }
}

@media screen and (min-width: 901px) {
  .slider-hero__grid {
    grid-template-columns: 1fr 1fr;
  }

  .slider-hero__text {
    background: linear-gradient(177deg, rgba(1, 3, 5, 1) 7%, rgba(4, 21, 33, 1) 89%);
  }

  .slider-hero__image-wrap {
    position: relative;
    inset: auto;
  }

  .slider-hero__gradient {
    inset: auto 0 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7));
  }
}
</style>
