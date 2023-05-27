<script setup lang="ts">
import { ref } from 'vue'
import FaqCard from '@/components/common/FaqCard.vue'
import TitleCommon from '@/components/common/TitleCommon.vue'

const FAQs = ref([
  {
    question: 'Inicio',
    answer: '#Home',
    show: true
  },
  {
    question: 'Nosotros',
    answer: '#AboutUs'
  },
  {
    question: 'Museos',
    answer: '#Museums'
  },
  {
    question: 'FAQs',
    answer: '#FAQs'
  },
  {
    question: 'Testimonios',
    answer: '#Testimonials'
  },
  {
    question: 'Contactanos',
    answer: '#ContactUs'
  }
])
</script>

<template>
  <section class="bg-background text-white">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <TitleCommon :title="'Algunas preguntas frecuentes'" :description="'qwertyuiop'" />
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
