<template>
  <v-app id="app">
    <!-- <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-toolbar-title class="todo-app-title">Todo List</v-toolbar-title>
    </v-app-bar> -->

    <v-content>
      <v-container class="fill-height app-container" fluid style="align-items:start">
        <v-row align="start" justify="center" no-gutters>
          <v-col>
            <div id="todo-app-title">Todo List</div>
            <TodoHeader msg="Welcome to Your Vue.js + TypeScript App" />

            <TodoList />

            <TodoToolbar />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
import TodoToolbar from "./components/TodoToolbar.vue";

export default Vue.extend({
  name: "App",

  components: {
    TodoHeader,
    TodoList,
    TodoToolbar
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: grey;
  //margin-top: 60px;
  /*margin: 8px;
  border-radius: 4px;
  padding: 8px;*/
}

.app-container {
  //background-color: white;
}

#todo-app-title {
  font-family: "Fredericka the Great", serif;
  font-size: 48px;
  color: #326590;
  background-color: #474344;
}

.col{
  border:1px solid black;
  border-radius: 4px;;
  background-color: white;
}

img {
  width: 200px;
}
</style>
