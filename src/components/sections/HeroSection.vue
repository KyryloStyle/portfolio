<template>
  <section
    id="hero"
    class="relative flex min-h-screen flex-col items-center justify-center gap-12 overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 px-6 pt-16 text-gray-100 md:flex-row md:px-20"
  >
    <!-- Background glows -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div class="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />
      <div class="absolute -right-40 bottom-1/3 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />
    </div>

    <!-- Avatar -->
    <div class="hero-fade-in flex-shrink-0">
      <img
        :src="avatar"
        alt="Kyrylo Yurchenko"
        class="h-64 w-64 rounded-full border-4 border-indigo-400/60 object-cover shadow-2xl md:h-72 md:w-72"
      />
    </div>

    <!-- Content -->
    <div class="hero-fade-in-delayed flex max-w-xl flex-col gap-5">
      <div>
        <p class="mb-2 text-sm font-medium uppercase tracking-widest text-indigo-400">
          {{ t('hero.role') }}
        </p>
        <h1 class="text-4xl font-bold leading-tight tracking-tight text-gray-50 md:text-5xl">
          {{ t('hero.greeting') }}
        </h1>
      </div>

      <!-- Bio with inline <strong> via <i18n-t> slots -->
      <i18n-t keypath="hero.bio" tag="p" class="text-lg leading-relaxed text-gray-300">
        <template #vue>
          <strong class="text-gray-100">Vue.js</strong>
        </template>
        <template #js>
          <strong class="text-gray-100">JavaScript</strong>
        </template>
      </i18n-t>

      <!-- Language badges (levels are CEFR — language-agnostic) -->
      <div class="flex flex-wrap gap-2">
        <span
          v-for="lang in languages"
          :key="lang.key"
          class="flex items-center gap-1.5 rounded-full border border-gray-700 bg-gray-800/60 px-3 py-1 text-xs text-gray-300"
        >
          <Icon :icon="lang.flagIcon" class="h-4 w-4" />
          {{ lang.level === 'native' ? t('about.nativeLevel') : lang.level }}
        </span>
      </div>

      <!-- CTA buttons -->
      <div class="mt-2 flex flex-wrap gap-3">
        <a
          href="#projects"
          class="rounded-lg bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-indigo-400 hover:shadow-indigo-500/30"
        >
          {{ t('hero.cta.projects') }}
        </a>
        <a
          href="#contact"
          class="rounded-lg border border-gray-600 px-6 py-3 text-sm font-semibold text-gray-300 transition-all hover:-translate-y-0.5 hover:border-gray-400 hover:text-white"
        >
          {{ t('hero.cta.contact') }}
        </a>
        <a
          href="/portfolio/cv.pdf"
          download
          class="flex items-center gap-2 rounded-lg border border-indigo-500/50 px-6 py-3 text-sm font-semibold text-indigo-400 transition-all hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-300"
        >
          <Icon icon="lucide:download" class="h-4 w-4" />
          {{ t('hero.cta.downloadCv') }}
        </a>
      </div>

      <!-- Social links -->
      <div class="flex gap-3 pt-1">
        <a
          href="https://github.com/KyryloStyle"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          class="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-gray-500 hover:text-white"
        >
          <Icon icon="mdi:github" class="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/kyrylo-yurchenko/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          class="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-sky-500/50 hover:text-sky-400"
        >
          <Icon icon="mdi:linkedin" class="h-5 w-5" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import { languages } from '@/data'
import avatar from '@/assets/avatar.jpg'

const { t } = useI18n()
</script>

<style scoped>
.hero-fade-in {
  animation: fadeInUp 0.7s ease both;
}

.hero-fade-in-delayed {
  animation: fadeInUp 0.7s ease 0.2s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
