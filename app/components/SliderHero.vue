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
}

const slides: Slide[] = [
  {
    title: 'Раздвижные двери Алютех',
    description:
      'Стильные светопрозрачные конструкции, которые позволяют освободить максимально широкий проем, соединить помещения между собой или с улицей.',
    image: '/images/slider/first.webp',
    alt: 'Раздвижные двери АЛЮТЕХ'
  },
  {
    title: 'Окна Алютех',
    description:
      'Классические окна «АЛЮТЕХ» поистине универсальны: их устанавливают в гостиной и на кухне, в детской комнате и на террасе. При этом служат такие окна не менее полувека, обеспечивая в доме тепло и уют.',
    image: '/images/slider/second.webp',
    alt: 'Окна АЛЮТЕХ'
  }
]

const current = ref(0)
const direction = ref<'next' | 'prev'>('next')
const animating = ref(false)
let timer: ReturnType<typeof setInterval> | null = null

function slideTo(index: number, dir: 'next' | 'prev') {
  if (animating.value || index === current.value) return
  animating.value = true
  direction.value = dir
  current.value = index
  setTimeout(() => {
    animating.value = false
  }, 600)
}

function next() {
  slideTo((current.value + 1) % slides.length, 'next')
}

function prev() {
  slideTo((current.value - 1 + slides.length) % slides.length, 'prev')
}

function goTo(index: number) {
  slideTo(index, index > current.value ? 'next' : 'prev')
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

onMounted(() => startAutoplay())
onUnmounted(() => stopAutoplay())
</script>

<template>
  <div class="slider-hero" @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
    <!-- Слайды -->
    <div
      v-for="(slide, i) in slides"
      :key="slide.title"
      class="slider-hero__slide"
      :class="{
        'slider-hero__slide--active': i === current,
        'slider-hero__slide--left': i !== current && direction === 'next',
        'slider-hero__slide--right': i !== current && direction === 'prev'
      }"
    >
      <div class="slider-hero__grid">
        <!-- Текстовая часть -->
        <div class="slider-hero__text">
          <div class="slider-hero__text-inner">
            <h2 class="slider-hero__title">
              {{ slide.title }}
            </h2>
            <div class="slider-hero__divider" />
            <p class="slider-hero__desc">
              {{ slide.description }}
            </p>
            <button class="slider-hero__btn"><span>Узнать больше</span></button>
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

    <!-- Индикаторы -->
    <div class="slider-hero__dots">
      <button
        v-for="(_, i) in slides"
        :key="i"
        class="slider-hero__dot"
        :class="{ 'slider-hero__dot--active': i === current }"
        :aria-label="'Слайд ' + (i + 1)"
        @click="goTo(i)"
      />
    </div>
  </div>
</template>

<style scoped>
.slider-hero {
  position: relative;
  height: 65vh;
  overflow: hidden;
}
@media (min-width: 768px) {
  .slider-hero {
    height: 60vh;
  }
}

/* Слайды с горизонтальным slide-переходом (как Bootstrap Carousel) */
.slider-hero__slide {
  position: absolute;
  inset: 0;
  transform: translateX(100%);
  transition: transform 0.6s ease-in-out;
  pointer-events: none;
}
.slider-hero__slide--active {
  transform: translateX(0);
  pointer-events: auto;
  z-index: 1;
}
.slider-hero__slide--left {
  transform: translateX(-100%);
}
.slider-hero__slide--right {
  transform: translateX(100%);
}

/* Текстовая панель — градиент как в оригинале */
.slider-hero__text {
  background: rgb(1, 3, 5);
  background: linear-gradient(177deg, rgba(1, 3, 5, 1) 7%, rgba(4, 21, 33, 1) 89%);
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
}

.slider-hero__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
}

.slider-hero__text-inner {
  width: 50%;
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
  color: #d4d4d4;
  font-weight: 600;
  font-size: 0.875rem;
  margin-top: 1rem;
}

.slider-hero__image-wrap {
  position: relative;
  overflow: hidden;
}

.slider-hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slider-hero__gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7));
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

/* Индикаторы-точки */
.slider-hero__dots {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  display: flex;
  gap: 10px;
}
.slider-hero__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: background 0.3s;
}
.slider-hero__dot--active {
  background: white;
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
  .slider-hero__text {
    margin-bottom: 4%;
  }
  .slider-hero__grid {
    grid-template-columns: 1fr;
  }
  .slider-hero__text-inner {
    width: 90%;
  }
  .slider-hero__image-wrap {
    max-height: 25vh;
    order: 2;
  }
  .slider-hero__text {
    order: 1;
  }
  .slider-hero__divider {
    display: none;
  }
  .slider-hero__desc {
    font-size: 0.75rem;
  }
}
</style>
