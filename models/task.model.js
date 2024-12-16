const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema(
    {
        task: {
            type: "String",
            required: [true, "Please enter a task name"]
        },
        completed: {
            type: "Boolean",
            default: false
        },
        createAt: {
            type: "Date",
            default: Date.now
        }
    },
    {
        timestamps: true,
    }
);

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;