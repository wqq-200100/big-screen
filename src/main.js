import { createApp } from 'vue'
import './assets/css/style.css'
import App from './App.vue'
import DataVVue3 from "@kjgl77/datav-vue3";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App)
    .use(DataVVue3)
    .use(ElementPlus, { size: 'small', zIndex: 3000 })
    .mount('#app')
