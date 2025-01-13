<template>
  <div style="background: white !important">
    <mobilePhone />
    <ContactBlock />

    <Footer />
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue'

import Footer from '@/components/Footer/Footer.vue'
import mobilePhone from '@/modules/mobile_phone/mobilePhone.vue'
import ContactBlock from '@/components/ContactBlock/ContactBlock.vue'

export default {
  name: 'HomeView',
  components: {
    mobilePhone,
    ContactBlock,
    Footer
  },
  setup() {
    // onBeforeMount(() => {
    //   // Устанавливаем скролл в самое верхнее положение перед монтированием компонента
    //   window.scrollTo(0, 0);
    // });
  }
}
</script>
