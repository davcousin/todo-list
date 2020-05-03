<template>
  <li>
    <input
      :id="text"
      :name="text"
      type="checkbox"
      @click="onClick"
      v-model="completed"
    /><label :class="{ completed: completed }" :for="text">{{ text }}</label>
  </li>
</template>

<script>
export default {
  name: "Todo",

  props: ["text", "completed"],

  methods: {
    onClick: function() {
      //Send an event to the parent component to update the todo state
      this.$emit("todoCompleteChange", this.$props);
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
</style>
