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
        `Lorem ipsum dolor sit amet, eirmod timeam legimus qui ex. Tamquam 
        vocibus ea eum, mea laudem omnesque menandri cu. Eu vel consetetur 
        dissentiunt, mei decore principes at, tollit graece ad mei. In epicurei 
        comprehensam nam, vim ne lorem nostrud expetenda. Habeo vulputate 
        vituperatoribus cu vim.`,
        `Percipitur reformidans eam ne. Id sit etiam appareat, cum no dolore 
        dignissim. Te appellantur mediocritatem ius, ius putent similique 
        concludaturque cu. An cum purto duis, ius alia error dictas eu, ut sit 
        solum falli. Mel dicam ancillae constituam ea, an eos hinc fabulas, vis 
        primis invidunt ei.`,
        `Inermis maluisset no pri. Integre persequeris quo ea, ut convenire 
        maluisset interpretaris mea. Recteque convenire repudiandae id vis. Cu 
        illum labitur vis, no nam case option. Te purto vivendo quaerendum 
        per.`,
      ]
    },
    {
      id: 2,
      header: "Vine Copulas",
      image_src: "branch-307129_1280.png",
      paragraphs: [
        `Lorem ipsum dolor sit amet, eirmod timeam legimus qui ex. Tamquam 
        vocibus ea eum, mea laudem omnesque menandri cu. Eu vel consetetur 
        dissentiunt, mei decore principes at, tollit graece ad mei. In epicurei 
        comprehensam nam, vim ne lorem nostrud expetenda. Habeo vulputate 
        vituperatoribus cu vim.`,
        `Percipitur reformidans eam ne. Id sit etiam appareat, cum no dolore 
        dignissim. Te appellantur mediocritatem ius, ius putent similique 
        concludaturque cu. An cum purto duis, ius alia error dictas eu, ut sit 
        solum falli. Mel dicam ancillae constituam ea, an eos hinc fabulas, vis 
        primis invidunt ei.`,
        `Inermis maluisset no pri. Integre persequeris quo ea, ut convenire 
        maluisset interpretaris mea. Recteque convenire repudiandae id vis. Cu 
        illum labitur vis, no nam case option. Te purto vivendo quaerendum 
        per.`,
      ]
    },
    {
      id: 3,
      header: "Tail Dependencies",
      image_src: "pink-307853_1280.png",
      paragraphs: [
        `Lorem ipsum dolor sit amet, eirmod timeam legimus qui ex. Tamquam 
        vocibus ea eum, mea laudem omnesque menandri cu. Eu vel consetetur 
        dissentiunt, mei decore principes at, tollit graece ad mei. In epicurei 
        comprehensam nam, vim ne lorem nostrud expetenda. Habeo vulputate 
        vituperatoribus cu vim.`,
        `Percipitur reformidans eam ne. Id sit etiam appareat, cum no dolore 
        dignissim. Te appellantur mediocritatem ius, ius putent similique 
        concludaturque cu. An cum purto duis, ius alia error dictas eu, ut sit 
        solum falli. Mel dicam ancillae constituam ea, an eos hinc fabulas, vis 
        primis invidunt ei.`,
        `Inermis maluisset no pri. Integre persequeris quo ea, ut convenire 
        maluisset interpretaris mea. Recteque convenire repudiandae id vis. Cu 
        illum labitur vis, no nam case option. Te purto vivendo quaerendum 
        per.`,
      ]
    },
    {
      id: 4,
      header: "Expressing Views on Return Expectations",
      image_src: "smartphone-1184883_1280.png",
      paragraphs: [
        `Lorem ipsum dolor sit amet, eirmod timeam legimus qui ex. Tamquam 
        vocibus ea eum, mea laudem omnesque menandri cu. Eu vel consetetur 
        dissentiunt, mei decore principes at, tollit graece ad mei. In epicurei 
        comprehensam nam, vim ne lorem nostrud expetenda. Habeo vulputate 
        vituperatoribus cu vim.`,
        `Percipitur reformidans eam ne. Id sit etiam appareat, cum no dolore 
        dignissim. Te appellantur mediocritatem ius, ius putent similique 
        concludaturque cu. An cum purto duis, ius alia error dictas eu, ut sit 
        solum falli. Mel dicam ancillae constituam ea, an eos hinc fabulas, vis 
        primis invidunt ei.`,
        `Inermis maluisset no pri. Integre persequeris quo ea, ut convenire 
        maluisset interpretaris mea. Recteque convenire repudiandae id vis. Cu 
        illum labitur vis, no nam case option. Te purto vivendo quaerendum 
        per.`,
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
