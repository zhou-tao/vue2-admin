import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import { 
  defineConfig, 
  presetAttributify,
  presetUno,
  presetIcons,
  transformerVariantGroup,
  transformerDirectives
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      warn: true,
      collections: {
        app: FileSystemIconLoader('./src/assets/icon')
      }
    })
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ],
  theme: {
    colors: {
      root_light: '#f5f6fa', // 最底层背景
      root_dark: '#272727',
      page_light: '#ffffff', // 基础布局背景
      page_dark: '#18181B',
      primary: '#409EFF'
    }
  },
  shortcuts: {
    'flex-center': 'flex justify-center items-center'
  },
  rules: [
    [
      'bg-gradient-light',
      {
        'background-image':
          'linear-gradient( 135deg, #ABDCFF30 20%, #0396FF20 100%)'
      }
    ],
    [
      'bg-gradient-dark',
      {
        'background-image':
          'linear-gradient( 135deg, #2A5470 20%, #4C4177 100%)'
      }
    ]
  ]
})