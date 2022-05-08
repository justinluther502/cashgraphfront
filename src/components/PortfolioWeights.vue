<template>
  <v-simple-table dense>
    <thead>
    <tr>
      <th>Portfolio #</th>
      <th
        v-for="(weight, slice) in weight_array[0]"
        :key="slice"
      >
        {{ slice + 1 }}
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
      v-for="(asset_row, idx1) in weight_array"
      :key="idx1"
    >
      <th>{{ labels[idx1] }} </th>
      <td
        v-for="(weight, idx2) in asset_row"
        :key="idx2"
      >
        {{ (weight * 100).toFixed(0) }}
      </td>
    </tr>
    </tbody>
  </v-simple-table>
</template>

<script>
  import {get} from 'vuex-pathify'

  export default {
    name: "PortfolioWeights.vue",
    computed: {
      labels: get('frontier/asset_labels'),
      weight_array: get('frontier/portfolio_weights'),
    },
  }
</script>

<style scoped>

</style>