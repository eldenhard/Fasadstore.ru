<template>
    <div>
        <NavbarElement />
        <Objects />
    </div>
</template>

<script>
import { ref } from 'vue';
import NavbarElement from '@/modules/navbar/NavbarElement.vue'
import Objects from '@/components/ObjectsPageComponents/Objects.vue'
export default {
    components: {
        NavbarElement,
        Objects
    },
    setup() {

    },
}
</script>