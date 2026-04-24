<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-gray-800/50 bg-gray-950/80 backdrop-blur-md">
    <nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
      <a href="#hero" class="text-lg font-semibold text-indigo-400 tracking-wide">
        KY<span class="text-gray-100">.</span>
      </a>

      <!-- Desktop links -->
      <ul class="hidden items-center gap-8 md:flex">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="text-sm font-medium text-gray-400 transition-colors hover:text-indigo-400"
          >
            {{ t(link.labelKey) }}
          </a>
        </li>
      </ul>

      <div class="hidden items-center gap-3 md:flex">
        <!-- Language switcher -->
        <div class="flex rounded-lg border border-gray-700 overflow-hidden text-xs font-semibold">
          <button
            v-for="loc in locales"
            :key="loc"
            class="px-3 py-1.5 transition-colors"
            :class="locale === loc
              ? 'bg-indigo-500 text-white'
              : 'text-gray-400 hover:text-white hover:bg-gray-800'"
            :aria-label="`Switch to ${t(`lang.${loc}`)}`"
            @click="switchLocale(loc)"
          >
            {{ t(`lang.${loc}`) }}
          </button>
        </div>

        <a
          href="/portfolio/cv.pdf"
          download
          class="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-400"
        >
          <Icon icon="lucide:download" class="h-4 w-4" />
          {{ t('nav.downloadCv') }}
        </a>
      </div>

      <!-- Mobile: lang switcher + hamburger -->
      <div class="flex items-center gap-2 md:hidden">
        <div class="flex rounded-md border border-gray-700 overflow-hidden text-xs font-semibold">
          <button
            v-for="loc in locales"
            :key="loc"
            class="px-2.5 py-1 transition-colors"
            :class="locale === loc
              ? 'bg-indigo-500 text-white'
              : 'text-gray-400 hover:text-white'"
            @click="switchLocale(loc)"
          >
            {{ t(`lang.${loc}`) }}
          </button>
        </div>
        <button
          class="p-2 text-gray-400 transition-colors hover:text-white"
          :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
          @click="mobileOpen = !mobileOpen"
        >
          <Icon :icon="mobileOpen ? 'lucide:x' : 'lucide:menu'" class="h-5 w-5" />
        </button>
      </div>
    </nav>

    <Transition name="slide-down">
      <div
        v-if="mobileOpen"
        class="border-t border-gray-800/50 bg-gray-950/95 px-6 py-5 md:hidden"
      >
        <ul class="flex flex-col gap-5">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              class="font-medium text-gray-300 transition-colors hover:text-indigo-400"
              @click="mobileOpen = false"
            >
              {{ t(link.labelKey) }}
            </a>
          </li>
        </ul>
        <a
          href="/portfolio/cv.pdf"
          download
          class="mt-5 inline-flex w-fit items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-400"
        >
          <Icon icon="lucide:download" class="h-4 w-4" />
          {{ t('nav.downloadCv') }}
        </a>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import { setLocale, type SupportedLocale } from '@/i18n'

const { t, locale } = useI18n()
const mobileOpen = ref(false)
const locales: SupportedLocale[] = ['en', 'de']

const navLinks = [
  { href: '#about', labelKey: 'nav.about' },
  { href: '#projects', labelKey: 'nav.projects' },
  { href: '#contact', labelKey: 'nav.contact' },
] as const

function switchLocale(loc: SupportedLocale) {
  setLocale(loc)
  mobileOpen.value = false
}
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
