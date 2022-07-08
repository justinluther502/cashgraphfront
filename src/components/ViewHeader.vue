<template>
  <div>
    <v-card
      height="20%"
      elevation="0"
    >
      <v-card-text>
        <p
          class="mb-0 mt-0 text-subtitle-1"
        >
          {{ title_prefix }}
        </p>
        <p class="mb-0 text-h4 text--primary">
          {{ title }}
        </p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>

export default {
  name: "ViewHeader.vue",
  props: {
    title: String,
    title_prefix: String,
  },
}
</script>

<style scoped>

</style>