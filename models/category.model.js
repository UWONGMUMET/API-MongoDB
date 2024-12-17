const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema(
    {
        name: {
            type: "String",
            required: [true, "Please enter a category"]
        },
        description: {
            type: "String",
            required: [true, "Please enter a description"]
        }
    },
    {
        timestamps: true,
    }
);

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;