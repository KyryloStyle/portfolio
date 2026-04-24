import { ref, reactive } from 'vue'

export type FormState = 'idle' | 'loading' | 'success' | 'error'

const ENDPOINT = 'https://formspree.io/f/xldodbjk'

export function useContactForm() {
  const state = ref<FormState>('idle')

  const fields = reactive({
    name: '',
    email: '',
    message: '',
  })

  async function submit() {
    state.value = 'loading'

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        body: JSON.stringify(fields),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })

      if (!response.ok) throw new Error('Submission failed')

      state.value = 'success'
      fields.name = ''
      fields.email = ''
      fields.message = ''
    } catch {
      state.value = 'error'
    } finally {
      if (state.value !== 'loading') {
        setTimeout(() => (state.value = 'idle'), 5000)
      }
    }
  }

  return { fields, state, submit }
}
