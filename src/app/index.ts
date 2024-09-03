import { createApp } from 'vue'
import 'virtual:uno.css'
import router from './providers/routes'
import App from './App.vue'

export const app = createApp(App).use(router)