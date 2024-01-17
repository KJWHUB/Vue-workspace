import './assets/main.css'

import { createApp } from 'vue'

// element-plus
import { ElementPlusCustomPlugin } from './lib/elementPlus'

// query
import { VueQueryPlugin } from '@tanstack/vue-query'

// pinia
import { createPinia } from 'pinia'

// router
import router from './router'

import App from './App.vue'

const app = createApp(App)

app.use(ElementPlusCustomPlugin)
app.use(VueQueryPlugin)
app.use(createPinia())
app.use(router)

app.mount('#app')
