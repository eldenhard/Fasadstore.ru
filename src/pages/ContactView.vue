<template>
    <div style="background: white !important;">
        <NavbarElement />
        <mobilePhone />
        <ContactBlock />

        <Footer />
    </div>
</template>
  
<script>
import { ref } from 'vue'
import NavbarElement from '../modules/navbar/NavbarElement.vue'

import Footer from '@/components/Footer/Footer.vue'
import mobilePhone from '@/modules/mobile_phone/mobilePhone.vue'
import ContactBlock from '@/components/ContactBlock/ContactBlock.vue'


export default {
    name: 'HomeView',
    components: {
        NavbarElement,
        mobilePhone,
        ContactBlock,
        Footer,
    }
}
</script>
  