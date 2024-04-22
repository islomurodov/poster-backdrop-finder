import { acceptHMRUpdate, defineStore } from 'pinia'
import type { ApiResponse } from '~/types/ApiResponse'

export const useDataStore = defineStore('data', () => {
  const q = ref<string>('')
  const data = ref<ApiResponse>()

  return {
    data,
    q,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useDataStore as any, import.meta.hot))
