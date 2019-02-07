const express = require('express')
const router = express.Router()
const ObjectId = require('mongoose').Types.ObjectId;

const Movie = require('../../models/movie_model') 

// @route GET /api/movies
// @desc GET movies
// @access Public
router.get('/', (req, res) => {
    Movie.find((err, docs) => {
        if(!err)
          res.send(docs);
        else
          console.log('Error in Retriving Movies: ' + JSON.stringify(err, undefined, 2));
      });
})

// @route PUT /api/movies/:id
// @desc GET movie by ID
// @access PUBLIC
router.get('/:id', (req, res) => {

    if(!ObjectId.isValid(req.params.id))
      return res.status(400).send('No Movie with given id: ' + req.params.id)
      
    Movie.findById(req.params.id, (err, doc) => {
      if(!err)
        res.send(doc)
      else
        console.log('Error in Retriving Movie: ' + JSON.stringify(err, undefined, 2))
    })
  
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
        movie_rating:   req.body.movie_rating
    })
    
    newMovie.save()
        .then(todo => res.json(todo))
        .catch(err => console.log(err))
})

// @route PUT /api/movies/edit/:id
// @desc PUT edit movie
// @access Public
router.put('/edit/:id', (req, res) => {

    const updatedMovie = {
        movie_title:    req.body.movie_title,
        movie_genre:    req.body.movie_genre,
        movie_year:     req.body.movie_year,
        movie_director: req.body.movie_director,
        watched:        req.body.watched,
        movie_rating:   req.body.movie_rating
    }

    Todo.findByIdAndUpdate(req.params.id, {$set: updatedMovie}, { new: true, useFindAndModify: false}, (err, doc) => {
        if (!err)
            res.send(doc);
        else
            console.log('Error in Movie UPDATE: ' + JSON.stringify(err, undefined, 2));
    })    
})

// @route DELETE /api/movies/:id
// @desc DELETE movie by ID
// @access PUBLIC
router.delete('/:id', (req, res) => {
    
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No Movie with given id: ' + req.params.id)

    Movie.findById(req.params.id)
        .then(movie => movie.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
})

module.exports = router