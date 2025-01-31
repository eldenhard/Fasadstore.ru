<template>
  <div>
    <div v-if="isLoading" class="loader-container">
      <span class="loader"></span>
    </div>
    <RouterView />
    <NavbarElement />
  </div>
</template>

<script setup>
import NavbarElement from './modules/navbar/NavbarElement.vue'
import { isLoading } from '@/store/loading'
</script>

<style>
@import './style/main.css';
</style>
