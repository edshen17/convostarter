import '@quasar/extras/material-icons/material-icons.css'
import { type UserModule } from '~/types'

export const install: UserModule = async ({ app }) => {
  if (typeof window !== 'undefined') {
    const { Quasar } = await import('quasar')
    app.use(Quasar)
  }
}
