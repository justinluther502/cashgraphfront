<template>
  <div>
    <v-card
      class="mx-auto"
      height="20%"
    >
      <v-card-text>
        <div>Modern Portfolio Theory</div>
        <p class="text-h4 text--primary">
          Optimizer Dashboard
        </p>
      </v-card-text>
      <v-card-actions>
        <v-btn
          text
          color="teal accent-4"
          @click="reveal = true"
        >
          Learn More
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <v-card
          v-if="reveal"
          class="transition-fast-in-fast-out v-card--reveal"
          style="height: 100%;"
        >
          <v-card-text class="pb-0">
            <p>random extra stuff if I want it?? </p>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn
              text
              color="teal accent-4"
              @click="reveal = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>
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