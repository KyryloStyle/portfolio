<template>
  <SectionWrapper id="videos">
    <div class="mb-12 text-center">
      <h2 class="text-4xl font-bold text-gray-50 md:text-5xl">{{ t('videos.title') }}</h2>
      <p class="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-400">
        {{ t('videos.subtitle') }}
      </p>
    </div>

    <div class="grid gap-8 md:grid-cols-2">
      <!-- English video -->
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <Icon icon="circle-flags:gb" class="h-6 w-6" />
          <span class="font-semibold text-gray-100">{{ t('videos.english.label') }}</span>
        </div>
        <div class="overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-800/50 aspect-video">
          <iframe
            src="https://www.youtube.com/embed/3FIYCAFVVdA"
            class="w-full h-full"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <p class="text-sm text-gray-400">{{ t('videos.english.description') }}</p>
      </div>

      <!-- German video -->
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <Icon icon="circle-flags:de" class="h-6 w-6" />
          <span class="font-semibold text-gray-100">{{ t('videos.german.label') }}</span>
        </div>
        <div class="overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-800/50 aspect-video">
          <iframe
            src="https://www.youtube.com/embed/0z_bxHfVwxQ"
            class="w-full h-full"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <p class="text-sm text-gray-400">{{ t('videos.german.description') }}</p>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import SectionWrapper from '@/components/ui/SectionWrapper.vue'

const { t } = useI18n()
</script>
