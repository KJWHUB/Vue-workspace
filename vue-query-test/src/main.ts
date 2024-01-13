import './assets/main.css'

import { createApp } from 'vue'

// pinia
import { createPinia } from 'pinia'

// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// query
import { VueQueryPlugin } from '@tanstack/vue-query'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(VueQueryPlugin)
app.use(createPinia())
app.use(router)

app.mount('#app')
