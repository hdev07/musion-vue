<script setup lang="ts"></script>

<template>
  <section class="bg-background">
    <div class="mx-auto max-w-screen-xl px-4 pb-16 sm:px-6 md:py-16 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-bold text-white sm:text-4xl">
          En la Ciudad de México hay 177 museos ¿Conoces más del 20%?
        </h2>

        <p class="mt-4 text-white">
          En 2022 Aproximadamente el 51.6% de los habitantes visitaron al menos uno de los 177
          museos
        </p>
      </div>

      <div class="mt-8 sm:mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div
            class="block rounded-xl border border-pink-500/10 p-8 bg-secondary hover:shadow-xl transition hover:border-pink-500/30 hover:shadow-pink-500/30"
          >
            <div class="text-xl font-bold text-white">Habitantes en CDMX</div>
            <div class="text-4xl font-extrabold text-primary md:text-5xl flex">
              <p>9,209,944</p>
              <p class="text-sm">*</p>
            </div>
          </div>
          <div
            class="block rounded-xl border border-pink-500/10 p-8 bg-secondary hover:shadow-xl transition hover:border-pink-500/30 hover:shadow-pink-500/30"
          >
            <div class="text-xl font-bold text-white">Museos en CDMX</div>
            <div class="text-4xl font-extrabold text-primary md:text-5xl">177</div>
          </div>
          <div
            class="block rounded-xl border border-pink-500/10 p-8 bg-secondary hover:shadow-xl transition hover:border-pink-500/30 hover:shadow-pink-500/30"
          >
            <div class="text-xl font-bold text-white">Visitas a museos por año</div>
            <div class="text-4xl font-extrabold text-primary md:text-5xl flex">
              <p>4,750,272</p>
              <p class="text-sm">*</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
