import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // https://vitest.dev/config/#reporters
    reporters: 'verbose',

    // https://vitest.dev/config/#environment
    environment: 'jsdom',

    /**
     * https://vitest.dev/config/#setupfiles
     * They will be run before each test file.
     */
    setupFiles: ['./src/setupTests.js']

  },

  base: "/app",
})
