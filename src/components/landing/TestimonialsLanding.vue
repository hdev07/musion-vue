<script setup lang="ts">
import { ref } from 'vue'
import TitleCommon from '@/components/common/TitleCommon.vue'
import CardCommon from '@/components/common/CardCommon.vue'

const title = ref('Nuestros usuarios')
const description = ref('Que opinan nuestros usuarios de musion')
const Comments = ref([
  {
    img: 'https://i.pravatar.cc/300',
    name: 'María G.',
    comment:
      '¡Musion es la herramienta perfecta para los amantes del arte y la cultura! Me encanta cómo puedo explorar todos los museos de la Ciudad de México en un solo lugar. Además, las rutas personalizadas me ayudan a planificar mis visitas de manera eficiente. ¡Definitivamente lo recomiendo!',
    stars: '5'
  },
  {
    img: 'https://i.pravatar.cc/301',
    name: 'Juan C.',
    comment:
      'Descubrí Musion y ahora no puedo visitar un museo sin consultarlo primero. Me gusta cómo puedo ver las exposiciones actuales y los eventos especiales en cada museo. Además, la función de comentarios me permite conocer las opiniones de otros usuarios. ¡Una aplicación imprescindible para los aficionados a los museos!"',
    stars: '5'
  },
  {
    img: 'https://i.pravatar.cc/302',
    name: 'Alejandra M.',
    comment:
      'Como turista, Musion ha sido mi guía confiable para explorar los museos de la Ciudad de México. La información detallada, los horarios de apertura y las indicaciones precisas me han ahorrado mucho tiempo y esfuerzo. ¡Definitivamente recomendaría Musion a todos los visitantes de la ciudad!',
    stars: '5'
  }
])
</script>

<template>
  <section class="bg-background text-white">
    <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <TitleCommon :title="title" :description="description" />
      <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <CardCommon
          v-for="comment in Comments"
          :key="comment?.name"
          :img="comment?.img"
          :stars="comment?.stars"
          :title="comment?.name"
          :data="comment?.comment"
        />
      </div>
    </div>
  </section>
</template>
