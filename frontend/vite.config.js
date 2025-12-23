import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // This rule says: "If the frontend asks for /api/..., send it to port 3000"
      '/api': {
        target: 'http://localhost:3000', // Your Motia Backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove '/api' so backend just sees '/quests'
      },
    },
  },
})
