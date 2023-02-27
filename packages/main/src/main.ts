import { createApp } from 'vue'
import { registerMicroApps, start } from 'qiankun'
import router from './router'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')

registerMicroApps([
  {
    name: 'qiankun-sub-template',
    entry: 'http://localhost:8080/',
    container: '#vue',
    activeRule: '/about',
  },
])

start()
