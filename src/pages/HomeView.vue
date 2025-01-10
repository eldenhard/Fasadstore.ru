<template>
  <div>
    <NavbarElement />
    <!-- <ModalVue /> -->
    <SliderElement />
    <MiniAbout />
    <DirectionWork />
    <mobilePhone />
    <PartnerElementVue />
    <!-- <ContactFormComponent /> -->
    <FooterComponent />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import NavbarElement from '../modules/navbar/NavbarElement.vue'
import SliderElement from '../modules/slider/SliderElement.vue'

import MiniAbout from '@/components/MiniAbout/MiniAbout.vue'

// const ContactFormComponent =  defineAsyncComponent(() => import('../modules/contact_form/ContactForm.vue'))
import  FooterComponent from  '../components/Footer/Footer.vue'
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
    // ContactFormComponent,
    FooterComponent,
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
