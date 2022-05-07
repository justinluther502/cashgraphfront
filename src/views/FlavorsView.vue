<template>
  <div>
    <view-header :title="title" :title_prefix="title_prefix"/>
    <v-row>
      <v-tabs :value="flavor_selection">
        <v-tab
          v-for="flavor in flavors"
          :key="flavor.id"
          @click="select_flavor(flavor.id)"
        >
          {{ flavor.label }}
        </v-tab>
      </v-tabs>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-card elevation="8">
          <v-card-title>
            {{ flavors[flavor_selection].label }}
          </v-card-title>
          <v-card-text>
            {{ flavors[flavor_selection].description1 }}
          </v-card-text>
          <v-card-text>
            {{ flavors[flavor_selection].description2 }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-card elevation="8">
          <v-card-title>
            Portfolio Assets
          </v-card-title>
          <v-list dense>
            <v-list-item
              v-for="asset in flavors[flavor_selection].assets"
              :key="asset"
            >
              {{ asset }}
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import viewHeader from "@/components/ViewHeader"
  import {get} from "vuex-pathify"
  import store from "@/store"

  export default {
    name: "FlavorsView.vue",
    components: {
      viewHeader,
    },
    computed: {
      flavors: get("flavors/flavors"),
      flavor_selection: get("flavors/selected_flavor_id"),
    },
    data() {
      return {
        title: "Flavors",
        title_prefix: "Asset Universe Selection",
      }
    },
    methods: {
      select_flavor(flavor_name) {
        store.set("flavors/selected_flavor_id", flavor_name)
      },
    },
  }
</script>

<style scoped>

</style>