<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Logo from '@/assets/logos/OnlyTextLogo.vue'
import ButtonCommon from '@/components/common/ButtonCommon.vue'

const Links = ref([
  {
    title: 'Inicio',
    href: '#Home'
  },
  {
    title: 'Nosotros',
    href: '#AboutUs'
  },
  {
    title: 'Museos',
    href: '#Museums'
  },
  {
    title: 'FAQs',
    href: '#FAQs'
  },
  {
    title: 'Testimonios',
    href: '#Testimonials'
  },
  {
    title: 'Contactanos',
    href: '#ContactUs'
  }
])

const mobileMenuVisible = ref(false)

const toggleMobileMenu = () => {
  mobileMenuVisible.value = !mobileMenuVisible.value

  if (mobileMenuVisible.value) {
    disableScroll()
  } else {
    enableScroll()
  }
}

const disableScroll = () => {
  document.documentElement.style.overflow = 'hidden'
  document.body.style.overflow = 'hidden'
}

const enableScroll = () => {
  document.documentElement.style.overflow = ''
  document.body.style.overflow = ''
}

onMounted(() => {
  onUnmounted(() => {
    enableScroll()
  })
})
</script>

<template>
  <header class="bg-secondary fixed w-full z-10">
    <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
      <a class="block" href="#Home">
        <Logo class="w-32" :currentFill="'#FF4081'" />
      </a>
      <div class="flex flex-1 items-center justify-end md:justify-between">
        <nav class="hidden md:block mr-4">
          <ul class="flex items-center gap-6 text-sm md:gap-3">
            <li v-for="link in Links" :key="link.title">
              <a class="text-white transition hover:text-primary/75" :href="link?.href">
                {{ link?.title }}
              </a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center gap-4">
          <div class="sm:flex sm:gap-4">
            <ButtonCommon
              :to="'https://app.musion.day'"
              :text="'Registrarme'"
              :hBgPrimary="true"
              :smBlock="true"
              :hidden="true"
              target="_blank"
            />
            <ButtonCommon
              :to="'https://app.musion.day/login'"
              :text="'Iniciar sesión'"
              :bgPrimary="true"
              :hBgTransparent="true"
              :hShadowPink="true"
              target="_blank"
            />
          </div>
          <button
            class="block rounded-md p-2 text-white transition hover:text-primary md:hidden"
            @click="toggleMobileMenu"
          >
            <svg class="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>

  <div class="md:hidden" :class="{ hidden: !mobileMenuVisible }">
    <div
      class="fixed inset-0 z-20 flex flex-col items-center justify-center bg-secondary hover:text-primary"
    >
      <div class="absolute top-0 w-full flex">
        <button class="absolute right-0 m-4 p-2 text-primary transition" @click="toggleMobileMenu">
          <svg class="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <ul class="text-center mb-4">
        <li v-for="link in Links" :key="link.title" class="mb-3">
          <a
            class="text-white text-sm transition hover:text-primary/75"
            :href="link?.href"
            @click="toggleMobileMenu"
          >
            {{ link?.title }}
          </a>
        </li>
      </ul>
      <div class="w-2/3 mb-4">
        <ButtonCommon
          :to="'https://app.musion.day'"
          :text="'Registrarme'"
          :hBgPrimary="true"
          :smBlock="true"
          target="_blank"
        />
      </div>
      <div class="w-2/3">
        <ButtonCommon
          :to="'https://app.musion.day/login'"
          :text="'Iniciar sesión'"
          :bgPrimary="true"
          :hBgTransparent="true"
          :hShadowPink="true"
          target="_blank"
        />
      </div>
    </div>
  </div>
</template>
