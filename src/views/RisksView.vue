<template>
  <div>
    <view-header :title="title" :title_prefix="title_prefix"/>
    <v-row
      v-for="risk in risks"
      :key="risk.id"
    >
      <v-col cols="12" md="6">
        <risk-card
          :name="risk.name"
          :label="risk.label"
          :desc="risk.description"
          :pros="risk.pros"
          :cons="risk.cons"
        >
        </risk-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import ViewHeader from "@/components/ViewHeader"
  import RiskCard from "@/components/RiskCard"
  import {get} from "vuex-pathify"

  export default {
    name: "RisksView.vue",
    computed: {
      risks: get('mpt_params/risk_measures'),
    },
    components: {
      ViewHeader,
      RiskCard,
    },
    data() {
      return {
        title: "Risk Measures",
        title_prefix: "Risk measure to minimize",
      }
    },
  }
</script>

<style scoped>

</style>