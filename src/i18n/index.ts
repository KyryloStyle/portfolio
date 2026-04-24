import { createI18n } from 'vue-i18n'
import type { MessageSchema } from './types'
import en from './locales/en'
import de from './locales/de'

export type SupportedLocale = 'en' | 'de'

const STORAGE_KEY = 'portfolio-locale'

function getInitialLocale(): SupportedLocale {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'de') return stored

  // Auto-detect browser language, fall back to English
  if (navigator.language.startsWith('de')) return 'de'
  return 'en'
}

export const i18n = createI18n<[MessageSchema], SupportedLocale>({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: 'en',
  messages: { en, de },
})

export function setLocale(locale: SupportedLocale): void {
  // With legacy: false the global composer exposes locale as a WritableComputedRef
  const composer = i18n.global as unknown as { locale: { value: SupportedLocale } }
  composer.locale.value = locale
  localStorage.setItem(STORAGE_KEY, locale)
  document.documentElement.lang = locale
}
