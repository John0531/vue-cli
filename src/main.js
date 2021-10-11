import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import WeChatTitle from 'vue-wechat-title'
import VueAxios from 'vue-axios'
import axios from 'axios'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'

const app = createApp(App)
app.component(Swiper, SwiperSlide)
SwiperCore.use([Navigation, Pagination, Autoplay])

app.use(router)
app.use(WeChatTitle)
app.use(VueAxios, axios)
app.mount('#app')
