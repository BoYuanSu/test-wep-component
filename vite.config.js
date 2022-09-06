import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(
    {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => {
            // console.log('🚀 ~ tag', tag)
            return tag.includes('test-')
          },
        },
      },
    },
  )],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  define: {
    'process.env': process.env,
  },
  build: {
    lib: {
      entry: './src/main.lib.js',
      name: 'test-webcom',
      // the proper extensions will be added
      fileName: (format) => `test-webcom.${format}.js`,
    },
    // rollupOptions: {
    //   // make sure to externalize deps that shouldn't be bundled
    //   // into your library
    //   external: ['vue'],
    //   output: {
    //     // Provide global variables to use in the UMD build
    //     // for externalized deps
    //     globals: {
    //       vue: 'Vue',
    //     },
    //   },
    // },
  },
})
