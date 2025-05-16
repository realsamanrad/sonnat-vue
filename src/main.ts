import './assets/css/main.css'

import { createApp } from 'vue'
import InlineSvg from 'vue-inline-svg'
import App from './App.vue'

const app = createApp(App)
app.component('inline-svg', InlineSvg)
app.mount('#app')
