import { createApp } from 'vue'
import App from './App.vue'
import SonnatVue from '../src'
import '../src/styles/index.css'

const app = createApp(App)
app.use(SonnatVue)
app.mount('#app') 