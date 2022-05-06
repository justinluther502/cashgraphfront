import Vue from 'vue'
import Vuex from 'vuex'
import pathify, {make} from 'vuex-pathify'

// properties
const state = {
  nav_items: [
    {
      id: 0,
      title: 'Optimizer Dashboard',
      icon: 'mdi-chart-line',
      to: '/',
    },
    {
      id: 1,
      title: 'Flavors',
      icon: 'mdi-food-turkey',
      to: '/flavors',
    },
    {
      id: 2,
      title: 'Risk Measures',
      icon: 'mdi-dice-multiple',
      to: '/risks',
    },
    {
      id: 3,
      title: 'Portfolio Constraints',
      icon: 'mdi-handcuffs',
      to: '/constraints',
    },
    {
      id: 4,
      title: 'About',
      icon: 'mdi-information-outline',
      to: '/about',
    },
  ],
}

const mutations = make.mutations(state)

// store
Vue.use(Vuex)
export default new Vuex.Store({

  // use the plugin
  plugins: [
    pathify.plugin
  ],

  // properties
  state,
  mutations,
})
