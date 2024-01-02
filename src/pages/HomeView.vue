<template>
  <div>

    <ModalVue />
    <NavbarElement />
    <SliderElement />

  </div>
</template>

<script>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import NavbarElement from '../modules/navbar/NavbarElement.vue'
import ModalVue from '../modules/modal/Modal.vue'
import SliderElement from '../modules/slider/SliderElement.vue'
export default {
  name: 'HomeView',
  components: {
    NavbarElement,
    ModalVue,
    SliderElement

  }
}
</script>


