<template>
  <v-card
    flat
    tile
  >
    <view-header :title="title" :title_prefix="title_prefix" />
    <risk-card
      v-for="risk in risks"
      :key="risk.id"
      :name="risk.name"
      :label="risk.label"
      :desc="risk.description"
      :pros="risk.pros"
      :cons="risk.cons"
    >
    </risk-card>
  </v-card>
</template>

<script>
  import ViewHeader from "@/components/ViewHeader"
  import RiskCard from "@/components/RiskCard"
  import { get } from "vuex-pathify"

  export default {
    name: "RisksView.vue",
    computed: {
      risks: get('mpt_params/risk_measures')
    },
    components: {
      ViewHeader,
      RiskCard,
    },
    data() {
      return {
        title: "Risk Measures",
        title_prefix: "Measure to use in x-axis of efficient frontier",
      }
    }
  }
</script>

<style scoped>

</style>