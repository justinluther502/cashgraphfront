<template>
  <v-dialog
    v-model="new_user"
    max-width="600"
  >
    <v-card>
      <v-card-title class="text-h5">
        Welcome to {{ app_title }}!
      </v-card-title>
      <v-card-text>
        <p>
          {{ app_title }} is a tool for portfolio managers to develop
          optimized portfolios. {{ app_title }} is grounded in
          <a
            href="https://en.wikipedia.org/wiki/Modern_portfolio_theory"
            target="_blank">modern portfolio theory</a> and is designed to
          create optimal portfolios that maximize expected mean returns, and
          minimize expected risk.
        </p>
        <p>
          Many portfolio managers avoid modern portfolio theory optimizations
          because typical algorithms can't:
        </p>
        <ul>
          <li>Utilize non-normal returns expectations</li>
          <li>Model tail dependency</li>
          <li>Optimize against risk metrics other than variance</li>
        </ul>
        <p class="pt-4">
          {{ app_title }} can do all these things! And it's fast, so you
          can prototype out portfolios rapidly without waiting for long
          batch computations. Typically a custom efficient frontier can be
          solved in under thirty seconds.
        </p>
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn
          color="deep-purple"
          text
          @click.stop="logFirstVisit"
        >
          Let's Get Started
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import {sync} from 'vuex-pathify'

export default {
  name: "NewUserDialog.vue",
  computed: {
    new_user: sync('user/new_user'),
    train_selections: sync('user/train_selections'),
  },
  methods: {
    logFirstVisit() {
      this.new_user = false
      this.train_selections = true
    }
  },
  data() {
    return {
      app_title: process.env.VUE_APP_TITLE,
    }
  }
}
</script>

<style scoped>

</style>