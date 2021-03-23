import Vuex from 'vuex'
import Vue from 'vue'
import mTypes from './mutation-types'
import aTypes from './action-types'
import {getAllTodosDb, addTodoDb, editTodoDb, deleteTodoDb} from '../utilities/httpClient'
import { processInputString } from '../utilities/inputProcessor'
import { validateInputString } from '../utilities/inputValidator'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    [mTypes.ADD_TODO](state, newTodo) {
      state.todos = [...state.todos, newTodo];
    },
    [mTypes.DELETE_TODO](state, todoId) {
      let newTodos = state.todos.filter(todo => todo.id !== todoId)
      state.todos = newTodos
    },
    [mTypes.SET_TODO_ISCOMPLETED_STATUS](state, {id, isCompleted}) {
      let newTodos = state.todos.map(todo => {
        return todo.id == id ? {...todo, isCompleted} : todo;
      })
      state.todos = newTodos
    }
  },
  actions: {
    async [aTypes.LOAD_TODOS]({state, commit}) {
      state.todos = [];
      let allTodos = await getAllTodosDb();
      allTodos.forEach(({_id, text, isCompleted}) => {
        let addedTodo = {id: _id, text, isCompleted}
        commit(mTypes.ADD_TODO, addedTodo)
      });
    },
    async [aTypes.ADD_TODOS]({commit}, todoText) {
      let processedTodoText = processInputString(todoText);
      let {isValid, invalidMessage} = validateInputString(processedTodoText);

      if (!isValid) throw invalidMessage;

      // Store data
      let todoAdded = await addTodoDb(processedTodoText)
      commit(mTypes.ADD_TODO, todoAdded)
    },
    async [aTypes.UPDATE_TODO_STATUS]({commit}, {id, isCompleted}) {
      let updatedFields = {isCompleted}
      await editTodoDb(id, updatedFields)
      commit(mTypes.SET_TODO_ISCOMPLETED_STATUS, {id, isCompleted})
    },
    async [aTypes.DELETE_TODO]({commit}, todoId) {
      await deleteTodoDb(todoId)
      commit(mTypes.DELETE_TODO, todoId)
    }
  }
})

export default store;
