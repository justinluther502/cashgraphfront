import {make} from 'vuex-pathify'

const state = {
  flavors: [
    {
      id: 0,
      name: 'six_std',
      label: 'Six Asset Classic',
      description1: `Six Asset Classic is the first flavor we created. It 
      includes six asset classes, over a time period covering Jan 1980 through
      August 2020. Each asset class's marginal distribution is
      modeled as a normal distribution. 
      Asset returns are pulled from the St. Louis FRED series: "ICE BofA 
      Emerging Markets Corporate Plus Index Total Return Index Value", 
      "ICE BofA BBB US Corporate Index Total Return Index Value", 
      "Nikkei 225", "Wilshire 5000 Total Market Full Cap Index", 
      and "ICE BofA US High Yield Index Total Return Index Value". 
      Expected returns from Gold have been reduced slightly from historicals.`,
      description2: `The copula graph is fully selected by the vine copula 
      algorithm with no forced shapes.We recommend variance as a risk measure 
      for this flavor. Semivariance won't add much because all of the marginals 
      are normal.`,
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
      name: 'two_hy_wilshire',
      label: 'Basic Stock and Bond',
      description1: `Simple two asset portfolio, HY stocks and bonds. 
      Historical basis covers October 1986 to May 2022. Historical returns are 
      pulled from St. Louis FRED under tickers: "ICE BofA US High Yield Index 
      Total Return Index Value", "Wilshire 5000 Total Market Full Cap Index".`,
      description2: `The algorithm selected a Student's T copula to model the 
      pair dependency. We recommend variance as a risk measure for this flavor.
      Semivariance won't add much because all of the marginals are normal.`,
      assets: [
        'HY Bonds',
        'Wilshire 5000 Stocks'
      ],
      marginal_images: [],
      pair_cop_images: [],
      constraints: {
        mins: [0.0, 0.0],
        maxs: [1.0, 1.0],
      },
    },
    {
      id: 2,
      name: 'twelve_measure',
      label: 'Twelve Assets',
      description1: `Twelve Asset portfolio inspired by the Measure of a Plan 
      site, using posted data from their "Investment Returns by Asset Class" 
      article. Note that the asset selection is not ideal because there is some
      overlap. For example, HY US Bonds is a subset of All US Bonds. Time 
      period is 1985 to 2020 and the returns are real and annual.`,
      description2: `We recommend variance as a risk measure for this flavor.
      Semivariance won't add much because all of the marginals are normal.`,
      assets: [
        'US Large Cap Stocks',
        'US Small Cap Stocks',
        'Intl. Developed Mkt Stocks',
        'Emerging Market Stocks',
        'Canadian Stocks',
        'All US Bonds',
        'HY US Bonds',
        'International Govt Bonds',
        'Canadian Bonds',
        'T Bills',
        'REITs',
        'Gold'
      ],
      marginal_images: [],
      pair_cop_images: [],
      constraints: {
        mins: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        maxs: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
      },
    },
    {
      id: 3,
      name: 'seven_broad',
      label: 'Seven Asset Broad Market',
      description1: `Seven asset portfolio including equity, fixed income, and 
      REITs. Indices are as broad as possible and include EM and Euro exposure. 
      Notably absent is Euro IG bonds. Data source is St. Louis FRED time 
      series.`,
      description2: `We recommend variance as a risk measure for this flavor.
      Semivariance won't add much because all of the marginals are normal.`,
      assets: [
        "USD IG Bonds",
        "USD HY Bonds",
        "EUR HY Bonds",
        "EM Bonds - EUR and USD, IG and HY",
        "US Large Cap Stocks",
        "US Small Cap Stocks",
        "REITs",
      ],
      marginal_images: [],
      pair_cop_images: [],
      constraints: {
        mins: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        maxs: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
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
