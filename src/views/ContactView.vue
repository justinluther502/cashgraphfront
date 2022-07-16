<template>
  <div>
    <view-header :title="title" :title_prefix="title_prefix"/>
    <v-row>
      <v-col cols="12" md="6">
        <p>
          This is a very early version of {{apptitle}}. I use it as a financial
          adviser at <a href="https://www.lutherwealth.com">Luther Wealth</a>
          and I'd love to know if anyone else in the portfolio management
          industry finds it useful. Thanks very much!!
        </p>
        <p>
          <a href="mailto:justinluther@lutherwealth.com">
            justinluther@lutherwealth.com
          </a>
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import viewHeader from "@/components/ViewHeader"
import {get} from "vuex-pathify"

export default {
  name: "AboutView.vue",
  computed: {
    sections: get("about/sections")
  },
  components: {
    viewHeader,
  },
  data() {
    return {
      title: "Contact / Feedback",
      title_prefix: "I would love your feedback!",
      apptitle: process.env.VUE_APP_TITLE
    }
  },
}
</script>

<style scoped>

</style>