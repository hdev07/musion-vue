<script setup lang="ts">
import ButtonCommon from '@/components/common/ButtonCommon.vue'
</script>
<template>
  <section class="bg-background text-white">
    <div class="mx-auto max-w-screen-lg px-4 py-32 h-screen flex items-center">
      <div class="mx-auto max-w-3xl text-center">
        <h1
          class="bg-gradient-to-b from-[#F48FB1] to-[#FF4081] bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
        >
          Explora la cultura sin limites
          <span class="sm:block pb-2"> </span>
        </h1>
        <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
          Explora los museos más fascinantes de la ciudad y sumérgete en su historia y arte.
        </p>
        <div class="mt-8 flex justify-center gap-4">
          <div class="w-2/3">
            <ButtonCommon :to="'https://app.musion.day'" :text="'Registrarme'" :hBgPrimary="true" />
          </div>
          <div class="w-2/3">
            <ButtonCommon
              :to="'https://app.musion.day/login'"
              :text="'Iniciar sesión'"
              :bgPrimary="true"
              :hBgTransparent="true"
              :hShadowPink="true"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
