<template>
  <div style="background: white;">
    <NavbarElement />
    <mobilePhone />

    <FullDescriptionCompany />
    <Footer />
  </div>
</template>

<script>
import { ref } from 'vue'
import NavbarElement from '../modules/navbar/NavbarElement.vue'
import FullDescriptionCompany from '@/components/FullDescriptionCompany/FullDescriptionCompany.vue'
import Footer from '@/components/Footer/Footer.vue'
import mobilePhone from '@/modules/mobile_phone/mobilePhone.vue'

    

export default {
  name: 'HomeView',
  components: {
    NavbarElement,
    mobilePhone,
    FullDescriptionCompany,
    Footer,
  }
}
</script>


