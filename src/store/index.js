import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify'

import flavors from "@/store/flavors"
import frontier from "@/store/frontier"
import mpt_params from "@/store/mpt_params"
import nav from '@/store/nav'

Vue.use(Vuex)
export default new Vuex.Store({
  plugins: [pathify.plugin],
  modules: {
    flavors,
    frontier,
    mpt_params,
    nav,
  },
})
