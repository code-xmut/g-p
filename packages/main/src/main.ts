import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { registerMicroApps, start } from 'qiankun'
import App from './App.vue'
import router from './router'
import zh from '@/locales/zh.json'
import en from '@/locales/en.json'
import * as directives from '@/directives'
import { registerDirectives } from '@/utils'
import './style.css'

const app = createApp(App)
app.use(createPinia())
app.use(createI18n({
  locale: 'zh',
  messages: {
    zh,
    en,
  },
}))
app.use(router)

registerDirectives(app, directives)

app.mount('#app')

/* 配置qiankun子应用 */
registerMicroApps([
  {
    name: 'sub-vue3',
    entry: '//localhost:8080/',
    activeRule: '/blog',
    container: '#subapp-viewport', // 子应用挂载的div
    props: {
      routerBase: '/blog',
    },
  },
])
start()
