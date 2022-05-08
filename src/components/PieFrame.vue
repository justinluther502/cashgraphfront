<template>
  <span>
    <port-pie-chart
      :asset_labels="asset_labels"
      :asset_data="weights_array.map((e, i) => e[slice])"
      :key="slice"
    >
    </port-pie-chart>
  </span>
</template>

<script>
  import { get } from 'vuex-pathify'
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
    }
  }
</script>

<style scoped>

</style>