<template>
  <span>
    <frontier-chart
      :asset_points="asset_risks.map( (v,i) => ({ x: v, y: asset_rets[i] }) )"
      :port_points="port_risks.map( (v,i) => ({ x: v, y: port_rets[i] }) )"
      :asset_labels="asset_labels"
    >
    </frontier-chart>
    <v-row>
      <v-col cols="1"></v-col>
      <v-col>
        <v-slider
          min="0"
          :max="port_risks.length - 1"
          thumb-label="always"
          v-model="slice"
        >
        </v-slider>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
    <v-overlay
      absolute
      :value="train_frontier"
    >
      <v-card
        color="white"
      >
        <v-card-title class="purple--text">Efficient Frontier</v-card-title>
        <v-card-text class="black--text">
          After your optimization finishes running, the efficient frontier will
          display here. You can see the original assets, as well as the new
          optimized portfolios. Higher = better returns. Further right = more
          risk. Adjust the slider based on your preferred level of portfolio
          risk. Again, further right = more risky.
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="deep-purple darken-4"
            @click="doneTrainFrontier"
            text
          >
            OK, got it
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-overlay>
  </span>
</template>

<script>
  import { get, sync } from 'vuex-pathify'
  import FrontierChart from "@/components/FrontierChart"

  export default {
    name: "ChartFrame.vue",
    components: {
      FrontierChart,
    },
    computed: {
      asset_risks: get('frontier/asset_risks'),
      asset_rets: get('frontier/asset_returns'),
      port_risks: get('frontier/portfolio_risks'),
      port_rets: get('frontier/portfolio_returns'),
      asset_labels: get('frontier/asset_labels'),
      train_frontier: sync('user/train_frontier'),
      train_pie: sync('user/train_pie'),
      slice: sync('frontier/slice'),
    },
    methods: {
      doneTrainFrontier() {
        this.train_frontier = false
        this.train_pie = true
        this.$vuetify.goTo('#piechart-frame')
      }
    }
  }
</script>

<style scoped>

</style>