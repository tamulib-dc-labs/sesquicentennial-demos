import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/sesquicentennial-demos/',
  plugins: [/* ... */],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        map: resolve(__dirname, 'map.html'),
        sample: resolve(__dirname, 'sample.html'),
        timeline: resolve(__dirname, 'timeline.html'),
        handwritten: resolve(__dirname, 'handwritten.html'),
      }
    }
  }
})
