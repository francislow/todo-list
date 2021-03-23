const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    text: {type: String, required: true, trim: true, minlength: 1},
    isCompleted: {type: Boolean, required: true},
}, {
    timestamps: true
});

const Todo = mongoose.model('todos', todoSchema);

module.exports = Todo;