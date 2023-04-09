import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'
import type { Directive } from 'vue'

dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

const timeDirective: Directive = {
  mounted(el, binding) {
    el.innerHTML = dayjs(binding.value).fromNow()
  },
  updated(el, binding) {
    el.innerHTML = dayjs(binding.value).fromNow()
  },
}

export default timeDirective
