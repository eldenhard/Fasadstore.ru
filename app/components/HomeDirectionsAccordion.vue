<script setup lang="ts">
import { HOME_DIRECTION_ITEMS } from '~/constants/homeDirections'

const openIndex = ref<number | null>(0)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <div class="home-directions-accordion">
    <div
      v-for="(item, index) in HOME_DIRECTION_ITEMS"
      :key="item.title"
      class="home-directions-accordion__item"
    >
      <button
        class="home-directions-accordion__trigger"
        @click="toggle(index)"
      >
        {{ item.title }}
        <span class="home-directions-accordion__icon" :class="{ 'home-directions-accordion__icon--open': openIndex === index }" />
      </button>

      <div v-show="openIndex === index" class="home-directions-accordion__content">
        <NuxtImg
          :src="item.image"
          :alt="item.title"
          class="home-directions-accordion__image"
          width="400"
          height="250"
          loading="lazy"
        />
        <p class="home-directions-accordion__description">{{ item.description }}</p>
        <NuxtLink v-if="item.to" :to="item.to" class="home-directions-accordion__link">
          Подробнее
        </NuxtLink>
        <span v-else class="home-directions-accordion__link home-directions-accordion__link--disabled">
          Подробнее
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-directions-accordion {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.home-directions-accordion__item {
  overflow: hidden;
  border: 1px solid rgba(202, 217, 245, 0.2);
  border-radius: 0.75rem;
  background: rgba(4, 30, 47, 0.65);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.18);
}

.home-directions-accordion__trigger {
  width: 100%;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.125rem;
  border: 0;
  background: transparent;
  color: #f3f6fb;
  text-align: left;
  font: 600 1rem/1.3 'Montserrat', sans-serif;
  cursor: pointer;
}

.home-directions-accordion__icon {
  width: 0.875rem;
  height: 0.875rem;
  flex-shrink: 0;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: rotate(45deg);
  transition: transform 0.2s ease;
}

.home-directions-accordion__icon--open {
  transform: rotate(225deg);
}

.home-directions-accordion__content {
  padding: 0 1.125rem 1.125rem;
}

.home-directions-accordion__image {
  width: 100%;
  border-radius: 0.75rem;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
}

.home-directions-accordion__description {
  margin-top: 1rem;
  color: #dbe5f5;
  font: 500 0.95rem/1.5 'Montserrat', sans-serif;
}

.home-directions-accordion__link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
  padding: 0.9rem 1rem;
  border-radius: 999px;
  background: #7a4e76;
  color: #fff;
  text-decoration: none;
  font: 700 0.875rem/1 'Montserrat', sans-serif;
  text-transform: uppercase;
}

.home-directions-accordion__link--disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
