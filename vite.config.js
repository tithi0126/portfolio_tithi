import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Proxy API calls to backend in dev — avoids CORS issues and keeps origin clean
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
    },
    // Security headers served during local development
    headers: {
      'X-Frame-Options':        'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy':        'strict-origin-when-cross-origin',
      'Permissions-Policy':     'camera=(), microphone=(), geolocation=()',
      'X-XSS-Protection':       '1; mode=block',
    },
  },
})

