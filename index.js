const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js");
const userRoute = require("./routes/user.route.js");
const todoRoute = require("./routes/todo.route.js");
const categoryRoute = require("./routes/category.route.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoute);
app.use('/api/users', userRoute);
app.use('/api/todos', todoRoute);
app.use('/api/category', categoryRoute);

mongoose.connect("mongodb+srv://firmanhasibuan14042004:sJiU9soJm0LqojyG@backenddb.m86gp.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to database!");
    app.listen(3000, () =>{
        console.log('Server is running on port 3000');
    })
})
.catch(() => { 
    console.log("Connection failed");
})

