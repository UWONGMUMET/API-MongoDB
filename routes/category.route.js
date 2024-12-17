const express = require('express');
const Category = require('../models/category.model.js');
const router = express.Router();
const {createCategory, getCategories, getCategory, updatedCategory} = require("../controllers/category.controller.js");

router.post('/', createCategory);
router.get('/', getCategories);
router.get('/:id', getCategory);
router.put('/:id', updatedCategory);

module.exports = router;