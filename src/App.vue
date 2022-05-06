<template>
  <v-app>
    <v-navigation-drawer
      v-model="show_drawer"
      app
      class="deep-purple accent-4"
      dark
      bottom
    >
      <drawer-content />
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="show_drawer = !show_drawer" />

      <v-toolbar-title>CashGraphs</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  import DrawerContent from "@/components/DrawerContent"
  export default {
    name: 'App',
    components: {
      DrawerContent
    },
    data() {
      return {
        show_drawer: null,
      }
    },
  }
</script>