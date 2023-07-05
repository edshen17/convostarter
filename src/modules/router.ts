import { type UserModule } from '~/types'

export const install: UserModule = ({ isClient, router }) => {
  if (isClient) {
    // you can add auth guards here...
    // router.beforeEnter...
  }
}
