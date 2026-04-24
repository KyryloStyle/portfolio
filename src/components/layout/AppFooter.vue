<template>
  <footer class="border-t border-gray-800 bg-gray-950 py-8 px-6">
    <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-gray-500 sm:flex-row">
      <p>© {{ year }} Kyrylo Yurchenko. {{ t('footer.rights') }}</p>

      <div class="flex items-center gap-6">
        <a
          href="https://github.com/KyryloStyle"
          target="_blank"
          rel="noopener noreferrer"
          class="transition-colors hover:text-gray-300"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/kyrylo-yurchenko/"
          target="_blank"
          rel="noopener noreferrer"
          class="transition-colors hover:text-gray-300"
        >
          LinkedIn
        </a>
        <button
          class="flex items-center gap-1.5 transition-colors hover:text-gray-300"
          @click="scrollToTop"
        >
          <Icon icon="lucide:arrow-up" class="h-3.5 w-3.5" />
          {{ t('footer.backToTop') }}
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'

const { t } = useI18n()
const year = computed(() => new Date().getFullYear())

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
