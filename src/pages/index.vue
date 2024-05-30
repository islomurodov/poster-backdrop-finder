<script setup lang="ts">
import axios from 'axios'
import type { AxiosResponse } from 'axios'
import type { ApiResponse } from '~/types/ApiResponse'

defineOptions({
  name: 'IndexPage',
})

const data = useDataStore()

const isLoading = ref<boolean>(false)
const page = ref<number>(1)

async function getPoster(query?: string) {
  try {
    isLoading.value = true
    const response: AxiosResponse<ApiResponse> = await axios.get<ApiResponse>(`${import.meta.env.VITE_TMDB_URL}/search/multi`, {
      params: {
        api_key: import.meta.env.VITE_TMDB_API_KEY,
        language: 'en-US',
        query: query || data.q,
        page: page.value,
      },
    })
    data.data = response.data
    data.data?.results.sort((a, b) => b.popularity - a.popularity)
    isLoading.value = false
  }
  catch (error: any) {
    console.error(error)
  }
}

watch(() => data.q, (newVal) => {
  getPoster(newVal)
})
</script>

<template>
  <div mx-auto max-w-7xl w-full>
    <TheSearch />
    <div py-2 />
    <div v-if="isLoading">
      Yuklanmoqda...
    </div>
    <TheList v-else-if="data.data && data.data?.results.length" :items="data.data" />
    <div v-else>
      Hech narsa yo'q
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
