<script setup lang="ts">
const props = defineProps({
  title: { type: String, default: '' },
  data: { type: String, default: '' },
  sm: { type: String, default: '' }
})
</script>
<template>
  <div
    class="block rounded-xl border border-pink-500/10 p-8 bg-secondary hover:shadow-xl transition hover:border-pink-500/30 hover:shadow-pink-500/30"
  >
    <div class="text-xl font-bold text-white">{{ props?.title }}</div>
    <div class="text-4xl font-extrabold text-primary md:text-5xl flex">
      <p>{{ props?.data }}</p>
      <p class="text-sm">{{ props?.sm }}</p>
    </div>
  </div>
</template>
