<template>
  <li>
    <v-container fluid>
      <v-row justify="space-around" class="mb-2">
        <input
          :id="text"
          :name="text"
          type="checkbox"
          @click="onClick"
          v-model="completed"
        /><label :class="{ completed: completed }" :for="text">{{ text }}</label>
        <v-btn icon text>
          <v-icon @click="onDeleteTodo" dark>mdi-delete</v-icon>
        </v-btn>
      </v-row>
    </v-container>
  </li>
</template>

<script>
export default {
  name: "Todo",

  props: ["text", "completed"],

  methods: {
    onClick: function() {
      //Send an event to the parent component to update the todo state
      this.$emit("todoCompleteChange", this.$props);
    },

    onDeleteTodo: function() {
      //Send an event to the parent component to update the todo state
      this.$emit("deleteTodo", this.$props);
    }
  }
};
</script>

<style scoped>
li {
  list-style: none;
}

.completed {
  text-decoration: line-through;
}
</style>
