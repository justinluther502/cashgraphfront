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
        title: "About " + this.$webapptitle,
        title_prefix: "About " + this.$webapptitle,
      }
    }
  }
</script>

<style scoped>

</style>