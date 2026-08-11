<script setup lang="ts">
import type { ProductTab } from '~/constants/productTabs'

interface CategoryItem {
  title: string
  description: string
  to: string
  image: string
}

defineProps<{
  tabs: ProductTab[]
  activeIndex: number
  label: string
  title: string
  description: string
  panelTitle: string
  items: CategoryItem[]
}>()
</script>

<template>
  <div class="product-page category-index">
    <ProductTabs :items="tabs" :active-index="activeIndex" />
    <main class="category-index__content">
      <AppBreadcrumbs />
      <section class="category-index__hero">
        <div class="category-index__hero-copy">
          <p class="category-index__label">{{ label }}</p>
          <h1>{{ title }}</h1>
          <p>{{ description }}</p>
        </div>
        <nav class="category-index__panel" :aria-label="panelTitle">
          <NuxtLink
            v-for="item in items"
            :key="item.to"
            :to="item.to"
            class="category-index__panel-link"
          >
            {{ item.title }}
          </NuxtLink>
        </nav>
      </section>

      <section class="category-index__cards" :aria-label="panelTitle">
        <NuxtLink
          v-for="item in items"
          :key="item.to"
          :to="item.to"
          class="category-index__card"
        >
          <span class="category-index__card-image">
            <NuxtImg
              :src="item.image"
              :alt="item.title"
              width="520"
              height="340"
              loading="lazy"
            />
          </span>
          <span class="category-index__card-body">
            <span class="category-index__card-title">{{ item.title }}</span>
            <span class="category-index__card-desc">{{ item.description }}</span>
            <span class="category-index__card-link">Подробнее</span>
          </span>
        </NuxtLink>
      </section>
    </main>
  </div>
</template>

<style scoped>
.category-index {
  background: #f5f7fa;
}

.category-index__content {
  width: min(100% - 48px, 1180px);
  margin: 0 auto;
  padding: clamp(2rem, 5vw, 4.5rem) 0 clamp(3rem, 6vw, 5rem);
}

.category-index__hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 420px);
  gap: clamp(1.5rem, 4vw, 3rem);
  align-items: stretch;
  margin-top: 1rem;
}

.category-index__hero-copy {
  padding: clamp(1.5rem, 4vw, 3rem);
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 16px 44px rgba(15, 23, 42, 0.08);
}

.category-index__label {
  margin: 0 0 1rem;
  color: #05759f;
  font: 700 0.85rem/1.2 'Montserrat', sans-serif;
  text-transform: uppercase;
}

.category-index h1 {
  max-width: 760px;
  margin: 0;
  color: #111827;
  font: 800 clamp(2rem, 5vw, 4rem) / 1 'Montserrat', sans-serif;
}

.category-index__hero-copy p:last-child {
  max-width: 780px;
  margin: 1.25rem 0 0;
  color: #4b5563;
  font-size: clamp(1rem, 1.4vw, 1.15rem);
  line-height: 1.75;
}

.category-index__panel {
  display: grid;
  gap: 0.75rem;
  padding: clamp(1.25rem, 3vw, 2rem);
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 8px;
  background: linear-gradient(145deg, #dfe8ee 0%, #cfdce4 100%);
  box-shadow: 0 18px 48px rgba(15, 23, 42, 0.12);
}

.category-index__panel-link {
  display: flex;
  align-items: center;
  min-height: 72px;
  padding: 0 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 8px;
  background: #123349;
  color: #fff;
  font: 800 clamp(1rem, 1.6vw, 1.45rem) / 1.2 'Montserrat', sans-serif;
  text-decoration: none;
  overflow-wrap: anywhere;
  hyphens: auto;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;
}

.category-index__panel-link:hover {
  border-color: #05759f;
  background: #0f5d7a;
  color: #fff;
  box-shadow: 0 12px 28px rgba(5, 117, 159, 0.2);
  transform: translateY(-2px);
}

.category-index__cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1rem, 2vw, 1.5rem);
  margin-top: clamp(1.5rem, 4vw, 3rem);
}

.category-index__card {
  display: flex;
  min-width: 0;
  flex-direction: column;
  overflow: hidden;
  border-radius: 8px;
  background: #fff;
  color: inherit;
  text-decoration: none;
  box-shadow: 0 16px 44px rgba(15, 23, 42, 0.08);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.category-index__card:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 54px rgba(15, 23, 42, 0.14);
}

.category-index__card-image {
  display: block;
  aspect-ratio: 1.5;
  padding: 1rem;
  background: #eef2f6;
}

.category-index__card-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
}

.category-index__card-body {
  display: flex;
  min-height: 190px;
  flex: 1;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.25rem;
}

.category-index__card-title {
  color: #111827;
  font: 800 1.35rem/1.2 'Montserrat', sans-serif;
}

.category-index__card-desc {
  color: #4b5563;
  font-size: 1rem;
  line-height: 1.6;
}

.category-index__card-link {
  margin-top: auto;
  color: #05759f;
  font-weight: 700;
}

@media (max-width: 980px) {
  .category-index__hero,
  .category-index__cards {
    grid-template-columns: 1fr;
  }

  .category-index__panel {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .category-index__panel-link {
    justify-content: center;
    min-height: 64px;
    padding: 0 0.75rem;
    text-align: center;
  }

  .category-index__card {
    display: grid;
    grid-template-columns: minmax(220px, 0.45fr) minmax(0, 1fr);
  }

  .category-index__card-body {
    min-height: 0;
  }
}

@media (max-width: 640px) {
  .category-index__content {
    width: min(100% - 28px, 1180px);
  }

  .category-index__hero-copy {
    padding: 1.25rem;
  }

  .category-index__panel {
    grid-template-columns: 1fr;
  }

  .category-index__card {
    display: flex;
  }

  .category-index__card-body {
    padding: 1rem;
  }
}
</style>
