<template>
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
</template>

<script>
  export default {
    name: "ViewHeader.vue",
    props: {
      title: String,
      title_prefix: String,
    }
  }
</script>

<style scoped>

</style>