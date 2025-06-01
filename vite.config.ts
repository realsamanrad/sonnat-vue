import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
  const isLib = mode === 'lib'

  if (isLib) {
    // Library build configuration
    return {
      plugins: [
        vue(),
        tailwindcss(),
        dts({
          tsconfigPath: './tsconfig.app.json',
          exclude: ['src/main.ts', 'src/App.vue', '**/*.spec.ts', '**/*.test.ts'],
        }),
      ],
      build: {
        lib: {
          entry: resolve(__dirname, 'src/index.ts'),
          name: 'SonnatVue',
          fileName: 'sonnat-vue',
        },
        rollupOptions: {
          external: ['vue'],
          output: {
            globals: {
              vue: 'Vue',
            },
          },
        },
        sourcemap: true,
        minify: 'esbuild',
      },
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
      },
    }
  }

  // Development configuration
  return {
    plugins: [vue(), tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
