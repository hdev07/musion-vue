<script setup lang="ts">
const props = defineProps({
  to: { type: String, default: '#' },
  text: { type: String, required: true },
  bgPrimary: { type: Boolean, default: false },
  hBgTransparent: { type: Boolean, default: false },
  hShadowPink: { type: Boolean, default: false },
  hBgPrimary: { type: Boolean, default: false },
  hidden: { type: Boolean, default: false },
  smBlock: { type: Boolean, default: false }
})
</script>
<template>
  <a :href="props?.to">
    <div
      :class="{
        'bg-primary': props?.bgPrimary,
        'hover:bg-transparent': props?.hBgTransparent,
        'hover:bg-primary': props?.hBgPrimary,
        'hover:shadow-pink-500/30': props?.hShadowPink,
        hidden: props?.hidden,
        'sm:block': props?.smBlock
      }"
      class="block w-full rounded border-2 border-primary px-5 py-2 text-sm text-white text-center hover:shadow-xl"
    >
      {{ props?.text }}
    </div>
  </a>
</template>
