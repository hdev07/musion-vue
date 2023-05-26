<script setup lang="ts">
import Logo from '@/assets/logos/OnlyTextLogo.vue'
</script>

<template>
  <header aria-label="Site Header" class="bg-background">
    <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
      <a class="block hover:text-primary" href="#Home">
        <Logo class="w-32" :currentFill="'#FF4081'" />
      </a>

      <div class="flex flex-1 items-center justify-end md:justify-between">
        <nav aria-label="Site Nav" class="hidden md:block">
          <ul class="flex items-center gap-6 text-sm">
            <li>
              <a class="text-white transition hover:text-primary/75" href="#Home"> Inicio </a>
            </li>

            <li>
              <a class="text-white transition hover:text-primary/75" href="#Hero"> Careers </a>
            </li>

            <li>
              <a class="text-white transition hover:text-primary/75" href="#Stats"> History </a>
            </li>

            <li>
              <a class="text-white transition hover:text-primary/75" href="#"> Services </a>
            </li>

            <li>
              <a class="text-white transition hover:text-primary/75" href="#"> Projects </a>
            </li>

            <li>
              <a class="text-white transition hover:text-primary" href="#"> Blog </a>
            </li>
          </ul>
        </nav>

        <div class="flex items-center gap-4">
          <div class="sm:flex sm:gap-4">
            <a href="https://app.musion.day">
              <div
                class="hidden w-full rounded border border-primary px-5 py-2 text-sm text-white hover:bg-primary sm:block"
              >
                Registrame
              </div>
            </a>
            <a href="https://app.musion.day/login">
              <div
                class="block w-full rounded border border-primary px-5 py-2 text-sm text-white shadow-xl bg-primary hover:bg-transparent hover:text-white hover:shadow-pink-500/10"
              >
                Inicia sesion
              </div>
            </a>
          </div>

          <button class="block rounded-md p-2 text-white transition hover:text-primary md:hidden">
            <span class="sr-only">Toggle menu</span>
            <svg class="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
