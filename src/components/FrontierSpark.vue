<template>
  <v-sparkline
    :value="returns"
    :gradient="gradient"
    :smooth="radius || false"
    :padding="padding"
    :line-width="width"
    :stroke-linecap="lineCap"
    :gradient-direction="gradientDirection"
    :fill="fill"
    :type="type"
    :auto-line-width="autoLineWidth"
    auto-draw
    height="100%"
  ></v-sparkline>
</template>

<script>
  import { get } from 'vuex-pathify'
  const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]

  export default {
    name: "FrontierSpark.vue",
    computed: {
      returns: get('frontier.portfolio_returns'),
    },
    data: () => ({
      width: 3,
      radius: 4,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[3],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
    }),
  }
</script>

<style scoped>

</style>