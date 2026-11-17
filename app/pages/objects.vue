<script setup lang="ts">
useSeoData()
</script>

<template>
  <div class="objects-page">
    <section class="objects-page__hero">
      <div class="objects-page__hero-inner">
        <AppBreadcrumbs />
        <p class="objects-page__eyebrow">Портфолио</p>
        <h1>Наши проекты</h1>
        <p class="objects-page__lead">
          Реализованные решения для частной и коммерческой архитектуры.
        </p>
      </div>
    </section>
    <ObjectsGallery />
  </div>
</template>

<style scoped>
.objects-page {
  min-height: 100vh;
  background: #fff;
  color: #1f2933;
}

.objects-page__hero {
  background: linear-gradient(120deg, #041e2f, #082c43);
  color: #fff;
}

.objects-page__hero-inner {
  width: min(1180px, calc(100% - 48px));
  min-height: clamp(400px, 54vh, 560px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.objects-page__eyebrow {
  margin: 2rem 0 0.75rem;
  color: #c9a5c6;
  font: 800 0.8rem/1 'Montserrat', sans-serif;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.objects-page h1 {
  max-width: 900px;
  margin: 0;
  font: 800 clamp(2.5rem, 6vw, 5.25rem) / 0.98 'Montserrat', sans-serif;
}

.objects-page__lead {
  max-width: 720px;
  margin: 1.5rem 0 0;
  color: #e6edf7;
  font: 500 clamp(1rem, 1.8vw, 1.2rem) / 1.65 'Montserrat', sans-serif;
}

@media (max-width: 560px) {
  .objects-page__hero-inner {
    width: min(100% - 32px, 1180px);
    min-height: 440px;
    padding-top: 3rem;
  }
}
</style>
