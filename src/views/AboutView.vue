<template>
  <div>
    <view-header :title="title" :title_prefix="title_prefix"/>
    <v-row v-for="section in sections" :key="section.id">
      <v-col cols="12" md="6" v-if="section.id % 2 !==0">
        <v-img
          :src="section.image_src"
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
            :src="section.image_src"
            max-height="300"
          />
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
      title: "About " + this.$webapptitle,
      title_prefix: "About " + this.$webapptitle,
    }
  }
}
</script>

<style scoped>

</style>