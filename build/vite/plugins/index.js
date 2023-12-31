import vue from '@vitejs/plugin-vue2'
import unocss from 'unocss/vite'
import legacy from '@vitejs/plugin-legacy'
import envParser from 'vite-plugin-env-parser'
import { configAutoImport } from './auto-imports'

export const createVitePlugins = (viteEnv, isBuild) => {
  const { VITE_USE_LEGACY } = viteEnv

  const vitePlugins = [
    vue(),

    envParser({}),

    // unocss 配置
    unocss(),

    // element-plus 自动导入
    configAutoImport()
  ]

  if (isBuild) {
    // 生产环境兼容不支持ESM浏览器以及内置babel
    VITE_USE_LEGACY
      && vitePlugins.push(
        legacy({
          targets: ['defaults', 'not IE 11']
        })
      )
  }

  return vitePlugins
}
