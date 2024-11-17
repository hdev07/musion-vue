<script setup lang="ts">
import { ref } from 'vue'
import Logo from '@/assets/logos/OnlyTextLogo.vue'

const MusionLinks = ref([
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
    title: 'Testimonios',
    href: '#Testimonials'
  }
])

const HelpLinks = ref([
  {
    title: 'FAQs',
    href: '#FAQs'
  },
  {
    title: 'Contactanos',
    href: '#ContactUs'
  }
])

const LegalLinks = ref([
  {
    title: 'Privacy policy',
    href: '/privacy-policy'
  },
  {
    title: 'Terms of use',
    href: '/terms-of-service'
  }
])

const SocialLinks = ref([
  {
    title: 'facebook',
    href: 'https://www.facebook.com/musion.day'
  },
  {
    title: 'instagram',
    href: 'https://www.instagram.com/musion_app'
  },
  {
    title: 'twitter',
    href: 'https://twitter.com/musion_app'
  }
])

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-background">
    <div class="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <div>
          <a class="block" href="#Home">
            <Logo class="w-32" :currentFill="'#FF4081'" />
          </a>
        </div>

        <ul class="flex justify-start gap-6 mt-8 sm:mt-0 sm:justify-end">
          <li v-for="link in SocialLinks" :key="link.title">
            <a
              :href="link?.href"
              rel="noreferrer"
              target="_blank"
              class="text-white transition hover:text-primary"
            >
              <vue-feather :type="link?.title" />
            </a>
          </li>
        </ul>
      </div>

      <div
        class="grid grid-cols-1 gap-8 pt-8 border-t border-primary sm:grid-cols-2 lg:grid-cols-3 lg:pt-16"
      >
        <div>
          <p class="font-medium text-primary">Musion</p>
          <nav class="mt-6">
            <ul class="space-y-4 text-sm">
              <li v-for="link in MusionLinks" :key="link.title">
                <a :href="link?.href" class="text-white transition hover:text-primary">
                  {{ link?.title }}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <p class="font-medium text-primary">Ayuda</p>
          <nav class="mt-6">
            <ul class="space-y-4 text-sm">
              <li v-for="link in HelpLinks" :key="link.title">
                <a :href="link?.href" class="text-white transition hover:text-primary">
                  {{ link?.title }}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <p class="font-medium text-primary">Legales</p>
          <nav class="mt-6">
            <ul class="space-y-4 text-sm">
              <li v-for="link in LegalLinks" :key="link.title">
                <a :href="link?.href" class="text-white transition hover:text-primary">
                  {{ link?.title }}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <ul>
        <li>
          <a
            href="https://cuentame.inegi.org.mx/monografias/informacion/df/poblacion/"
            target="_blank"
            rel="noreferrer"
          >
            *Poblacion en CDMX al 2020
          </a>
        </li>
        <li>
          <a
            href="https://www.inegi.org.mx/sistemas/olap/proyectos/bd/continuas/museos/caracmuseos_new.asp"
            target="_blank"
            rel="noreferrer"
          >
            *Estadisticas de Museos en Mexico y Edo. Mex.
          </a>
        </li>
      </ul>
      <p class="text-xs text-primary">
        &copy; {{ currentYear }}. Musion. Todos los derechos reservados.
      </p>
    </div>
  </footer>
</template>
