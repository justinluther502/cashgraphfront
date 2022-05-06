import {make} from 'vuex-pathify'

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

const mutations = {
  ...make.mutations(state),
}

export default {
  namespaced: true,
  state,
  mutations,
}
