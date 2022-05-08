<template>
  <div>
    <view-header :title="title" :title_prefix="title_prefix"/>
    <v-row>

      <!--Optimizer Selections Summary-->
      <v-col cols="12" md="3">
      <v-card elevation="8" class="fill-height">
          <v-card-title>
            Optimizer Selections
          </v-card-title>
          <optimizer-table/>
        </v-card>
      </v-col>

      <!--Efficient Frontier Chart Area-->
      <v-col cols="12" md="9">
      <v-card elevation="8">
          <v-card-title>
            Efficient Frontier
          </v-card-title>
          <chart-frame />
        </v-card>
      </v-col>
    </v-row>

    <!--Efficient Portfolio Weight Table-->
    <v-row>
    <v-col cols="12" md="6">
      <v-card elevation="8">
          <v-card-title>
            Portfolio Weights (%)
          </v-card-title>
          <portfolio-weights />
        </v-card>
      </v-col>

      <!--Selected Efficient Portfolio Pie Chart-->
      <v-col cols="12" md="6">
      <v-card elevation="8">
          <v-card-title>
            Selected Portfolio Composition
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import ChartFrame from "@/components/ChartFrame"
  import OptimizerTable from "@/components/OptimizerTable"
  import ViewHeader from "@/components/ViewHeader"
  import PortfolioWeights from "@/components/PortfolioWeights"

  export default {
    name: "DashboardView.vue",
    components: {
      ChartFrame,
      OptimizerTable,
      ViewHeader,
      PortfolioWeights
    },
    data() {
      return {
        title: "Dashboard",
        title_prefix: "Modern Portfolio Theory Optimizer",
      }
    },
  }
</script>

<style scoped>

</style>