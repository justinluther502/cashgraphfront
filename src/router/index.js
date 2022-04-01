import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingView from "@/views/LandingView"
import ProfileView from "@/views/ProfileView"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  }
]

const router = new VueRouter({
  routes
})

export default router
