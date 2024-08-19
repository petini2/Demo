var express = require('express');
var router = express.Router();

const movieModel = require('../models/movieModel');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('movies/welcome', { title: 'Welcome to Demo Theater' });
});

router.get('/list', async function(req, res, next) {
  const movies = await movieModel.find();
  res.render('movies/movieList', { title: 'Movies List', movies : movies });
});

router.get('/create', async function(req, res) {
  res.render('movies/newMovie', { title: 'Add New Movie'});
});

router.post('/create', async (req, res) => {
  let body = req.body;
  let movie = new movieModel({
    name: body.name,
    screenNo: body.screenNo,
    showTime: body.showTime,
    availableSeats: body.availableSeats,
    actorNames: body.actorNames,
    description: body.description,
  });
  await movie.save();
  res.redirect('/movies');
});

router.get('/adminLogin', function(req, res, next) {
  res.render('movies/adminLogin', { title: 'Admin Login' });
});

router.get('/guestLogin', function(req, res, next) {
  res.render('movies/guestLogin', { title: 'Guest Login' });
});
module.exports = router;
