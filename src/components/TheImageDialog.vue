<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import type { Result } from '~/types/Result'

defineProps<{
  item: Result
  isOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'closeModal'): void
  (e: 'openModal'): void
}>()
</script>

<template>
  <div inset-0 flex items-center justify-center>
    <button
      type="button"
      btn
      @click="emit('openModal')"
    >
      Ko'rish <div i-carbon-view />
    </button>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" relative z-10 @close="emit('closeModal')">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/65" />
      </TransitionChild>

      <div fixed inset-0 overflow-y-auto>
        <div
          min-h-full flex items-center justify-center p-4 text-center
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              max-w-4xl w-full transform overflow-hidden rounded-2xl bg-gray-200 p-6 text-left align-middle shadow-xl transition-all dark:bg-gray-800
            >
              <div mt-2>
                <img loading="lazy" decoding="async" :src="getBackdrop(item)" :alt="item.title">
              </div>

              <div mt-4>
                <button
                  ml-auto
                  type="button"
                  btn
                  @click="emit('closeModal')"
                >
                  Yopish <div i-carbon-close />
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
