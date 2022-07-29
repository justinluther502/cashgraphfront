<template>
  <span>
    <v-skeleton-loader
      v-if="stale"
      class="mx-auto"
      max-width="400"
      max-height="325"
      type="image"
    ></v-skeleton-loader>
    <frontier-chart
      v-if="!stale"
      :asset_points="asset_risks.map( (v,i) => ({ x: v, y: asset_rets[i] }) )"
      :port_points="port_risks.map( (v,i) => ({ x: v, y: port_rets[i] }) )"
      :asset_labels="asset_labels"
      :periodicity="flavors['flavors'][flavors['selected_flavor_id']][
        'periods']"
    >
    </frontier-chart>
    <v-row>
      <v-col class="col-1 pb-0 mb-0"/>
      <v-col class="col-11 mb-0 pb-0">
        <v-slider
          class="ps-2 pe-4 pt-10 pb-0 mb-0"
          min="0"
          :max="port_risks.length - 1"
          ticks="always"
          thumb-label="always"
          v-model="slice"
          color="indigo darken-4"
          track-color="blue accent-2"
          dense
        >
        </v-slider>
      </v-col>
    </v-row>
    <v-row class="my-0 py-0">
      <v-col class="col-1 my-0 py-0"/>
      <v-col class="col-5 my-0 py-0">
        <v-card class="py-0 my-0" elevation="0">
          <v-card-text class="text-center">
            &larr; Less Risky, Lower Return
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="col-6 my-0 py-0">
        <v-card class="py-0 my-0" elevation="0">
          <v-card-text class="text-center">
            More Risky, Higher Return &rarr;
          </v-card-text>
        </v-card>
      </v-col>
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
          The efficient frontier will display here after the optimizer runs.
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="deep-purple darken-4"
            text
            @click.stop="doneTrainFrontier"
          >
            OK, What Else?
          </v-btn>
          <v-btn
            color="red"
            text
            @click.stop="train_frontier = false"
          >
            Exit Tutorial
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-overlay>

  </span>
</template>

<script>
import {get, sync} from 'vuex-pathify'
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
    flavors: get('flavors'),
    stale: get('frontier/stale_chart')
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