<template>
  <v-simple-table dense>
    <template v-slot:default>
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
        <td>Portfolio Flavor</td>
        <td>
          {{ flavors.filter(choice => choice.id == flavor_id)[0].label }}
        </td>
      </tr>
      <tr>
        <td>Risk Measure</td>
        <td>
          {{ risks.filter(measure => measure.name == risk)[0].label }}
        </td>
      </tr>
      <tr>
        <td>Constraints used?</td>
        <td>No</td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
  import { get } from 'vuex-pathify'
  export default {
    name: "OptimizerTable.vue",
    computed: {
      flavor_id: get('flavors/selected_flavor_id'),
      flavors: get('flavors/flavors'),
      risk: get('mpt_params/selected_risk'),
      risks: get('mpt_params/risk_measures'),
    }
  }
</script>

<style scoped>

</style>