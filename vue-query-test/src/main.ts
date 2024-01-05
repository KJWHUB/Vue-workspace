import './assets/main.css'

import { createApp } from 'vue'

// pinia
import { createPinia } from 'pinia'

// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// query
import { VueQueryPlugin } from '@tanstack/vue-query'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(ElementPlus)
app.use(VueQueryPlugin)
app.use(createPinia())
app.use(router)

app.mount('#app')
