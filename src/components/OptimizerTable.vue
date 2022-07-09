<template>
  <div id="optimizer-frame">
    <v-simple-table dense>
      <thead>
      <tr class="pa-0">
        <th>
          Setting
        </th>
        <th>
          Current Selection
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>
          <v-list-item to="/flavors" class="pa-0">
            Portfolio Flavor
          </v-list-item>
        </td>
        <td>
          <v-list-item to="/flavors" class="pa-0">
            {{ flavors.filter(choice => choice.id === flavor_id)[0].label }}
          </v-list-item>
        </td>
      </tr>
      <tr>
        <td>
          <v-list-item to="/risks" class="pa-0">Risk Measure
          </v-list-item>
        </td>
        <td>
          <v-list-item to="/risks" class="pa-0">
            {{ risks.filter(measure => measure.name === risk)[0].label }}
          </v-list-item>
        </td>
      </tr>
      </tbody>
    </v-simple-table>
    <v-divider class="pb-2"/>
    <v-card-title>Portfolio Weight Constraints</v-card-title>
    <router-link
      style="text-decoration: none; color: inherit;"
      to="/constraints"
    >
      <v-simple-table dense class="pa-0">
        <thead class="pa-0">
        <tr class="pa-0">
          <th/>
          <th>
            Min
          </th>
          <th>
            Max
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="(asset, idx) in flavors[flavor_id]['assets']"
          :key="idx"
          class="pa-0"
        >
          <td>
            {{ flavors[flavor_id]['assets'][idx] }}
          </td>
          <td>
            {{ flavors[flavor_id]['constraints']['mins'][idx] * 100 }}%
          </td>
          <td>
            {{ flavors[flavor_id]['constraints']['maxs'][idx] * 100 }}%
          </td>
        </tr>
        </tbody>
      </v-simple-table>
    </router-link>
    <v-overlay
      absolute="true"
      :value="train_selections"
    >
      <v-btn
        color="success"
        @click="doneTrainSelections"
      >
        Hide Overlay
      </v-btn>
    </v-overlay>
  </div>
</template>

<script>
import {get, sync} from 'vuex-pathify'

export default {
  name: "OptimizerTable.vue",
  computed: {
    flavor_id: get('flavors/selected_flavor_id'),
    flavors: get('flavors/flavors'),
    risk: get('mpt_params/selected_risk'),
    risks: get('mpt_params/risk_measures'),
    train_selections: sync('user/train_selections'),
    train_pie: sync('user/train_pie'),
  },
  methods: {
    doneTrainSelections() {
      this.train_selections = false
      this.train_pie = true
      this.$vuetify.goTo('#piechart-frame')
    }
  }
}
</script>

<style scoped>

</style>