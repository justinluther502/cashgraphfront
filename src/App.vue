<template>
  <v-app>
    <!--side nav drawer-->
    <v-navigation-drawer
      v-model="show_drawer"
      app
      class="deep-purple accent-4"
      dark
      bottom
    >
      <drawer-content/>
    </v-navigation-drawer>

    <!--top app bar-->
    <v-app-bar app>
      <v-app-bar-nav-icon @click="show_drawer = !show_drawer"/>
      <v-toolbar-title>{{ $webapptitle }}</v-toolbar-title>
    </v-app-bar>

    <!--main content-->
    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
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