<script setup lang="ts">
useSeoData()
useSchemaOrg({
  type: 'Product',
  data: {
    name: 'Остекление террас и патио',
    description: 'Алюминиевые системы для остекления террас, патио и беседок.',
    brand: { '@type': 'Brand', name: 'ALUTECH' },
    manufacturer: { '@type': 'Organization', name: 'Алюминиевые Системы' }
  }
})

interface TerraceOption {
  title: string
  image: string
  to: string
}

const terraceOptions: TerraceOption[] = [
  {
    title: 'Раздвижные порталы',
    image: '/images/terraces/sliding-portals.jpg',
    to: '/sliding-doors'
  },
  {
    title: 'Входные группы и двери',
    image: '/images/terraces/entrance-groups.jpg',
    to: '/doors'
  },
  {
    title: 'Алюминиевые окна',
    image: '/images/terraces/aluminum-windows.jpg',
    to: '/windows'
  },
  {
    title: 'Складные двери (гармошка)',
    image: '/images/terraces/folding-doors.jpg',
    to: '/sliding-doors/bf73'
  },
  {
    title: 'Витражное остекление',
    image: '/images/terraces/stained-glass-glazing.jpeg',
    to: '/facades'
  }
]
</script>

<template>
  <div class="terraces-page">
    <section class="terraces-page__hero">
      <div class="terraces-page__hero-inner">
        <AppBreadcrumbs />
        <h1>Остекление террас и патио</h1>
        <p>
          Беседка с алюминиевым остеклением становится полноценной зоной отдыха, где комфортно
          проводить время независимо от сезона и погодных условий. Современные профильные системы
          обеспечивают надежную тепловую защиту, защиту от ветра, осадков, не ограничивая обзор и
          естественное освещение. Такое решение повышает функциональность участка, продлевает срок
          службы конструкции и придает ей современный внешний вид.
        </p>
      </div>
    </section>

    <main class="terraces-page__content">
      <h2>Виды остекления</h2>
      <div class="terraces-page__options">
        <article
          v-for="option in terraceOptions"
          :key="option.title"
          class="terraces-page__option"
        >
          <NuxtImg
            :src="option.image"
            :alt="option.title"
            class="terraces-page__image"
            width="1200"
            height="800"
            loading="lazy"
          />
          <div class="terraces-page__option-copy">
            <h3>{{ option.title }}</h3>
            <NuxtLink :to="option.to" class="terraces-page__link">Подробнее</NuxtLink>
          </div>
        </article>
      </div>
    </main>
  </div>
</template>

<style scoped>
.terraces-page {
  overflow: hidden;
  background: #f4f7fa;
  color: #1f2933;
}

.terraces-page__hero {
  background: linear-gradient(120deg, #041e2f, #082c43);
  color: #fff;
}

.terraces-page__hero-inner {
  width: min(1180px, calc(100% - 48px));
  min-height: clamp(470px, 62vh, 660px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.terraces-page h1,
.terraces-page h2,
.terraces-page h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
}

.terraces-page h1 {
  max-width: 900px;
  margin: 0;
  font-size: clamp(2.5rem, 6vw, 5.25rem);
  line-height: 0.98;
}

.terraces-page__hero-inner > p {
  max-width: 820px;
  margin: 1.75rem 0 0;
  color: #e6edf7;
  font: 500 clamp(1rem, 1.8vw, 1.2rem) / 1.65 'Montserrat', sans-serif;
}

.terraces-page__content {
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
  padding: clamp(4rem, 8vw, 7rem) 0;
}

.terraces-page__content > h2 {
  margin-bottom: clamp(2rem, 5vw, 4rem);
  color: #082c43;
  font-size: clamp(2rem, 4vw, 3.5rem);
}

.terraces-page__options {
  display: grid;
  gap: clamp(2rem, 5vw, 4.5rem);
}

.terraces-page__option {
  min-height: 420px;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
  overflow: hidden;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 18px 50px rgba(4, 30, 47, 0.12);
}

.terraces-page__option:nth-child(even) .terraces-page__image {
  order: 2;
}

.terraces-page__image {
  width: 100%;
  height: 100%;
  min-height: 420px;
  object-fit: cover;
}

.terraces-page__option-copy {
  padding: clamp(2rem, 5vw, 4rem);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.terraces-page__option h3 {
  margin: 0;
  color: #082c43;
  font-size: clamp(1.7rem, 3vw, 2.75rem);
  line-height: 1.1;
}

.terraces-page__link {
  margin-top: 2rem;
  padding: 0.95rem 1.5rem;
  border-radius: 0;
  background: #7a4e76;
  color: #fff;
  text-decoration: none;
  font: 700 0.875rem/1 'Montserrat', sans-serif;
  text-transform: uppercase;
  transition:
    background 0.2s ease,
    transform 0.2s ease;
}

.terraces-page__link:hover {
  background: #b46dad;
  transform: translateY(-2px);
}

@media (max-width: 760px) {
  .terraces-page__hero-inner,
  .terraces-page__content {
    width: min(100% - 32px, 1180px);
  }

  .terraces-page__hero-inner {
    min-height: 520px;
    padding-top: 4rem;
  }

  .terraces-page__option {
    min-height: 0;
    grid-template-columns: 1fr;
  }

  .terraces-page__option:nth-child(even) .terraces-page__image {
    order: 0;
  }

  .terraces-page__image {
    min-height: 0;
    aspect-ratio: 4 / 3;
  }
}
</style>
