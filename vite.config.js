import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG'],
  // base: '/tanhaow.github.io/',
  server: {
    proxy: {
      '/Ai-Sensei-Japanese-Tutor': {
        target: 'https://ai-sensei-japanese-tutor-u27615.vm.elestio.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/Ai-Sensei-Japanese-Tutor/, '')
      }
    }
  }
})
