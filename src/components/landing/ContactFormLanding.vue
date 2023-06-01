<script setup lang="ts">
import FormCommon from '@/components/common/FormCommon.vue'
import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL

async function sendComment(body: Object) {
  try {
    // const res = await axios({
    //   method: 'post',
    //   url: `${BASE_URL}/opinions`,
    //   data: {
    //     name: body?.name?.value,
    //     email: body?.email?.value,
    //     telephone: body?.telephone?.value,
    //     comment: body?.comment?.value
    //   }
    // })
    console.log(body)
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <section class="bg-background">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
        <div class="lg:col-span-2 lg:py-12">
          <h2 class="text-3xl font-bold text-primary sm:text-4xl">
            ¡Tu opinión es importante para nosotros!
          </h2>
          <p class="max-w-xl text-lg text-white pt-4">
            En Musion, valoramos tus comentarios y reseñas sobre tu experiencia en los museos de la
            Ciudad de México. Nos encantaría saber qué te pareció la aplicación, qué museos has
            visitado y qué impresiones te dejaron.
          </p>
        </div>

        <div class="rounded-lg bg-secondary p-8 lg:col-span-3 lg:p-12">
          <FormCommon @submit:form="sendComment" />
        </div>
      </div>
    </div>
  </section>
</template>
