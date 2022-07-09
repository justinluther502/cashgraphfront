import {make} from 'vuex-pathify'

const state = {
  new_user: true,
  train_selections: false,
  train_pie: false,
}

const mutations = {
  ...make.mutations(state),
}

export default {
  namespaced: true,
  state,
  mutations,
}
