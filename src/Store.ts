import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface AppState {
  filter: string;
  newTodo: string;
  addTodoBtnText: string;
  //{id:0, text: "Learn VueJs", completed: false}
  todos: Todo[];
}

type AppStateKey = keyof AppState;

const initializeState = function() {
  const item = window.localStorage.getItem("todo-list"),
    initialState: AppState = {
      filter: "all",
      newTodo: "",
      addTodoBtnText: "Enter a new todo",
      todos: []
    };

  const state = item && JSON.parse(item);
  /*Object.keys(state).forEach( (key) => {
    initialState[key] = state[key];
  });*/
  //dirty, don't know how to do better
  //only copy the state if some exists
  if(state){
    initialState.newTodo = state.newTodo;
    initialState.todos = state.todos;
  }
  
  return initialState;
};

const saveStateInLocalStorage = function(state: AppState) {
  //reset id
  state.todos.forEach((todo, index) => {
    todo.id = index;
  });
  window.localStorage.setItem("todo-list", JSON.stringify(state));
};

const store = new Vuex.Store({
  state: initializeState,

  mutations: {
    addTodo(state) {
      state.todos.push({
        id: state.todos.length,
        text: state.newTodo,
        completed: false
      });
      state.newTodo = "";
      saveStateInLocalStorage(state);
    },

    setNewTodo(state, newTodo) {
      state.newTodo = newTodo;
      saveStateInLocalStorage(state);
    },

    changeTodoComplete(state, todoText) {
      state.todos.forEach((todo, index) => {
        if (todo.text === todoText) {
          state.todos[index].completed = !todo.completed;
        }
      });
      saveStateInLocalStorage(state);
    },

    deleteTodo(state, todoText) {
      state.todos.forEach((todo, index) => {
        if (todo.text === todoText) {
          //this.todos[index].completed = !todo.completed;
          state.todos.splice(index, 1);
        }
      });
      saveStateInLocalStorage(state);
    },

    clearAll(state) {
      state.todos.forEach(todo => {
        todo.completed = true;
      });
      saveStateInLocalStorage(state);
    },

    updateTodo(state, payload) {
      state.todos.forEach(todo => {
        if (todo.text === payload.todoText) {
          todo.text = payload.newText;
        }
      });
      saveStateInLocalStorage(state);
    },

    filterChange(state, newFilter) {
      state.filter = newFilter;
    }
  },
  actions: {
    addTodo(context) {
      context.commit("addTodo");
    },
    setNewTodo(context, newTodo) {
      context.commit("setNewTodo", newTodo);
    },
    changeTodoComplete(context, event) {
      context.commit("changeTodoComplete", event.target.name);
    },
    deleteTodo(context, todoText) {
      context.commit("deleteTodo", todoText);
    },
    clearAll(context) {
      context.commit("clearAll");
    },
    updateTodo(context, payload) {
      context.commit("updateTodo", payload);
    },
    filterChange(context, newFilter) {
      context.commit("filterChange", newFilter);
    }
  }
});

export default store;
