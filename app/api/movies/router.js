var express = require('express');
var router = express.Router();
const { getMovie, getDetail } = require('./controller')

/* GET home page. */
// router.get('/movies', function(req, res, next) {
//   // res.render('index', { title: 'Express' });
//   res.json({message:'Loremp Ipsum Movies'})
// });

router.get('/movies/:title',getMovie);
router.get('/movies/detail/:movieId',getDetail);

module.exports = router;
