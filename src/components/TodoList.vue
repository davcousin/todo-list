<template>
  <ul>
    <Todo
      v-for="todo in filteredTodos"
      :key="todo.id"
      :text="todo.text"
      :completed="todo.completed"
    />
  </ul>
</template>

<script>
import Todo from "./Todo";
import { mapState } from "vuex";

export default {
  name: "TodoList",


  components: {
    Todo
  },

  computed: {
    ...mapState(["todos", "filter"]),
    filteredTodos: function() {
      return this.todos.filter(
        todo =>
          this.filter === "all" ||
          (this.filter === "completed" && todo.complete) ||
          (this.filter === "active" && !todo.complete)
      );
    }
  }
};
</script>
