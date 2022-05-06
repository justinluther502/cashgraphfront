<template>
  <div>
    <view-header :title="title" :title_prefix="title_prefix" />
  </div>
</template>

<script>
  import viewHeader from "@/components/ViewHeader"

  export default {
    name: "ConstraintsView.vue",
    components: {
      viewHeader,
    },
    data() {
      return {
        title: "Portfolio Constraints",
        title_prefix: "Weight constraints for the portfolio",
      }
    }
  }
</script>

<style scoped>

</style>