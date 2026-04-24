<template>
  <section
    :id="id"
    ref="sectionEl"
    class="mx-auto max-w-6xl px-6 py-24 transition-all duration-700 md:px-12"
    :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
  >
    <slot />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

defineProps<{ id: string }>()

const sectionEl = ref<HTMLElement | null>(null)
const isVisible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer?.disconnect()
      }
    },
    { threshold: 0.12 },
  )

  if (sectionEl.value) observer.observe(sectionEl.value)
})

onUnmounted(() => observer?.disconnect())
</script>
