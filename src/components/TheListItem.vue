<script setup lang="ts">
import type { Result } from '~/types/Result'

const props = defineProps<{
  item: Result
}>()

const isOpen = ref<boolean>(false)

function openModal() {
  isOpen.value = true
}

function closeModal() {
  isOpen.value = false
}

async function copyImage(type: 'poster' | 'backdrop') {
  await navigator.clipboard.writeText(type === 'poster' ? getPoster(props.item) : getBackdrop(props.item))
}
</script>

<template>
  <li v-if="item && item.poster_path && item.backdrop_path" h-full max-h-2xl rounded-lg bg-red shadow-lg>
    <div grid gap-2>
      <div class="group" relative block overflow-hidden rounded-lg>
        <img title="Poster" loading="lazy" block h-full w-full object-cover :src="getPoster(item)" :alt="item.title">
        <div class="group-hover:opacity-100" absolute left-0 top-0 h-full w-full flex items-center justify-center bg-black bg-op-60 opacity-0 transition-opacity-200>
          <div flex flex-wrap items-center justify-center gap-3>
            <button btn @click="copyImage('poster')">
              Poster <div i-carbon-copy />
            </button>
            <button btn @click="copyImage('backdrop')">
              Backdrop <div i-carbon-copy />
            </button>
            <TheImageDialog v-if="item.backdrop_path" :item="item" :is-open="isOpen" @open-modal="openModal" @close-modal="closeModal" />
          </div>
        </div>
      </div>
    </div>
  </li>
</template>
