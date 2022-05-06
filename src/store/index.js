import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify'

import nav from './nav'

Vue.use(Vuex)
export default new Vuex.Store({
  plugins: [pathify.plugin],
  modules: {
    nav
  },
})
