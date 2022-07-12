import {make} from 'vuex-pathify'

const state = {
  show_drawer: null,
  nav_items: [
    {
      id: 0,
      title: 'Optimizer Dashboard',
      icon: 'mdi-chart-bell-curve-cumulative',
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
      icon: 'mdi-slot-machine-outline',
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
      title: 'Under the Hood',
      icon: 'mdi-engine-outline',
      to: '/about',
    },
  ],
}

const mutations = {
  ...make.mutations(state),
}

export default {
  namespaced: true,
  state,
  mutations,
}
