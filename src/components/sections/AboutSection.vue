<template>
  <SectionWrapper id="about">
    <!-- Heading -->
    <div class="mb-16 text-center">
      <h2 class="text-4xl font-bold text-gray-50 md:text-5xl">{{ t('about.title') }}</h2>
      <p class="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-400">
        {{ t('about.bio') }}
      </p>
    </div>

    <!-- Capabilities -->
    <div class="mb-20">
      <h3 class="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-indigo-400">
        {{ t('about.whatICan') }}
      </h3>
      <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        <div
          v-for="cap in capabilities"
          :key="cap.key"
          class="rounded-2xl border border-gray-700/50 bg-gray-800/50 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/10"
        >
          <Icon :icon="cap.icon" class="mx-auto mb-3 h-8 w-8 text-indigo-400" />
          <h4 class="mb-2 font-semibold text-gray-100">{{ cap.title }}</h4>
          <p class="text-sm leading-relaxed text-gray-400">{{ cap.description }}</p>
        </div>
      </div>
    </div>

    <!-- Skills -->
    <div class="mb-20">
      <h3 class="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-indigo-400">
        {{ t('about.skillsTitle') }}
      </h3>
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="flex flex-col items-center gap-2 rounded-xl border border-gray-700/50 bg-gray-800/50 px-4 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40"
        >
          <div class="flex items-center gap-1">
            <Icon v-for="icon in skill.icons" :key="icon" :icon="icon" class="h-9 w-9" />
          </div>
          <span class="text-sm font-medium text-gray-300">{{ skill.name }}</span>
        </div>
      </div>
    </div>

    <!-- Education -->
    <div class="mb-20">
      <h3 class="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-indigo-400">
        {{ t('about.educationTitle') }}
      </h3>
      <div class="mx-auto max-w-3xl rounded-2xl border border-gray-700/50 bg-gray-800/50 p-6 md:p-8">
        <div class="flex flex-col gap-6 md:flex-row md:items-start">
          <img
            :src="universityImg"
            alt="Kharkiv Computer and Technology Professional College"
            loading="lazy"
            class="h-24 w-24 flex-shrink-0 rounded-xl object-cover"
          />
          <div>
            <h4 class="text-xl font-semibold text-gray-100">
              <a
                href="https://www.kpi.kharkov.ua/eng/"
                target="_blank"
                rel="noopener noreferrer"
                class="transition-colors hover:text-indigo-400"
              >
                {{ t('about.education.school') }}
              </a>
            </h4>
            <p class="mt-1 text-sm text-indigo-400">{{ t('about.education.degree') }}</p>
            <ul class="mt-3 space-y-1 text-sm text-gray-400">
              <li
                v-for="item in educationItems"
                :key="item"
                class="flex items-center gap-2"
              >
                <Icon icon="lucide:check" class="h-4 w-4 flex-shrink-0 text-indigo-400" />
                {{ item }}
              </li>
            </ul>
            <p class="mt-3 text-xs text-gray-500 italic">
              {{ t('about.education.level') }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Languages -->
    <div>
      <h3 class="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-indigo-400">
        {{ t('about.languagesTitle') }}
      </h3>
      <div class="mx-auto grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
        <div
          v-for="lang in languages"
          :key="lang.key"
          class="flex flex-col items-center gap-2 rounded-xl border border-gray-700/50 bg-gray-800/50 px-4 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40"
        >
          <Icon :icon="lang.flagIcon" class="h-9 w-9" />
          <span class="font-medium text-gray-200">{{ lang.key.charAt(0).toUpperCase() + lang.key.slice(1) }}</span>
          <span class="text-sm font-semibold text-indigo-400">
            {{ lang.level === 'native' ? t('about.nativeLevel') : lang.level }}
          </span>
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
import { skills, languages } from '@/data'
import universityImg from '@/assets/uni.png'

const { t } = useI18n()

const capabilityDefs = [
  { key: 'frontend', icon: 'lucide:monitor' },
  { key: 'ui', icon: 'lucide:layers' },
  { key: 'collab', icon: 'lucide:users' },
] as const

const capabilities = computed(() =>
  capabilityDefs.map((cap) => ({
    key: cap.key,
    icon: cap.icon,
    title: t(`about.capabilities.${cap.key}.title`),
    description: t(`about.capabilities.${cap.key}.description`),
  })),
)

const educationItems = computed(() => [
  t('about.education.grade'),
  t('about.education.project'),
  t('about.education.competitions'),
])
</script>
