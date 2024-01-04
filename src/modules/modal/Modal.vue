<template>
  <Dialog :visible="isModalOpen" modal header="Header" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
    
            <p class="m-0">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium esse minima voluptatibus voluptate, repellat repudiandae quia voluptates commodi quasi sed, quos natus quibusdam blanditiis dolorum sunt rerum quae? Deleniti, eligendi!
                <!-- <InputUIElementVue :field_name="'Имя'"/>
                <InputUIElementVue :field_name="'Телефон'"/> -->
            </p>
            <template #footer>
                <Button label="Ok" icon="pi pi-check"  />
            </template>
        </Dialog>
</template>

<script>
import { ref } from 'vue'
import { useModalStore } from '../../store/store'

import InputUIElementVue from '../../ui/Input/InputUIElement.vue'
export default {
  components: {
    InputUIElementVue,
  },
  props: {
    visible: {
        visible: Boolean
    }
  },
  setup() {
    const isModalOpen = ref(useModalStore().isModalOpen)

    const closeModal = () => {
      useModalStore().closeModal()
    }

    return { isModalOpen, closeModal }
  }
}
</script>
