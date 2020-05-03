<template>
  <div class="todo">
    <div>
      <form @submit.prevent="onSubmit">
        <!-- <label for="todo">Enter a new Todo</label> -->
        <!-- <input name="todo" type="text" v-model="newTodo" @keypress="onKeypress" /> -->
        <input
          name="todo"
          type="text"
          placeholder="Enter a new todo"
          v-model="newTodo"
        />
        <input type="submit" value="Add todo" />
      </form>
    </div>

    <ul>
      <Todo
        v-for="todo in todos"
        :key="todo.text"
        :text="todo.text"
        :completed="todo.completed"
      />
    </ul>
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
      newTodo: "",
      todos: [
        {
          text: "Learn VueJs",
          completed: false
        },
        {
          text: "Learn Vuetify",
          completed: true
        }
      ]
    };
  },

  methods: {
    onClick() {
      console.log("yolo");
      window.alert(this.msg);
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
      this.newTodo.text = "";
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
</style>
