<script setup lang="ts">
// Страница «Объекты» — портфолио АлюПроект

useSeoData()

const breadcrumbs = useBreadcrumbs()
</script>

<template>
  <div>
    <!-- Breadcrumbs -->
    <AppBreadcrumbs :breadcrumbs="breadcrumbs" />

    <!-- h1 — единственный на странице -->
    <h1 class="text-3xl md:text-4xl font-bold text-center py-6">Наши объекты</h1>

    <!-- Галерея выполненных проектов -->
    <ObjectsGallery />
  </div>
</template>
