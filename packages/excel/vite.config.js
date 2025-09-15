import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { functionsScanner, copyFile } from 'wpsjs/vite_plugins'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    copyFile({
      src: 'manifest.xml',
      dest: 'manifest.xml',
    }),
    functionsScanner({
      inputJsPath: 'src/components/js/functions.js',
      outputJsonPath: 'functions.json',
      namespace: 'HelloEt',
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: '0.0.0.0',
  },
})
