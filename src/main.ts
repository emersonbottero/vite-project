import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import BasicPlugin from 'basic-plugin'

createApp(App)
    .use(router)
    .use(BasicPlugin)
    .mount('#app')
