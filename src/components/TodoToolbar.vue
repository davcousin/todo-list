<template>
  <div class="toolbar">
    <v-btn @click="onClearAllClick">
      Clear all
      <v-icon>mdi-check-outline</v-icon>
    </v-btn>

    <v-radio-group v-model="filter" @click="filterChange" row>
      <v-radio :key="all" label="All" value="all" checked></v-radio>
      <v-radio :key="completed" label="Completed" value="completed"></v-radio>
      <v-radio :key="active" label="Active" value="active"></v-radio>
    </v-radio-group>
  </div>
</template>

<script lang="ts">
import { mapState, mapActions } from "vuex";

export default {
  name: "TodoToolbar",

  computed: mapState(["filter"]),

  methods: {
    onClearAllClick: function() {
      this.$store.dispatch("clearAll");
    },

    ...mapActions(["filterChange"])
  }
};
</script>

<style lang="scss" scoped></style>
