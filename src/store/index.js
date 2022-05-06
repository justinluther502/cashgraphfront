import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify'

import nav from './nav'

// store
Vue.use(Vuex)
export default new Vuex.Store({

  // use the plugin
  plugins: [
    pathify.plugin
  ],

  // modules
  modules: {
    nav
  },
})
