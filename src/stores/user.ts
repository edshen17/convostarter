import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const initialState = {
    role: 'user',
  }

  const entityStateData = ref({
    ...initialState,
  })

  const $reset = () => {
    entityStateData.value = { ...initialState }
  }

  return { entityStateData, $reset }
}, {
  persist: true,
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
