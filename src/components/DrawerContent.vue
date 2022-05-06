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
          {title: 'Optimizer Dashboard', icon: 'mdi-view-dashboard'},
          {title: 'Flavors', icon: 'mdi-food-turkey'},
          {title: 'Risk Measure', icon: 'mdi-dice-multiple'},
          {title: 'Portfolio Constraints', icon: 'mdi-handcuffs'},
        ],
      }
    },
  }
</script>

<style scoped>

</style>