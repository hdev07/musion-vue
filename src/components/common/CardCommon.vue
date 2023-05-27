<script setup lang="ts">
const props = defineProps({
  title: { type: String, default: '' },
  data: { type: String, default: '' },
  sm: { type: String, default: '' },
  icon: { type: String, default: '' }
})
</script>
<template>
  <div
    v-if="props.icon === ''"
    class="block rounded-xl border border-pink-500/10 p-8 transition bg-secondary hover:shadow-xl hover:border-pink-500/30 hover:shadow-pink-500/30"
  >
    <div class="text-xl font-bold text-white">{{ props?.title }}</div>
    <div class="text-4xl font-extrabold text-primary md:text-3xl flex">
      <p>{{ props?.data }}</p>
      <p class="text-sm">{{ props?.sm }}</p>
    </div>
  </div>
  <div
    v-else-if="props.icon"
    class="block rounded-xl border border-pink-500/10 p-8 transition bg-secondary hover:shadow-xl hover:border-pink-500/30 hover:shadow-pink-500/30"
  >
    <vue-feather :type="props?.icon" stroke="#FF4081" size="2.5rem"></vue-feather>
    <h2 class="mt-4 text-xl font-bold text-white">
      {{ props?.title }}
    </h2>

    <p class="mt-1 text-sm text-gray-300">
      {{ props?.data }}
    </p>
  </div>
  <div v-else></div>
</template>
