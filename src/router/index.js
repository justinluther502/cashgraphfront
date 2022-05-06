import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardView from "@/views/DashboardView"
import FlavorsView from "@/views/FlavorsView"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: DashboardView
  },
  {
    path: '/flavors',
    name: 'flavors',
    component: FlavorsView
  },
]

const router = new VueRouter({
  routes
})

export default router
