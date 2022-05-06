<template>
  <div>
    <view-header :title="title" :title_prefix="title_prefix"/>
    <v-tabs :value="flavor_selection">
      <v-tab
        v-for="flavor in flavors"
        :key="flavor.id"
        @click="select_flavor(flavor.id)"
      >
        {{ flavor.label }}
      </v-tab>
    </v-tabs>
    <p>{{ flavors[flavor_selection] }}</p>
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
        model: 0,
        colors: [
          'primary',
          'secondary',
          'yellow darken-2',
          'red',
          'orange',
        ],
      }
    },
    methods: {
      select_flavor(flavor_name) {
        store.set("flavors/selected_flavor_id", flavor_name)
      }
    },
  }
</script>

<style scoped>

</style>