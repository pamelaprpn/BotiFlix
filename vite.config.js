import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import "dotenv/config";

require('dotenv').config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5173',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
