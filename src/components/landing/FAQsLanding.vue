<script setup lang="ts">
import { ref } from 'vue'
import FaqCard from '@/components/common/FaqCard.vue'
import TitleCommon from '@/components/common/TitleCommon.vue'

const title = ref('Algunas preguntas frecuentes')
const description = ref('')
const FAQs = ref([
  {
    question: '¿Qué es Musion?',
    answer:
      'Musion es una PWA (Progressive Web App). Diseñada para explorar y descubrir los museos de la Ciudad de México. ',
    show: true
  },
  {
    question: '¿Cómo funciona Musion?',
    answer:
      'Musion utiliza un mapa interactivo para mostrar la ubicación de los museos en la Ciudad de México. Los usuarios pueden navegar por el mapa, seleccionar museos y obtener información detallada sobre cada uno.'
  },
  {
    question: '¿Cuál es el objetivo principal de Musion?',
    answer:
      'El objetivo principal de Musion es proporcionar a los usuarios una herramienta fácil de usar para explorar los museos de la Ciudad de México, planificar visitas y descubrir exposiciones y eventos culturales.'
  },
  {
    question: '¿En qué dispositivos puedo utilizar Musion?',
    answer:
      'Actualmente Musion está disponible como aplicación Web,lo que permite a los usuarios acceder a ella desde sus teléfonos.'
  },
  {
    question: '¿Cuántos museos están disponibles en Musion?',
    answer:
      'Musion cuenta con una amplia base de datos que incluye información sobre 177 museos en la Ciudad de México. (Proximamente los museos en todo mexico.)'
  },
  {
    question: '¿Puedo obtener información detallada sobre cada museo?',
    answer:
      '    Sí, Musion proporciona información detallada sobre cada museo, como horarios de apertura, precios de entrada, exposiciones actuales y eventos especiales.'
  },
  {
    question:
      '¿Musion proporciona información sobre las exposiciones y eventos actuales en los museos?',
    answer:
      '    Sí, Musion mantiene su base de datos actualizada con información sobre las exposiciones y eventos actuales en los museos de la Ciudad de México.'
  },
  {
    question: '¿Puedo crear rutas personalizadas para visitar varios museos en un mismo día?',
    answer:
      '    Sí, Musion ofrece la opción de generar rutas personalizadas, lo que permite a los usuarios planificar su recorrido y optimizar su tiempo al visitar varios museos en un mismo día.'
  },
  {
    question:
      '¿Musion ofrece información sobre horarios de apertura, precios de entrada y ubicación de los museos?',
    answer:
      '    Sí, Musion proporciona información detallada sobre horarios de apertura, precios de entrada y ubicación de cada museo incluido en la aplicación.'
  }
])
</script>

<template>
  <section class="bg-background text-white">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <TitleCommon :title="title" :description="description" />

      <div class="mx-8 py-8 sm:py-12 lg:py-16 lg:mx-16">
        <FaqCard
          v-for="Faq in FAQs"
          :key="Faq.question"
          :isOpen="Faq.show === true"
          :question="Faq.question"
          :answer="Faq.answer"
        />
      </div>
    </div>
  </section>
</template>
