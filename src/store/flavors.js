import {make} from 'vuex-pathify'

const state = {
  flavors: [
    {
      id: 0,
      name: 'six_std',
      label: 'CG Classic',
      periods: 'Monthly',
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
      algorithm with no forced shapes. We recommend variance as a risk measure 
      for this flavor. Semivariance won't add much because all of the marginals 
      are normal. There are a few issues with this flavor. Nikkei returns do 
      not include dividends, and there are some gaps in coverage.`,
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
      label: 'Stocks vs Bonds',
      periods: 'Monthly',
      description1: `Simple two asset portfolio, stocks and HY bonds. 
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
      label: 'Twelve Asset Grab Bag',
      periods: 'Annual',
      description1: `Twelve Asset portfolio inspired by the Measure of a Plan 
      site, using posted data from their "Investment Returns by Asset Class" 
      article. Note that the asset selection is not ideal because there is some
      overlap. For example, HY US Bonds is a subset of All US Bonds. Time 
      period is 1985 to 2020 and the returns are real and annual.`,
      description2: `We recommend variance as a risk measure for this flavor.
      Semivariance won't add much because all of the marginals are normal. This 
      flavor has issues with overlap and missing coverage.`,
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
      label: 'Purple',
      periods: 'Monthly',
      description1: `Seven asset portfolio including equity, fixed income, and 
      REITs. Indices are as broad as possible and include EM and Euro exposure. 
      Notably absent is Euro IG bonds. Data source is St. Louis FRED time 
      series. REITs are extremely overallocated.`,
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
    {
      id: 4,
      name: 'six_broad_mod',
      label: 'Hot Purple',
      periods: 'Monthly',
      description1: `Six asset portfolio including equity and fixed income. 
      Indices are as broad as possible and include EM and Euro exposure. 
      Notably absent is Euro IG bonds. Data source is St. Louis FRED time 
      series. EM bond returns have been nerfed and EM bond risk has been 
      buffed.`,
      description2: `We recommend variance as a risk measure for this flavor.
      Semivariance won't add much because all of the marginals are normal.`,
      assets: [
        "USD IG Bonds",
        "USD HY Bonds",
        "EUR HY Bonds",
        "EM Bonds - EUR and USD, IG and HY",
        "US Large Cap Stocks",
        "US Small Cap Stocks",
      ],
      marginal_images: [],
      pair_cop_images: [],
      constraints: {
        mins: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        maxs: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
      },
    },
    {
      id: 5,
      name: 'ibkr_adjusted',
      label: 'IBKR ETFs with Adjustments',
      periods: 'Weekly',
      description1: `Six asset portfolio of liquid index ETFs. Contains some 
      adjustments by Luther Wealth for forward looking risk and return expectations.`,
      description2: `We recommend variance as a risk measure for this flavor.
      Semivariance won't add much because all of the marginals are normal.`,
      assets: [
        "USHY - High Yield Bonds",
        "VCLT - IG Bonds",
        "VEU - Global Stocks",
        "VONE - Large Cap US Stocks",
        "VTWO - Small Cap US Stocks",
        "BCD - Commodities",
      ],
      marginal_images: [],
      pair_cop_images: [],
      constraints: {
        mins: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        maxs: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
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
