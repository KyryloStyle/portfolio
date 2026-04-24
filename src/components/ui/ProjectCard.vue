<template>
  <article class="flex flex-col overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-800/60 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/10">
    <div class="overflow-hidden">
      <img
        :src="project.image"
        :alt="`${project.title} screenshot`"
        loading="lazy"
        class="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>

    <div class="flex flex-1 flex-col gap-3 p-5">
      <h3 class="text-lg font-semibold text-gray-100">{{ project.title }}</h3>

      <p class="flex-1 text-sm leading-relaxed text-gray-400">{{ project.description }}</p>

      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="rounded-full bg-gray-700/60 px-2.5 py-0.5 text-xs font-medium text-indigo-300"
        >
          {{ tag }}
        </span>
      </div>

      <div class="mt-2 flex gap-3">
        <a
          :href="project.demoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 rounded-lg bg-indigo-500 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-indigo-400"
        >
          {{ project.demoLabel }}
        </a>
        <a
          :href="project.codeUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 rounded-lg border border-gray-600 py-2 text-center text-sm font-medium text-gray-300 transition-colors hover:border-gray-400 hover:text-white"
        >
          {{ project.codeLabel }}
        </a>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  codeUrl: string
  demoLabel: string
  codeLabel: string
}

defineProps<{ project: Project }>()
</script>
