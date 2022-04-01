<template>
  <v-app id="inspire">
    <top-nav />
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="2"
          >
            <left-side />
          </v-col>
          <v-col
            cols="12"
            sm="8"
          >
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <router-view />
            </v-sheet>
          </v-col>
          <v-col
            cols="12"
            sm="2"
          >
            <right-side />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import TopNav from "@/components/TopNav"
  import LeftSide from "@/components/LeftSide"
  import RightSide from "@/components/RightSide"
  export default {
    name: 'App',
    components: {
      TopNav,
      LeftSide,
      RightSide
    },
  }
</script>