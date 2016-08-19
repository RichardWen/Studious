var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Get Main page */
router.get('/Comms', function(req, res, next) {
    res.render('mainpage', {title: 'Main'})
});

/* Get Blog page */
router.get('/Blog', function(req, res, next) {
    res.render('blog', {title: 'Main'})
});



/* Get tbd page */
router.get('/TBD', function(req, res, next) {
    res.render('tobeadded', {title: 'Main'})
});


module.exports = router;
