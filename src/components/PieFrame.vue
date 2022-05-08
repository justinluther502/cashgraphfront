<template>
  <p>
    {{ weights_array.map((e, i) => e[slice]) }}
  </p>
</template>

<script>
  import { get } from 'vuex-pathify'

  export default {
    name: "PieFrame.vue",
    computed: {
      weights_array: get('frontier/portfolio_weights'),
      slice: get('frontier/slice'),
    }
  }
</script>

<style scoped>

</style>