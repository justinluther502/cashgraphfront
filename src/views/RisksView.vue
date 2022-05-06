<template>
  <div>
    <view-header :title="title" :title_prefix="title_prefix" />
  </div>
</template>

<script>
  import viewHeader from "@/components/ViewHeader"

  export default {
    name: "RisksView.vue",
    components: {
      viewHeader,
    },
    data() {
      return {
        title: "Risk Measures",
        title_prefix: "Measure to use in x-axis of efficient frontier",
      }
    }
  }
</script>

<style scoped>

</style>