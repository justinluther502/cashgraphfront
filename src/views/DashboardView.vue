<template>
  <div>
    <view-header :title="title" :title_prefix="title_prefix"/>
    <v-row>

      <!--Optimizer Selections Summary-->
      <v-col cols="12" md="4">
        <v-card
          elevation="8"
          class="fill-height"
        >
          <v-card-title>
            Optimizer Selections
          </v-card-title>
          <optimizer-table/>
        </v-card>
      </v-col>

      <!--Efficient Frontier Chart Area-->
      <v-col cols="12" md="8">
        <v-card
          elevation="8"
          class="fill-height"
          :loading="loading"
          :key="refresh"
        >
          <v-card-title>
            Efficient Frontier
          </v-card-title>
          <chart-frame/>
        </v-card>
      </v-col>
    </v-row>

    <!--Efficient Portfolio Weight Table-->
    <v-row>
      <v-col cols="12" md="6">
        <v-card
          elevation="8"
          class="fill-height"
          :loading="loading"
          :key="refresh"
        >
          <v-card-title>
            Portfolio Weights (%)
          </v-card-title>
          <portfolio-weights/>
        </v-card>
      </v-col>

      <!--Selected Efficient Portfolio Pie Chart-->
      <v-col cols="12" md="6">
        <v-card elevation="8" :loading="loading" :key="refresh">
          <v-card-title>
            Selected Portfolio Composition
          </v-card-title>
          <pie-frame/>
        </v-card>
      </v-col>
    </v-row>

    <!--Popup intro for new users based on local storage flag-->
    <new-user-dialog v-if="new_user"/>
  </div>
</template>

<script>
import ChartFrame from "@/components/ChartFrame"
import NewUserDialog from "@/components/NewUserDialog"
import OptimizerTable from "@/components/OptimizerTable"
import PortfolioWeights from "@/components/PortfolioWeights"
import PieFrame from "@/components/PieFrame"
import ViewHeader from "@/components/ViewHeader"

import {get} from 'vuex-pathify'

export default {
  name: "DashboardView.vue",
  computed: {
    loading: get('frontier/api_waiting'),
    refresh: get('frontier/refresh_key'),
    new_user: get('user/new_user'),
  },
  components: {
    ChartFrame,
    NewUserDialog,
    OptimizerTable,
    PortfolioWeights,
    PieFrame,
    ViewHeader,
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