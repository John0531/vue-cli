import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首頁'
    }
  },
  {
    path: '/Page1',
    name: 'Page1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Page1.vue'),
    meta: {
      title: '頁面一'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
