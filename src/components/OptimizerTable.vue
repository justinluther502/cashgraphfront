<template>
  <div>
    <v-simple-table dense>
      <thead>
      <tr>
        <th class="text-left">
          Setting
        </th>
        <th class="text-left">
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
            {{ flavors.filter(choice => choice.id == flavor_id)[0].label }}
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
            {{ risks.filter(measure => measure.name == risk)[0].label }}
          </v-list-item>
        </td>
      </tr>
      </tbody>
    </v-simple-table>
    <v-divider class="pb-10"/>
    <v-simple-table dense>
      <thead>
      <tr>
        <th class="text-left">
          Portfolio Weight Constraints
        </th>
        <th>
          Min
        </th>
        <th>
          Max
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(asset, idx) in flavors[flavor_id]['assets']" :key="idx">
        <td>
          {{ flavors[flavor_id]['assets'][idx] }}
        </td>
        <td>
          {{ flavors[flavor_id]['constraints']['mins'][idx] }}
        </td>
        <td>
          {{ flavors[flavor_id]['constraints']['maxs'][idx] }}
        </td>
      </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
  import {get} from 'vuex-pathify'

  export default {
    name: "OptimizerTable.vue",
    computed: {
      flavor_id: get('flavors/selected_flavor_id'),
      flavors: get('flavors/flavors'),
      risk: get('mpt_params/selected_risk'),
      risks: get('mpt_params/risk_measures'),
    },
  }
</script>

<style scoped>

</style>