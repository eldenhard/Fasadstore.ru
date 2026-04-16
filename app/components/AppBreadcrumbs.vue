<script setup lang="ts">
const breadcrumbs = useBreadcrumbs()
</script>

<template>
  <nav v-if="breadcrumbs.length" class="breadcrumbs" aria-label="Хлебные крошки">
    <ol class="breadcrumbs__list">
      <li v-for="(item, i) in breadcrumbs" :key="i" class="breadcrumbs__item">
        <NuxtLink v-if="item.to" :to="item.to" class="breadcrumbs__link">{{ item.label }}</NuxtLink>
        <span v-else class="breadcrumbs__current" aria-current="page">{{ item.label }}</span>
        <span v-if="i < breadcrumbs.length - 1" class="breadcrumbs__sep">/</span>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.breadcrumbs {
  padding: 1rem 0 0;
}
.breadcrumbs__list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.3rem;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 0.85rem;
}
.breadcrumbs__link {
  color: #05759f;
  text-decoration: none;
  transition: color 0.2s;
}
.breadcrumbs__link:hover {
  text-decoration: underline;
}
.breadcrumbs__current {
  color: #999;
}
.breadcrumbs__sep {
  color: #ccc;
  margin: 0 0.15rem;
}
</style>
