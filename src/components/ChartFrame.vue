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
      slice: sync('frontier/slice'),
    },
  }
</script>

<style scoped>

</style>