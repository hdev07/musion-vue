<script setup lang="ts">
const props = defineProps({
  title: { type: String, default: '' },
  description: { type: String, default: '' }
})
</script>
<template>
  <div class="mx-auto max-w-3xl text-center">
    <h2 class="text-3xl font-bold text-white sm:text-4xl">
      {{ props?.title }}
    </h2>

    <p class="mt-4 text-white">
      {{ props?.description }}
    </p>
  </div>
</template>
