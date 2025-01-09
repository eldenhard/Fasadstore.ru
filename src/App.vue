<template>
  <div>
    <RouterView />
    <NavbarElement />
  </div>
</template>

<script>
import NavbarElement from './modules/navbar/NavbarElement.vue';
export default {
  name: 'App',
  components: {
    NavbarElement,
  }
}
</script>

<style >
@import './style/main.css';
</style>
