<script setup lang="ts">
const props = defineProps({
  to: { type: String, required: true },
  text: { type: String, required: true },
  BgPrimary: { type: Boolean, default: false },
  HBgTransparent: { type: Boolean, default: false },
  HShadowPink: { type: Boolean, default: false },
  HBgPrimary: { type: Boolean, default: false },
  hidden: { type: Boolean, default: false },
  SmBlock: { type: Boolean, default: false }
})
</script>
<template>
  <a :href="props?.to">
    <div
      :class="{
        'bg-primary': props?.BgPrimary,
        'hover:bg-transparent': props?.HBgTransparent,
        'hover:bg-primary': props?.HBgPrimary,
        'hover:shadow-pink-500/30': props?.HShadowPink,
        hidden: props?.hidden,
        'sm:block': props?.SmBlock
      }"
      class="block w-full rounded border border-primary px-5 py-2 text-sm text-white text-center hover:shadow-xl"
    >
      {{ props?.text }}
    </div>
  </a>
</template>
