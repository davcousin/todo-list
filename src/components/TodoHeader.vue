<template>
  <div class="todo">
    <form @submit.prevent="onSubmit">
      <input
        name="todo"
        type="text"
        placeholder="Enter a new todo"
        v-model="newTodo"
      />
      <input id="add-todo-btn" type="submit" value="Add todo" />
    </form>

    <ul>
      <Todo
        v-for="todo in todos"
        :key="todo.text"
        :text="todo.text"
        :completed="todo.completed"
        v-on:todoCompleteChange="todoCompleteChange"
      />
    </ul>

    <div class="toolbar">
      <button @click="onClearAllClick">Clear all</button>
    </div>
  </div>
</template>

<script>
import Todo from "./Todo";

export default {
  name: "TodoHeader",

  components: {
    Todo
  },

  data() {
    return {
      newTodo: null,
      todos: []
    };
  },

  //hook on the created component lifecycle stage
  created: function() {
    this.loadStateFromLocalStorage();
  },

  methods: {
    onClick() {
      console.log("yolo");
      window.alert(this.msg);
    },

    onClearAllClick() {
      this.todos.forEach(todo => {
        todo.completed = true;
      });
    },

    /*onKeypress(event){
      //const todo = event.target.value;
      //console.log('onKeypress', event.target.value);
      if(event.charCode === 13){
        console.log('onKeypress enter, newTodo', this.newTodo.text);
        this.todos.push({
          text: this.newTodo,
          completed: false
        });
        this.newTodo.text = '';
      }
    },*/

    onSubmit() {
      this.todos.push({
        text: this.newTodo,
        completed: false
      });
      this.newTodo = "";
      this.saveStateInLocalStorage();
    },

    saveStateInLocalStorage() {
      localStorage.setItem("todo-list", JSON.stringify(this.$data));
    },

    loadStateFromLocalStorage() {
      const state = JSON.parse(localStorage.getItem("todo-list"));
      Object.keys(state).forEach(key => {
        this[key] = state[key];
      });
    },

    todoCompleteChange: function(todoData) {
      this.todos.forEach((todo, index) => {
        if (todo.text === todoData.text) {
          this.todos[index].completed = !todo.completed;
        }
      });
      this.saveStateInLocalStorage();
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
}

#add-todo-btn {
  width: 100px;
}
</style>
