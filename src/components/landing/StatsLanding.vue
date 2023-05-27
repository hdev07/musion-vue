<script setup lang="ts">
import { ref } from 'vue'
import TitleCommon from '@/components/common/TitleCommon.vue'
import CardCommon from '@/components/common/CardCommon.vue'

const title = ref('En la Ciudad de México hay 177 museos ¿Conoces más del 20%?')
const description = ref(
  'En 2022 Aproximadamente el 51.6% de los habitantes visitaron al menos uno de los 177 museos'
)
const Stats = ref([
  {
    title: 'Habitantes en CDMX',
    data: '9,209,944',
    sm: '*'
  },
  {
    title: 'Museos en CDMX',
    data: '177'
  },
  {
    title: 'Visitas a museos por año',
    data: '4,750,272',
    sm: '*'
  }
])
</script>

<template>
  <section class="bg-background text-white">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <TitleCommon :title="title" :description="description" />
      <div class="mt-8 sm:mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <CardCommon
            v-for="stat in Stats"
            :key="stat.title"
            :title="stat?.title"
            :data="stat?.data"
            :sm="stat?.sm"
          />
        </div>
      </div>
    </div>
  </section>
</template>
