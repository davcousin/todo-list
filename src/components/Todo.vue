<template>
  <li>
    <v-container fluid>
      <v-row justify="space-around" class="mb-2">
        <input
          :id="text"
          :name="text"
          type="checkbox"
          @click="changeTodoComplete"
          v-model="completed"
        />

        <label
          v-if="!editMode"
          class="todo-label"
          :class="{ completed: completed }"
          :for="text"
          >{{ text }}</label
        >
        <input
          class="todo-editor"
          v-else
          :id="id"
          type="text"
          :value="text"
          @keyup.enter="updateTodo"
        />

        <v-btn icon text>
          <v-icon @click="toggleEdit" dark>mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon text>
          <v-icon @click="deleteTodo" dark>mdi-delete</v-icon>
        </v-btn>
      </v-row>
    </v-container>
  </li>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Todo",

  data: function() {
    return {
      editMode: false
    };
  },

  props: ["id", "text", "completed"],

  methods: {
    toggleEdit: function() {
      this.editMode = !this.editMode;
      console.log("editMode:", this.editMode);
    },

    ...mapActions(["changeTodoComplete", "deleteTodo"]),
    deleteTodo: function() {
      this.$store.dispatch("deleteTodo", this.text);
    },

    updateTodo: function(event) {
      this.$store.dispatch({
        type: "updateTodo",
        todoText: this.text,
        newText: event.target.value
      });
      this.editMode = !this.editMode;
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

.todo-editor {
  border: 1px solid black;
}

.todo-label {
  font-family: "Amatic SC", serif;
  font-weight: bold;
  font-size: 25px;
}
</style>
