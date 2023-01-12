import { createApp } from 'vue'
// import App from './components/03-class&style/App.vue'
import App from './components/App.vue'
import './index.css'
import Swiper from '../src/components/01-globelReg/Swiper.vue'
import Test from '../src/components/01-globelReg/Test.vue'
const app = createApp(App)
app.component('my-swiper', Swiper)
app.component('my-test', Test)
app.mount('#app')
