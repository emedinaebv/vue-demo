import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/NOMBRE_DEL_REPOSITORIO/'   // 👈 cámbialo por tu repo de GitHub
})
