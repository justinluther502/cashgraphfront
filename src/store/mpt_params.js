import {make} from 'vuex-pathify'

const state = {
  selected_risk: 'variance',
  risk_measures: [
    {
      id: 0,
      name: 'variance',
      label: 'Variance',
      description: `Variance measures the degree to which the price of an asset 
        fluctuates up and down.`,
      pros: [
        'well known',
        'easy to understand',
        'easy to interpret',
      ],
      cons: [
        'upside variance isn\'t really a risk intuitively',
      ],
    },
    {
      id: 1,
      name: 'semi_variance',
      label: 'Semivariance',
      description: `Semivariance is calculated the same as variance, except 
      that before the calculation is performed, all positive return values are 
      replaced with zeros.`,
      pros: [
        'only captures downside risks',
        'easy to understand',
        'easy to interpret',
      ],
      cons: [
        `computationally intensive because you have to calculate the full joint 
        distribution for each measurement.`,
      ],
    },
    {
      id: 2,
      name: 'loss_threshold_3',
      label: '-3% Loss Threshold',
      description: `An x% loss threshold calculates the % of periods that are 
      expected to have a worse return than x%. `,
      pros: [
        'only captures big downside risks',
        'easy to understand',
        'easy to interpret',
      ],
      cons: [
        `computationally intensive because you have to calculate the full joint 
        distribution for each measurement.`,
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
