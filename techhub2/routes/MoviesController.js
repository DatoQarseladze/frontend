const express = require('express');
const router = express.Router();

const Movie = require('../models/Movies');
const MovieService = new Movie();

router.route('/movies').get( (req, res) => {
    let movies = MovieService.getAllMovies();
    res.json(movies);
})

router.route('/movies/:id').get((req, res) => {
    if( !req.params.id ){
        res.sendStatus(400)
    }
    let movieId = req.params.id;
    let movie = MovieService.getMovieById(movieId);
    res.json(movie);
})

router.route('/movies/:id').put((req, res) => {
    if( !req.params.id || !req.body){
        res.sendStatus(400)
    }
    let movieId = req.params.id;
    let movie = req.body;
    MovieService.updateMovie(movie)
    res.send({ message: `Movie ${movieId} has been updated.` });
})

router.route('/movies').post((req, res) => {
    if( !req.body ){
        res.sendStatus(400)
    }
    let movie = req.body;
    MovieService.addMovie(movie)
    res.send({ message: `Movie has been added.` });
})

module.exports = router;