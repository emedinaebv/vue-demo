import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/vue-demo/'   // 👈 cámbialo por tu repo de GitHub
})
