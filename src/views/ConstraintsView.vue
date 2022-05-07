<template>
  <div>
    <view-header :title="title" :title_prefix="title_prefix"/>
    <v-row>
      <v-col cols="12" md="6">
        <v-card class="mb-6" elevation="8">
          <v-card-title>
            Global Constraints
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col>
                Minimum
              </v-col>
              <v-col>
                0.0
              </v-col>
              <v-col>
                Maximum
              </v-col>
              <v-col>
                1.0
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <v-card elevation="8">
          <v-card-title>
            Constraints
          </v-card-title>
          <v-card-text>
            <v-row class="pb-8">
              <v-col>
                Asset
              </v-col>
              <v-col>
                Minimums
              </v-col>
              <v-col>
                Maximums
              </v-col>
            </v-row>
            <v-row
              v-for="(_, index) in flavors[selection]['constraints']['mins']"
              :key="index"
            >
              <v-col>
                {{ flavors[selection]['assets'][index] }}
              </v-col>
              <v-col>
                <v-slider
                  v-model="flavors[selection]['constraints']['mins'][index]"
                  min="0.0"
                  max="1.0"
                  thumb-label="always"
                  step="0.01"
                >
                </v-slider>
              </v-col>
              <v-col>
                <v-slider
                  v-model="flavors[selection]['constraints']['maxs'][index]"
                  min="0.0"
                  max="1.0"
                  thumb-label="always"
                  step="0.01"
                >
                </v-slider>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import viewHeader from "@/components/ViewHeader"
  import {get, sync} from "vuex-pathify"

  export default {
    name: "ConstraintsView.vue",
    components: {
      viewHeader,
    },
    computed: {
      flavors: sync("flavors/flavors"),
      selection: get("flavors/selected_flavor_id"),
    },
    data() {
      return {
        title: "Constraints",
        title_prefix: "Portfolio weight constraints",
      }
    },
  }
</script>

<style scoped>

</style>