const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        name: {
            type: 'String',
            required: [true, "Please enter a name"]
        }, 
        email: {
            type: 'String',
            required: [true, "Please enter an email"],
            unique: true
        },
        password: {
            type: 'String',
            required: [true, "Please enter a password"],
            minlength: [8, "Password must be at least 8 characters long"]
        }
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;