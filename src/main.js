import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@popperjs/core'


import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'

import YmapPlugin from 'vue-yandex-maps'

const app = createApp(App)
const pinia = createPinia()

const settings = {
    apiKey: '49e1eea5-38ec-417e-abfe-8d2ab7db50dd', // Индивидуальный ключ API
    lang: 'ru_RU', // Используемый язык
    coordorder: 'latlong', // Порядок задания географических координат
    debug: false, // Режим отладки
    version: '2.1' // Версия Я.Карт
  }

// pinia.use(yourStoreModule)
app.use(pinia)
app.use(router)
app.use(ToastService)
app.use(YmapPlugin, settings)

app.component('Button', Button)
app.component('InputText', InputText)
app.component('Toast', Toast)
app.component('ToastService', ToastService)

// Импортируйте свои store модули здесь, если они есть
// import { yourStoreModule } from './path/to/your/storeModule.js'

app.mount('#app')
