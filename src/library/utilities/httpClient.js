import Vue from 'vue';

const url = "http://localhost:5000/api";

export async function getAllTodosDb() {
  try {
    let response = await Vue.axios.get(`${url}/todos/get_all`);
    let allTodos = response.data.content;
    return allTodos;
  } catch (error) {
    throw ("Error fetching todos data: " + error)
  }
}

export async function addTodoDb(todoText) {
  try {
    let newTodo = {text: todoText, isCompleted: false};
    let response = await Vue.axios.post(`${url}/todos/add`, newTodo);

    let todoAdded = response.data.content;
    return todoAdded;
  } catch (error) {
    throw ("Error adding todo: " + error)
  }
}

export async function editTodoDb(id, updatedFields) {
  try {
    await Vue.axios.patch(`${url}/todos/edit/${id}`, updatedFields);
  } catch (error) {
    throw ("Error editing todo: " + error)
  }
}

export async function deleteTodoDb(id) {
  try {
    await Vue.axios.delete(`${url}/todos/delete/${id}`);
  } catch (error) {
    throw ("Error deleting todo: " + error)
  }
}