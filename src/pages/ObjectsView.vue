<template>
    <div>
        <NavbarElement />
        <mobilePhone />

        <keep-alive >
            <Objects />
        </keep-alive>
        <Footer />
    </div>
</template>

<script>
import { ref, defineAsyncComponent } from 'vue';
import NavbarElement from '@/modules/navbar/NavbarElement.vue'
import Objects from '@/components/ObjectsPageComponents/Objects.vue'
import Footer from '@/components/Footer/Footer.vue'
const mobilePhone =  defineAsyncComponent(() => import('@/modules/mobile_phone/mobilePhone.vue'))

export default {
    components: {
        NavbarElement,
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