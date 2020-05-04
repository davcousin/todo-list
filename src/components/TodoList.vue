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
      const filter = this.filter;
      return this.todos.filter(
        todo =>
          filter === "all" ||
          (filter === "completed" && todo.completed) ||
          (filter === "active" && !todo.completed)
      );
    }
  }
};
</script>
