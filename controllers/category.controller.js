const Category = require("../models/category.model");

const createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getCategories = async (req, res) => {
    try {
        const category = await Category.find({});
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getCategory = async (req, res) => {
    try {
        const {id} = req.params;
        const category = await Category.findById(id);
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updatedCategory = async (req, res) => {
    try {
        const {id} = req.params;
        const category = await Category.findByIdAndUpdate(id, req.body);

        if (!category) {
            res.status(404).json({ message: "Category not found"});
        }

        const updatedCategory = await Category.findById(id);
        res.status(200).json(updatedCategory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const {id} = req.params;
        const category = await Category.findByIdAndDelete(id);

        if (!category) {
            res.status(404).json({ message: "Category not found"});
        }

        res.status(200).json({ message: "Category deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    createCategory,
    getCategories,
    getCategory,
    updatedCategory,
};