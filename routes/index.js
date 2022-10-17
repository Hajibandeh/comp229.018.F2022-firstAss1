

var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index.controller');

/* GET home page. */
router.get('/', indexController.home);

router.get('/Projects', indexController.projects);
router.get('/Services', indexController.services);
router.get('/Aboutme', indexController.Aboutme);
router.get('/ContactMe',indexController.ContactMe);

module.exports = router;