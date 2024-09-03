import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'virtual:uno.css'
import router from './providers/routes'
import App from './App.vue'

const pinia = createPinia()

export const app = createApp(App).use(router).use(pinia)