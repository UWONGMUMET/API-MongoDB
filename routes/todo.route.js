const express = require('express');
const Todo = require('../models/task.model');
const router = express.Router();
const {createTodo, getTodos, getTodo, updateTodo, deleteTodo} = require('../controllers/todo.controller');

router.post('/', createTodo);
router.get('/', getTodos);
router.get('/:id',getTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;