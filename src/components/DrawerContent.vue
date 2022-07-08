<template>
  <v-list>
    <v-list-item
      v-for="item in items"
      :key="item.id"
      :to="item.to"
      link
    >
      <v-list-item-icon>
        <v-icon
          x-large
          color="pink lighten-5"
        >
          {{ item.icon }}
        </v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title
          class="pink--text text--lighten-5 font-weight-medium"
        >{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
  import { get } from 'vuex-pathify'
  export default {
    name: "NavDrawer.vue",
    computed: {
      items: get('nav/nav_items')
    }
  }
</script>

<style scoped>

</style>