<script setup lang="ts">
import { ref } from 'vue'
import TitleCommon from '@/components/common/TitleCommon.vue'
import CardCommon from '@/components/common/CardCommon.vue'
import ButtonCommon from '@/components/common/ButtonCommon.vue'

const title = ref('Estas son algunas de las ventajas que tiene usar MUSION')
const description = ref('')

const Stats = ref([
  {
    title: 'Explora la Ciudad de México a través de un viaje cultural único',
    data: 'Descubre la riqueza cultural de la Ciudad de México a través de un viaje único con Musion.',
    icon: 'map'
  },
  {
    title: 'Descubre la increíble diversidad de los museos de la Ciudad',
    data: 'Sumérgete en la diversidad de los museos de la Ciudad de México con Musion. Desde arte clásico hasta ciencia y tecnología',
    icon: 'grid'
  },
  {
    title: 'Sumérgete en el mundo del arte y la historia de la Ciudad',
    data: 'Explora exposiciones impresionantes, aprende sobre la historia de la ciudad y déjate sorprender por la belleza y el significado detrás de cada obra de arte.',
    icon: 'image'
  },
  {
    title: 'Musion te lleva de la mano a través de los museos más fascinantes de la Ciudad',
    data: 'Deja que Musion te guíe a través de los museos más fascinantes de la Ciudad de México.',
    icon: 'shield'
  },
  {
    title: 'Haz de tu visita a los museos de la Ciudad una experiencia inolvidable',
    data: 'Descubre exposiciones impresionantes, participa en eventos especiales y crea recuerdos duraderos mientras exploras la cultura y el arte de la ciudad.',
    icon: 'camera'
  },
  {
    title: 'Musion: desbloquear la riqueza cultural de la Ciudad',
    data: 'Nuestra aplicación web te brinda acceso a una amplia gama de museos, exposiciones y eventos culturales, permitiéndote sumergirte en la historia y la diversidad',
    icon: 'unlock'
  }
])
</script>

<template>
  <section class="bg-background text-white">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <TitleCommon :title="title" :description="description" />

      <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <CardCommon
          v-for="stat in Stats"
          :key="stat.title"
          :title="stat?.title"
          :data="stat?.data"
          :icon="stat?.icon"
        />
      </div>

      <div class="mt-12 justify-center gap-4 text-center mx-auto lg:w-1/4 md:w-1/3">
        <ButtonCommon
          :to="'https://app.musion.day/login'"
          :text="'Iniciar sesión'"
          :bgPrimary="true"
          :hBgTransparent="true"
          :hShadowPink="true"
        />
      </div>
    </div>
  </section>
</template>
