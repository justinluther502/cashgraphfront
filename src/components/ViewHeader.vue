<template>
  <div>
    <v-card
      height="20%"
      elevation="0"
    >
      <v-card-text>
        <div>{{ title_prefix }}</div>
        <p class="text-h4 text--primary">
          {{ title }}
        </p>
      </v-card-text>
    </v-card>
    <v-btn
      v-if="title == 'Dashboard'"
      class="mt-16"
      fab
      dark
      x-large
      color="purple"
      absolute
      top
      right
      @click="runOptimizer"
    >
      <v-icon dark>
        mdi-play
      </v-icon>
    </v-btn>
    <v-btn
      v-else
      class="mt-16"
      fab
      dark
      x-large
      color="purple"
      absolute
      top
      right
      to="/"
    >
      <v-icon dark>
        mdi-keyboard-return
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
import {get} from 'vuex-pathify'
import store from '../store'
import apiCall from "@/utils/api"

export default {
  name: "ViewHeader.vue",
  props: {
    title: String,
    title_prefix: String,
  },
  computed: {
    flavors: get('flavors/flavors'),
    selection: get('flavors/selected_flavor_id'),
    risk: get('mpt_params/selected_risk'),
  },
  methods: {
    runOptimizer() {
      store.set('frontier/api_waiting', 'primary')
      const flavor_obj = this.flavors.filter(
        choice => choice.id == this.selection)[0]
      const flav_name = flavor_obj.name
      const risk = this.risk
      const mins = flavor_obj.constraints.mins
      const maxs = flavor_obj.constraints.maxs
      const payload = {
        'flavor': flav_name,
        'risk': risk,
        'mins': mins,
        'maxs': maxs,
      }
      apiCall({url: 'optimize/', data: payload, method: 'POST'})
        .then(res => {
            store.set('frontier/asset_risks', res.data['Asset Risks'])
            store.set('frontier/asset_returns', res.data['Asset Returns'])
            store.set('frontier/asset_labels', res.data['Asset Labels'])
            store.set('frontier/portfolio_risks', res.data['Portfolio Risks'])
            store.set('frontier/portfolio_returns', res.data['Portfolio Returns'])
            store.set('frontier/portfolio_weights', res.data['Portfolio Weights'])
            store.set('frontier/api_waiting', null)
            //  TODO refresh key isn't working and is setting the store value to
            //  a big function instead of an integer. Check with Vuex in
            //  chrome dev tools.
            store.set('frontier/refresh_key', get('frontier/refresh_key') + 1)
          },
        )
        .catch(err => {
            console.log(err)
            store.set('frontier/api_waiting', null)
          },
        )
    },
  },
}
</script>

<style scoped>

</style>