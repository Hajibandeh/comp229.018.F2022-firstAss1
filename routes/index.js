

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/Projects', function(req, res, next) {
  res.render('Projects', { title: 'Projects' });
});
router.get('/Services', function(req, res, next) {
  res.render('Services', { title: 'Services' });
});
router.get('/Aboutme', function(req, res, next) {
  res.render('Aboutme', { title: 'Aboutme' });
});
router.get('/ContactMe', function(req, res, next) {
  res.render('ContactMe', { title: 'ContactMe' });
});


module.exports = router;