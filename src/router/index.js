import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardView from "@/views/DashboardView"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: DashboardView
  },
]

const router = new VueRouter({
  routes
})

export default router
