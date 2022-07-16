import Vue from 'vue'
import VueRouter from 'vue-router'

import AboutView from "@/views/AboutView"
import ConstraintsView from "@/views/ConstraintsView"
import ContactView from "@/views/ContactView"
import DashboardView from "@/views/DashboardView"
import FlavorsView from "@/views/FlavorsView"
import RisksView from "@/views/RisksView"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: DashboardView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/constraints',
    name: 'constraints',
    component: ConstraintsView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/flavors',
    name: 'flavors',
    component: FlavorsView
  },
  {
    path: '/risks',
    name: 'risks',
    component: RisksView
  },
]

const router = new VueRouter({
  routes,
  // eslint-disable-next-line
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {top: 0, left: 0}
    }
  },
})

export default router
