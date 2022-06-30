const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 1,
        max: 100,
        validate: {
            validator: v => v % 2 === 0,
            message: age  => `${age.value} is not an even number`
        }
    },
    email: {
        type: String,
        minlength: 10,
        required: true,
        lowercase: true
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    },
    bestFriend: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'users'
    },
    hobbies: [String],
    address: {
        street: String,
        city: String
    }
})


module.exports = mongoose.model("users", userSchema)