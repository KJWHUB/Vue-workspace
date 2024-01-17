import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import type { App } from 'vue'

export type ElementPlusIconsVueStringLiteralType = keyof typeof ElementPlusIconsVue

export const ElementPlusCustomPlugin = {
  install: (app: App<Element>) => {
    app.use(ElementPlus)
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  }
}
