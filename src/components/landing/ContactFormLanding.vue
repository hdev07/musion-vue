<script setup lang="ts">
import ButtonCommon from '@/components/common/ButtonCommon.vue'
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

        <div class="rounded-lg bg-secondary p-8 shadow-lg lg:col-span-3 lg:p-12">
          <form action="" class="space-y-4">
            <div>
              <label class="sr-only" for="name">Nombre</label>
              <input
                class="w-full rounded-lg active:border active:border-primary bg-background p-3 text-sm text-white"
                placeholder="Nombre"
                type="text"
                id="name"
              />
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <input
                  class="w-full rounded-lg active:border active:border-primary p-3 text-sm bg-background text-white"
                  placeholder="Correo electronico"
                  type="email"
                  id="email"
                />
              </div>

              <div>
                <input
                  class="w-full rounded-lg active:border active:border-primary p-3 text-sm bg-background text-white"
                  placeholder="Numero de telefono"
                  type="tel"
                  id="phone"
                />
              </div>
            </div>

            <div>
              <textarea
                class="w-full rounded-lg active:border active:border-primary p-3 text-sm bg-background text-white"
                placeholder="Mensaje"
                rows="8"
                id="message"
              ></textarea>
            </div>

            <div class="mt-4 flex justify-center text-center">
              <div class="w-2/3 sm:w-1/3">
                <ButtonCommon
                  :to="'/'"
                  :text="'Enviar comentarios'"
                  :bgPrimary="true"
                  :hBgTransparent="true"
                  :hShadowPink="true"
                  target="_blank"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
