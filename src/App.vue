<script setup lang="ts">
useHead({
  title: 'Poster va Backdrop qidirish',
  meta: [
    {
      name: 'description',
      content: 'Ushbu kichik dastur kino platformalari uchun posterlari va backdroplarini qidirish va yuklab olish uchun alohida o\'ylangan. Yaratuvchi islomurodov.netlify.app',
    },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#00aba9' : '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg',
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
