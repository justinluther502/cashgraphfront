<template>
  <div>
    <view-header :title="title" :title_prefix="title_prefix"/>
    <v-row>
      <v-col class="col-6">
        <v-btn
          color="primary"
          block
          @click="lockConstraints"
        >
          Lock in current constraints
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-card class="mb-6 py-0" elevation="8">
          <v-card-title>
            Global Constraints
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col class="col-4 py-0"/>
              <v-col class="col-8 py-0">
                <v-range-slider
                  min="0.0"
                  max="1.0"
                  thumb-label="always"
                  step="0.01"
                  v-model="glob_constraints"
                  @change="globalSetConstraints"
                >
                  <template v-slot:thumb-label="props">
                    {{ (props.value * 100).toFixed(0) }}%
                  </template>
                </v-range-slider>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <v-card elevation="8" :key="constraint_key">
          <v-card-title>
            Constraints
          </v-card-title>
          <v-card-text>
            <v-row
              v-for="asset, index in flavors[selection]['assets']"
              :key="asset"
            >
              <v-col class="col-4">{{ asset }}</v-col>
              <v-col class="col-8">
                <v-range-slider
                  min="0.0"
                  max="1.0"
                  thumb-label="always"
                  step="0.01"
                  v-model="constraints[index]"
                >
                  <template v-slot:thumb-label="props">
                    {{ (props.value * 100).toFixed(0) }}%
                  </template>
                </v-range-slider>
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
import {get} from "vuex-pathify"

export default {
  name: "ConstraintsView.vue",
  components: {
    viewHeader,
  },
  computed: {
    flavors: get("flavors/flavors"),
    selection: get("flavors/selected_flavor_id"),
  },
  data() {
    return {
      title: "Constraints",
      title_prefix: "Portfolio weight constraints",
      glob_constraints: [0.0, 1.0],
      constraints: [],
      range_vals: [0.0, 1.0],
      constraint_key: 0,
      // range_rules: [v => v[1] - v[0] >= 0.1 ||
      //   "Leave a wider range for this asset or things will get weird"]
    }
  },
  mounted() {
    this.startingConstraints()
  },
  methods: {
    startingConstraints() {
      //
      for (let i = 0; i < this.flavors[this.selection]['constraints']['mins']
        .length; i++) {
        this.constraints.push([this.flavors[this.selection]['constraints'][
          'mins'][i], this.flavors[this.selection]['constraints']['maxs'][i]])
      }
    },
    lockConstraints() {
      for (let i = 0; i < this.constraints.length; i++) {
        this.flavors[this.selection]['constraints']['mins'][i] =
          this.constraints[i][0]
        this.flavors[this.selection]['constraints']['maxs'][i] =
          this.constraints[i][1]
      }
    },
    globalSetConstraints() {
      for (let i = 0; i < this.constraints.length; i++) {
        this.constraints[i] = this.glob_constraints
      }
      this.constraint_key ++
    }
  }
}
</script>

<style scoped>

</style>