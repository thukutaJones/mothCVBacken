const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name field cannot be empty"]
    },
    email: {
        type: String,
        required: [true, "phoneNumber can not be empty"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password cannot be empty"]
    },
    paid: {
        type: Boolean,
        required: false,
        default: false
    }
})


module.exports = mongoose.model("Users", userSchema)