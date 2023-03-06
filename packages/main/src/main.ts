import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import * as directives from '@/directives'
import { registerDirectives } from '@/utils'
import './style.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)

registerDirectives(app, directives)

app.mount('#app')
