import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,   // ← très important pour Docker
    port: 5173,        // ou le port que tu veux
    watch: {
      usePolling: true // 🔥 solution pour Docker / Windows
    }
  }
});
