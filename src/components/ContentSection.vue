<template>
  <el-row type="flex" justify="center" class="content-section">
    <el-col :span="20" class="notes-wrapper">
      <div class="add-note-header">
        <el-input placeholder="Add an item" v-model="input"></el-input>
        <el-button type="primary" v-on:click="addTodo">Add</el-button>
      </div>
      <div v-for="todo in currentTodos" v-bind:key="todo.id">
        <todo-item 
          v-bind:text="todo.text" 
          v-bind:id="todo.id" 
          v-bind:isCompleted="todo.isCompleted"
          v-on:checkbox-tapped="updateTodoStatus" 
          v-on:delete-tapped="deleteTodo" 
        />
      </div>
    </el-col>
  </el-row>
</template>

<script>
import TodoItem from './TodoItem'
import aTypes from '../library/store/action-types'

export default {
  name: 'ContentSection',
  components: {
    TodoItem
  },
  data() {
    return {
      input: '',
    }
  },
  computed: {
    currentTodos() {
      return this.$store.state.todos;
    }
  },
  methods: {
    updateTodoStatus({id, isCompleted}) {
      this.$emit('start-loading')
      this.$store.dispatch(aTypes.UPDATE_TODO_STATUS, {id, isCompleted})
        .then(() => this.$emit('end-loading'))
        .catch(error => {
          this.$emit('end-loading')
          alert(error)
        });
    },
    addTodo() {
      this.$emit('start-loading')
      this.$store.dispatch(aTypes.ADD_TODOS, this.input)
        .then(() => {
          this.$emit('end-loading')
          this.input = ""
        })
        .catch(error => {
          this.$emit('end-loading')
          alert(error)
        });
      
    },
    deleteTodo(todoId) {
      this.$emit('start-loading')
      this.$store.dispatch(aTypes.DELETE_TODO, todoId)
        .then(() => this.$emit('end-loading'))
        .catch(error => {
          this.$emit('end-loading')
          alert(error)
        });
    }
  }
}
</script>

<style scoped lang="scss">
@import "~/src/library/colors/colors.scss";

.content-section {
  padding: 20px 0;
}

.notes-wrapper {
  background-color: white;
  border-radius: 5px;
  border: $light-blue solid 1px;

}

.add-note-header {
  padding: 15px;
  display: flex;
}

.add-note-header .el-button {
  margin-left: 20px;
  background-color: $dark-blue;
  border-color: none;
}

</style>
