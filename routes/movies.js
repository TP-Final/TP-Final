var express = require('express');
var router = express.Router();
var controller = require('../controllers/moviesController');

router.get('/home', controller.home);
router.get('/detalle/:id', controller.detail);
router.get('/generos', controller.genres);
router.get('/favoritas', controller.favorite);
router.get('/review', controller.storeReview);

module.exports = router;

