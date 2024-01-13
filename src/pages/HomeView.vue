<template>
  <div>
    <NavbarElement />
    <!-- <ModalVue /> -->
    <SliderElement />
    <MiniAbout />
    <DirectionWork />
    <mobilePhone />
    <PartnerElementVue />
    <ContactForm />
    <Footer />
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import NavbarElement from '../modules/navbar/NavbarElement.vue'
import SliderElement from '../modules/slider/SliderElement.vue'
import DirectionWork from '../components/DirectionJob/DirectionWork.vue'

import ContactForm from '../modules/contact_form/ContactForm.vue'
import Footer from '../components/Footer/Footer.vue'
import PartnerElementVue from '../modules/partner/PartnerElement.vue'
import MiniAbout from '@/components/MiniAbout/MiniAbout.vue'
import mobilePhone from '@/modules/mobile_phone/mobilePhone.vue'
export default {
  name: 'HomeView',
  components: {
    NavbarElement,
    SliderElement,
    DirectionWork,
    MiniAbout,
    PartnerElementVue,
    ContactForm,
    Footer,
    mobilePhone
  },
  // setup(){
  //   onBeforeMount(() => {
  //     // Устанавливаем скролл в самое верхнее положение перед монтированием компонента
  //     window.scrollTo(0, 0);
  //   });
  // }
}
</script>
