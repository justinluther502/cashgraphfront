import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardView from "@/views/DashboardView"
import FlavorsView from "@/views/FlavorsView"
import ConstraintsView from "@/views/ConstraintsView"
import RisksView from "@/views/RisksView"
import AboutView from "@/views/AboutView"

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
  {
    path: '/constraints',
    name: 'constraints',
    component: ConstraintsView
  },
  {
    path: '/risks',
    name: 'risks',
    component: RisksView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
]

const router = new VueRouter({
  routes
})

export default router
