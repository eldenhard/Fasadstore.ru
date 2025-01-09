<template>
    <div>

        <mobilePhone />

        <keep-alive >
            <Objects />
        </keep-alive>
        <Footer />
    </div>
</template>

<script>
import { ref, defineAsyncComponent } from 'vue';
import Objects from '@/components/ObjectsPageComponents/ObjectsDevelopment.vue'
import Footer from '@/components/Footer/Footer.vue'
const mobilePhone =  defineAsyncComponent(() => import('@/modules/mobile_phone/mobilePhone.vue'))

export default {
    components: {
        mobilePhone,
        Objects,
        Footer
    },
    setup() {

    },
}
</script>

<style scoped>
.site-footer{
    margin-top: -4% !important; 
}
</style>