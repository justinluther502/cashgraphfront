<template>
  <v-list>
    <v-list-item
      v-for="item in items"
      :key="item.id"
      :to="item.to"
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
          {
            id: 0,
            title: 'Optimizer Dashboard',
            icon: 'mdi-chart-line',
            to: '/',
          },
          {
            id: 1,
            title: 'Flavors',
            icon: 'mdi-food-turkey',
            to: '/flavors',
          },
          {
            id: 2,
            title: 'Risk Measures',
            icon: 'mdi-dice-multiple',
            to: '/risks',
          },
          {
            id: 3,
            title: 'Portfolio Constraints',
            icon: 'mdi-handcuffs',
            to: '/constraints',
          },
          {
            id: 4,
            title: 'About',
            icon: 'mdi-information-outline',
            to: '/about',
          },
        ],
      }
    },
  }
</script>

<style scoped>

</style>