import './public-path'
import { App, createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import AppVue from './App.vue'
import routes from './router';
import './style.css'

declare const window: {
  __POWERED_BY_QIANKUN__: boolean
  __INJECTED_PUBLIC_PATH_BY_QIANKUN__: string
}

let history;
let router;
let app: App;
function render(props?: any) {
  history = createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/blog' : '/');
  router = createRouter({
    history,
    routes,
  });
  app = createApp(AppVue);
  const container = props?.container;
  app.use(router).mount(container ? container.querySelector("#blog-app") : "#blog-app");
}

if (!window.__POWERED_BY_QIANKUN__)
  render({})

export async function bootstrap() {
  console.log('[react16] react app bootstraped')
}

export async function mount(props: any = {}) {
  console.log('[react16] props from main framework', props)
  render(props)
}

export async function unmount(props: any = {}) {
  const { container } = props
  console.log('🚀 ~ file: index.tsx ~ line 39 ~ unmount ~ container', container)
  app.unmount()
}
