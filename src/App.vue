<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script> -->

<template>
  <div>
    <HomeView />
  </div>

  <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
  <!-- <RouterView /> -->
</template>

<script>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './pages/HomeView.vue'
export default {
  name: 'App',
  components: { HomeView }
}
</script>


<style>
@import './style/main.css';
</style>