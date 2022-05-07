import {make} from 'vuex-pathify'

const state = {
  flavors: [
    {
      id: 0,
      name: 'six_std',
      label: 'Six Asset Standard',
      description1: `Six Asset Standard is the first flavor we created. It 
      includes six asset classes. Each asset class's marginal distribution is
      modeled as a normal distribution. The first level pair copulas are fully 
      selected by the vine copula algorithm with no forced shapes. The higher
      level vine copula structure is also fully selected by the algorithm.`,
      description2: `We recommend variance as a risk measure for this flavor.
      Semivariance won't add much because all of the marginals are normal.`,
      assets: [
        'Gold',
        'Emerging Market Corporate Bonds',
        'US BBB Corporate Bonds',
        'Nikkei 225 Stocks',
        'U.S. Stocks',
        'U.S. High Yield Bonds',
      ],
      marginal_images: [],
      pair_cop_images: [],
      constraints: {
        mins: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        maxs: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
      },
    },
    {
      id: 1,
      name: 'fake',
      label: 'Fake Flavor',
      description1: 'lorem ipsum dolor sit amet consectetur adipisicing elit. ' +
        'Quisquam, quos.  Lorem ipsum dolor sit amet consectetur adipisicing ' +
        'elit. Quisquam, quos.',
      description2: 'lorem ipsum dolor sit amet consectetur adipisicing elit. ' +
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
      constraints: {
        mins: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        maxs: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
      },
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