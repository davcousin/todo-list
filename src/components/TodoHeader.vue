<template>
  <div class="todo">
    <form @submit.prevent="addTodo">
      <input
        name="todo"
        type="text"
        placeholder="Enter a new todo"
        :value="newTodo"
        @input="setNewTodo"
      />
      <input id="add-todo-btn" type="submit" :value="addTodoBtnText" />
    </form>

    <TodoList />

    <TodoToolbar />
  </div>
</template>

<script>
import TodoList from "./TodoList";
import TodoToolbar from "./TodoToolbar";
import { mapState } from "vuex";

export default {
  name: "TodoHeader",

  components: {
    TodoList,
    TodoToolbar
  },

  computed: mapState(["addTodoBtnText", "newTodo"]),

  methods: {
    onClearAllClick() {
      this.todos.forEach(todo => {
        todo.completed = true;
      });
    },

    addTodo() {
      if (this.newTodo !== "") {
        this.$store.dispatch("addTodo");
      }
    },

    //...mapActions(["addTodo"]),

    setNewTodo(e) {
      this.$store.dispatch("setNewTodo", e.target.value);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.todo {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

input {
  width: 200px;
  border-style: solid;
}

#add-todo-btn {
  width: 100px;
}
</style>
