<template>
  <NavBar />

  <main>
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ContactSection />
  </main>

  <AppFooter />
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import NavBar from '@/components/layout/NavBar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

const { locale } = useI18n()

// need to Keep <html lang="..."> in sync with the active locale
watch(locale, (lang) => { document.documentElement.lang = lang }, { immediate: true })
</script>
