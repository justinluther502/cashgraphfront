<template>
  <div>
    <v-card
      height="20%"
      elevation="0"
    >
      <v-card-text>
        <div>Modern Portfolio Theory</div>
        <p class="text-h4 text--primary">
          Optimizer Dashboard
        </p>
      </v-card-text>
    </v-card>
    <frontier-spark/>
  </div>
</template>

<script>
  import frontierSpark from "@/components/FrontierSpark"

  export default {
    name: "DashboardView.vue",
    components: {
      frontierSpark
    },
    data() {
      return {
        title: "Dashboard",
        reveal: false,
      }
    }
  }
</script>

<style scoped>

</style>