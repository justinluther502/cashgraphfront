<template>
  <div>
    <view-header :title="title" :title_prefix="title_prefix"/>
    <v-btn
      class="ma-16"
      fab
      dark
      x-large
      color="purple"
      absolute
      top
      right
      @click="runOptimizer"
    >
      <v-icon dark>
        mdi-play
      </v-icon>
    </v-btn>
    <v-row>
      <v-col cols="12" md="3">

        <!--Optimizer Selections Summary-->
        <v-card class="fill-height">
          <v-card-title>
            Optimizer Selections
          </v-card-title>
          <optimizer-table/>
        </v-card>
      </v-col>
      <v-col>

        <!--Efficient Frontier Chart Area-->
        <v-card>
          <v-card-title>
            Efficient Frontier
          </v-card-title>
          <frontier-spark/>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">

        <!--Efficient Portfolio Weight Table-->
        <v-card>
          <v-card-title>
            Portfolio Weights
          </v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">

        <!--Selected Efficient Portfolio Pie Chart-->
        <v-card>
          <v-card-title>
            Selected Portfolio Composition
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import viewHeader from "@/components/ViewHeader"
  import frontierSpark from "@/components/FrontierSpark"
  import OptimizerTable from "@/components/OptimizerTable"

  export default {
    name: "DashboardView.vue",
    components: {
      viewHeader,
      frontierSpark,
      OptimizerTable,
    },
    data() {
      return {
        title: "Dashboard",
        title_prefix: "Modern Portfolio Theory",
      }
    },
    methods: {
      runOptimizer() {
        console.log("runOptimizer")
      },
    },
  }
</script>

<style scoped>

</style>