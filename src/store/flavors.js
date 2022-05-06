import {make} from 'vuex-pathify'

const state = {
  flavors: [
    {
      id: 0,
      name: 'six_std',
      label: 'Six Asset Standard',
      description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. ' +
        'Quisquam, quos.  Lorem ipsum dolor sit amet consectetur adipisicing ' +
        'elit. Quisquam, quos.',
      assets: [
        'U.S. Stocks',
        'Gold',
        'Emerging Market Corporate Bonds',
        'US BBB Corporate Bonds',
        'Nikkei 225 Stocks',
        'U.S. High Yield Bonds',
      ],
      marginal_images: [],
      pair_cop_images: [],
    },
    {
      id: 1,
      name: 'fake',
      label: 'Fake Flavor',
      description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. ' +
        'Quisquam, quos.  Lorem ipsum dolor sit amet consectetur adipisicing ' +
        'elit. Quisquam, quos.',
      assets: [
        'U.S. Stocks',
        'Gold',
        'Emerging Market Corporate Bonds',
        'US BBB Corporate Bonds',
        'Nikkei 225 Stocks',
        'U.S. High Yield Bonds',
        'fake stuff',
        'more fake stuff',
      ],
      marginal_images: [],
      pair_cop_images: [],
    },
  ],
  selected_flavor_id: 0,
}

const mutations = {
  ...make.mutations(state),
}

export default {
  namespaced: true,
  state,
  mutations,
}
