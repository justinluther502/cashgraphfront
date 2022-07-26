<template>
  <span id="piechart-frame">
    <port-pie-chart
      :asset_labels="asset_labels"
      :asset_data="weights_array.map((e, i) => e[slice])"
      :key="slice"
    >
    </port-pie-chart>
    <v-overlay
      absolute
      :value="train_pie"
    >
      <v-card
        color="white"
      >
        <v-card-title class="purple--text">Optimizer Inputs</v-card-title>
        <v-card-text class="black--text">
          The composition of your selected portfolio will show up here.
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="deep-purple darken-4"
            text
            @click.stop="doneTrainingPie"
          >
            OK, What Else?
          </v-btn>
          <v-btn
            color="red"
            text
            @click.stop="train_pie = false"
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
    train_button: sync('user/train_button'),
    train_pie: sync('user/train_pie'),
  },
  methods: {
    doneTrainingPie() {
      this.train_pie = false
      this.train_button = true
      this.$vuetify.goTo(0)
    }
  }
}
</script>

<style scoped>

</style>