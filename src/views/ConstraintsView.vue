<template>
  <div>
    <view-header :title="title" :title_prefix="title_prefix"/>
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
        title: "Constraints",
        title_prefix: "Portfolio weight constraints",
      }
    },
  }
</script>

<style scoped>

</style>