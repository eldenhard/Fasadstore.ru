<template>
  <div>
    <ModalVue />
    <NavbarElement />
    <SliderElement />
    <DirectionWork />
    <Footer />
  </div>
</template>

<script>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import NavbarElement from '../modules/navbar/NavbarElement.vue'
import ModalVue from '../modules/modal/Modal.vue'
import SliderElement from '../modules/slider/SliderElement.vue'
import DirectionWork from '../components/DirectionJob/DirectionWork.vue'
import Footer from '../components/Footer/Footer.vue'
export default {
  name: 'HomeView',
  components: {
    NavbarElement,
    ModalVue,
    SliderElement,
    DirectionWork,
    Footer
  }
}
</script>
