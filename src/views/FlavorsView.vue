<template>
  <div>
    <view-header :title="title" :title_prefix="title_prefix"/>
    <v-row>
      <v-col cols="12" md="6">
        <v-select
          v-model="flavor_selection"
          :items="flavors"
          :item-value="'id'"
          :item-text="'label'"
          solo
          background-color="pink accent-2"
        >
        </v-select>
      </v-col>
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
import {get, sync} from "vuex-pathify"

export default {
  name: "FlavorsView.vue",
  components: {
    viewHeader,
  },
  computed: {
    flavors: get("flavors/flavors"),
    flavor_selection: sync("flavors/selected_flavor_id"),
  },
  data() {
    return {
      title: "Flavors",
      title_prefix: "Asset Universe Selection",
    }
  },
}
</script>

<style scoped>

</style>