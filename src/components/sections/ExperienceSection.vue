<template>
  <SectionWrapper id="experience">
    <div class="mb-12 text-center">
      <h2 class="text-4xl font-bold text-gray-50 md:text-5xl">{{ t('experience.title') }}</h2>
      <p class="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-400">
        {{ t('experience.subtitle') }}
      </p>
    </div>

    <div class="mx-auto max-w-3xl flex flex-col gap-6">
      <div
        v-for="job in jobs"
        :key="job.key"
        class="flex gap-5 rounded-2xl border border-gray-700/50 bg-gray-800/50 p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/10"
      >
        <!-- Logo -->
        <div class="h-12 w-12 flex-shrink-0 mt-1">
          <img
            v-if="job.logo"
            :src="job.logo"
            :alt="job.company"
            loading="lazy"
            class="h-full w-full rounded-xl object-cover"
          />
          <div
            v-else
            class="h-full w-full rounded-xl border border-indigo-500/40 bg-indigo-500/10 flex items-center justify-center"
          >
            <Icon :icon="job.icon!" class="h-6 w-6 text-indigo-400" />
          </div>
        </div>

        <div class="flex-1 min-w-0">
          <div class="flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 class="text-lg font-semibold text-gray-100">{{ job.role }}</h3>
              <p class="mt-0.5 text-sm font-medium text-indigo-400">{{ job.company }}</p>
            </div>
            <span class="flex-shrink-0 rounded-full bg-gray-700/60 px-3 py-1 text-xs text-gray-400">
              {{ job.period }}
            </span>
          </div>
          <p class="mt-1 flex items-center gap-1.5 text-xs text-gray-500">
            <Icon icon="lucide:map-pin" class="h-3.5 w-3.5" />
            {{ job.location }}
          </p>
          <ul class="mt-4 space-y-2">
            <li
              v-for="bullet in job.bullets"
              :key="bullet"
              class="flex items-start gap-2 text-sm text-gray-400"
            >
              <Icon icon="lucide:check" class="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-400" />
              {{ bullet }}
            </li>
          </ul>
          <div class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="tag in job.tags"
              :key="tag"
              class="rounded-full border border-gray-700 bg-gray-900/60 px-2.5 py-0.5 text-xs text-gray-300"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import SectionWrapper from '@/components/ui/SectionWrapper.vue'
import kitLogo from '@/assets/logo-kit.png'
import kharkivLogo from '@/assets/logo-kharkiv.svg'

const { t, tm, rt } = useI18n()

const jobDefs = [
  { key: 'freelance', tags: ['Vue.js', 'React', 'Python', 'TypeScript'], logo: null, icon: 'lucide:code-2' },
  { key: 'kit', tags: ['Python', 'Django', 'OOP'], logo: kitLogo, icon: null },
  { key: 'kharkiv', tags: ['Vue.js', 'Python', 'REST API', 'PostgreSQL'], logo: kharkivLogo, icon: null },
]

const jobs = computed(() =>
  jobDefs.map((j) => ({
    key: j.key,
    tags: j.tags,
    logo: j.logo,
    icon: j.icon,
    role: t(`experience.items.${j.key}.role`),
    company: t(`experience.items.${j.key}.company`),
    period: t(`experience.items.${j.key}.period`),
    location: t(`experience.items.${j.key}.location`),
    bullets: (tm(`experience.items.${j.key}.bullets`) as any[]).map((m) => rt(m)),
  })),
)
</script>
