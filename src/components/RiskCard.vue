<template>
  <v-card
    elevation="8"
    @click="selectRisk"
  >

    <!--Header and Description-->
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5">
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
    <v-list dense>
      <v-subheader>Pros</v-subheader>
      <v-list-item-group>
        <v-list-item
          v-for="pro in pros"
          :key="pro"
          disabled
        >
          <v-list-item-content>
            <v-list-item-title v-text="pro"/>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-list dense>
      <v-subheader>Cons</v-subheader>
      <v-list-item
        v-for="con in cons"
        :key="con"
        disabled
      >
        <v-list-item-content>
          <v-list-item-title v-text="con"/>
        </v-list-item-content>
      </v-list-item>
    </v-list>
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