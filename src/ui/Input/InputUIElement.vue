<template>
  
  <div class="flex flex-column gap-2">
        <label for="username">Username</label> <br>
        <InputText id="username" v-model="value" aria-describedby="username-help" /> <br>
        <small id="username-help">Enter your username to reset your password.</small>
      </div>
</template>


<script>
import { ref } from 'vue'
export default {
    props: {
        field_name: {
            name: String
        }
    },
    setup() {
        let element = ref()

        return{
            element
        }
    },
}
</script>