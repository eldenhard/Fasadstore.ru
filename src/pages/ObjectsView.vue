<template>
    <div>
        <NavbarElement />
        <Objects />
        <Footer />
    </div>
</template>

<script>
import { ref } from 'vue';
import NavbarElement from '@/modules/navbar/NavbarElement.vue'
import Objects from '@/components/ObjectsPageComponents/Objects.vue'
import Footer from '@/components/Footer/Footer.vue'
export default {
    components: {
        NavbarElement,
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