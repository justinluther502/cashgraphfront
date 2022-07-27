<template>
  <v-card
    elevation="8"
    @click="selectRisk"
  >

    <!--Header and Description-->
    <v-list-item
      three-line
    >
      <v-list-item-content>
        <v-list-item-title class="text-h4">
          {{ label }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ desc }}
        </v-list-item-subtitle>
      </v-list-item-content>

      <!--Checkbox Icon-->
      <v-list-item-icon>
        <v-icon
          x-large
          v-if="name==selected_risk"
        >
          mdi-checkbox-marked-outline
        </v-icon>
        <v-icon
          x-large
          v-else
        >
          mdi-checkbox-blank-outline
        </v-icon>
      </v-list-item-icon>
    </v-list-item>

    <!--Pros and Cons Lists-->
    <v-card-text>
      <p class="text-h6 text--primary mb-0">Pros</p>
      <p
        v-for="pro in pros"
        :key="pro"
        class="pa-0 ma-0">{{ pro }}
      </p>
      <br/>
      <p class="text-h6 text--primary mb-0">Cons</p>
      <p
        v-for="con in cons"
        :key="con"
        class="pa-0 ma-0">{{ con }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
import {sync} from 'vuex-pathify'
import store from '../store'

export default {
  name: "RiskCard.vue",
  computed: {
    selected_risk: sync('mpt_params/selected_risk'),
  },
  props: {
    name: String,
    label: String,
    desc: String,
    pros: Array,
    cons: Array,
  },
  methods: {
    selectRisk() {
      store.set('mpt_params/selected_risk', this.name)
    },
  },
}
</script>

<style scoped>

</style>