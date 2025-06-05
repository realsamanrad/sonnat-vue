import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
// import vueDevTools from 'vite-plugin-vue-devtools'
import { resolve } from 'path'
import { svg4VuePlugin } from 'vite-plugin-svg4vue'
// import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vueDevTools(),
    tailwindcss(),
    svg4VuePlugin({ defaultExport: 'component' }),
    // dts(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'SonnatVue',
      // formats: ['es', 'umd'],
      fileName: (format) => `sonnat-vue.${format}.${format === 'umd' ? 'cjs' : 'js'}`,
    },
    rollupOptions: {
      external: ['vue', '@floating-ui/vue', '@vueuse/core', '@vueuse/motion'],
      output: {
        globals: {
          vue: 'Vue',
          '@floating-ui/vue': 'FloatingVue',
          '@vueuse/core': 'VueUseCore',
          '@vueuse/motion': 'VueUseMotion',
        },
      },
    },
  },
})
