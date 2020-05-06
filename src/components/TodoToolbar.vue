<template>
  <div class="toolbar">
    <v-btn @click="onClearAllClick">
      Clear all
      <v-icon>mdi-check-outline</v-icon>
    </v-btn>

    <v-radio-group v-model="filter" @change="filterChange" row>
      <v-radio label="All" value="all" checked></v-radio>
      <v-radio label="Completed" value="completed"></v-radio>
      <v-radio label="Active" value="active"></v-radio>
    </v-radio-group>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "TodoToolbar",

  computed: mapState(["filter"]),

  methods: {
    onClearAllClick: function() {
      this.$store.dispatch("clearAll");
    },

    ...mapActions(["filterChange"])
    /*filterChange: function() {
      this.$store.dispatch("filterChange");
    },*/
  }
};
</script>

<style lang="scss" scoped></style>
