var express = require('express');
var router = express.Router();
let businessContactsController = require('../controllers/businessContacts.controller');

/*00. GET businessContactss listing. */
router.get('/list', businessContactsController.businessContactsList);

/* GET Route for displaying the Add page - CREATE Operation */
//01. get when we click on the add user show me the page 
router.get('/add', businessContactsController.displayAddPage);

/*02. POST Route for processing the Add page - CREATE Operation */
router.post('/add', businessContactsController.processAddPage);

// 03. Routers for show edit 
router.get('/edit/:id', businessContactsController.displayEditPage);
// 04. Routers for  edit the page
router.post('/edit/:id', businessContactsController.processEditPage);

//05. Route for Delete
router.get('/delete/:id', businessContactsController.performDelete);

module.exports = router;
