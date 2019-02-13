const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    user_name: {
        type: String
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    password2: {
        type: String
    },
    date_created: {
        type: Date,
        default: Date.now
    }
})

module.exports = User = mongoose.model('users', UserSchema)