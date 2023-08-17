import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import autoprefixer from 'autoprefixer'
import { parse } from 'vite-plugin-env-parser'
import { createVitePlugins } from './build/vite/plugins'
import { createViteProxy } from './build/vite/proxy'

export default defineConfig(({ mode }) => {
  const isBuild = mode === 'production'
  const envDir = resolve(__dirname, 'env')
  const viteEnv = parse(loadEnv(mode, envDir))
  const {
    VITE_PORT,
    VITE_PUBLIC_PATH
  } = viteEnv

  return {
    envDir,
    base: VITE_PUBLIC_PATH,
    plugins: createVitePlugins(viteEnv, isBuild),
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@c': resolve(__dirname, 'src/components')
      }
    },
    css: {
      postcss: {
        plugins: [
          autoprefixer()
        ]
      }
    },
    server: {
      port: VITE_PORT,
      host: true,
      open: true,
      proxy: createViteProxy()
    }
  }
})
