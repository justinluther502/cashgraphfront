<template>
  <v-app>
    <!--side nav drawer-->
    <v-navigation-drawer
      v-model="show_drawer"
      app
      class="deep-purple accent-4"
      dark
      bottom
    >
      <drawer-content/>
    </v-navigation-drawer>

    <!--top app bar-->
    <v-app-bar app>
      <v-app-bar-nav-icon @click="show_drawer = !show_drawer"/>
      <v-toolbar-title
        class="font-weight-black text-h4"
      >
        {{ $webapptitle }}
      </v-toolbar-title>
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
          <v-icon>mdi-play</v-icon>
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

    <!--main content-->
    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import DrawerContent from "@/components/DrawerContent"
import {get, sync} from "vuex-pathify"
import apiCall from "@/utils/api"
import store from "@/store"

export default {
  name: 'App',
  components: {
    DrawerContent
  },
  computed: {
    flavors: get('flavors/flavors'),
    selection: get('flavors/selected_flavor_id'),
    risk: get('mpt_params/selected_risk'),

    refresh_key: sync('frontier/refresh_key'),
    waiting: sync('frontier/api_waiting')
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
  data() {
    return {
      show_drawer: null,
    }
  },
}
</script>