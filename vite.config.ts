import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'Expense Tracker',
        short_name: 'ET',
        description: 'Simple Expense Tracker',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: '/path/to/icon.png',
            sizes: '192x192',
            type: 'image/png',
          },
          // add more icon sizes as needed
        ],
      },
    }),
  ],
})
