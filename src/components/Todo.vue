<template>
  <li>
    <input :id="text" :name="text" type="checkbox" v-model="completed" /><label
      :class="{ completed: completed }"
      :for="text"
      >{{ text }}</label
    >
  </li>
</template>

<script>
export default {
  name: "Todo",

  props: ["text", "completed"]
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
