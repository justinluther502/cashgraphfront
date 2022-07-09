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
    <top-nav/> <!--API submission method lives here-->

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
import TopNav from "@/components/layout/TopNav"
import {sync} from "vuex-pathify"

export default {
  name: 'App',
  computed: {
    show_drawer: sync('nav/show_drawer')
  },
  components: {
    DrawerContent,
    TopNav,
  },
}
</script>