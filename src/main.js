import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import WeChatTitle from 'vue-wechat-title'
import VueAxios from 'vue-axios'
import axios from 'axios'

const app = createApp(App)

app.use(router)
app.use(WeChatTitle)
app.use(VueAxios, axios)
app.mount('#app')
