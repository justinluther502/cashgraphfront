import {make} from 'vuex-pathify'

const state = {
  new_user: true,
  train_button: false,
  train_frontier: false,
  train_pie: false,
  train_selections: false,
}

const mutations = {
  ...make.mutations(state),
}

export default {
  namespaced: true,
  state,
  mutations,
}
