import {make} from 'vuex-pathify'

const state = {
  sections: [
    {
      id: 0,
      header: "Modern Portfolio Theory",
      image_src: "analytics-3268935__340.png",
      paragraphs: [
        process.env.VUE_APP_TITLE +
        ` helps portfolio managers develop mean-risk optimal portfolios. Our 
        platform is grounded in modern portfolio theory (MPT). We can help 
        managers build portfolios that maximize expected returns, and minimize 
        expected risks.`,
        `Many portfolio managers avoid MPT-style optimizations, typically 
        because of several pitfalls associated with the approach. Standard MPT 
        optimizers usually can't account for non-normal returns distributions, 
        model dynamic tail dependencies, or use any alternative risk metric 
        besides variance.`,
        process.env.VUE_APP_TITLE +
        ` accounts for all of these pitfalls! When you build portfolios, you 
        can pick nearly any well-known distribution for each individual 
        asset. You can customize tail dependencies, such as setting 
        correlations to nearly 1.0 during extreme market downturns. And you 
        can use better risk metrics to optimize against, such as semi-variance, 
        or an x% maximum loss threshold.`,
      ]
    },
    {
      id: 1,
      header: "Non-Normal Distributions",
      image_src: "bayesian-2889576_1280.png",
      paragraphs: [
        `Historically, MPT implementations have restricted themselves to using 
        gaussian shapes for all asset return distributions. Normal 
        distributions are easier to work with, primarily because a joint 
        return distribution can be specified with only a few inputs. Namely, 
        the expected average return and variance for each asset, and the full
        pairwise correlation matrix.`,
        process.env.VUE_APP_TITLE +
        ` doesn't have this limitation. We can build custom joint expected 
        return distributions using a wide array of distribution functions. In 
        fact, nearly any distribution specified in the R statistical 
        programming language can be used for a custom asset universe flavor.`,
      ]
    },
    {
      id: 2,
      header: "Vine Copulas",
      image_src: "branch-307129_1280.png",
      paragraphs: [
        `We can implement so many different return distributions because we 
        use Vine Copulas to specify the inter-relatedness of the assets in 
        each of our asset universe "flavors".`,
        `Vine Copulas allow us to strip away the shape of each individual 
        asset's return profile before fitting the whole asset group's 
        relationship structure. This allows us to separate out the 
        "relatedness" piece completely. Then at a later step, we can re-apply 
        the original distribution shape to each individual asset.`,
        `Vine Copulas are a relatively new technique that has been used by 
        central banks for risk modeling. We believe it also has a great use 
        case for portfolio management!`,
      ]
    },
    {
      id: 3,
      header: "Tail Dependencies",
      image_src: "pink-307853_1280.png",
      paragraphs: [
        `Using Vine Copulas allows us to model complex tail-event behavior. 
        For example, in a simple two-asset stock-bond portfolio, we can assume 
        a steady-state correlation between the two assets of 0.4. However, by 
        using the right pair copula to model the joint return dependency, we 
        can specify that this correlation approaches 1.0 at the bottom few 
        percentiles of the return distribution. In other words, we can model 
        that correlations converge to 1 during the worst possible market 
        environments.`,
        `This behavior is fully customizable. Using a Vine Copula approach 
        gives us maximum flexibility to specify any kind of interrelatedness 
        amongst our assets in our chosen investment universe.`,
      ]
    },
    {
      id: 4,
      header: "Expressing Views on Return Expectations",
      image_src: "smartphone-1184883_1280.png",
      paragraphs: [
        `After we simulate percentile-returns using our inter-relatedness 
        model, we usually re-apply the original asset's return distribution 
        shape. In other words, if we are modeling an asset from historical 
        data that had an average return of 6% and a standard deviation of 10%, 
        we usually re-apply those marginals to that asset in the joint 
        distribution.`,
        `However, that's not required. For example, say we have a ten asset 
        class universe that we are basing off of historical data. We can model 
        a vine copula structure, best-fitting the copula structure. But, if we 
        feel the historical look is not appropriate for forward-looking 
        forecasts for one of the assets, we can apply our own expectations of 
        return and risk for that asset only, without interfering with the 
        "interrelatedness" picture overall, or with the return and risk 
        characteristics of the other assets. Pretty cool!`,
      ]
    },
  ]
}

const mutations = {
  ...make.mutations(state),
}

export default {
  namespaced: true,
  state,
  mutations,
}
