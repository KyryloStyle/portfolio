<template>
  <SectionWrapper id="projects">
    <div class="mb-16 text-center">
      <h2 class="text-4xl font-bold text-gray-50 md:text-5xl">{{ t('projects.title') }}</h2>
      <p class="mx-auto mt-4 max-w-xl text-lg text-gray-400">{{ t('projects.subtitle') }}</p>
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard
        v-for="project in projects"
        :key="project.key"
        :project="project"
      />
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionWrapper from '@/components/ui/SectionWrapper.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import { projectsMeta } from '@/data'

const { t } = useI18n()

// Merge static meta (image, URLs, tags) with translated title + description
const projects = computed(() =>
  projectsMeta.map((meta) => ({
    ...meta,
    title: t(`projects.items.${meta.key}.title`),
    description: t(`projects.items.${meta.key}.description`),
    demoLabel: t('projects.demo'),
    codeLabel: t('projects.code'),
  })),
)
</script>
