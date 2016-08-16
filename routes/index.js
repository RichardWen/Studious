var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Comms', function(req, res, next) {
    res.render('mainpage', {title: 'Main'})
});

router.get('/TBD', function(req, res, next) {
    res.render('tobeadded', {title: 'Main'})
});


module.exports = router;
