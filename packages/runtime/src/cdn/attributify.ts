import presetAttributify from '@unocss/preset-attributify'
import presetUno from '@unocss/preset-uno'
import init from '../index'

init({
  defaults: {
    presets: [
      presetUno(),
      presetAttributify(),
    ],
  },
})
