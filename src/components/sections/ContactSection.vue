<template>
  <SectionWrapper id="contact">
    <div class="mb-16 text-center">
      <h2 class="text-4xl font-bold text-gray-50 md:text-5xl">{{ t('contact.title') }}</h2>
      <p class="mx-auto mt-4 max-w-xl text-lg text-gray-400">{{ t('contact.subtitle') }}</p>
    </div>

    <div class="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
      <!-- Contact form -->
      <form
        class="flex flex-col gap-4 rounded-2xl border border-gray-700/50 bg-gray-800/50 p-8"
        novalidate
        @submit.prevent="submit"
      >
        <h3 class="mb-2 text-lg font-semibold text-gray-100">{{ t('contact.form.title') }}</h3>

        <input
          v-model="fields.name"
          type="text"
          name="name"
          :placeholder="t('contact.form.namePlaceholder')"
          autocomplete="name"
          required
          class="rounded-lg bg-gray-900/70 p-4 text-white placeholder-gray-500 outline-none ring-1 ring-gray-700 transition focus:ring-2 focus:ring-indigo-500"
        />
        <input
          v-model="fields.email"
          type="email"
          name="email"
          :placeholder="t('contact.form.emailPlaceholder')"
          autocomplete="email"
          required
          class="rounded-lg bg-gray-900/70 p-4 text-white placeholder-gray-500 outline-none ring-1 ring-gray-700 transition focus:ring-2 focus:ring-indigo-500"
        />
        <textarea
          v-model="fields.message"
          name="message"
          :placeholder="t('contact.form.messagePlaceholder')"
          required
          rows="5"
          class="resize-none rounded-lg bg-gray-900/70 p-4 text-white placeholder-gray-500 outline-none ring-1 ring-gray-700 transition focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="submit"
          :disabled="state === 'loading'"
          class="flex items-center justify-center gap-2 rounded-lg bg-indigo-500 py-3 font-semibold text-white transition-all hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Icon
            v-if="state === 'loading'"
            icon="lucide:loader-circle"
            class="h-4 w-4 animate-spin"
          />
          {{ buttonLabel }}
        </button>

        <Transition name="fade">
          <p
            v-if="state === 'success'"
            class="flex items-center gap-2 rounded-lg bg-green-500/10 px-4 py-3 text-sm text-green-400 ring-1 ring-green-500/30"
          >
            <Icon icon="lucide:check-circle" class="h-4 w-4 flex-shrink-0" />
            {{ t('contact.form.success') }}
          </p>
          <p
            v-else-if="state === 'error'"
            class="flex items-center gap-2 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400 ring-1 ring-red-500/30"
          >
            <Icon icon="lucide:alert-circle" class="h-4 w-4 flex-shrink-0" />
            {{ t('contact.form.error') }}
          </p>
        </Transition>
      </form>

      <!-- Direct contact options -->
      <div class="flex flex-col justify-center gap-4">
        <h3 class="text-lg font-semibold text-gray-100">{{ t('contact.reach') }}</h3>

        <a
          v-for="contact in contacts"
          :key="contact.key"
          :href="contact.href"
          :target="contact.external ? '_blank' : undefined"
          :rel="contact.external ? 'noopener noreferrer' : undefined"
          class="flex items-center gap-4 rounded-2xl border border-gray-700/50 bg-gray-800/50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/10"
        >
          <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400">
            <Icon :icon="contact.icon" class="h-5 w-5" />
          </div>
          <div>
            <p class="text-xs font-medium uppercase tracking-wide text-gray-500">
              {{ t(`contact.labels.${contact.key}`) }}
            </p>
            <p class="font-medium text-gray-200">{{ contact.value }}</p>
          </div>
        </a>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import SectionWrapper from '@/components/ui/SectionWrapper.vue'
import { useContactForm } from '@/composables/useContactForm'

const { t } = useI18n()
const { fields, state, submit } = useContactForm()

const buttonLabel = computed(() => {
  if (state.value === 'loading') return t('contact.form.sending')
  if (state.value === 'success') return t('contact.form.sent')
  return t('contact.form.send')
})

const contacts = [
  {
    key: 'email',
    value: 'kyrylo.yurchenkoo@gmail.com',
    href: 'mailto:kyrylo.yurchenkoo@gmail.com',
    icon: 'lucide:mail',
    external: false,
  },
  {
    key: 'linkedin',
    value: 'kyrylo-yurchenko',
    href: 'https://www.linkedin.com/in/kyrylo-yurchenko/',
    icon: 'mdi:linkedin',
    external: true,
  },
  {
    key: 'github',
    value: 'KyryloStyle',
    href: 'https://github.com/KyryloStyle',
    icon: 'mdi:github',
    external: true,
  },
]
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
