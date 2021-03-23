const router = require('express').Router();
let Todo = require('../models/todo.model');

// Fetch all todos and returns all fetched todos
router.route('/get_all').get((req, res) => {
  Todo.find()
    .then(todos => res.json({content: todos, errorMessage: ''}))
    .catch(err => res.status(400));
});

// Add a new todo and returns the new todo added
router.route('/add').post((req, res) => {
  const text = req.body.text;
  const isCompleted = req.body.isCompleted;

  const newTodoObject = {text, isCompleted}
  const newTodo = new Todo(newTodoObject)

  newTodo.save()
    .then(({_id, text, isCompleted }) => res.json({content: {id: _id, text, isCompleted}, errorMessage: ''}))
    .catch(err => res.status(400))
});

// Delete a todo and returns confirmation message
router.route('/delete/:id').delete((req, res) => {
  Todo.findByIdAndDelete(req.params.id, {useFindAndModify: false})
    .then(() => res.json('Todo deleted!'))
    .catch(err => res.status(400));
})

// Edit a new todo and returns confirmation message
router.route('/edit/:id').patch((req, res) => {
  let updatedFields = req.body;
  Todo.findByIdAndUpdate(req.params.id, updatedFields, {useFindAndModify: false})
    .then(() => res.json('Todo updated!'))
    .catch(err => res.status(400))
});

module.exports = router;