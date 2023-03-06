import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
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
