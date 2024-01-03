<template>
  <div>
    <ModalVue />
    <NavbarElement />
    <div></div>
  </div>
</template>

<script>
import { ref } from 'vue'
import NavbarElement from '../modules/navbar/NavbarElement.vue'
import ModalVue from '../modules/modal/Modal.vue'

export default {
  name: 'HomeView',
  components: {
    NavbarElement,
    ModalVue
  }
}
</script>
