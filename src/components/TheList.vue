<script setup lang="ts">
import type { ApiResponse } from '~/types/ApiResponse'

defineProps<{
  items: ApiResponse
}>()
</script>

<template>
  <ul grid grid-cols-2 mx-auto w-full place-items-center gap-5 overflow-hidden rounded-md lg:grid-cols-4 sm:grid-cols-3>
    <TransitionGroup name="fade">
      <TheListItem v-for="item in items.results" :key="item.id" :item="item" />
    </TransitionGroup>
  </ul>
</template>
