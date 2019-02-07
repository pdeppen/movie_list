const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MovieSchema = new Schema({
    movie_title: {
        type: String
    },
    movie_genre: {
        type: String
    },
    movie_year: {
        type: Number
    },
    movie_director: {
        type: String
    },
    watched: {
        type: Boolean
    },
    date_added: {
        type: Date,
        default: Date.now
    },
    movie_rating: {
        type: Number,
        default: null
    }
})

module.exports = Todo = mongoose.model('movies', MovieSchema)