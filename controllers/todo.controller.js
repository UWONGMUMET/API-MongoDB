const Todo = require("../models/task.model");

const createTodo = async (req, res) => {
    try {
        const todo = await Todo.create(req.body);
        res.status(200).json(todo);
    } catch (err) {
        res.status(500).json({msg: err.message});
    }
};

const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.status(200).json(todos);
    } catch (err) {
        res.status(500).json({msg: err.message});
    }
};

const getTodo = async (req, res) => {
    try {
        const {id} = req.params;
        const todo = await Todo.findById(id);
        res.status(200).json(todo);
    } catch (err) {
        res.status(500).json({msg: err.message});
    }
};

const updateTodo = async (req, res) => {
    try {
        const {id} = req.params;
        const todo = await Todo.findByIdAndUpdate(id, req.body);

        if (!todo) {
            res.status(404).json({msg: "Todo not found"})
        }

        const updatedTodo = await Todo.findById(id);
        res.status(200).json(updatedTodo);
    } catch (err) {
        res.status(500).json({msg: err.message});
    }
};

const deleteTodo = async (req, res) => {
    try {
        const {id} = req.params;
        const todo = await Todo.findByIdAndDelete(id);

        if (!todo) {
            res.status(404).json({msg: "Todo not found"})
        }

        res.status(200).json({msg: "Todo deleted successfully"})
    } catch (err) {
        res.status(500).json({msg: err.message})
    }
};

module.exports = {
    createTodo,
    getTodos,
    getTodo,
    updateTodo,
    deleteTodo,
};