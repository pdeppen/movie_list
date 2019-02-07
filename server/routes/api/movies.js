const express = require('express')
const router = express.Router()
const ObjectId = require('mongoose').Types.ObjectId;

const Movie = require('../../models/movie_model') 

// testing router
router.get('/', (req, res) => {
    res.json({message: "Hello from router"})
})

// @route POST /api/movies/create
// @desc POST new movie
// @access Public
router.post('/create', (req, res) => {
    const newMovie = new Movie({
        movie_title:    req.body.movie_title,
        movie_genre:    req.body.movie_genre,
        movie_year:     req.body.movie_year,
        movie_director: req.body.movie_director,
        watched:        req.body.watched,
        date_added:     req.body.date_added,
        movie_rating:   req.body.movie_rating
    })
    
    newMovie.save()
        .then(todo => res.json(todo))
        .catch(err => console.log(err))
})


module.exports = router