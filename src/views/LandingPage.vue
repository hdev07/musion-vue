<script setup lang="ts">
import CTALanding from '@/components/landing/CTALanding.vue'
import NavbarLanding from '@/components/landing/NavbarLanding.vue'
import StatsLanding from '@/components/landing/StatsLanding.vue'
import SectionLanding from '@/components/landing/SectionLanding.vue'
import FAQsLanding from '@/components/landing/FAQsLanding.vue'
import TestimonialsLanding from '@/components/landing/TestimonialsLanding.vue'
import ContactFormLanding from '@/components/landing/ContactFormLanding.vue'
import FooterLanding from '@/components/landing/FooterLanding.vue'
</script>

<template>
  <main>
    <NavbarLanding />
    <CTALanding id="Home" />
    <StatsLanding id="AboutUs" />
    <SectionLanding id="Museums" />
    <FAQsLanding id="FAQs" />
    <TestimonialsLanding id="Testimonials" />
    <ContactFormLanding id="ContactUs" />
    <FooterLanding />
  </main>
</template>
