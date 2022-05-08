<template>
  <span>
    <frontier-chart
      :asset_points="asset_risks.map( (v,i) => ({ x: v, y: asset_rets[i] }) )"
      :port_points="port_risks.map( (v,i) => ({ x: v, y: port_rets[i] }) )"
    >
    </frontier-chart>
  </span>
</template>

<script>
  import {get} from 'vuex-pathify'
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
      port_rets: get('frontier/portfolio_returns')
    },
  }
</script>

<style scoped>

</style>