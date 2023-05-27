<script setup lang="ts">
const props = defineProps({
  isOpen: { type: Boolean, default: false },
  question: { type: String, required: true },
  answer: { type: String, required: true }
})
</script>
<template>
  <details
    class="group rounded-lg bg-background py-4 [&_summary::-webkit-details-marker]:hidden"
    :open="props?.isOpen"
  >
    <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-white">
      <h2 class="font-medium mx-4">
        {{ props?.question }}
      </h2>
      <span class="relative h-5 w-5 shrink-0">
        <vue-feather
          type="minus-circle"
          stroke="#FF4081"
          size="1.3rem"
          class="absolute inset-0 opacity-100 group-open:opacity-0"
        />
        <vue-feather
          type="plus-circle"
          stroke="#FF4081"
          size="1.3rem"
          class="absolute inset-0 opacity-0 group-open:opacity-100"
        />
      </span>
    </summary>
    <div class="flex items-start ml-6">
      <vue-feather type="corner-down-right" stroke="#FF4081" size="1.3rem" class="pr-5 mt-2" />
      <p class="mt-2 px-3 leading-relaxed text-white">
        {{ props?.answer }}
      </p>
    </div>
  </details>
</template>
