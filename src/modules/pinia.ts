import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

import { type UserModule } from '~/types'

export const install: UserModule = ({ isClient, initialState, app }) => {
  const pinia = createPinia()
  app.use(pinia)

  if (isClient) {
    pinia.state.value = (initialState.pinia) || {}
    pinia.use(piniaPluginPersistedState)
  }

  else {
    initialState.pinia = pinia.state.value
  }
}
