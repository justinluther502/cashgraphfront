<template>
  <v-list>
    <v-list-item
      v-for="item in items"
      :key="item.title"
      link
    >
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
  export default {
    name: "NavDrawer.vue",
    data() {
      return {
        items: [
          {title: 'Optimizer Dashboard', icon: 'mdi-chart-line'},
          {title: 'Flavors', icon: 'mdi-food-turkey'},
          {title: 'Risk Measures', icon: 'mdi-dice-multiple'},
          {title: 'Portfolio Constraints', icon: 'mdi-handcuffs'},
          {title: 'About', icon: 'mdi-information-outline'},
        ],
      }
    },
  }
</script>

<style scoped>

</style>