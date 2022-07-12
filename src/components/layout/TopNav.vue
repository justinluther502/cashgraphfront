<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="show_drawer = !show_drawer"/>
    <v-toolbar-title
      class="font-weight-black text-h4"
    >
      {{ app_title }}
    </v-toolbar-title>
    <v-snackbar
      app
      timeout="4000"
      :value="train_button"
      color="blue"
      right
      rounded="pill"
      top
    >
      Press this play button to run the optimizer when you're ready
    </v-snackbar>
    <v-fab-transition>
      <v-btn
        v-if="$route.name==='home'"
        color="purple"
        class="accent-3"
        fab
        x-large
        dark
        absolute
        bottom
        right
        id="1"
        @click.stop="runOptimizer"
      >
        <v-progress-circular
          v-if="waiting"
          indeterminate
          color="white"
        >
        </v-progress-circular>
        <v-icon v-else>mdi-play</v-icon>
      </v-btn>
      <v-btn
        v-else
        color="purple"
        class="accent-3"
        fab
        x-large
        dark
        absolute
        bottom
        right
        id="2"
        @click.stop="backHome"
      >
        <v-icon dark>mdi-keyboard-return</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-app-bar>
</template>

<script>
import apiCall from "@/utils/api"
import store from "@/store"
import {get, sync} from "vuex-pathify"

export default {
  name: "TopNav.vue",
  computed: {
    flavors: get('flavors/flavors'),
    selection: get('flavors/selected_flavor_id'),
    risk: get('mpt_params/selected_risk'),
    train_button: sync('user/train_button'),
    refresh_key: sync('frontier/refresh_key'),
    waiting: sync('frontier/api_waiting'),
    show_drawer: sync('nav/show_drawer'),
  },
  data() {
    return {
      app_title: process.env.VUE_APP_TITLE,
    }
  },
  methods: {
    backHome() {
      this.$router.push('/')
    },
    runOptimizer() {
      this.waiting = 'primary'
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
            this.waiting = null
            this.refresh_key++
          },
        )
        .catch(err => {
            console.log(err)
            this.waiting = null
          },
        )
    },
  },
}
</script>

<style scoped>

</style>