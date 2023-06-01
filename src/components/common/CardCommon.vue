<script setup lang="ts">
const props = defineProps({
  title: { type: String, default: '' },
  data: { type: String, default: '' },
  sm: { type: String, default: '' },
  icon: { type: String, default: '' },
  img: { type: String, default: '' },
  stars: { type: String, default: '' }
})
</script>
<template>
  <div
    v-if="props.icon === '' && props.stars === ''"
    class="block rounded-lg border-1 p-8 transition bg-secondary hover:shadow-xl hover:shadow-primary/30"
  >
    <div class="text-xl font-bold text-white">{{ props?.title }}</div>
    <div class="text-4xl font-extrabold text-primary md:text-3xl flex">
      <p>{{ props?.data }}</p>
      <p class="text-sm">{{ props?.sm }}</p>
    </div>
  </div>
  <div
    v-else-if="props.icon"
    class="block rounded-lg border-1 p-8 transition bg-secondary hover:shadow-xl hover:shadow-primary/30"
  >
    <vue-feather :type="props?.icon" stroke="#FF4081" size="2.5rem"></vue-feather>
    <h2 class="mt-4 text-xl font-bold text-white">
      {{ props?.title }}
    </h2>
    <p class="mt-1 text-sm text-gray-300">
      {{ props?.data }}
    </p>
  </div>
  <div
    v-else-if="props.stars"
    class="block rounded-lg border-1 p-8 transition bg-secondary hover:shadow-xl hover:shadow-primary/30"
  >
    <div class="flex items-center gap-4">
      <img :src="props?.img" alt="Man" class="h-16 w-16 rounded-full object-cover" />
      <div>
        <div class="flex justify-start gap-0.5 text-primary">
          <vue-feather v-for="index in 5" :key="index" type="star" fill="#FF4081" size="1rem" />
          <!-- <vue-feather type="star" stroke="#FF4081" size="1rem" fill="none" /> -->
        </div>
        <p class="mt-1 text-lg font-medium text-white">{{ props?.title }}</p>
      </div>
    </div>
    <p class="mt-4 text-white">
      {{ props?.data }}
    </p>
  </div>
</template>
