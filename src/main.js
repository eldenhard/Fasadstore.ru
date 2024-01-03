import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
const app = createApp(App)

// Импортируйте свои store модули здесь, если они есть
// import { yourStoreModule } from './path/to/your/storeModule.js'

const pinia = createPinia()

// Если у вас есть дополнительные модули, добавьте их сюда
// pinia.use(yourStoreModule)
app.use(pinia)
app.use(router)

app.mount('#app')
