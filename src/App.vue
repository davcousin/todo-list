<template>
  <v-app id="app">
    <div class="logo-wrapper">
      <img alt="Vue logo" src="./assets/logo.png" />
    </div>
    <TodoHeader msg="Welcome to Your Vue.js + TypeScript App" />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import TodoHeader from "./components/TodoHeader.vue";

export default Vue.extend({
  name: "App",

  components: {
    TodoHeader
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 200px;
}
</style>
