<template>
  <div>
    <v-card
      height="20%"
      elevation="0"
    >
      <v-card-text>
        <div>{{ title_prefix }}</div>
        <p class="text-h4 text--primary">
          {{ title }}
        </p>
      </v-card-text>
    </v-card>
    <v-btn
      v-if="title == 'Dashboard'"
      class="mt-16"
      fab
      dark
      x-large
      color="purple"
      absolute
      top
      right
      @click="runOptimizer"
    >
      <v-icon dark>
        mdi-play
      </v-icon>
    </v-btn>
    <v-btn
      v-else
      class="mt-16"
      fab
      dark
      x-large
      color="purple"
      absolute
      top
      right
      to="/"
    >
      <v-icon dark>
        mdi-keyboard-return
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
  export default {
    name: "ViewHeader.vue",
    props: {
      title: String,
      title_prefix: String,
    },
    methods: {
      runOptimizer() {
        console.log("runOptimizer")
      },
    },
  }
</script>

<style scoped>

</style>