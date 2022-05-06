<template>
  <div>
    <view-header :title="title" :title_prefix="title_prefix" />
  </div>
</template>

<script>
  import viewHeader from "@/components/ViewHeader"

  export default {
    name: "FlavorsView.vue",
    components: {
      viewHeader,
    },
    data() {
      return {
        title: "Flavors",
        title_prefix: "Asset Universe Selection",
      }
    }
  }
</script>

<style scoped>

</style>