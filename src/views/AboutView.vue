<template>
  <div>
    <view-header :title="title" :title_prefix="title_prefix" />
  </div>
</template>

<script>
  import viewHeader from "@/components/ViewHeader"

  export default {
    name: "AboutView.vue",
    components: {
      viewHeader,
    },
    data() {
      return {
        title: "About CashGraphs",
        title_prefix: "About CashGraphs",
      }
    }
  }
</script>

<style scoped>

</style>