import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Icons from 'unplugin-icons/vite'  // ← импортируем плагин

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    Icons({ compiler: 'vue3' })  // ← подключаем для Vue3
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
