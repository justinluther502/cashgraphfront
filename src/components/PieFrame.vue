<template>
  <span id="piechart-frame">
    <port-pie-chart
      :asset_labels="asset_labels"
      :asset_data="weights_array.map((e, i) => e[slice])"
      :key="slice"
    >
    </port-pie-chart>
    <v-overlay
          absolute="true"
          :value="train_pie"
        >
          <v-btn
            color="success"
            @click="finishTraining"
          >
            Hide Overlay
          </v-btn>
        </v-overlay>
  </span>
</template>

<script>
  import {get, sync} from 'vuex-pathify'
  import PortPieChart from "@/components/PortPieChart"

  export default {
    name: "PieFrame.vue",
    components: {
      PortPieChart
    },
    computed: {
      weights_array: get('frontier/portfolio_weights'),
      slice: get('frontier/slice'),
      asset_labels: get('frontier/asset_labels'),
      train_pie: sync('user/train_pie'),
    },
    methods: {
      finishTraining() {
        this.train_pie = false
        this.$vuetify.goTo(0)
      }
    }
  }
</script>

<style scoped>

</style>