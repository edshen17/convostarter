import { Buffer } from 'buffer'
import { setupLayouts } from 'virtual:generated-layouts'
import Previewer from 'virtual:vue-component-preview'
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import type { UserModule } from './types'
import generatedRoutes from '~pages'

import 'quasar/src/css/index.sass'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

(globalThis as any).Buffer = Buffer

const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  async (ctx) => {
    ctx.app.directive('focus', {
      mounted(el, binding) {
        if (binding.value)
          el.focus()
      },
    })
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
    ctx.app.use(Previewer)
  },
)
