<script setup lang="ts">
const data = useDataStore()
</script>

<template>
  <div relative>
    <input v-model="data.q" w-full border-1 border-gray-300 rounded-md bg-white px-4 py-2 shadow-md dark:border-gray-600 focus:border-blue-500 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring focus:ring-blue-200 dark:placeholder-gray-400 type="text" placeholder="Kino nomini kiriting...">
  </div>
</template>
