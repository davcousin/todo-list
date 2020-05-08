<template>
  <v-container id="ctn" class="d-flex justify-space-between align-center p-0">
    <v-radio-group
      :value="filter"
      @change="filterChange"
      class="pt-0 mt-0"
      hide-details
      row
    >
      <v-radio label="All" value="all" checked></v-radio>
      <v-radio label="Completed" value="completed"></v-radio>
      <v-radio label="Active" value="active"></v-radio>
    </v-radio-group>

    <v-btn @click="onClearAllClick" outlined>
      Clear all
      <v-icon>mdi-check-outline</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "TodoToolbar",

  computed: {
    ...mapState(["filter"])
  },

  methods: {
    onClearAllClick: function() {
      this.$store.dispatch("clearAll");
    },

    ...mapActions(["filterChange"])
  }
};
</script>

<style lang="scss" scoped>
#ctn {
  border-top: 1px solid grey;
  background-color: #474344;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>
