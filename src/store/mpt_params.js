import {make} from 'vuex-pathify'

const state = {
  selected_risk: 'variance',
  risk_measures: [
    {
      id: 0,
      name: 'variance',
      label: 'Variance',
      description: 'Variance measures the degree to which the price of a ' +
        'stock is dependent on its past performance.',
      pros: [
        'well known',
        'easy to understand',
        'easy to interpret',
      ],
      cons: [
        'upside variance isn\'t really a risk',
      ],
    },
    {
      id: 1,
      name: 'semi_variance',
      label: 'Semivariance',
      description: 'Variance measures the degree to which the price of a ' +
        'stock is dependent on its past performance.',
      pros: [
        'only captures downside risks',
        'easy to understand',
        'easy to interpret',
      ],
      cons: [
        'computationally intensive',
      ],
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
