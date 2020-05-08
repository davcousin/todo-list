<template>
  <v-container>
    <v-text-field
      append-icon="mdi-plus-circle-outline"
      :value="newTodo"
      @input="setNewTodo"
      @keydown.enter="addTodo"
      :placeholder="addTodoBtnText"
      @click:append="addTodo"
    ></v-text-field>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "TodoHeader",

  computed: mapState(["addTodoBtnText", "newTodo"]),

  methods: {
    addTodo() {
      if (this.newTodo !== "") {
        this.$store.dispatch("addTodo");
      }
    },

    setNewTodo(newTodo) {
      this.$store.dispatch("setNewTodo", newTodo);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
