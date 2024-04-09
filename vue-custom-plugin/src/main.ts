import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import customPlugin from './plugin/customPlugin'
import customModalPlugin from './plugin/customModalPlugin'

const app = createApp(App)

app.use(createPinia())
app.use(customPlugin, {
  greetings: {
    hello: 'Bonjour!'
  }
})
app.use(customModalPlugin)

app.use(router)

app.mount('#app')
