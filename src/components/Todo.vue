<template>
  <v-container
    fluid
    
  >
    <v-row align="end" class="mb-2 flex-nowrap" no-gutters>
      <div>
        <input
          class="mt-0"
          hide-details
          :id="text"
          :name="text"
          type="checkbox"
          @click="changeTodoComplete"
          v-model="completed"
        /><label :for="text"><span></span></label>
      </div>
      <div class="flex-grow-1 text-label-col d-flex" >
        <label
          v-if="!editMode"
          class="todo-label"
          :class="{ completed: completed }"
          :for="text"
          >{{ text }}</label
        >
        <input
          class="todo-editor"
          v-else
          :id="id"
          type="text"
          :value="text"
          @keyup.enter="updateTodo"
        />
      </div>
      <div class="btn-wrapper d-flex ml-auto" 
         >
        <v-btn icon text>
          <v-icon @click="toggleEdit" dark>mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon text>
          <v-icon @click="deleteTodo" dark>mdi-delete</v-icon>
        </v-btn>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Todo",

  data: function() {
    return {
      editMode: false,
      isHovered: false
    };
  },

  props: ["id", "text", "completed"],

  methods: {
    toggleEdit: function() {
      this.editMode = !this.editMode;
      console.log("editMode:", this.editMode);
    },

    ...mapActions(["changeTodoComplete", "deleteTodo"]),
    deleteTodo: function() {
      this.$store.dispatch("deleteTodo", this.text);
    },

    updateTodo: function(event) {
      this.$store.dispatch({
        type: "updateTodo",
        todoText: this.text,
        newText: event.target.value
      });
      this.editMode = !this.editMode;
    },

    setIsHovered: function(state) {
      console.log("setIsHovered:", state);
      this.isHovered = state;
    }
  }
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}

.todo-editor {
  border: 1px solid black;
  font-size: 23px;
}

.todo-label{
  font-size: 25px;
}

.todo-label,
.todo-editor {
  font-family: "Amatic SC", serif;
  font-weight: bold;
}

.text-label-col,
.btn-wrapper {
  border-bottom: 1px solid black;
}

input[type="checkbox"] {
  display: none;
}

input[type="checkbox"] + label {
  display: inline-block;
  width: 29px;
  height: 29px;
  margin: 5px 19px 0 0;
  vertical-align: middle;
  background: url("../assets/checkbox1.png") left top no-repeat;
  background-size: contain;
  cursor: pointer;
}
input[type="checkbox"]:checked + label {
  width: 40px;
  height: 40px;
  margin: -2px 10px 0 0;
  background: url("../assets/checkbox1-checked.png") left top no-repeat;
  background-size: contain;
  cursor: pointer;
}
</style>
