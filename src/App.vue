<template>
  <v-app id="app">
    <v-content>
      <v-container fluid>
        <v-row align="start" justify="center">
          <v-col cols="8" class="pa-0">
            <div id="todo-app-title">Todo List</div>

            <v-row align="start" justify="center" dense>
              <v-col cols="11">
                <TodoList />

                <TodoHeader class="mt-12" />
              </v-col>
            </v-row>

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
  background-color: white;
  //margin-top: 60px;
  /*margin: 8px;
  border-radius: 4px;
  padding: 8px;*/
}

#todo-app-title {
  font-family: "Fredericka the Great", serif;
  font-size: 58px;
  color: #326590;
  background-color: #474344;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.col {
  //border:1px solid black;
  border-radius: 8px;
  background-color: #e6e6e6;
}

img {
  width: 200px;
}
</style>
