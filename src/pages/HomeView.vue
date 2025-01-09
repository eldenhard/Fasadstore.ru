<template>
  <div>
    <NavbarElement />
    <!-- <ModalVue /> -->
    <SliderElement />
    <MiniAbout />
    <DirectionWork />
    <mobilePhone />
    <PartnerElementVue />
    <!-- <ContactForm /> -->
    <Footer />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import NavbarElement from '../modules/navbar/NavbarElement.vue'
import SliderElement from '../modules/slider/SliderElement.vue'

import MiniAbout from '@/components/MiniAbout/MiniAbout.vue'

const ContactForm =  defineAsyncComponent(() => import('../modules/contact_form/ContactForm.vue'))
const Footer =  defineAsyncComponent(() => import( '../components/Footer/Footer.vue'))
const PartnerElementVue =  defineAsyncComponent(() => import('../modules/partner/PartnerElement.vue'))
const DirectionWork =  defineAsyncComponent(() => import('../components/DirectionJob/DirectionWork.vue'))
const mobilePhone =  defineAsyncComponent(() => import('@/modules/mobile_phone/mobilePhone.vue'))
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
