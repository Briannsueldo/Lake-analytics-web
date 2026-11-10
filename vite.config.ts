import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages serves this project at https://<user>.github.io/Lake-analytics-web/
export default defineConfig({
  base: '/Lake-analytics-web/',
  plugins: [react(), tailwindcss()],
})
