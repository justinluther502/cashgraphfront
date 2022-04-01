<template>
  <v-app-bar
    app
    color="white"
    flat
  >
    <v-avatar
      :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
      size="32"
    ></v-avatar>

    <v-tabs
      centered
      class="ml-n9"
      color="grey darken-1"
    >
      <v-tab
        v-for="link in links"
        :key="link.id"
        :to="link.path"
      >
        {{ link.title }}
      </v-tab>
    </v-tabs>

    <v-avatar
      class="hidden-sm-and-down"
      color="grey darken-1 shrink"
      size="32"
    ></v-avatar>
  </v-app-bar>
</template>

<script>
  export default {
    name: "TopNav.vue",
    data: () => ({
        links: {
          "Dashboard": {
            id: 0,
            title: "Dashboard",
            path: "/",
          },
          "Messages": {
            id: 1,
            title: "Messages",
            path: "/messages",
          },
          "Profile": {
            id: 2,
            title: "Profile",
            path: "/profile",
          },
          "Updates": {
            id: 3,
            title: "Updates",
            path: "/updates",
          },
        }
      }
    ),
  }
</script>

<style scoped>

</style>