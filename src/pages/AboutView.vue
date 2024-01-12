<template>
  <div style="background: white;">
    <NavbarElement />
    <mobilePhone />

    <FullDescriptionCompany />
    <ThreeBlock />
    <WomanBlock />
    <Footer />
  </div>
</template>

<script>
import { ref } from 'vue'
import NavbarElement from '../modules/navbar/NavbarElement.vue'
import FullDescriptionCompany from '@/components/FullDescriptionCompany/FullDescriptionCompany.vue'
import Footer from '@/components/Footer/Footer.vue'
import mobilePhone from '@/modules/mobile_phone/mobilePhone.vue'
import ThreeBlock from '@/components/FullDescriptionCompany/ThreeBlock.vue'
import WomanBlock from '@/components/FullDescriptionCompany/WomanBlock.vue'

export default {
  name: 'HomeView',
  components: {
    NavbarElement,
    mobilePhone,
    FullDescriptionCompany,
    ThreeBlock,
    WomanBlock,
    Footer,
  }
}
</script>


