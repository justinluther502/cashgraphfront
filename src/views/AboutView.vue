<template>
  <div>
    <view-header :title="title" :title_prefix="title_prefix"/>

    <!--Show it as L/R alternating on large screens-->
    <div class="d-none d-md-block">
      <v-row v-for="section in sections" :key="section.id">
        <v-col cols="12" md="6" v-if="section.id % 2 !==0">
          <v-img
            :src="require('@/assets/' + section.image_src)"
            max-height="300"
          />
        </v-col>
        <v-col cols="12" md="6">
          <h2>{{ section.header }}</h2>
          <p v-for="paragraph in section.paragraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </v-col>
        <v-col cols="12" md="6" v-if="section.id % 2 === 0">
          <v-img
            :src="require('@/assets/' + section.image_src)"
            max-height="300"
          />
        </v-col>
      </v-row>
    </div>

    <!--Show it as a single column alternating text/photo on smaller screens-->
    <div class="d-md-none">
      <v-row v-for="section in sections" :key="section.id">
        <v-col cols="12" md="6">
          <h2>{{ section.header }}</h2>
          <p v-for="paragraph in section.paragraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <v-img
            :src="require('@/assets/' + section.image_src)"
            max-height="300"
          />
        </v-col>
      </v-row>
    </div>
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
      title: "So what exactly is going on under the hood?",
      title_prefix: "About " + this.$webapptitle,
    }
  },
}
</script>

<style scoped>

</style>