import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@popperjs/core'

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'

const app = createApp(App)
const pinia = createPinia()

// Если у вас есть дополнительные модули, добавьте их сюда
// pinia.use(yourStoreModule)
app.use(pinia)
app.use(router)
app.use(PrimeVue)
app.use(ToastService)

app.component('Button', Button)
app.component('InputText', InputText)
app.component('Toast', Toast)
app.component('ToastService', ToastService)
// Импортируйте свои store модули здесь, если они есть
// import { yourStoreModule } from './path/to/your/storeModule.js'

app.mount('#app')
