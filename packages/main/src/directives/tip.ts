import type { Directive } from 'vue'
import type { Placement } from 'tippy.js'
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'

export interface TipOption {
  content: string
  placement?: Placement
  theme: 'light' | 'dark'
}

const tip: Directive = {
  mounted(el, binding: { value: TipOption }) {
    tippy(el, {
      content: binding.value.content,
      placement: binding.value.placement,
      theme: binding.value.theme,
    })
  },
}

export {
  tip,
}
