import {make} from 'vuex-pathify'

const state = {
  sections: [
    {
      id: 0,
      header: "Modern Portfolio Theory",
      image_src: "https://pixabay.com/get/ga411e0a5081c08eb234946f0475b94e514c6b20f93dd721581e37064915577a27a546c9726421210a38006c2d7c2c8f995a4276b81b2d1c84f52f12cd13c43ed_1280.png",
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
      id: 1,
      header: "Second thing",
      image_src: "https://pixabay.com/get/ga411e0a5081c08eb234946f0475b94e514c6b20f93dd721581e37064915577a27a546c9726421210a38006c2d7c2c8f995a4276b81b2d1c84f52f12cd13c43ed_1280.png",
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
