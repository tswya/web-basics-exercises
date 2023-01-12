import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/bootstrap.css'
import './index.css'
import axios from 'axios'

const app = createApp(App)
app.config.globalProperties.$http = axios
axios.defaults.baseURL = 'https://www.escook.cn'
app.mount('#app')
